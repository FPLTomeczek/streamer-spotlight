import styled from "styled-components";

export const StreamerListContainerStyled = styled.div<{
  isImagesLoading: boolean;
}>`
  display: ${(props) => (props.isImagesLoading ? "none" : "block")};
`;

export const StreamerListStyled = styled.section`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;

  @media screen and (min-width: 769px) {
    display: grid;
    row-gap: 4rem;
    column-gap: 0;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1201px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StreamerStyled = styled.div<{ isSingle: boolean }>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  max-width: 300px;
  border-radius: 1.5rem;
  gap: 0.25rem;
  margin: 0 auto;

  .streamer-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: ${(props) => (props.isSingle ? "6px" : "0")};
    width: 100%;
  }
  .streamer-header > h2 {
    overflow-wrap: break-word;
    margin: 0;
    max-width: 80%;
  }
  .streamer-img {
    width: 300px;
    border-radius: 1rem;
  }
  .votes {
    margin-top: 4px;
    display: flex;
    gap: 1rem;
  }
  .upvotes,
  .downvotes {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .votes i {
    font-size: 2rem;
  }
  .upvotes i {
    color: green;
  }
  .downvotes i {
    color: red;
  }
  .underline {
    width: 100%;
    height: 2px;
    background-color: var(--bg-color);
  }
`;

export const ButtonsListPageStyled = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  #page-number {
    margin: 0;
  }
  .update-page-button {
    background-color: black;
    border-radius: 5px;
    padding: 0.5rem;
  }
  .fa-chevron-left,
  .fa-chevron-right {
    font-size: 1rem;
  }
`;
