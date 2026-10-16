import React, { useState } from 'react';
import { X, FileText, Download, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onContactClick }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadSummary = () => {
    const resumeText = `================================================
AKSHRA DAS — ASPIRING FULL-STACK DEVELOPER
Location: Faridabad, Haryana, India
Email: ${portfolioData.contact.email}
GitHub: ${portfolioData.contact.githubPlaceholder}
LinkedIn: ${portfolioData.contact.linkedinPlaceholder}
================================================

PROFILE SUMMARY:
Motivated student and aspiring full-stack developer developing
foundational programming, analytical, and problem-solving skills.
Passionate about Python logic, structured CSV/SQL data processing,
and clean, responsive web user experiences.

EDUCATION:
Institution: Carmel Convent School
Location: Sector 7D, Faridabad
Status: Student / Fresher
Subjects:
- Informatics Practices (Python, SQL, CSV File Handling)
- Physics (Mechanics, Mathematical modeling, Logical reasoning)
- Chemistry (Quantitative empirical methods)
- Biology (Structural documentation, Systematic observation)
- English (Written & verbal technical communication)

TECHNICAL TOOLKIT (CURRENTLY LEARNING & EXPLORING):
- Web Development: HTML, CSS (Responsive layouts, Semantic structure)
- Programming: Python (Procedural logic, scripting, control structures, file I/O)
- Data Analysis & Visualization: NumPy, Pandas, Matplotlib
- Databases & Data Handling: SQL queries, CSV file handling

PROJECTS:
1. Skyflow — Airline Management Software
   Tech: Python, CSV File Handling
   Description: Python-based airline flight & passenger data management
   system utilizing structured CSV flat-file storage for persistent records.

2. Festival Website
   Tech: HTML, CSS
   Description: Festival-themed frontend website demonstrating webpage
   architecture, CSS layout patterns, visual styling, and responsive presentation.

CAREER INTERESTS:
- Web development
- Python programming
- Data analysis & visualization
- Software development
================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Akshra_Das_Resume_Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#100D18] border border-purple-500/30 shadow-2xl shadow-purple-950/60 p-6 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/25">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-[#F5F3FA]">
                Akshra Das — Resume & Qualifications
              </h3>
              <p className="text-xs text-[#AAA3B8]">
                Student / Fresher · Aspiring Full-Stack Developer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAA3B8] hover:text-[#F5F3FA] hover:bg-purple-950/40 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 overflow-y-auto space-y-5 text-xs text-[#AAA3B8]">
          {/* Status Banner */}
          <div className="p-3.5 rounded-xl bg-[#15111F] border border-purple-500/20 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-purple-200 font-semibold">Honest Resume Overview</p>
              <p className="leading-relaxed">
                As a student developer actively expanding my portfolio, this overview reflects my actual skills, school education, and completed projects without exaggerated claims.
              </p>
            </div>
          </div>

          {/* Education Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Education
            </h4>
            <div className="p-3 rounded-xl bg-[#08070D] border border-purple-500/15">
              <p className="text-sm font-semibold text-[#F5F3FA]">
                {portfolioData.education.institution}
              </p>
              <p className="text-[#AAA3B8]">{portfolioData.education.location}</p>
              <p className="text-purple-400 text-[11px] mt-1 font-mono">
                Academic Focus: Physics, Chemistry, Biology, English & Informatics Practices
              </p>
            </div>
          </div>

          {/* Core Technical Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Current Technical Toolkit
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-[#08070D] border border-purple-500/15">
                <span className="font-semibold text-purple-200">Programming:</span> Python (core logic, scripts, file handling)
              </div>
              <div className="p-2.5 rounded-lg bg-[#08070D] border border-purple-500/15">
                <span className="font-semibold text-purple-200">Web Development:</span> HTML & CSS (responsive design)
              </div>
              <div className="p-2.5 rounded-lg bg-[#08070D] border border-purple-500/15">
                <span className="font-semibold text-purple-200">Data Tools:</span> Pandas, NumPy & Matplotlib
              </div>
              <div className="p-2.5 rounded-lg bg-[#08070D] border border-purple-500/15">
                <span className="font-semibold text-purple-200">Databases:</span> SQL queries & CSV persistence
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Featured Projects
            </h4>
            <div className="p-3 rounded-xl bg-[#08070D] border border-purple-500/15 space-y-2">
              <div>
                <p className="font-semibold text-purple-200">Skyflow — Airline Management Software</p>
                <p className="text-[#AAA3B8]">Python-based flight and passenger data management powered by CSV storage.</p>
              </div>
              <div>
                <p className="font-semibold text-purple-200">Festival Website</p>
                <p className="text-[#AAA3B8]">Responsive frontend website built with semantic HTML and modern CSS styling.</p>
              </div>
            </div>
          </div>

          {/* Note about PDF replacement */}
          <div className="p-3 rounded-xl bg-[#15111F]/50 border border-purple-500/15 text-[11px]">
            <p className="text-[#AAA3B8]">
              💡 <strong className="text-purple-300">Adding a Custom PDF Resume:</strong> When you have your official PDF resume ready, place it into the <code className="text-purple-200 font-mono">public/resume.pdf</code> folder of your repository.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownloadSummary}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloadSuccess ? 'Downloaded!' : 'Download Summary (.txt)'}</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-purple-300 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 rounded-lg transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Akshra</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-[#AAA3B8] hover:text-[#F5F3FA] bg-[#15111F] border border-purple-500/20 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
