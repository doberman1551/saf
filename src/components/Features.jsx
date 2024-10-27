import { HiChartBar, HiGlobe, HiLightningBolt, HiTrendingUp } from 'react-icons/hi'

function Features() {
  const features = [
    {
      icon: <HiChartBar className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Track SAF market trends and prices with live data updates"
    },
    {
      icon: <HiGlobe className="h-8 w-8" />,
      title: "Global Coverage",
      description: "Access SAF market data from major aviation hubs worldwide"
    },
    {
      icon: <HiLightningBolt className="h-8 w-8" />,
      title: "Instant Insights",
      description: "Get actionable insights with our advanced analytics engine"
    },
    {
      icon: <HiTrendingUp className="h-8 w-8" />,
      title: "Forecast Models",
      description: "Predict market trends with our AI-powered forecasting"
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
        Premium Intelligence Delivered to Your Inbox        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features