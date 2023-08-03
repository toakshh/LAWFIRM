import React,{Suspense} from 'react';

const Cards= React.lazy(()=>import ('./components/body/cards/Cards'))
const Clients= React.lazy(()=> import ('./components/body/clients/Clients'))
const Faq= React.lazy(()=>import ('./components/body/faq/Faq'))
const Gallery= React.lazy(()=> import ('./components/body/gallery/Gallery'))
const Intro = React.lazy(()=>import ('./components/body/intro/Intro'))
const Subscribe= React.lazy(()=>import ('./components/body/subscribe/Subscribe'))
const Team= React.lazy(()=>import ('./components/body/team/Team'))
const Footer= React.lazy(()=>import ('./components/footer/Footer'))
import Header from './components/header/Header'
import Loading from './components/fallbacks/Loading';

function App() {


  return (
    <>
      <Header />
      <Intro />
      <Suspense fallback={<Loading />}>
        <Cards />
        <Gallery />
        <Clients />
        <Team />
        <Faq />
        <Subscribe />
        <Footer />
      </Suspense>
     
    </>
  )
}

export default App
