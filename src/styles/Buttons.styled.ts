import styled from "styled-components";

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
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
  .fa-chevron-left,
  .fa-chevron-right {
    font-size: 1rem;
  }
`;
