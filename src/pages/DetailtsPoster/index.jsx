import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import {
  Info,
  MovieInfo,
  ActorImage,
  PosterImage,
  Synopsis,
  RatingInfo,
  Title,
  Container,
  ActorName,
  ListActors,
  Actor,
  Genres,
  ContainerImage,
  Productors,
  Rating,
  Year,
} from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"
import { Loading } from "../../components/Loading"

export function Details() {
  const [data, setData] = useState({})
  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    try {
      async function fetch() {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=791aca304eca2a1594cb3dfd28209f4a&language=pt-BR`
        )
        const actorsData = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=791aca304eca2a1594cb3dfd28209f4a`
        )
        const actorsDataTeste = actorsData.data.cast.slice(0, 3)

        setData(data.data)
        setActors(actorsDataTeste)
        setLoading(false)
      }

      fetch()
    } catch (e) {
      setLoading(true)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <Container>
        <Title>{data.title}</Title>
        <MovieInfo>
          <ContainerImage>
            <PosterImage
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt="Poster do filme homem aranha"
            />
          </ContainerImage>
          <Info>
            <RatingInfo>
              <Rating>⭐ {data?.vote_average?.toFixed(1)}</Rating>
              <Year>❤ {data?.vote_count}</Year>
            </RatingInfo>
            <Genres>
              Gêneros:{" "}
              {data?.genres?.map((gener) => {
                return <p key={gener.id}>{gener.name}, </p>
              })}
            </Genres>
            <Productors>
              Produtoras:{" "}
              {data?.production_companies?.map((gener) => {
                return <p key={gener.id}>{gener.name}, </p>
              })}
            </Productors>
            <Synopsis>{data.overview}</Synopsis>
            <ListActors>
              {actors.map((actor) => {
                return (
                  <Actor key={actor.id}>
                    <ActorImage
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      alt="Nome do Ator"
                    />
                    <ActorName>{actor.name}</ActorName>
                  </Actor>
                )
              })}
            </ListActors>
          </Info>
        </MovieInfo>
      </Container>
    </>
  )
}
