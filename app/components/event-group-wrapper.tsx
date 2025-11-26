import { FunctionComponent } from "react";
import { allEventGroups, allEventItems, IEventGroup } from "../helpers/data";
import EventItem from "./event-item";
import classNames from "classnames";
import { useGlobalContext } from "../contexts/GlobalContext";

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

  const isSelected = myGroup?.selectedItemIds.length === mySubItems.length;
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
    <div className="flex border-primary border-2 gap-8 rounded-4xl p-8 flex-col w-full">
      <div className="flex gap-2 items-center">
        {renderSelectionIcon()}

        <div className="text-white text-2xl">{data.title}</div>
      </div>
      <div
        className={classNames("grid gap-4 w-full", {
          "grid-cols-3": data.id === "0" || data.id === "1" || data.id === "3",
          "grid-cols-2": data.id === "2",
        })}
      >
        {mySubItems.map((item) => (
          <EventItem
            groupId={data.id}
            className="max-h-[200px]"
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default EventGroupWrapper;
