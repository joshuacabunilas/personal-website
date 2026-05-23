import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function MacWindow({ title, children }: Props) {
  return (
    <div className="mac-window">
      <div className="mac-titlebar">
        <div className="mac-dots" aria-hidden="true">
          <span className="mac-dot mac-dot-red" />
          <span className="mac-dot mac-dot-yellow" />
          <span className="mac-dot mac-dot-green" />
        </div>
        <span className="mac-title">{title}</span>
      </div>
      {children}
    </div>
  );
}
