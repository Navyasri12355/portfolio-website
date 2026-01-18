import Section from "./Section";

export default function About() {
  return (
    <Section>
      <div id="about" className="py-24 border-t border-gray-800">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-6 text-gray-400 max-w-3xl leading-relaxed">
          I am a third-year AI/ML engineering student with experience building end-to-end systems in accessibility, ethical AI, applied machine learning, computer vision, federated learning, and transfer learning. I seek opportunities to apply my skills to real-world challenges and contribute to the development of responsible AI for societal impact.
        </p>
      </div>
    </Section>
  );
}
