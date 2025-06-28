import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Sunnyside Backyard Built Co</h1>
          <p>Old Ottawa based student handyman offering local and affordable services.<br />Contact Hugh for a free consult:</p>
          <a href="tel:+1234567890" className={styles.contactButton}>Call Now: (123) 456-7890</a>
          <p>Email: email@email.com</p>
        </header>

        <section className={styles.section}>
          <h2>Services</h2>
          <ul className={styles.serviceList}>
            <li>Painting</li>
            <li>Landscaping</li>
            <li>Fences</li>
            <li>Decks</li>
            <li>Planters</li>
            <li>And more!</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Photo Gallery</h2>
          <div className={styles.galleryGrid}>
            <img src="/gallery/lattice-1.jpg" alt="Custom lattice" title="Custom lattice" />
            <img src="/gallery/lattice-2.jpg" alt="Custom lattice" title="Custom lattice" />
            <img src="/gallery/lattice-3.jpg" alt="Custom lattice" title="Custom lattice" />
            <img src="/gallery/lattice-4.jpg" alt="Custom lattice" title="Custom lattice" />
            <img src="/gallery/lattice-5.jpg" alt="Custom lattice" title="Custom lattice" />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Sunnyside Backyard Built Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
