// app/about/page.tsx
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import TeamSection from '../components/TeamSection';

export const metadata: Metadata = {
  title: 'About Us | Our Creative Team',
  description:
    'Meet the talented individuals behind our innovative digital experiences. Learn about our team members and what we do.',
  keywords: [
    'team',
    'about us',
    'developers',
    'designers',
    'digital experiences',
  ],
  openGraph: {
    title: 'About Our Team | Creative Digital Agency',
    description: 'Discover the people who make our digital magic happen',
    images: [
      {
        url: '/images/about/team-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Our creative team working together',
      },
    ],
  },
};

const teamMembersData = [
  {
    name: 'Batla',
    image: '/images/about/person3.png',
    color: 'from-purple-600 via-pink-500 to-yellow-400',
    bio: 'Frontend wizard with a passion for pixel-perfect designs. Loves React and smooth animations.',
    role: 'Lead UI Developer',
  },
  {
    name: 'Saifu',
    image: '/images/about/person3.png',
    color: 'from-green-400 via-blue-500 to-purple-600',
    bio: 'Backend architect who makes servers sing. Coffee enthusiast and database whisperer.',
    role: 'Backend Engineer',
  },
  {
    name: 'Pranjal',
    image: '/images/about/person3.png',
    color: 'from-yellow-400 via-red-500 to-pink-600',
    bio: 'Full-stack magician who bridges frontend and backend. Loves solving complex problems with elegant solutions.',
    role: 'Senior Full-Stack Developer',
  },
];

export default function About() {
  return (
    <>
      <Navbar className="bg-gradient-to-b from-[#130018] to-[#1d003d]" />
      <TeamSection
        teamMembers={teamMembersData}
        title="Meet Our Team"
        description="We mix code and creativity to build mind-blowing digital experiences. Think animations, bold branding, juicy designs — that kind of awesome."
      />
    </>
  );
}
