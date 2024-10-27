
import { NewsletterForm } from "./NewsletterForm"
function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-primary-light via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6">
            Navigate the Future of
            <span className="text-primary"> Sustainable Aviation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Make data-driven decisions with real-time SAF market intelligence and analytics in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">Subscribe ✉️</button>
            <NewsletterForm/>
           {/* <button className="btn-secondary">Learn More</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero