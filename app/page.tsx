import { Header } from "./components/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-lesa-cream flex items-center justify-center">
        <h1 className="font-serif text-4xl text-lesa-black">Lesa House</h1>
      </main>
    </div>
  );
}
