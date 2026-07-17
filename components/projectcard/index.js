export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}
