import classNames from "classnames";
import { IEventItem } from "../helpers/data";
import { useGlobalContext } from "../contexts/GlobalContext";

interface EventItemProps {
  data: IEventItem;
  groupId: string;
  className?: string;
}

const EventItem: React.FC<EventItemProps> = ({ data, className, groupId }) => {
  const [state, dispatch] = useGlobalContext();
  const myGroup = state.selections?.find(
    (selection) => selection.eventGroupId === groupId
  );
  const isSelected = myGroup?.selectedItemIds.includes(data.id);

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
    </div>
  );
};

export default EventItem;
