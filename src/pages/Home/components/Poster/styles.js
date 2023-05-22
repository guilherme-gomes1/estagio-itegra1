import styled from "styled-components"

export const Container = styled.button`
  background: none;
  border: none;
  img {
    border-radius: 8px;
    height: 296px;
    width: 197px;
  }
`

export const Title = styled.p`
  color: ${(props) => props.theme["white-200"]};
  font-size: 14px;
  max-width: 200px;
  min-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Rating = styled.span`
  color: ${(props) => props.theme["orange-200"]};
  font-size: 0.8rem;
  font-weight: bold;
`

export const Year = styled.span`
  color: ${(props) => props.theme["gray-200"]};
  font-size: 0.8rem;
`
