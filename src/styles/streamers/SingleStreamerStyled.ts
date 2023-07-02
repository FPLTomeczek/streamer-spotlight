import styled from "styled-components";
export const SingleStreamerPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    .single-streamer-desc {
      margin-top: 1rem;
    }
  }

  .single-streamer-container {
    width: fit-content;
  }
  .single-streamer-desc {
    max-width: 300px;
    overflow-wrap: break-word;
  }
`;
