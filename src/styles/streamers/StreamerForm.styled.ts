import styled from "styled-components";

export const AddStreamerFormStyled = styled.form`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  .form-data-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }
  .data-input {
    font-size: 1rem;
    padding: 0.4rem;
    background-color: var(--bg-color-light);
    color: var(--text-color);
  }
  .btn-form-submit-container {
    display: flex;
    justify-content: center;
  }
`;
