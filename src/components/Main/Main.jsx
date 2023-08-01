import './Main.css'
// import Header from '../HeaderMain/HeaderMain'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'

function Main({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='main'>
        <div className='main__content'>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Main
