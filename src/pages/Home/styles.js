import styled from "styled-components"

export const Main = styled.main`
  margin-bottom: 2rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-left: 2rem;
`

export const Topic = styled.h1`
  color: ${(props) => props.theme["white-200"]};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 22px;
  margin-left: 100px;
`

export const PostersList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`
