import { Code, ShieldCheck, FileText, Zap, Gauge, GitBranch, BarChart3, Lock, Flame, Sparkles, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code size={32} />,
      title: "Smart Code Review",
      desc: "Find bugs, anti-patterns, and best-practice violations instantly with AI-powered analysis.",
      details: "Get intelligent insights on your code quality with detailed explanations of each issue found."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Security Focused",
      desc: "Detect insecure logic, unsafe patterns, and vulnerabilities in your codebase.",
      details: "Protect your application with comprehensive security scanning and vulnerability detection."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast & Lightweight",
      desc: "Powered by Gemini Flash for quick and reliable feedback without heavy overhead.",
      details: "Get instant results with minimal processing time and optimal performance."
    },
    {
      icon: <FileText size={32} />,
      title: "Clean Reports",
      desc: "Structured feedback with severity levels and explanations for every issue.",
      details: "Easy-to-read reports that prioritize the most critical issues first."
    },
    {
      icon: <Gauge size={32} />,
      title: "Performance Metrics",
      desc: "Track code quality metrics and performance improvements over time.",
      details: "Monitor your progress with comprehensive analytics and trend tracking."
    },
    {
      icon: <GitBranch size={32} />,
      title: "Multi-Language Support",
      desc: "Analyze code in JavaScript, Python, Java, and many more languages.",
      details: "Support for all major programming languages and frameworks."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Detailed Analytics",
      desc: "Visualize code quality metrics and trends with interactive dashboards.",
      details: "Better understand your codebase with visual analytics and reports."
    },
    {
      icon: <Lock size={32} />,
      title: "Privacy & Security",
      desc: "Your code is processed securely with enterprise-grade encryption.",
      details: "Complete privacy protection with no code storage or sharing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative px-6 pt-12 pb-8 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            title="Back to Home"
          >
            <ArrowLeft size={24} className="text-slate-300" />
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-slate-300 mt-2">Everything you need for professional code review and development</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:bg-slate-800/60 h-full">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-3 leading-relaxed">{feature.desc}</p>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4 mt-4">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-6 py-16 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Ready to get started?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start reviewing code with SmartDev today
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Experience the power of AI-driven code review and take your development to the next level.
          </p>
          
          <button 
            onClick={() => navigate("/code-review")}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-200 hover:scale-105"
          >
            Start Code Review
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-8 border-t border-slate-800/50 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} SmartDev • Built for Developers 🚀
      </footer>
    </div>
  );
}
