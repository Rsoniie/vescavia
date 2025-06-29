import Navbar from "./components/navbar";
import Home from "./pages/homePage";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#11001D]">
      <Navbar />
      <div className="pt-16"> 
        <Home />
      </div>
    </div>
  );
}