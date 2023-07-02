import { Direction } from "../../enums/direction";

const DirectionButton = ({
  direction,
  isDisabled = false,
  onClickFunc,
}: {
  direction: Direction;
  isDisabled?: boolean;
  onClickFunc: (direction: Direction) => void;
}) => {
  const Icon = ({ direction }: { direction: Direction }) => {
    switch (direction) {
      case Direction.PREV:
        return <i className="fa-solid fa-chevron-left"></i>;
      case Direction.NEXT:
        return <i className="fa-solid fa-chevron-right"></i>;
    }
  };

  return (
    <button
      className="update-page-button"
      onClick={() => onClickFunc(direction)}
      disabled={isDisabled}
      aria-label={`${direction} page`}
    >
      <Icon direction={direction} />
    </button>
  );
};

export default DirectionButton;
