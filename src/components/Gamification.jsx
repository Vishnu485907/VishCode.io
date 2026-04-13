import { motion } from 'framer-motion'
import { Trophy, Star, Zap, Award, Crown, Target, Flame, GitBranch, Code, Gamepad2 } from 'lucide-react'
import './Gamification.css'

const features = [
  {
    icon: Trophy,
    title: 'Leaderboard',
    description: 'Compete with learners worldwide and climb the ranks',
    color: '#fbbf24'
  },
  {
    icon: Star,
    title: 'Badges',
    description: 'Collect pixel-art badges for completing courses',
    color: '#8b5cf6'
  },
  {
    icon: Zap,
    title: 'XP Points',
    description: 'Earn experience points as you level up',
    color: '#6366f1'
  },
  {
    icon: Flame,
    title: 'Streaks',
    description: 'Keep your daily streak alive',
    color: '#f97316'
  },
  {
    icon: Crown,
    title: 'Rank',
    description: 'Rise from Novice to Legend',
    color: '#ec4899'
  },
  {
    icon: Target,
    title: 'Challenges',
    description: 'Weekly coding challenges await',
    color: '#10b981'
  }
]

const leaderboard = [
  { rank: 1, name: 'CodeMaster_Pro', xp: '45,230', avatar: '👑', badge: '#fbbf24' },
  { rank: 2, name: 'PythonNinja', xp: '42,890', avatar: '🥷', badge: '#c0c0c0' },
  { rank: 3, name: 'JS_Wizard', xp: '38,450', avatar: '🧙', badge: '#cd7f32' },
  { rank: 4, name: 'ByteRunner', xp: '35,120', avatar: '⚡', badge: '#6366f1' },
  { rank: 5, name: 'PixelCoder', xp: '31,890', avatar: '🎮', badge: '#8b5cf6' },
]

const badges = [
  { name: 'First Steps', icon: '🚶', earned: true },
  { name: 'Python Pioneer', icon: '🐍', earned: true },
  { name: 'HTML Hero', icon: '🏰', earned: true },
  { name: 'Code Warrior', icon: '⚔️', earned: false },
  { name: 'Night Owl', icon: '🦉', earned: false },
  { name: 'Early Bird', icon: '🐦', earned: false },
]

const Gamification = () => {
  return (
    <section className="gamification" id="practice">
      <div className="gamification-container">
        <motion.div 
          className="gamification-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gamification-label">
            <Gamepad2 size={16} />
            Level Up
          </span>
          <h2>Gamified <span className="gradient-text">Learning Experience</span></h2>
          <p>Complete lessons, earn XP, collect badges, and level up your skills</p>
        </motion.div>

        <div className="gamification-content">
          <div className="features-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="feature-icon" style={{ '--accent': feature.color }}>
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="gamification-stats">
            <motion.div 
              className="leaderboard"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-header">
                <Trophy size={20} />
                <h3>Leaderboard</h3>
              </div>
              <div className="leaderboard-list">
                {leaderboard.map((user, idx) => (
                  <div key={idx} className="leaderboard-item">
                    <span className="rank" style={{ '--accent': user.badge }}>{user.rank}</span>
                    <span className="avatar">{user.avatar}</span>
                    <span className="name">{user.name}</span>
                    <span className="xp">{user.xp} XP</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="badges-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-header">
                <Award size={20} />
                <h3>Your Badges</h3>
              </div>
              <div className="badges-grid">
                {badges.map((badge, idx) => (
                  <div 
                    key={idx} 
                    className={`badge-item ${badge.earned ? 'earned' : 'locked'}`}
                  >
                    <span className="badge-icon">{badge.icon}</span>
                    <span className="badge-name">{badge.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="progress-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="user-progress">
              <div className="progress-header">
                <div className="user-info">
                  <span className="user-avatar">🧑‍💻</span>
                  <div>
                    <h4>Your Progress</h4>
                    <span className="user-level">Level 5 • 2,450 / 5,000 XP</span>
                  </div>
                </div>
                <div className="xp-badge">
                  <Zap size={14} />
                  +150 XP today
                </div>
              </div>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '49%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="progress-stats">
                <span>👣 12 Day Streak</span>
                <span>🔥 145 Total XP</span>
                <span>🏆 3 Badges</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Gamification