import { motion } from 'framer-motion'
import { Check, Zap, Crown, Sparkles, HelpCircle } from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    icon: Zap,
    features: [
      'Access to Python course',
      '50+ interactive exercises',
      '5 project tutorials',
      'Community forum access',
      'Basic progress tracking'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Club',
    price: '$9.99',
    period: '/month',
    description: 'For serious learners',
    icon: Crown,
    features: [
      'All courses unlimited',
      '200+ project tutorials',
      'Certificate of completion',
      'Priority support',
      'Advanced progress analytics',
      'Exclusive Discord channels',
      'Monthly hackathons'
    ],
    cta: 'Join the Club',
    popular: true
  }
]

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="pricing-label">
            <Sparkles size={16} />
            Membership
          </span>
          <h2>Start Your <span className="gradient-text">Premium Journey</span></h2>
          <p>Unlock your full potential with unlimited access</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <div className="plan-icon">
                <plan.icon size={24} />
              </div>
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="price-value">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              
              <ul className="plan-features">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pricing-faq"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HelpCircle size={20} />
          <h3>Have questions?</h3>
          <p>Chat with Lumi, our AI coding assistant</p>
          <button className="btn-ask">Ask Lumi</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing