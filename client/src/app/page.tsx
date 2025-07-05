import Navbar from './components/navbar';
import Home from './home/page';
import ContactPage from './contact/page';
// import Home from './hero/page';

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#11001D]">
      <Navbar />
      <div className="-mt-10">
        <Home />
      </div>
    </div>
  );
}
