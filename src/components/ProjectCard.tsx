import Link from "next/link"; // Used for clickable links

// Reusable card to display each project
export function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3> {/* Project name */}
      <p className="text-sm mb-4">{description}</p> {/* Project summary */}
      <Link href={link} className="text-blue-600 underline">
        View Project
      </Link> {/* Link to open the project */}
    </div>
  );
}
