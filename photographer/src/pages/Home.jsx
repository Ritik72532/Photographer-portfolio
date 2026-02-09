
import Hero from '../components/Hero'
import About from "../components/About"
import Skills from '../components/Skills'
import Categories from '../components/Categories'
import Work from '../components/Work'
import Contact from '../components/Contact'
function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Categories/>
        <Work/>
        <Contact/>
    </div>
  )
}

export default Home