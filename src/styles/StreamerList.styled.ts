import styled from "styled-components";

export const StreamerListStyled = styled.section`
  padding: 1rem;
`;

export const StreamerStyled = styled.div<{ isSingle: boolean }>`
  padding: ${(props) => (props.isSingle ? "1rem" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  .streamer-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: ${(props) => (props.isSingle ? "6px" : "0")};
  }
  .streamer-header > h2 {
    margin: 0;
  }
  .votes {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .upvotes,
  .downvotes {
    display: flex;
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
`;
