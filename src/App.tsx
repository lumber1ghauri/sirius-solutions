import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Background from './components/Background'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full relative">
        <Background />
        <div className="relative">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Testimonials />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
