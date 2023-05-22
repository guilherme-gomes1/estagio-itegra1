import { Footer, Container, Title, Rating, Year } from "./styles"

export function Poster(props) {
  return (
    <Container onClick={props.onClick}>
      <img src={props.img} alt="Poster do filme homem aranha" />
      <div>
        <Title>{props.title}</Title>
        <Footer>
          <Rating>⭐ {props.rating}</Rating>
          <Year>{props.year}</Year>
          <Year>🤍 {props.likes}</Year>
        </Footer>
      </div>
    </Container>
  )
}
