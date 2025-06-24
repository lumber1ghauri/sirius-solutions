import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
