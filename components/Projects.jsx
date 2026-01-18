"use client";
import { useState } from "react";
import Section from "./Section";

const projects = [
  { 
    title: "Ayurvedic Clinical Bridge", 
    desc: "An AI-powered system that connects allopathic medicine with Ayurvedic treatments, offering medicine mapping, disease-based recommendations, and safety analysis for informed integrative care.",
    githubUrl: "https://github.com/Navyasri12355/ayurvedic-clinical-bridge",
    demoVideoUrl: "https://www.youtube.com/embed/Lnyxag6LYPA", // Converted to embed format
    details: {
      technologies: ["React", "Typescript", "Python", "FastAPI", "SQLite"],
      features: [
        "Medicine mapping between allopathic and Ayurvedic treatments",
        "Disease-based treatment recommendations",
        "Safety analysis and herb-drug interaction warnings",
        "Prescription analysis with entity extraction",
        "Role-based authentication for practitioners and general users",
        "Clinical knowledge system with comprehensive Ayurvedic protocols",
        "Symptom-based treatment search functionality"
      ],
      challenges: "Procuring authentic and reliable Ayurvedic data sources from traditional texts, verified clinical studies, and standardized herbal formulations while ensuring data quality, accuracy, and clinical relevance for modern healthcare applications.",
      outcome: "Successfully created a comprehensive clinical decision-support system that bridges two medical systems, providing practitioners with detailed Ayurvedic alternatives, safety warnings, and evidence-based treatment recommendations for informed integrative healthcare decisions."
    }
  },
  { 
    title: "MSME AI Assistant", 
    desc: "An AI-powered business management platform for small enterprises with financial tracking, marketing insights, and a conversational assistant.",
    githubUrl: "https://github.com/Navyasri12355/msme-ai-assistant/",
    demoVideoUrl: "https://youtube.com/embed/DQE6XZxOa84", // Uncomment and replace with real video ID
    "details": {
    "technologies": [
      "Node.js",
      "TypeScript", 
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Express.js",
      "AI/ML APIs",
      "JWT Authentication",
      "AES Encryption"
    ],
    "features": [
      "AI-powered conversational business advisor with multi-model fallback system that provides personalized recommendations for cost-cutting, growth strategies, and financial analysis based on business context and transaction history",
      "Comprehensive financial management system with encrypted transaction tracking, real-time analytics, profit/loss calculations, cash flow insights, and batch CSV upload functionality with INR currency support",
      "Integrated customer and product management with inventory tracking, low-stock alerts, customer analytics, search/filter capabilities, and performance metrics dashboard",
      "Interactive business intelligence dashboard with real-time metrics, automated insights generation, trend analysis, and predictive forecasting for revenue and business performance",
      "Enterprise-grade security architecture with AES-256-GCM data encryption, JWT-based authentication, input validation using Zod schemas, rate limiting, and secure multi-tenant data isolation"
    ],
    "challenges": "Key technical challenges included implementing a robust AI fallback system to handle OpenRouter API limitations and model availability issues, designing secure encryption for sensitive financial data while maintaining performance, creating a scalable multi-tenant architecture with proper data isolation, handling complex business logic for financial calculations and analytics across different time periods, implementing real-time dashboard updates with efficient caching strategies using Redis, managing database relationships between users, transactions, customers, and products while ensuring data consistency, and developing a responsive frontend that works seamlessly across different devices and screen sizes.",
    "outcome": "Successfully delivered a production-ready MSME business management platform that serves as a comprehensive solution for small and medium enterprises. The system provides reliable AI-powered business advice through intelligent fallback mechanisms, enabling 99.9% uptime for the advisory feature. Implemented secure financial data management with enterprise-grade encryption, supporting unlimited transaction tracking with real-time analytics. The platform includes complete customer and product management capabilities, helping businesses organize and analyze their operations effectively. The interactive dashboard provides actionable business insights and automated performance analysis, enabling data-driven decision making. The system demonstrates scalability with multi-tenant architecture, robust error handling, and comprehensive API documentation, making it suitable for deployment across multiple MSME businesses while maintaining security and performance standards."
  }
  },
  { 
    title: "Agentic Emergency Triage System",
desc: "An AI-driven agentic triage system that assists in medical decision-making by classifying patient risk levels and recommending appropriate care pathways using explainable and ethical AI principles.",
githubUrl: "https://github.com/Navyasri12355/agentic-triage-system",
details: {
  technologies: [
    "Python",
    "FastAPI",
    "Machine Learning",
    "Rule-Based Systems",
    "Explainable AI (XAI)",
    "MLflow"
  ],
  features: [
    "Automated patient triage using AI agents to assess severity and risk levels",
    "Hybrid decision-making combining rule-based medical logic with ML predictions",
    "Explainable triage outputs with reasoning for each risk classification"
  ],
  challenges: 
    "Designing a reliable agentic workflow that balances clinical rules with probabilistic ML outputs while maintaining transparency, fairness, and safety in medical decision-making.",
  outcome: 
    "The system demonstrates effective and interpretable patient triage, enabling faster and more consistent risk assessment. It serves as a foundation for ethical AI-assisted clinical decision support and highlights the potential of agent-based architectures in healthcare."
    }
  },
  { 
    title: "Crop Demand Forecasting Model",
desc: "A machine-learning-powered web application that predicts crop yield and market price for selected crops, with SMS notifications to support farmers’ decision-making.",
githubUrl: "https://github.com/Navyasri12355/Crop_Demand_Prediction",
details: {
  technologies: [
    "Python",
    "Flask",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Fast2SMS API",
    "HTML (Jinja2 templating)"
  ],
  features: [
    "Predicts crop yield (quintals/hectare) using a trained ML model",
    "Forecasts expected market price (INR) for the predicted yield",
    "Sends prediction results via SMS to farmers using Fast2SMS API"
  ],
  challenges: 
    "Integrating real-time SMS notifications into the prediction workflow and ensuring robust handling of user input while training a reliable ML model with limited agricultural data.",
  outcome: 
    "Delivered a functional Flask app that enables users to input crop details and receive actionable yield and price predictions, with the added benefit of SMS alerts to improve accessibility and farmer engagement."
    }
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section>
      <div id="projects" className="py-24 border-t border-gray-800">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl
                         hover:border-blue-400 hover:-translate-y-1
                         transition group overflow-hidden"
            >
              {/* Demo Video Section */}
              {p.demoVideoUrl && p.demoVideoUrl.includes('your-video-id') ? (
                // Placeholder for when no real video URL is provided
                <div className="relative w-full h-0 pb-[56.25%] bg-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-sm">Demo Video Coming Soon</p>
                  </div>
                </div>
              ) : p.demoVideoUrl ? (
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src={p.demoVideoUrl}
                    title={`${p.title} Demo`}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : null}
              
              <div className="p-6">
                <h3 className="text-lg font-medium group-hover:text-blue-400 flex items-center gap-2">
                  {p.title}
                  {p.demoVideoUrl && (
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                      📹 Demo
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-gray-400">{p.desc}</p>

                <button
                  onClick={() => openModal(p)}
                  className="mt-4 text-sm text-gray-500 hover:text-blue-400 
                             transition-colors cursor-pointer flex items-center gap-1"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedProject.desc}</p>

                {/* Demo Video Section */}
                {selectedProject.demoVideoUrl && (
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-3">Demo Video</h4>
                    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                      <iframe
                        src={selectedProject.demoVideoUrl}
                        title={`${selectedProject.title} Demo`}
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 
                                     rounded-full text-sm border border-blue-600 border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Challenges</h4>
                    <p className="text-gray-300">{selectedProject.details.challenges}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Outcome</h4>
                    <p className="text-gray-300">{selectedProject.details.outcome}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 
                                 hover:bg-gray-700 text-white rounded-lg transition-colors
                                 border border-gray-700 hover:border-gray-600"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}