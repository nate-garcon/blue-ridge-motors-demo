import CaseStudies from './components/CaseStudies';
import ServiceTiers from './components/ServiceTiers';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <main style={styles.main}>
      <Hero />
      <Services />
      <CaseStudies />
      <ServiceTiers />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>
          Digital Experiences<br />That Drive Results
        </h1>
        <p style={styles.heroSubtitle}>
          We build high-performance web apps and custom software for growth-stage companies.
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.btnPrimary}>View Our Work</button>
          <button style={styles.btnSecondary}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: 'Web Development', desc: 'Custom React & Node.js applications built for scale.' },
    { title: 'UI/UX Design', desc: 'User-centered interfaces that convert visitors to customers.' },
    { title: 'API Integration', desc: 'Connect your tools and automate workflows seamlessly.' },
  ];

  return (
    <section style={styles.services}>
      <h2 style={styles.sectionTitle}>What We Do</h2>
      <div style={styles.servicesGrid}>
        {services.map(s => (
          <div key={s.title} style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>{s.title}</h3>
            <p style={styles.serviceDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '3x', label: 'Average ROI' },
  ];

  return (
    <section style={styles.stats}>
      {stats.map(s => (
        <div key={s.label} style={styles.statItem}>
          <div style={styles.statValue}>{s.value}</div>
          <div style={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </section>
  );
}

function CTA() {
  return (
    <section style={styles.cta}>
      <h2 style={styles.ctaTitle}>Ready to start your project?</h2>
      <p style={styles.ctaText}>Let's discuss how we can help your business grow.</p>
      <button style={styles.btnPrimary}>Schedule a Call</button>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© 2024 Blue Ridge Motors. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  main: {
    background: '#0a0a0f',
    color: '#ffffff',
    minHeight: '100vh',
  },
  hero: {
    padding: '140px 24px 100px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #0d0d14 0%, #0a0a0f 100%)',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: 'clamp(40px, 6vw, 72px)',
    fontWeight: 700,
    lineHeight: 1.1,
    margin: '0 0 24px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #9899b3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#8888aa',
    margin: '0 0 40px 0',
    lineHeight: 1.6,
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '14px 32px',
    background: '#6366f1',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '14px 32px',
    background: 'transparent',
    color: '#c4c4d4',
    border: '1px solid #2a2a3e',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  services: {
    padding: '100px 24px',
    background: '#0d0d14',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: 700,
    textAlign: 'center',
    margin: '0 0 56px 0',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '32px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  serviceCard: {
    background: '#12121a',
    border: '1px solid #1e1e2e',
    borderRadius: '16px',
    padding: '32px',
  },
  serviceTitle: {
    fontSize: '20px',
    fontWeight: 600,
    margin: '0 0 12px 0',
  },
  serviceDesc: {
    fontSize: '15px',
    color: '#8888aa',
    margin: 0,
    lineHeight: 1.6,
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '80px',
    padding: '80px 24px',
    background: '#12121a',
    flexWrap: 'wrap',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#6366f1',
  },
  statLabel: {
    fontSize: '16px',
    color: '#8888aa',
    marginTop: '8px',
  },
  cta: {
    padding: '100px 24px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 100%)',
  },
  ctaTitle: {
    fontSize: '36px',
    fontWeight: 700,
    margin: '0 0 16px 0',
  },
  ctaText: {
    fontSize: '18px',
    color: '#8888aa',
    margin: '0 0 40px 0',
  },
  footer: {
    padding: '40px 24px',
    textAlign: 'center',
    borderTop: '1px solid #1e1e2e',
  },
  footerText: {
    fontSize: '14px',
    color: '#6b6b80',
    margin: 0,
  },
};