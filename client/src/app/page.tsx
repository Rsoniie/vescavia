import Navbar from './components/navbar';
import Home from './home/page';
import CopyrightPage from './copyright/page';
export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#11001D]">
      <Navbar />
      <div className="-mt-10">
        <Home />
        <CopyrightPage />
      </div>
    </div>
  );
}
