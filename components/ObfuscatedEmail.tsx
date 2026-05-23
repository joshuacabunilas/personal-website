import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  label?: string;
}

/**
 * Renders an email link decoded from base64 on the client only,
 * so the address is never present in the static HTML for scrapers to harvest.
 */
export default function ObfuscatedEmail({ className, label = 'Email' }: Props) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHref(`mailto:${atob('am9zaHVhY2FidW5pbGFzMjBAZ21haWwuY29t')}`);
  }, []);

  if (!href) return <span className={className}>{label}</span>;
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}
