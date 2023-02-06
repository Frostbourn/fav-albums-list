import styled from "styled-components";

const listMixin = `
    display: flex;
    flex-direction: column;
    `;

const gridMixin = `
    display: grid;
    grid-template-columns: repeat(3, 32.3%);
    gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
    }
    `;

export const ItemsList = styled.div<{ view: string }>`
  ${({ view }) => (view === "list" ? listMixin : gridMixin)}
  padding: 1rem;
  gap: 1rem;
  background: #eee;
  border-radius: 5px;
`;
