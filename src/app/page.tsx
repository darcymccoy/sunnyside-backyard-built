'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const images = [
  '/gallery/lattice-1.JPG',
  '/gallery/lattice-2.JPG',
  '/gallery/lattice-3.JPG',
  '/gallery/lattice-4.JPG',
  '/gallery/lattice-5.JPG',
]

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;

    if (e.key === 'Escape') {
      setLightboxIndex(null);
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev! + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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

        <section className={styles.gallerySection}>
          <h2>Gallery</h2>
          <div className={styles.galleryGrid}>
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Gallery image ${i + 1}`}
                onClick={() => setLightboxIndex(i)}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Sunnyside Backyard Built Co. All rights reserved.</p>
      </footer>

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <Image
            src={images[lightboxIndex]}
            alt="Full size"
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
