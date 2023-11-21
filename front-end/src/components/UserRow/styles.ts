import styled from "styled-components";

export const Container = styled.tr`
  td {
    padding: 0.8rem;

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.75rem;
      
      button {
        background: none;
        border: none;

        cursor: pointer;
  
        svg {
          font-size: 1.1rem;
        }
      }
    }
  }
`