import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Award, Target, TrendingUp } from 'lucide-react'
import { useRef } from 'react'
import './TransformationStory.css'

const steps = [
  {
    from: 'Codedex',
    to: 'VishCode',
    description: 'The original learning adventure begins',
    icon: Sparkles,
    color: '#8b5cf6'
  },
  {
    from: 'Learn',
    to: 'Master',
    description: 'Deep understanding of concepts',
    icon: Target,
    color: '#6366f1'
  },
  {
    from: 'Practice',
    to: 'Build',
    description: 'Real-world project creation',
    icon: Zap,
    color: '#06b6d4'
  },
  {
    from: 'Compete',
    to: 'Excel',
    description: 'Join the leaderboard elite',
    icon: TrendingUp,
    color: '#10b981'
  },
  {
    from: 'Achieve',
    to: 'Unlock',
    description: 'Badges & certificates',
    icon: Award,
    color: '#f59e0b'
  }
]

const TransformationStory = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section className="transformation" ref={ref}>
      <div className="transformation-container">
        <motion.div 
          className="transformation-header"
          style={{ opacity }}
        >
          <span className="transformation-label">
            <Sparkles size={16} />
            The Journey
          </span>
          <h2>From <span className="gradient-text">Codedex</span> to <span className="gradient-text">VishCode</span></h2>
          <p>Experience the complete transformation of your coding skills through our meticulously crafted learning path</p>
        </motion.div>

        <motion.div 
          className="transformation-path"
          style={{ y }}
        >
          <div className="path-line">
            <div className="path-progress"></div>
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="path-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-icon" style={{ '--accent': step.color }}>
                <step.icon size={24} />
              </div>
              <div className="step-content">
                <div className="step-transition">
                  <span className="step-from">{step.from}</span>
                  <ArrowRight size={16} className="step-arrow" />
                  <span className="step-to">{step.to}</span>
                </div>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="transformation-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="btn-transform">
            Begin Transformation
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TransformationStory