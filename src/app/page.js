import TryOn from "./(Components)/Tryon/page";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">This is Home Page 🏠</h1>
      <section>
        <TryOn></TryOn>
      </section>
    </main>
  )
}
