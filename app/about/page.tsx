import SkillsCard from "../../components/SkillsCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-700 mb-8">
        Hello! I'm Maisela Manhla Madise, a Software Development student at
        BYU–Idaho. I enjoy building responsive websites and web applications
        using modern technologies such as React, Next.js, TypeScript, and
        JavaScript.
      </p>

      <SkillsCard
        title="Technical Skills"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "Git & GitHub",
        ]}
      />
    </main>
  );
}