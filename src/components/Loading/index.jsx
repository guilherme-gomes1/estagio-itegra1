import ReactLoading from "react-loading"
import { LoadingStyles } from "./styles"

export const Loading = () => (
  <LoadingStyles>
    <ReactLoading type="spin" color="orange" height={350} width={220} />
  </LoadingStyles>
)
