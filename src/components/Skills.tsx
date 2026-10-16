import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Layers, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { portfolioData, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Web Development',
    'Programming',
    'Data Analysis & Visualization',
    'Databases & Data Handling'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'HTML':
      case 'CSS':
        return <Code className="w-5 h-5 text-purple-400" />;
      case 'Python':
        return <Terminal className="w-5 h-5 text-purple-400" />;
      case 'NumPy':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Pandas':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Matplotlib':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case 'SQL':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'CSV File Handling':
        return <FileSpreadsheet className="w-5 h-5 text-purple-400" />;
      default:
        return <Code className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative tech-grid-pattern border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Currently Learning and Exploring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3FA]">
              My current toolkit.
            </h2>
          </div>
          <p className="text-sm text-[#AAA3B8] max-w-md">
            Grounded in programming logic, data exploration, and core web fundamentals. No misleading progress bars — only real concepts I actively practice and build with.
          </p>
        </div>

        {/* Category Filter Tabs (Zero-pill, clean segmented controls with button elements) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#100D18] border border-purple-500/20 rounded-xl overflow-x-auto mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/40 shadow-sm'
                    : 'text-[#AAA3B8] hover:text-[#F5F3FA] hover:bg-[#15111F]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl bg-[#100D18] border border-purple-500/20 hover:border-purple-400/50 p-5 transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/30 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/25 text-purple-400 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name & Description */}
                <h3 className="text-lg font-bold text-[#F5F3FA] group-hover:text-purple-200 transition-colors mb-1.5">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#AAA3B8] leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Topics List with clean typographic separation */}
              <div className="pt-3 border-t border-purple-500/15">
                <p className="text-[10px] font-mono uppercase tracking-wider text-purple-400/80 mb-2">
                  Key Topics:
                </p>
                <div className="space-y-1">
                  {skill.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#AAA3B8]">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth & Roadmap Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#15111F]/60 border border-purple-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-[#F5F3FA] mb-1">
              Active Growth Horizon
            </h4>
            <p className="text-xs text-[#AAA3B8]">
              Expanding from Python logic and flat-file data handling into full-stack web architectures, APIs, and modern front-end frameworks.
            </p>
          </div>
          <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-500/25 shrink-0">
            Roadmap: React + Full-Stack
          </span>
        </div>
      </div>
    </section>
  );
};
