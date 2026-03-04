import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}
