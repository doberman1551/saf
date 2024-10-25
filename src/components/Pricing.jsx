function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "499",
      features: [
        "Basic market analytics",
        "Monthly reports",
        "Email support",
        "1 user license"
      ]
    },
    {
      name: "Professional",
      price: "999",
      features: [
        "Advanced analytics",
        "Weekly reports",
        "Priority support",
        "5 user licenses",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Full data access",
        "Real-time analytics",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom integration"
      ]
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                {plan.price !== "Custom" && <span className="text-lg font-normal">/month</span>}
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing