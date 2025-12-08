import classNames from "classnames";
import { IEventItem } from "../helpers/data";
import { useGlobalContext } from "../contexts/GlobalContext";

interface EventItemProps {
  data: IEventItem;
  groupId: string;
  className?: string;
  showCount?: boolean;
}

const EventItem: React.FC<EventItemProps> = ({
  data,
  className,
  groupId,
  showCount = true,
}) => {
  const [state, dispatch] = useGlobalContext();
  const myGroup = state.selections?.find(
    (selection) => selection.eventGroupId === groupId
  );
  const selectedItem = myGroup?.selectedItems.find(
    (item) => item.itemId === data.id
  );
  const isSelected = !!selectedItem;
  const count = selectedItem?.count || 0;

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isSelected) {
      // If not selected, select it first with count 1
      dispatch({
        toggleEventItemSelection: {
          eventGroupId: groupId,
          itemId: data.id,
        },
      });
    } else {
      dispatch({
        updateItemCount: {
          eventGroupId: groupId,
          itemId: data.id,
          count: count + 1,
        },
      });
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSelected && count > 1) {
      dispatch({
        updateItemCount: {
          eventGroupId: groupId,
          itemId: data.id,
          count: count - 1,
        },
      });
    }
  };

  const renderSelectionIcon = () => {
    if (isSelected) {
      return (
        <img
          onClick={() => {
            dispatch({
              toggleEventItemSelection: {
                eventGroupId: groupId,
                itemId: data.id,
              },
            });
          }}
          src="/images/success.png"
          className="w-8 h-8 cursor-pointer absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        ></img>
      );
    }
    return (
      <div
        onClick={() => {
          dispatch({
            toggleEventItemSelection: {
              eventGroupId: groupId,
              itemId: data.id,
            },
          });
        }}
        className="flex inset-shadow-black w-8 h-8 border bg-black border-white rounded-lg cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10 top-0 left-1/2 absolute"
      ></div>
    );
  };
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={classNames(
          "bg-gradient-to-t rounded-4xl relative from-[rgba(212,170,0,0.6)] to-transparent w-full h-full flex flex-col items-center justify-center border-primary border-2",
          className
        )}
      >
        {renderSelectionIcon()}
        <img
          src={data.image}
          alt={data.name}
          className="w-auto h-1/2 object-contain"
        />
        <div className="text-white text-2xl text-center">{data.name}</div>
        {showCount && (
          <div className="flex items-center gap-2 bg-transparent border border-white rounded-lg px-2 py-1 mt-2">
            <button
              onClick={handleDecrement}
              disabled={!isSelected || count <= 1}
              className="text-white cursor-pointer text-lg font-bold w-6 h-6 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 rounded"
            >
              -
            </button>
            <span className="text-white text-base font-bold min-w-[20px] text-center">
              {count}
            </span>
            <button
              onClick={handleIncrement}
              className="text-white text-lg font-bold w-6 h-6 flex items-center justify-center hover:bg-primary/20 cursor-pointer rounded"
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="text-white text-3xl font-medium mt-2">{data.price}€</div>
    </div>
  );
};

export default EventItem;
