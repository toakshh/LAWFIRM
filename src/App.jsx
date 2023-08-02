// import styles from  './App.module.css'
import Cards from './components/body/cards/Cards'
import Clients from './components/body/clients/Clients'
import Faq from './components/body/faq/Faq'
import Gallery from './components/body/gallery/Gallery'
import Intro from './components/body/intro/Intro'
import Subscribe from './components/body/subscribe/Subscribe'
import Team from './components/body/team/Team'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


function App() {


  return (
    <>
      <Header />
      <Intro />
      <Cards />
      <Gallery />
      <Clients />
      <Team />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
