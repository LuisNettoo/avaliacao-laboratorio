import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #F1F5F6;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    padding: 4rem;
    border-radius: 1rem;
    gap: 1.5rem;
    background: #fff;
    min-width: 800px;

    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px 1px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }

    input {
      margin-top: .5rem;
      padding: 1rem;
      font-size: 1rem;

      outline: none;
      border: 1px solid #ccc;
      border-radius: 0.25rem;

      &:focus {
        border: 2px solid var(--dark-blue);
      }

    }

    button[type="submit"] {
      cursor: pointer;
      max-width: 200px;
      height: 4rem;
    }
  }
`