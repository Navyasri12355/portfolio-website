"use client";
import { useState } from "react";
import Section from "./Section";

const projects = [
  {
    title: "AI Token Optimizer",
    desc: "A cloud-native system for predicting LLM token usage, estimating request cost, and optimizing prompts to reduce token consumption, deployed across Azure with a Spark/Databricks training pipeline and real-time observability.",
    hasDemo: true,
    githubUrl: "https://github.com/Navyasri12355/ai-token-optimizer/tree/bdt-integration",
    demoVideoUrl: "https://www.youtube.com/embed/9WUnEu_jdLo?si=RFRXKXB3j6H6H2Sv",
    details: {
      technologies: ["Python", "FastAPI", "React + Vite", "Apache Spark (Databricks)", "Azure Blob Storage", "Azure Container Apps", "Azure Container Registry", "Elasticsearch + Kibana", "Streamlit (legacy)"],
      features: [
        "Token prediction engine estimating input, output, and total token usage for a given prompt across 15 LLMs spanning 3 providers",
        "Prompt optimizer that reduces unnecessary wording while preserving intent, achieving 20-26% token reduction",
        "Spark-based preprocessing and model training pipeline on Azure Databricks, writing raw data, processed parquet, and trained model artifacts to Azure Blob Storage",
        "FastAPI backend on Azure Container Apps that loads trained model artifacts from Blob Storage at runtime into a local cache for low-latency inference",
        "Real-time observability via Elasticsearch/Kibana dashboards tracking inference metrics, training runs, pipeline throughput, and cumulative cost savings",
      ],
      challenges: "Decoupling the training pipeline from the serving layer so the FastAPI backend could load Spark-trained model artifacts from Azure Blob Storage at runtime without redeploying the API. Also designing a monitoring layer that captured real (not synthetic) metrics across three distinct stages - inference, training, and data processing - into separate Elasticsearch data views for clean Kibana visualization.",
      outcome: "Achieved 20-26% token reduction and R² up to 0.994 across supported models, with a production-style deployment spanning Azure Container Apps, Databricks, Blob Storage, and an ELK monitoring stack - reducing prompt costs while keeping full visibility into model and pipeline performance.",
    },
  },
  {
    title: "AI-Powered Market Intelligence Platform",
    desc: "A multi-agent AI platform delivering real-time NSE/BSE market intelligence for Indian retail investors, featuring signal discovery, chart analysis, portfolio diagnostics, and a streaming market chat interface.",
    hasDemo: true,
    githubUrl: "https://github.com/Navyasri12355/marketmind",
    demoVideoUrl: "https://www.youtube.com/embed/Q3fhNBZ_56s?si=zDP-Sks1UXzwspRN",
    details: {
      technologies: ["Python", "FastAPI", "React 18 + Vite", "Groq API (Llama 3.3 70B)", "yfinance (NSE/BSE Data)", "Server-Sent Events (SSE)", "Pandas", "Recharts", "Framer Motion"],
      features: [
        "Opportunity Radar agent that scans bulk/block deals, insider trades, and volume anomalies, ranking signals with confidence scores via Llama 3.3 70B",
        "Chart Intelligence agent computing RSI, MACD, Bollinger Bands, and Stochastic indicators with AI-narrated pattern detection streamed in real-time",
        "Streaming Market Chat with multi-turn memory, live data injection, and portfolio-aware context powered by Llama 3.3 70B via Groq",
        "Portfolio X-Ray for real-time P&L tracking, sector allocation pie chart, and performance breakdown - no LLM, pure data compute",
        "Market Dashboard with live NSE/BSE index snapshots, top movers, and a market brief aggregated via yfinance",
      ],
      challenges: "Building custom multi-agent orchestration without LangChain - each agent shares a single Groq LLM client with primary/fallback model switching. Synchronizing SSE streams from parallel agents with the React frontend while maintaining low latency, and gracefully falling back to mock data when external APIs are unavailable.",
      outcome: "Delivered a unified, institutional-grade research platform for India's 14 crore+ retail demat account holders - reducing signal detection from hours to real-time, surfacing 8-15 actionable alerts daily, and enabling natural-language portfolio analysis through a streaming AI chat interface.",
    },
  },
  {
    title: "MSME AI Assistant",
    desc: "An AI-powered business management platform for small enterprises with financial tracking, marketing insights, and a conversational assistant.",
    hasDemo: true,
    githubUrl: "https://github.com/Navyasri12355/msme-ai-assistant/",
    demoVideoUrl: "https://youtube.com/embed/DQE6XZxOa84",
    details: {
      technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "Redis", "Docker", "Express.js", "AI/ML APIs", "JWT Authentication", "AES Encryption"],
      features: [
        "AI-powered conversational business advisor with multi-model fallback system providing personalized recommendations for cost-cutting, growth strategies, and financial analysis",
        "Comprehensive financial management system with encrypted transaction tracking, real-time analytics, profit/loss calculations, cash flow insights, and batch CSV upload",
        "Integrated customer and product management with inventory tracking, low-stock alerts, customer analytics, and search/filter capabilities",
        "Interactive business intelligence dashboard with real-time metrics, automated insights generation, trend analysis, and predictive forecasting",
        "Enterprise-grade security architecture with AES-256-GCM data encryption, JWT-based authentication, input validation using Zod schemas, and rate limiting",
      ],
      challenges: "Implementing a robust AI fallback system to handle OpenRouter API limitations, designing secure encryption for sensitive financial data while maintaining performance, and creating a scalable multi-tenant architecture with proper data isolation.",
      outcome: "Delivered a production-ready MSME business management platform serving as a comprehensive solution for small and medium enterprises, with 99.9% uptime for the advisory feature and enterprise-grade encryption supporting unlimited transaction tracking.",
    },
  },
  {
    title: "Agentic Emergency Triage System",
    desc: "An AI-driven agentic triage system that assists in medical decision-making by classifying patient risk levels and recommending appropriate care pathways using explainable and ethical AI principles.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/agentic-triage-system",
    details: {
      technologies: ["Python", "FastAPI", "Machine Learning", "Rule-Based Systems", "Explainable AI (XAI)", "MLflow"],
      features: [
        "Automated patient triage using AI agents to assess severity and risk levels",
        "Hybrid decision-making combining rule-based medical logic with ML predictions",
        "Explainable triage outputs with reasoning for each risk classification",
      ],
      challenges: "Designing a reliable agentic workflow that balances clinical rules with probabilistic ML outputs while maintaining transparency, fairness, and safety in medical decision-making.",
      outcome: "The system demonstrates effective and interpretable patient triage, enabling faster and more consistent risk assessment. It serves as a foundation for ethical AI-assisted clinical decision support.",
    },
  },
  {
    title: "Federated Learning MLOps Platform",
    desc: "A scalable decentralized machine learning system built with Python that enables collaborative model training across distributed clients while maintaining data privacy and providing robust MLOps orchestration.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/fl_with_mlops",
    details: {
      technologies: ["Python", "TensorFlow / Keras", "Flower (Federated Learning framework)", "MLflow (Experiment Tracking)", "Prefect (Workflow Orchestration)", "React & Vite (Frontend Dashboard)", "Supabase (Authentication & Database Management)"],
      features: [
        "Distributed Federated Learning architecture powered by the Flower framework, ensuring local data privacy while iteratively improving a global shared model",
        "End-to-end MLOps automation using Prefect for workflow scheduling and MLflow for granular tracking of metrics, machine performance, and model divergence",
        "Comprehensive management dashboard built with React and Vite, featuring Supabase authentication, real-time training monitoring, and automated performance reporting",
      ],
      challenges: "Mitigating model weight divergence across heterogeneous data sources and orchestrating complex asynchronous communications between the central server and multiple decentralized clients.",
      outcome: "Created a production-grade Federated Learning ecosystem that bridges secure, decentralized training with enterprise MLOps standards for scalable and privacy-preserving AI development.",
    },
  },
  {
    title: "Fingerprint Detector and Blocker",
    desc: "A Chrome extension that detects and blocks browser fingerprinting attempts to protect your privacy online.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/fingerprint-defender",
    details: {
      technologies: ["JavaScript (ES6+)", "Chrome Extension Manifest V3", "Content Scripts (MAIN/ISOLATED worlds)", "Chrome APIs (scripting, tabs, storage)", "HTML/CSS", "Service Workers"],
      features: [
        "Real-time detection of 8+ fingerprinting techniques (Canvas, WebGL, Audio, Hardware, etc.)",
        "Active blocking with spoofed values to prevent accurate fingerprinting",
        "Toggle-based protection control with persistent settings",
        "Clean popup interface showing detection status and blocking controls",
        "Comprehensive test suite for validating protection effectiveness",
      ],
      challenges: "Implementing early-stage JavaScript API hooking to intercept fingerprinting before page scripts execute, while navigating Chrome's Content Security Policy restrictions and ensuring compatibility with Manifest V3's isolated world architecture.",
      outcome: "Successfully deployed a privacy-focused extension that provides 99% protection against client-side fingerprinting techniques, with seamless user experience and zero configuration required.",
    },
  },
  {
    title: "VLM Hallucination Benchmark",
    desc: "A structured benchmark for evaluating hallucination behavior across Vision-Language Models, covering 7 hallucination categories with fine-grained diagnostic breakdowns grounded in 32 research papers.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/vlm-hallucination-benchmark",
    details: {
      technologies: [
        "Python",
        "MS-COCO val2017",
        "Visual Genome",
        "LLaVA-1.5 (7B)",
        "InstructBLIP (7B)",
        "GPT-4V / Gemini Vision",
        "Kaggle / Colab (T4 GPU)",
        "4-bit Quantization",
      ],
      features: [
        "Implementing a 7-category hallucination taxonomy (Object Existence, Attribute, Relational, Counting, Existence Negation, Cross-modal Consistency, Bias & Interference) grounded in 32 papers",
        "Developing fine-grained subcategory scoring — e.g. H1a random, H1b popular, H1c adversarial — to enable per-failure-mode diagnostics across models",
        "Utilizing adversarial sampling via the COCO co-occurrence matrix to generate semantically plausible absent-object probes (e.g. microwave/oven, keyboard/mouse)",
        "Defining H7 Bias & Interference — a novel category covering language prior overrides, OCR bias, and text/image interference missing from existing benchmarks",
        "Building a unified dataset format with per-question metadata (category, subcategory, difficulty, sampling strategy) targeting 2,000–5,000 QA pairs across COCO + Visual Genome",
      ],
      challenges: "Existing benchmarks like POPE and CHAIR cover only one or two hallucination types in isolation, making cross-model comparison across failure modes difficult. The core challenge lies in designing a consistent image base and question generation pipeline that spans all 7 categories while ensuring adversarial probes remain visually plausible and category boundaries stay well-defined.",
      outcome: "Developing a more comprehensive evaluation framework than any single prior benchmark — the only one to cover all 7 hallucination categories simultaneously. With the taxonomy and dataset generation pipeline nearing completion, the project is moving into model inference stages for LLaVA-1.5, InstructBLIP, GPT-4V, and Gemini Vision.",
    },
  },
  {
    title: "Clinical Evidence Copilot",
    desc: "An agentic AI system for clinicians that provided real-time, evidence-backed medical insights by continuously ingesting and analyzing live research, clinical trials, and treatment guidelines.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/iitm-hack",
    details: {
      technologies: [
        "Python",
        "FastAPI",
        "Pathway (Streaming Engine)",
        "OpenAI API",
        "Docker",
        "WebSockets",
      ],
      features: [
        "Implemented a real-time data ingestion layer using the Pathway framework to process streaming medical literature and document updates",
        "Developed an agentic reasoning engine designed to handle multi-step medical queries with high precision and evidence grounding",
        "Built a microservices-based architecture featuring FastAPI REST endpoints and WebSocket handlers for low-latency clinical communication",
        "Integrated HIPAA-compliant logging and data validation models to ensure the system met healthcare security standards",
        "Created a robust testing suite including property-based tests and coverage reporting to ensure reliability in a clinical decision-support context",
      ],
      challenges: "The primary technical hurdle was managing the real-time synchronization of large-scale medical datasets while maintaining low-latency responses. Additionally, ensuring cross-platform compatibility for the Pathway streaming engine required a sophisticated Docker and WSL2 deployment strategy.",
      outcome: "Built a production-ready medical intelligence tool that bridged the gap between static research and active clinical practice. The project successfully demonstrated a functional ingestion and reasoning layer capable of providing high-confidence medical insights.",
    },
  },
  {
    title: "Ayurvedic Clinical Bridge",
    desc: "An AI-powered system that connects allopathic medicine with Ayurvedic treatments, offering medicine mapping, disease-based recommendations, and safety analysis for informed integrative care.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/ayurvedic-clinical-bridge",
    details: {
      technologies: ["React", "TypeScript", "Python", "FastAPI", "SQLite"],
      features: [
        "Medicine mapping between allopathic and Ayurvedic treatments",
        "Disease-based treatment recommendations",
        "Safety analysis and herb-drug interaction warnings",
        "Prescription analysis with entity extraction",
        "Role-based authentication for practitioners and general users",
        "Clinical knowledge system with comprehensive Ayurvedic protocols",
        "Symptom-based treatment search functionality",
      ],
      challenges: "Procuring authentic and reliable Ayurvedic data sources from traditional texts, verified clinical studies, and standardized herbal formulations while ensuring data quality, accuracy, and clinical relevance for modern healthcare applications.",
      outcome: "Successfully created a comprehensive clinical decision-support system that bridges two medical systems, providing practitioners with detailed Ayurvedic alternatives, safety warnings, and evidence-based treatment recommendations for informed integrative healthcare decisions.",
    },
  },
  {
    title: "Voice-Activated System",
    desc: "A powerful hands-free computer control system built with Python that enables users to operate their Windows OS through voice commands, featuring both internet-reliant and fully offline modes.",
    hasDemo: false,
    githubUrl: "https://github.com/Navyasri12355/Voice-Activated-System",
    details: {
      technologies: ["Python", "Spacy (NLP)", "Vosk (Offline Speech Recognition)", "Google Web Speech API", "OS Module (Windows Automation)", "SpeechRecognition Library"],
      features: [
        "Advanced dual-mode speech recognition: Online (Google Web Speech API) for high accuracy and Offline (Vosk) for privacy",
        "Custom NLP Engine powered by Spacy with a trained TextCategorizer and NER to handle command variations robustly",
        "Full desktop automation including application control (open/close), media playback, volume adjustment, and system power states (lock/sleep/shutdown)",
      ],
      challenges: "Developing a custom NLP model to accurately interpret diverse user commands and integrating offline speech recognition (Vosk) to ensure functionality without an internet connection.",
      outcome: "Created a comprehensive voice assistant that enhances computer accessibility, allowing users to navigate the web and control system functions entirely hands-free.",
    },
  },
];

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 200, padding: "1.5rem",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "var(--glass-blur)",
          border: "1px solid var(--glass-border)",
          maxWidth: "650px", width: "100%",
          maxHeight: "85vh", overflowY: "auto",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "var(--glass-shadow)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text)", flex: 1, paddingRight: "1rem", lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--text-dim)", fontSize: "1.5rem", cursor: "pointer", lineHeight: 1, flexShrink: 0 }}>×</button>
        </div>

        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.5rem", fontWeight: 400 }}>{project.desc}</p>

        {/* Demo */}
        {project.demoVideoUrl && (
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600 }}>Demo Video</div>
            <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: "4px", overflow: "hidden", background: "var(--surface2)" }}>
              <iframe src={project.demoVideoUrl} title={project.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        )}

        {/* Technologies */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600 }}>Technologies</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.details.technologies.map(t => (
              <span key={t} style={{ padding: "0.35rem 0.75rem", border: "1px solid var(--border)", borderRadius: "4px", fontFamily: "var(--cute)", fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600 }}>Key Features</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {project.details.features.map((f, i) => (
              <li key={i} style={{ fontSize: "0.9rem", color: "var(--text-muted)", display: "flex", gap: "0.75rem", lineHeight: 1.75, fontWeight: 400 }}>
                <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.4rem" }}>◆</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600 }}>Challenges</div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.85, fontWeight: 400 }}>{project.details.challenges}</p>
        </div>

        {/* Outcome */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 600 }}>Outcome</div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.85, fontWeight: 400 }}>{project.details.outcome}</p>
        </div>

        {/* GitHub */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", fontWeight: 600 }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Section id="projects" style={{
        background: "var(--gradient-surface)",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--cute)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}>
            03 — Projects
          </div>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
          }}>
            Selected<br /><em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Work</em>
          </h2>

          {/* Grid with rounded cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}>
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelected(p)}
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                  padding: "2rem",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  borderRadius: "12px",
                  border: "1px solid var(--glass-border)",
                  boxShadow: "var(--glass-shadow)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--accent-dim)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(139, 92, 246, 0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--glass-bg)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                }}
              >
                {p.hasDemo && (
                  <span style={{
                    position: "absolute", top: "1.5rem", right: "1.5rem",
                    fontFamily: "var(--cute)", fontSize: "0.6rem",
                    letterSpacing: "0.08em", color: "var(--white)",
                    background: "var(--accent)",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "3px",
                    fontWeight: 600,
                  }}>▶ Demo</span>
                )}
                <div style={{ fontFamily: "var(--cute)", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: "1.25rem", fontWeight: 600 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem", fontWeight: 400 }}>
                  {p.desc}
                </p>
                <span style={{ fontFamily: "var(--cute)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
                  View Details →
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}