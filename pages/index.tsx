import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua John Cabunilas | Software Engineer</title>
        <meta
          name="description"
          content="Resume of Joshua John L. Cabunilas – Software Engineer specializing in Flutter, .NET, and Next.js. Computer Engineering graduate from Mapúa University."
        />
        <meta
          name="keywords"
          content="Joshua Cabunilas, Software Engineer, Flutter Developer, Next.js, .NET, Mapúa University, Resume, Portfolio"
        />
        <meta name="author" content="Joshua John L. Cabunilas" />
        <meta property="og:title" content="Joshua John Cabunilas | Software Engineer" />
        <meta
          property="og:description"
          content="Resume of Joshua John L. Cabunilas – Software Engineer specializing in Flutter, .NET, and Next.js."
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <div className="container">
          <Summary />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </div>
        <Footer />
      </main>
    </>
  );
}
