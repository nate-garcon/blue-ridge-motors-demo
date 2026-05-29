import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Nate transformed our online presence. Booked 3x more appointments in 60 days.",
    name: "Sarah M.",
    company: "Wellness Clinic Owner",
    rating: 5,
  },
  {
    quote: "Delivered a complex booking system on time and under budget. Our team uses it daily.",
    name: "Marcus T.",
    company: "Fitness Studio Founder",
    rating: 5,
  },
  {
    quote: "The CRM integration saved us 20+ hours per week. Worth every penny.",
    name: "Jennifer L.",
    company: "Marketing Director",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.header}
      >
        <h2 style={styles.title}>Client Testimonials</h2>
        <p style={styles.subtitle}>Trusted by businesses across industries</p>
      </motion.div>

      <div style={styles.grid}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={styles.card}
          >
            <div style={styles.stars}>
              {[...Array(t.rating)].map((_, si) => (
                <span key={si} style={styles.star}>★</span>
              ))}
            </div>
            <p style={styles.quote}>"{t.quote}"</p>
            <div style={styles.author}>
              <div style={styles.avatar}>{t.name[0]}</div>
              <div>
                <div style={styles.name}>{t.name}</div>
                <div style={styles.role}>{t.company}</div>
              </div>
            </div>
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
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    background: '#12121a',
    border: '1px solid #1e1e2e',
    borderRadius: '16px',
    padding: '36px 32px',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '20px',
  },
  star: {
    color: '#facc15',
    fontSize: '20px',
  },
  quote: {
    fontSize: '17px',
    color: '#d4d4e8',
    lineHeight: 1.7,
    margin: '0 0 28px 0',
    fontStyle: 'italic',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#6366f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 700,
    color: '#fff',
  },
  name: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#ffffff',
  },
  role: {
    fontSize: '14px',
    color: '#8888aa',
  },
};