import Navbar from './components/navbar';
import Home from './home/page';
import ContactPage from './contact/page';
import CopyrightPage from './copyright/page';
export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#11001D]">
      <Navbar />
      <div className="pt-16">
        <Home />
        <ContactPage />
        <CopyrightPage />
      </div>
    </div>
  );
}
