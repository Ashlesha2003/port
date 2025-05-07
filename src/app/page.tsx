import { Button } from "@/components/ui/button"; // Button from shadcn/ui

// Main landing section of your portfolio
export default function Home() {
  return (
    <section className="text-center py-20">
      {/* Headline */}
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Ashlesha 👋</h1>
      {/* Short subtitle */}
      <p className="text-lg mb-6">Full-stack developer</p>
      {/* Call-to-action button */}
      <Button asChild>
        <a href="https://drive.google.com/file/d/1N7vrSYb3-iQK48KiMzDgO33CZpBGoH_g/view" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </Button>
    </section>
  );
}
