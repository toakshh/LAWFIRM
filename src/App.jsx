// import styles from  './App.module.css'
import Cards from './components/body/cards/Cards'
import Clients from './components/body/clients/Clients'
import Gallery from './components/body/gallery/Gallery'
import Intro from './components/body/intro/Intro'
import Header from './components/header/Header'


function App() {


  return (
    <>
      <Header />
      <Intro />
      <Cards />
      <Gallery />
      <Clients />
    </>
  )
}

export default App
