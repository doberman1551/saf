import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DataVisualization from './components/DataVisualization'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DataVisualization />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App