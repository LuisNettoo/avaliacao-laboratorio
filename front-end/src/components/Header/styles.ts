import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1100px;
  margin: 1rem auto;

  h1 {
    font-weight: 600;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-color: #FFD167;
    color: #000;
    border-radius: 0.25rem;

    padding: 0.6rem 1.5rem;
    font-weight: 600;
    text-decoration: none;

    &:visited {
      color: #000;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`