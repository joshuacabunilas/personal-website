import type { IconType } from 'react-icons';
import {
  SiFlutter, SiDart, SiFirebase,
  SiDotnet, SiCsharp, SiPython, SiMicrosoftsqlserver,
  SiNextdotjs, SiReact, SiJavascript,
  SiAmazonaws, SiGit, SiPostman, SiGithubactions,
  SiArduino, SiRaspberrypi, SiTensorflow, SiOpencv, SiCplusplus,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  color: string | null;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
  tier: 'primary' | 'secondary';
}

export const primaryTools = ['BLoC', 'Clean Architecture', 'Shorebird'];

export const categories: SkillCategory[] = [
  {
    label: 'Mobile',
    tier: 'primary',
    skills: [
      { name: 'Flutter',    icon: SiFlutter,            color: '#02569B' },
      { name: 'Dart',       icon: SiDart,               color: '#0175C2' },
      { name: 'Firebase',   icon: SiFirebase,           color: '#FFCA28' },
    ],
  },
  {
    label: 'Backend',
    tier: 'primary',
    skills: [
      { name: '.NET',       icon: SiDotnet,             color: '#512BD4' },
      { name: 'C#',         icon: SiCsharp,             color: '#239120' },
      { name: 'Python',     icon: SiPython,             color: '#3776AB' },
      { name: 'SQL Server', icon: SiMicrosoftsqlserver,  color: '#CC2927' },
    ],
  },
  {
    label: 'Web',
    tier: 'primary',
    skills: [
      { name: 'Next.js',    icon: SiNextdotjs,          color: null },
      { name: 'React',      icon: SiReact,              color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript,         color: '#F7DF1E' },
    ],
  },
  {
    label: 'Cloud & Tools',
    tier: 'secondary',
    skills: [
      { name: 'AWS',            icon: SiAmazonaws,      color: '#FF9900' },
      { name: 'Git',            icon: SiGit,            color: '#F05032' },
      { name: 'Postman',        icon: SiPostman,        color: '#FF6C37' },
      { name: 'GitHub Actions', icon: SiGithubactions,  color: null },
    ],
  },
  {
    label: 'Embedded & ML',
    tier: 'secondary',
    skills: [
      { name: 'Arduino',      icon: SiArduino,     color: '#00979D' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#A22846' },
      { name: 'TensorFlow',   icon: SiTensorflow,  color: '#FF6F00' },
      { name: 'OpenCV',       icon: SiOpencv,      color: '#5C3EE8' },
      { name: 'C++',          icon: SiCplusplus,   color: '#00599C' },
    ],
  },
];
