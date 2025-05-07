import { ProjectCard } from "@/components/ProjectCard"; // Import reusable card

// List of project details
const projects = [
  {
    title: "Crochet E-Commerce",
    description: "An online store for my handmade crochet items built with Next.js, Tailwind, and Supabase.",
    link: "#", // Replace with real link
  },
  {
    title: "Waitlist Landing Page",
    description: "A pre-launch signup page with login & email collection for my store.",
    link: "#", // Replace with real link
  },
];

// Projects page
export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12">
      {/* Page title */}
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      {/* Render each project using the ProjectCard component */}
      <div className="grid gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
