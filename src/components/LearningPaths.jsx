import { motion } from 'framer-motion'
import { Code2, Database, Globe, Cpu, Palette, Terminal, Star, ChevronRight, Clock, Users } from 'lucide-react'
import './LearningPaths.css'

const courses = [
  {
    id: 'python',
    title: 'Python',
    description: 'Learn variables, control flow, and loops with the world\'s most popular programming language.',
    level: 'Beginner',
    icon: Code2,
    color: '#3b82f6',
    learners: '113.6K',
    duration: '22h',
    chapters: 8
  },
  {
    id: 'html',
    title: 'HTML',
    description: 'Create your first website with HTML, the building blocks of the web.',
    level: 'Beginner',
    icon: Globe,
    color: '#f97316',
    learners: '89.2K',
    duration: '12h',
    chapters: 5
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Build interactive web apps with the programming language of the web.',
    level: 'Beginner',
    icon: Code2,
    color: '#fbbf24',
    learners: '76.8K',
    duration: '18h',
    chapters: 8
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style your HTML pages with colors, fonts, layouts, and animations.',
    level: 'Beginner',
    icon: Palette,
    color: '#06b6d4',
    learners: '65.4K',
    duration: '14h',
    chapters: 6
  },
  {
    id: 'sql',
    title: 'SQL',
    description: 'Learn database basics, queries, and data analysis.',
    level: 'Beginner',
    icon: Database,
    color: '#8b5cf6',
    learners: '42.1K',
    duration: '10h',
    chapters: 4
  },
  {
    id: 'command-line',
    title: 'Command Line',
    description: 'Navigate and manipulate your computer filesystem like a pro.',
    level: 'Beginner',
    icon: Terminal,
    color: '#10b981',
    learners: '28.9K',
    duration: '6h',
    chapters: 3
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const LearningPaths = () => {
  return (
    <section className="learning" id="learn">
      <div className="learning-container">
        <motion.div 
          className="learning-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="learning-label">
            <Star size={16} />
            Explore Courses
          </span>
          <h2>Start Your <span className="gradient-text">Coding Adventure</span></h2>
          <p>250+ hours of free interactive coding lessons, handcrafted by industry experts</p>
        </motion.div>

        <motion.div 
          className="courses-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.article 
              key={course.id}
              className="course-card"
              variants={item}
              whileHover={{ y: -8 }}
            >
              <div className="course-header" style={{ '--accent': course.color }}>
                <div className="course-icon">
                  <course.icon size={24} />
                </div>
                <span className="course-badge">{course.level}</span>
              </div>
              
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              
              <div className="course-meta">
                <span><Users size={14} />{course.learners}</span>
                <span><Clock size={14} />{course.duration}</span>
                <span>{course.chapters} chapters</span>
              </div>
              
              <button className="course-btn">
                Start Learning <ChevronRight size={16} />
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="learning-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="btn-view-all">
            View All Courses <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningPaths