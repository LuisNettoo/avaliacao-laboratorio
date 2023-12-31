import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1100px;

  table {
    border-collapse: collapse;

    width: 1100px;
  
    text-align: left;

    thead {
      color: #fff;
      background: var(--dark-blue);
      border-radius: 0.25rem 0.25rem 0 0;

      th {
        font-weight: 600;
        padding: 0.8rem;

        &:first-child {
          border-radius: 0.25rem 0 0 0;
        }

        &:last-child {
          border-radius: 0 0.25rem  0 0;
        }
      }
    }
    
    tbody {
      tr {
        &:nth-child(even) {
        background-color: #F4F5F7;
        }
      }
    }
  }
`