import { Header } from "./components/header/Header";
import { Hero } from "./components/sections/Hero";
import { GalleryPreview } from "./components/sections/GalleryPreview";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />

      <main>
        <Hero />
        <GalleryPreview />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
