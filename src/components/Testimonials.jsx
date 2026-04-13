import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    avatar: '👩‍💻',
    quote: 'VishCode transformed my career. The gamified approach kept me engaged, and within 6 months I landed my dream job.',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    role: 'Full Stack Developer',
    avatar: '👨‍💻',
    quote: 'Best learning platform hands down. The interactive exercises and real-time feedback accelerated my learning curve.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    avatar: '👩‍💼',
    quote: 'I went from zero coding knowledge to building my own web apps. The structured path made all the difference.',
    rating: 5
  }
]

const stats = [
  { value: '1M+', label: 'Active Learners' },
  { value: '50+', label: 'Countries' },
  { value: '92%', label: 'Career Rate' },
  { value: '4.9', label: 'App Rating' }
]

const Testimonials = () => {
  return (
    <section className="testimonials" id="community">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="testimonials-label">
            <Quote size={16} />
            Success Stories
          </span>
          <h2>Join <span className="gradient-text">1 Million+</span> Learners</h2>
          <p>See what our community has to say about their journey</p>
        </motion.div>

        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-box">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <span className="author-avatar">{testimonial.avatar}</span>
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials