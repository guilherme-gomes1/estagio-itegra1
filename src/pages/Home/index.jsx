import { Header } from "../../components/Header"
import { Container, Topic, PostersList, Main } from "./styles"
import { Poster } from "./components/Poster"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Loading } from "../../components/Loading"

export const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  function handlePoster(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    try {
      async function fetch() {
        const data = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=791aca304eca2a1594cb3dfd28209f4a&language=pt-BR"
        )
        const response = data.data.results.slice(0, 10)
        setData(response)
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
    <Main>
      <Header />
      <Container>
        <Topic>Populares</Topic>
        <PostersList>
          {data.map((poster) => {
            return (
              <Poster
                key={poster.id}
                img={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`}
                title={poster.title}
                rating={poster.vote_average}
                year={poster.release_date.split("-")[0]}
                likes={poster.vote_count}
                onClick={() => {
                  handlePoster(poster.id)
                }}
              />
            )
          })}
        </PostersList>
      </Container>
    </Main>
  )
}
