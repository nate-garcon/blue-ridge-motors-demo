import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$500-2k',
    description: 'Single page, landing page, quick turnaround',
    features: ['Single page site', 'Responsive design', 'Contact form', 'Basic SEO', '5-day delivery'],
  },
  {
    name: 'Growth',
    price: '$2k-10k',
    description: 'Multi-page site, CMS, basic integrations',
    features: ['Up to 8 pages', 'CMS integration', 'Custom design', 'API integrations', 'Analytics setup', '2-week delivery'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$10k+',
    description: 'Full web app, custom logic, ongoing support',
    features: ['Custom web app', 'Database & backend', 'User authentication', 'Advanced integrations', 'Ongoing support', 'Dedicated PM'],
  },
];

export default function ServiceTiers() {
  return (
    <section style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.header}
      >
        <h2 style={styles.title}>Service Tiers</h2>
        <p style={styles.subtitle}>Transparent pricing for every stage</p>
      </motion.div>

      <div style={styles.grid}>
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{
              ...styles.card,
              ...(tier.highlight ? styles.cardHighlight : {}),
            }}
          >
            {tier.highlight && <div style={styles.badge}>Most Popular</div>}
            <h3 style={styles.tierName}>{tier.name}</h3>
            <div style={styles.price}>{tier.price}</div>
            <p style={styles.description}>{tier.description}</p>
            <ul style={styles.features}>
              {tier.features.map(f => (
                <li key={f} style={styles.featureItem}>
                  <span style={styles.check}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button style={tier.highlight ? styles.btnPrimary : styles.btnSecondary}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 24px',
    background: '#0d0d14',
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
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    background: '#12121a',
    border: '1px solid #1e1e2e',
    borderRadius: '16px',
    padding: '40px 32px',
    position: 'relative',
  },
  cardHighlight: {
    border: '1px solid #6366f1',
    background: 'linear-gradient(180deg, #1a1a2e 0%, #12121a 100%)',
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#6366f1',
    color: '#fff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 600,
  },
  tierName: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#ffffff',
    margin: '0 0 12px 0',
  },
  price: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#6366f1',
    marginBottom: '12px',
  },
  description: {
    fontSize: '15px',
    color: '#9899b3',
    margin: '0 0 28px 0',
  },
  features: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 32px 0',
  },
  featureItem: {
    fontSize: '15px',
    color: '#c4c4d4',
    marginBottom: '12px',
  },
  check: {
    color: '#22c55e',
    marginRight: '8px',
  },
  btnPrimary: {
    width: '100%',
    padding: '14px 24px',
    background: '#6366f1',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  btnSecondary: {
    width: '100%',
    padding: '14px 24px',
    background: 'transparent',
    color: '#9899b3',
    border: '1px solid #2a2a3e',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
};