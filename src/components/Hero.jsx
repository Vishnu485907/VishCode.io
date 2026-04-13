import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Star, Code2, Terminal, Database } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Star size={14} className="badge-star" />
          <span>#1 Interactive Coding Platform</span>
          <span className="badge-arrow">→</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Start Your <span className="gradient-text">Coding Journey</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Master Python, HTML, JavaScript & more through 250+ hours of interactive lessons. 
          Level up, earn XP, and build real projects.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="btn-hero-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={18} />
            Start Learning for Free
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            className="btn-hero-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Courses
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-value">1M+</span>
            <span className="stat-label">Learners</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">250+</span>
            <span className="stat-label">Hours</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">50K+</span>
            <span className="stat-label">Exercises</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">200+</span>
            <span className="stat-label">Projects</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-preview"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="preview-window">
            <div className="preview-header">
              <div className="preview-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="preview-title">main.py</span>
            </div>
            <div className="preview-content">
              <div className="code-line"><span className="code-keyword">def</span> <span className="code-function">greet</span>(name):</div>
              <div className="code-line indent">    <span className="code-comment"># Welcome to VishCode</span></div>
              <div className="code-line indent">    <span className="code-keyword">return</span> f<span className="code-string">"Hello, {name}! Welcome aboard 🚀"</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="code-function">greet</span>(<span className="code-string">"VishCode Learner"</span>)</div>
              <div className="code-output">
                <span className="output-label">→</span> <span className="output-text">Hello, VishCode Learner! Welcome aboard 🚀</span>
              </div>
            </div>
          </div>

          <div className="preview-lang python">
            <Terminal size={20} />
            <span>Python</span>
          </div>
          <div className="preview-lang html">
            <Code2 size={20} />
            <span>HTML</span>
          </div>
          <div className="preview-lang sql">
            <Database size={20} />
            <span>SQL</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero