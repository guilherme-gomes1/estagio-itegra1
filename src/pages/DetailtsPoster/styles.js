import styled from "styled-components"

export const Container = styled.div`
  margin: 2rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
`

export const Rating = styled.span`
  color: ${(props) => props.theme["orange-200"]};
  font-size: 1.5rem;
  font-weight: bold;
`

export const Year = styled.span`
  color: ${(props) => props.theme["gray-200"]};
  font-size: 1.5rem;
`

export const Genres = styled.span`
  color: ${(props) => props.theme["gray-200"]};
  font-size: 12px;
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`

export const Productors = styled.span`
  color: ${(props) => props.theme["gray-200"]};
  font-size: 12px;
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme["white-200"]};
`

export const ActorName = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme["gray-200"]};
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
`

export const PosterImage = styled.img`
  border-radius: 8px;
  height: 530px;
  width: 353px;

  @media (max-width: 600px) {
    width: 18rem;
    object-fit: cover;
  }
`

export const Synopsis = styled.p`
  color: ${(props) => props.theme["white-200"]};
  font-size: 22px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const ActorImage = styled.img`
  border-radius: 8px;
  height: 196px;
  width: 131px;

  @media (max-width: 600px) {
    height: 158px;
    width: 106px;
  }
`

export const MovieInfo = styled.main`
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  gap: 2rem;
`

export const RatingInfo = styled.div`
  display: flex;
  gap: 17px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
`
export const ListActors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Actor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`
