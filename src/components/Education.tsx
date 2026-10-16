import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Binary, 
  Atom, 
  FlaskConical, 
  Dna, 
  Languages,
  Calendar,
  Sparkles
} from 'lucide-react';
import { portfolioData, EducationSubject } from '../data/portfolioData';

export const Education: React.FC = () => {
  const getSubjectIcon = (name: string) => {
    switch (name) {
      case 'Informatics Practices':
        return <Binary className="w-4 h-4 text-purple-400" />;
      case 'Physics':
        return <Atom className="w-4 h-4 text-purple-400" />;
      case 'Chemistry':
        return <FlaskConical className="w-4 h-4 text-purple-400" />;
      case 'Biology':
        return <Dna className="w-4 h-4 text-purple-400" />;
      case 'English':
        return <Languages className="w-4 h-4 text-purple-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="education" className="py-20 relative tech-grid-pattern border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3FA]">
            My learning journey.
          </h2>
          <p className="text-sm text-[#AAA3B8] max-w-xl mt-2 leading-relaxed">
            Building a strong foundation through scientific inquiry and computer science studies at Carmel Convent School.
          </p>
        </div>

        {/* Main Connected Education Card */}
        <div className="relative rounded-2xl bg-[#100D18] border border-purple-500/25 p-6 sm:p-8 shadow-xl shadow-purple-950/20 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Institution Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-purple-500/15 gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/25 text-purple-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3FA]">
                    {portfolioData.education.institution}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#AAA3B8] mt-1">
                  <span className="flex items-center gap-1 text-purple-300">
                    <MapPin className="w-3.5 h-3.5" />
                    {portfolioData.education.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-purple-300/80">Senior Secondary</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15111F] border border-purple-500/20 text-purple-300">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>Current Student</span>
              </span>
            </div>
          </div>

          {/* Academic Journey Narrative */}
          <div className="py-6 border-b border-purple-500/15">
            <p className="text-sm sm:text-base text-[#AAA3B8] leading-relaxed">
              {portfolioData.education.narrative}
            </p>
          </div>

          {/* Academic Subjects Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Curriculum & Subject Rigor:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.education.subjects.map((subj: EducationSubject, index: number) => {
                const isSpecial = subj.name === 'Informatics Practices';
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-200 border ${
                      isSpecial
                        ? 'bg-purple-950/30 border-purple-500/40 shadow-sm shadow-purple-950/40'
                        : 'bg-[#15111F]/60 border-purple-500/15 hover:border-purple-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#100D18] border border-purple-500/20 shrink-0">
                        {getSubjectIcon(subj.name)}
                      </div>
                      <h5 className={`text-sm font-bold ${isSpecial ? 'text-purple-200' : 'text-[#F5F3FA]'}`}>
                        {subj.name}
                      </h5>
                    </div>
                    <p className="text-xs text-[#AAA3B8] leading-relaxed">
                      {subj.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Educational Note */}
          <div className="mt-8 pt-5 border-t border-purple-500/15 flex flex-wrap items-center justify-between text-xs text-[#AAA3B8] gap-3">
            <span>Focus Area: Sciences (PCB) + Informatics Practices</span>
            <span className="font-mono text-purple-400">Carmel Convent School, Faridabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};
