import './Main.css'
import Header from '../HeaderMain/HeaderMain'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'

function Main() {
  return (
    <main className='main'>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default Main
