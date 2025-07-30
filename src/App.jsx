import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/jsx/Home'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </main><hr className='hr__underline' />
      <Footer />
    </>
  )
}

export default App
