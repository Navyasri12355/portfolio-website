export default function Experience() {
  const workExperience = [
    {
      title: "Internship in Anthrasync Solutions Private Limited",
      duration: "3 months",
      field: "AI Research and Development",
      description: "Developed core AI agents for the company's agentic AI platform, including a Translation Agent, Summarizer Agent, and Internet Resource Finder Agent - driving improvements in multilingual communication, content summarization, and intelligent information retrieval."
    },
    {
      title: "Internship in Xtelify Limited (Airtel Digital)",
      duration: "6 months",
      field: "AI Research and Development",
      description: "Currently developing an agentic AI system for autonomous telecom capacity management, using a multi-agent framework (predictive, optimization, anomaly-detection, and orchestrator agents) to enable real-time, adaptive, and predictive resource allocation."
    }
  ];

  const achievements = [
    "Advanced to the semi-finals in the DSU TechFlix Hackathon",
    "Participated in RVCE Gen AI Hackathon",
    "Participated in Smart India Hackathon"
  ];

  return (
    <section className="py-24 border-t border-gray-800">
      <h2 className="text-2xl font-semibold mb-8">Experience & Achievements</h2>

      {/* Work Experience Section */}
      <div className="mb-12">
        <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
          💼 Work Experience
        </h3>
        
        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-400 pl-6 pb-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <h4 className="text-lg font-medium text-blue-400 mb-2">
                  {exp.title}
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Time Period:</span>
                    <p className="text-gray-300">{exp.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Field of work:</span>
                    <p className="text-gray-300">{exp.field}</p>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Description:</span>
                  <p className="text-gray-300 mt-1 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
          🏆 Achievements and Hackathons
        </h3>
        
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-400 flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
