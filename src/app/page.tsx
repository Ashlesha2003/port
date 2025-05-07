import { Button } from "@/components/ui/button"; // Button from shadcn/ui

// Main landing section of your portfolio
export default function Home() {
  return (
    <section className="text-center py-20">
      {/* Headline */}
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Ashlesha 👋</h1>
      {/* Short subtitle */}
      <p className="text-lg mb-6">Full-stack developer & crochet artist</p>
      {/* Call-to-action button */}
      <Button>Download Resume</Button>
    </section>
  );
}
