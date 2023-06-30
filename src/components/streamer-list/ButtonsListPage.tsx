import { Direction } from "../../enums/streamerList";
import { ButtonsListPageStyled } from "../../styles/StreamerList.styled";

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
      <button
        className="update-page-button"
        onClick={() => handleSettingPage(Direction.PREV)}
        disabled={page === 1}
        aria-label="previous page"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <p id="page-number">{page}</p>
      <button
        className="update-page-button"
        onClick={() => handleSettingPage(Direction.NEXT)}
        disabled={page === maxPage}
        aria-label="next page"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </ButtonsListPageStyled>
  );
};

export default ButtonsListPage;
