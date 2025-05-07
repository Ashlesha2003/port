import Link from "next/link"; // Used to navigate between pages

// Simple Navbar component with links to different pages
export function Navbar() {
  return (
    <nav className="w-full p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Ashlesha</h1> {/* Site logo/title */}
      <div className="space-x-4"> {/* Spacing between links */}
        {/* Navigation links */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}