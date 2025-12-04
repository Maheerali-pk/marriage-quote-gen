import { FunctionComponent, useMemo } from "react";
import { allEventGroups, allEventItems, IEventGroup } from "../helpers/data";
import EventItem from "./event-item";
import classNames from "classnames";
import { useGlobalContext } from "../contexts/GlobalContext";
import PriceValue from "./price-value";

interface EventGroupWrapperProps {
  data: IEventGroup;
}

const EventGroupWrapper: FunctionComponent<EventGroupWrapperProps> = ({
  data,
}) => {
  const [state, dispatch] = useGlobalContext();
  const mySubItems = allEventItems.filter((item) =>
    item.availableForEvents.includes(data.id)
  );
  const myGroup = state.selections?.find(
    (selection) => selection.eventGroupId === data.id
  );

  const isSelected = myGroup?.selectedItems.length === mySubItems.length;
  const totalPrice = useMemo(() => {
    if (!myGroup) return 0;
    return myGroup.selectedItems.reduce((acc, selectedItem) => {
      const item = allEventItems.find((i) => i.id === selectedItem.itemId);
      if (!item) return acc;
      return acc + item.price * selectedItem.count;
    }, 0);
  }, [myGroup]);
  const totalDiscountedPrice = useMemo(() => {
    return totalPrice * (1 - data.discountPercentage / 100);
  }, [totalPrice, data.discountPercentage]);
  const renderSelectionIcon = () => {
    if (isSelected) {
      return (
        <img
          onClick={() => {
            dispatch({
              toggleEventGroupSelection: {
                eventGroupId: data.id,
              },
            });
          }}
          src="/images/success.png"
          className="w-8 h-8 cursor-pointer  z-10"
        ></img>
      );
    }
    return (
      <div
        onClick={() => {
          dispatch({
            toggleEventGroupSelection: {
              eventGroupId: data.id,
            },
          });
        }}
        className="flex inset-shadow-black w-8 h-8 border bg-black border-white rounded-lg cursor-pointer "
      ></div>
    );
  };
  return (
    <div className="flex border-primary/55 border-2 gap-8 rounded-4xl md:p-8 p-4 flex-col w-full bg-black/50">
      <div className="flex gap-2 items-center">
        {renderSelectionIcon()}

        <div className="text-white text-2xl">{data.title}</div>
      </div>
      <div
        className={classNames("grid gap-y-8 gap-x-4 grid-cols-2  w-full", {
          "md:grid-cols-3":
            data.id === "0" || data.id === "1" || data.id === "3",
          "md:grid-cols-2": data.id === "2",
        })}
      >
        {mySubItems.map((item) => (
          <EventItem
            showCount={data.id !== "2"}
            groupId={data.id}
            className="min-h-[220px]"
            key={item.id}
            data={item}
          />
        ))}
      </div>

      <div className="flex w-full justify-end">
        <PriceValue value={totalPrice} discountedValue={totalDiscountedPrice} />
      </div>
    </div>
  );
};

export default EventGroupWrapper;
