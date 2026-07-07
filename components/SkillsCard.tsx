interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({
  title,
  skills,
}: SkillsCardProps) {
  return (
    <section className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <ul className="list-disc list-inside space-y-2">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}