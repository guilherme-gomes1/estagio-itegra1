import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Wally.png"
import { HeaderConatiner } from "./styles"

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderConatiner onClick={() => navigate("/")}>
      <img src={Logo} alt="logo wally" />
      <p>ITEGRAFLIX</p>
    </HeaderConatiner>
  )
}
