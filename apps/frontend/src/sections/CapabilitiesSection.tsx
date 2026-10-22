'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Capability {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Business websites',
    description:
      'Clear, responsive websites that help a business present its services and guide visitors toward action.',
    image: '/cap/business-websites.jpg',
    alt: 'Business website displayed on a laptop',
  },
  {
    number: '02',
    title: 'Responsive interfaces',
    description:
      'Thoughtful frontend experiences that stay readable, usable, and focused across screen sizes.',
    image: '/cap/responsive-interfaces.jpg',
    alt: 'Responsive design across desktop, tablet, and mobile',
  },
  {
    number: '03',
    title: 'Full-stack applications',
    description:
      'Connected web applications that bring interface, server logic, and stored data into one useful workflow.',
    image: '/cap/fullstack-apps.jpg',
    alt: 'Full-stack application architecture layers',
  },
  {
    number: '04',
    title: 'REST API development',
    description:
      'Backend routes and integrations that allow interfaces and services to exchange the data they need.',
    image: '/cap/rest-api.jpg',
    alt: 'REST API code on a dark editor screen',
  },
  {
    number: '05',
    title: 'Database-backed systems',
    description:
      'Practical data workflows using persistent or browser-based storage suited to the project.',
    image: '/cap/database-systems.jpg',
    alt: 'Database tables and data flow visualization',
  },
  {
    number: '06',
    title: 'Integrations and automation',
    description:
      'Useful connections such as Telegram order notifications that reduce manual follow-up.',
    image: '/cap/integrations.jpg',
    alt: 'Service integration and automation network diagram',
  },
];

export default function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        {
          root: null,
          /* Activate when the item is within the central 30% of the viewport */
          rootMargin: '-35% 0px -35% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="cap-split">
      {/* ── Left: scrollable capability list ── */}
      <div className="cap-split__left">
        {capabilities.map((cap, idx) => (
          <div
            key={cap.number}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className={`cap-item${activeIndex === idx ? ' cap-item--active' : ''}`}
          >
            {/* Mobile-only image (hidden on desktop) */}
            <div className="cap-item__img-mobile" aria-hidden="true">
              <Image
                src={cap.image}
                alt={cap.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="cap-item__body">
              <span className="cap-item__num" aria-hidden="true">
                {cap.number}
              </span>
              <div className="cap-item__text">
                <h3 className="cap-item__title">{cap.title}</h3>
                <p className="cap-item__desc">{cap.description}</p>
              </div>
              <span className="cap-item__indicator" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Right: sticky image panel (desktop only) ── */}
      <div className="cap-split__right" aria-hidden="true">
        <div className="cap-split__img-wrap">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.number}
              className={`cap-split__img${activeIndex === idx ? ' cap-split__img--visible' : ''}`}
            >
              <Image
                src={cap.image}
                alt={cap.alt}
                fill
                sizes="50vw"
                style={{ objectFit: 'cover' }}
                priority={idx === 0}
              />
              {/* Subtle dark overlay so white text is always legible */}
              <span className="cap-split__overlay" />
            </div>
          ))}

          {/* Floating label that shows the active capability title */}
          <div className="cap-split__label">
            <span className="cap-split__label-num">
              {capabilities[activeIndex].number}
            </span>
            <span className="cap-split__label-title">
              {capabilities[activeIndex].title}
            </span>
          </div>

          {/* Progress dots */}
          <div className="cap-split__dots">
            {capabilities.map((_, idx) => (
              <button
                key={idx}
                className={`cap-split__dot${activeIndex === idx ? ' cap-split__dot--active' : ''}`}
                aria-label={`View ${capabilities[idx].title}`}
                onClick={() => {
                  itemRefs.current[idx]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
