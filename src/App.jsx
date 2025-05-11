
import styles from './App.module.css'
import About from './components/About/About'
import ExpSkills from './components/ExpSkills/ExpSkills'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <ExpSkills />
      <Projects />
    </div>
  )
}

export default App
