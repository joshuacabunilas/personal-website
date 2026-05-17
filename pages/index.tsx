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
        <title>Joshua Cabunilas — Software Engineer</title>
        <meta name="description" content="Software engineer specializing in Flutter, .NET, and Next.js. Based in the Philippines." />
        <meta name="author" content="Joshua John L. Cabunilas" />
      </Head>
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
