import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  transition: 0.3s ease all;
`;

export const ListItem = styled.div<{ view: string }>`
  display: flex;
  flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  transition: 0.3s ease all;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  font-size: 1.4rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #eee;
  color: #585858;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease background-color;
  &:hover {
    background-color: #dedfe1;
  }
`;

export const Title = styled(ListGroup.Item)`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 75%;
  white-space: nowrap;
  ${({ view }) =>
    view === "grid" && `text-align: center; margin-bottom: 1rem;`};
`;
