import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Menu, 
  X, 
  ChevronDown,
  BookOpen,
  Rocket,
  Trophy,
  Users,
  Zap
} from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Learn', icon: BookOpen, href: '#learn' },
  { label: 'Practice', icon: Rocket, href: '#practice' },
  { label: 'Challenges', icon: Trophy, href: '#challenges' },
  { label: 'Community', icon: Users, href: '#community' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="navbar-container">
        <motion.a 
          href="/" 
          className="navbar-brand"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="brand-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path 
                d="M20 4L36 12V28L20 36L4 28V12L20 4Z" 
                stroke="url(#nav-gradient)" 
                strokeWidth="2"
                fill="none"
              />
              <path 
                d="M20 12L28 16V24L20 28L12 24V16L20 12Z" 
                fill="url(#nav-gradient)" 
              />
              <defs>
                <linearGradient id="nav-gradient" x1="4" y1="4" x2="36" y2="36">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="brand-text">
            <span className="brand-from">Vish</span>
            <span className="brand-to">Code</span>
          </span>
        </motion.a>

        <nav className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <link.icon size={18} />
              {link.label}
              <ChevronDown size={14} className={`nav-arrow ${activeDropdown === idx ? 'active' : ''}`} />
            </motion.a>
          ))}
        </nav>

        <div className="navbar-actions">
          <motion.button 
            className="btn-signin"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
          <motion.button 
            className="btn-get-started"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap size={16} />
            Get Started
          </motion.button>
        </div>

        <motion.button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="mobile-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <link.icon size={20} />
                {link.label}
              </motion.a>
            ))}
            <div className="mobile-actions">
              <button className="btn-signin">Sign In</button>
              <button className="btn-get-started">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar