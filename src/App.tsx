import './App.css'
import About from './components/about/about.tsx'
import Projects from './components/projects/projects.tsx'
import Titlecard from './components/titlecard/titlecard.tsx'
import Navbar from './components/navbar/navbar.tsx'
import Experience from './components/experience/experience.tsx'
import Contact from './components/contact/contact.tsx'
function App() {
  return (
    <div className="bg-mainbackground  flex flex-col text-lightshade ">
      <Navbar />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="md:w-[35vw] md:sticky top-[10vh] md:self-start md:max-h-[20vh] px-4 md:p-4">
          <Titlecard />
        </div>
        <div className="flex flex-col md:w-[60vw] p-4">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>

      </div>
    </div>
  )
}

export default App
