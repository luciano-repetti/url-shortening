import SmoothScrollWrapper from './SmoothScrollWrapper'
import Footer from './components/footer'
import Header from './components/header'
import SectionBoostedLink from './components/sections/Boostedlink'
import SectionHero from './components/sections/Hero'
import SectionStatics from './components/sections/Statistics'
import Scroll from './hooks/useScroll.ts'

function App() {
  return (
    <SmoothScrollWrapper>
      <Scroll />
      <Header />
      <SectionHero />
      <SectionStatics />
      <SectionBoostedLink />
      <Footer />
    </SmoothScrollWrapper>
  )
}

export default App
