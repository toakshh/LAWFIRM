import LogoImg from "../../assets/Logo/Logo.svg"

const Logo = () => {
  return (
    <a href="/"><img style={{
        minWidth: '100px',
        maxWidth: '100%'}} src={LogoImg} alt="logo"/></a>
  )
}

export default Logo