import { Code, ShieldCheck, FileText, Zap, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 mb-8">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm font-medium text-blue-300">Powered by Gemini AI</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          AI-Powered <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Code Review</span> & Developer Tools
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Review code, detect issues, and improve quality using an intelligent, developer-focused AI reviewer built for real-world projects.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-16">
          <button
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            onClick={()=>navigate("/code-review")}
          >
            Review Code
            <ArrowRight size={18} />
          </button>

          <button
            className="px-8 py-3.5 rounded-lg border border-slate-600 hover:border-cyan-400/50 hover:bg-slate-900/50 text-white font-semibold transition-all duration-200 hover:scale-105"
            onClick={()=>navigate("/features")}
          >
            View Features
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Powerful Features for Modern Development
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<Code size={28} />}
            title="Smart Code Review"
            desc="Find bugs, anti-patterns, and best-practice violations instantly."
          />
          <Feature
            icon={<ShieldCheck size={28} />}
            title="Security Focused"
            desc="Detect insecure logic, unsafe patterns, and vulnerabilities."
          />
          <Feature
            icon={<Zap size={28} />}
            title="Fast & Lightweight"
            desc="Powered by Gemini Flash for quick and reliable feedback."
          />
          <Feature
            icon={<FileText size={28} />}
            title="Clean Reports"
            desc="Structured feedback with severity levels and explanations."
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative px-6 py-20 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built With</h2>
          <p className="text-slate-300 mb-12 text-lg">
            Modern technologies for speed, scalability, and clean UX.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Tailwind CSS", "Node.js", "Gemini API", "Express"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 text-blue-300 font-medium hover:border-blue-400/60 hover:bg-blue-500/20 transition-all duration-200"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-8 border-t border-slate-800/50 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} SmartDev • Built for Developers 🚀
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:bg-slate-800/60">
      <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
