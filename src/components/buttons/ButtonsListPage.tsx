import { Direction } from "../../enums/direction";
import { ButtonsListPageStyled } from "../../styles/streamers/StreamerList.styled";
import DirectionButton from "./DirectionButton";

const ButtonsListPage = ({
  page,
  setPage,
  maxPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}) => {
  const handleSettingPage = (direction: Direction) => {
    switch (direction) {
      case Direction.PREV:
        return setPage((page) => {
          if (page - 1 < 1) {
            return page;
          }
          return page - 1;
        });
      case Direction.NEXT:
        return setPage((page) => {
          if (page + 1 > maxPage) {
            return page;
          }
          return page + 1;
        });
    }
  };

  return (
    <ButtonsListPageStyled>
      <DirectionButton
        direction={Direction.PREV}
        isDisabled={page === 1}
        onClickFunc={() => handleSettingPage(Direction.PREV)}
      />
      <p id="page-number">{page}</p>
      <DirectionButton
        direction={Direction.NEXT}
        isDisabled={page === maxPage}
        onClickFunc={() => handleSettingPage(Direction.NEXT)}
      />
    </ButtonsListPageStyled>
  );
};

export default ButtonsListPage;
