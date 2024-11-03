import { HiChartBar, HiGlobe, HiDatabase, HiLightningBolt, HiTrendingUp } from 'react-icons/hi'

function Features() {
  const features = [
    {
      icon: <HiChartBar className="h-8 w-8" />,
      title: "Latest Developments",
      description: "Track SAF market trends and latest updates"
    },
    {
      icon: <HiGlobe className="h-8 w-8" />,
      title: "Deals and Offtake agreements",
      description: "Access latest SAF Investments and signed Offtake agreements"
    },
    {
      icon: <HiLightningBolt className="h-8 w-8" />,
      title: "Policy Updates",
      description: "Get updates on policy updates and government funding"
    },
    {
      icon: <HiDatabase className="h-8 w-8" />,
      title: "Companies Database",
      description: "Access Database with producers, feedstock suppliers"
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
        Premium Intelligence Delivered to Your Inbox        </h2>
        <p className="p-4 mb-4">Transform your decision-making with SAF Intelligence, the industry's most comprehensive newsletter covering the sustainable aviation fuel ecosystem. From groundbreaking investments to critical policy developments, we deliver actionable intelligence to stakeholders across the value chain.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
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