"use client";
import Section from "./Section";

const skills = [
  { title: "Languages", items: "Python, R, C, SQL" },
  { 
    title: "Machine Learning and AI", 
    items: "TensorFlow, PyTorch, Scikit-Learn, NumPy, Matplotlib, Pandas, NLP, DNNs, CNNs" 
  },
  { 
    title: "Embedded Systems", 
    items: "Jetson nano, Raspberry Pi, ESP8266, Arduino Uno" 
  },
  { 
    title: "Containerization, MLOps and Cloud", 
    items: "Docker, Kubeflow, MLflow, Prefect, Apache Airflow, Evidently AI" 
  },
];

export default function Skills() {
  return (
    <Section>
      <div id="skills" className="py-24 border-t border-gray-800">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 border border-gray-800 rounded-xl
                         hover:border-blue-400 hover:scale-[1.02]
                         transition"
            >
              <h3 className="text-white font-medium mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
