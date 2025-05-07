import { ProjectCard } from "@/components/ProjectCard"; // Import reusable card

// List of project details
const projects = [
  {
    title: "21Bubbles",
    description: "Software development agency offering efficient MVP development, focusing on customer-centric solutions.",
    link: "https://21bubbles.com",
  },
  {
    title: "Brotein Bistro",
    description: "SaaS platform for cafe subscriptions with meal tracking, user plans, and admin dashboard.",
    link: "https://broteinbistro.com",
  },
  {
    title: "Auto capture photo by detecting smile",
    description: "Developed an Auto-Capture photo system using smile detection technology.",
    link: "#", // Replace with actual project link if available
  },
];

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
