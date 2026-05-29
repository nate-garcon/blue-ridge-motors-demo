import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'E-commerce Platform',
    tech: ['React', 'Node', 'Airtable'],
    metric: '40% faster checkout',
    description: 'Built a full-featured online store with custom checkout flow, inventory management, and seamless payment processing.'
  },
  {
    title: 'Scheduling System',
    tech: ['Full-stack', 'React', 'PostgreSQL'],
    metric: '300+ daily bookings',
    description: 'Developed a multi-provider booking platform with calendar sync, automated reminders, and client management.'
  },
  {
    title: 'CRM Integration',
    tech: ['HubSpot', 'Custom API', 'React'],
    metric: '$2M pipeline managed',
    description: 'Integrated HubSpot with custom dashboard for pipeline visualization, lead tracking, and automated outreach.'
  }
];

export default function CaseStudies() {
  return (
    <section style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.header}
      >
        <h2 style={styles.title}>Case Studies</h2>
        <p style={styles.subtitle}>Results that speak for themselves</p>
      </motion.div>

      <div style={styles.grid}>
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>{study.title}</h3>
            <div style={styles.tags}>
              {study.tech.map(t => (
                <span key={t} style={styles.tag}>{t}</span>
              ))}
            </div>
            <div style={styles.metric}>{study.metric}</div>
            <p style={styles.description}>{study.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 24px',
    background: '#0a0a0f',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 16px 0',
  },
  subtitle: {
    fontSize: '18px',
    color: '#8888aa',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: '#12121a',
    border: '1px solid #1e1e2e',
    borderRadius: '16px',
    padding: '32px',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#ffffff',
    margin: '0 0 16px 0',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  tag: {
    background: '#1a1a2e',
    color: '#6366f1',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 500,
  },
  metric: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#22c55e',
    marginBottom: '16px',
  },
  description: {
    fontSize: '15px',
    color: '#9899b3',
    lineHeight: 1.6,
    margin: 0,
  },
};