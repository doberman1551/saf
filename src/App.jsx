import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DataVisualization from './components/DataVisualization'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import IFrame from './components/IFrame'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <IFrame src="https://embeds.beehiiv.com/91ad6a57-6681-46ad-9f35-cd5a6a7dcd10"/>

        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App