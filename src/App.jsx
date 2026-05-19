import React from 'react'
import { motion } from 'framer-motion'

const services = [
    ["Web Development", "Custom web apps built to your spec. React, Node, modern stack."]
    ["CRM Integration", "Connect your tools. HubSpot, Salesforce, Airtable, custom APIs."]
    ["Scheduling Systems", "Online booking that actually works for your team and clients."]
    ["Analytics Dashboards", "Turn your data into decisions. Real-time, beautiful, actionable."]
]

const stats = [
  { num: "50+", label: "Projects shipped" },
  { num: "99%", label: "Uptime track record" },
  { num: "< 3s", label: "Average load time" },
]

export default function App() {
  return (
    <>
      <nav>
        <span className="logo">Blue Ridge Motors</span>
        <div>
          <a href="#services">Services</a>
          <a href="#proof" style={{marginLeft:"2rem"}}>Work</a>
          <a href="#contact" style={{marginLeft:"2rem"}}>Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Blue Ridge Motors</h1>
          <p className="tagline">Customers can't book service appointments online</p>
          <a href="#contact" className="cta-btn">Let's build something great</a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2>What We Build</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div key={s[0]} className="service-card"
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: i*0.08, duration:0.5}}
              >
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="social-proof" id="proof">
        <div className="container">
          <h2>The Track Record</h2>
          <div className="stats">
            {stats.map(stat => (
              <div className="stat" key={stat.label}>
                <div className="num">{stat.num}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <h2>Ready to build something real?</h2>
          <p>This was a demo — but it doesn't have to be. Let's talk about what your business actually needs.</p>
          <a href="mailto:nate@garcon.studio" className="cta-btn">Get in touch &rarr;</a>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Blue Ridge Motors &middot; Built by <a href="https://github.com/nate-garcon" target="_blank" rel="noopener">nate-garcon</a></p>
      </footer>
    </>
  )
}
