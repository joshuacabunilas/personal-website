import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { SITE } from '../data/site';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | {SITE.shortName}</title>
      </Head>

      <Navbar />

      <main className="not-found">
        <div className="not-found-inner">
          <p className="not-found-code">404</p>
          <h1 className="not-found-title">Page not found</h1>
          <p className="not-found-desc">
            Looks like this page doesn&apos;t exist. It may have been moved or the URL might be wrong.
          </p>
          <Link href="/" className="not-found-link">← Back to portfolio</Link>
        </div>
      </main>
    </>
  );
}
