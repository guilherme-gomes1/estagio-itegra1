import styled from "styled-components"

export const HeaderConatiner = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 25px;
  border-bottom: 2px solid ${(props) => props.theme["orange-200"]};
  justify-content: start;

  :hover {
    cursor: pointer;
  }

  p {
    font-size: 36px;
    color: ${(props) => props.theme["orange-200"]};
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
`
