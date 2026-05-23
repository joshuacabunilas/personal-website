import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Footer from '../components/Footer';
import { SITE } from '../data/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: SITE.title,
  url: SITE.siteUrl,
  sameAs: [SITE.github, SITE.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Parañaque City',
    addressCountry: 'PH',
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.shortName} — {SITE.title}</title>
        <meta name="description" content={SITE.description} />
        <meta name="author" content={SITE.name} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.siteUrl} />
        <meta property="og:title" content={`${SITE.shortName} — ${SITE.title}`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:image" content={`${SITE.siteUrl}/avatar.jpg`} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:locale" content="en_PH" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${SITE.shortName} — ${SITE.title}`} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={`${SITE.siteUrl}/avatar.jpg`} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <a href="#about" className="skip-link">Skip to content</a>

      <main>
        <Navbar />
        <Hero />
        <hr className="divider" />
        <Summary />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Education />
        <Footer />
      </main>
    </>
  );
}
