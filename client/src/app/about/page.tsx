// app/about/page.tsx
import { Metadata } from 'next';
import Navbar from '@/app/components/navbar';
import AboutSection from '../components/AboutSection';

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

export default function About() {
  return (
    <>
      <Navbar />
      <AboutSection
        title="About Us"
        description="We are a dynamic team of creators, innovators, and strategists dedicated to transforming bold ideas into extraordinary digital experiences that drive real business results."
      />
    </>
  );
}
