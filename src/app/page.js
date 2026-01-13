export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="container">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Your Name</span>
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          I build modern web applications with Next.js.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-500 rounded-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}
