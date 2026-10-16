import React, { useState } from 'react';
import { X, Github, Copy, Check, ExternalLink, Code2 } from 'lucide-react';

interface GitHubNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  repoUrl: string;
}

export const GitHubNoticeModal: React.FC<GitHubNoticeModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  repoUrl
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isPlaceholder = repoUrl.includes('YOUR_USERNAME');

  const handleCopy = () => {
    navigator.clipboard.writeText(repoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#100D18] border border-purple-500/30 shadow-2xl shadow-purple-950/60 p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/25">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 id="github-modal-title" className="text-base font-bold text-[#F5F3FA]">
                Source Code Repository
              </h3>
              <p className="text-xs text-[#AAA3B8]">{projectTitle}</p>
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

        <div className="py-5 space-y-4">
          <div className="p-3.5 rounded-xl bg-[#08070D] border border-purple-500/20 font-mono text-xs flex items-center justify-between gap-2 overflow-hidden">
            <span className="text-purple-300 truncate">{repoUrl}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded bg-purple-950/60 text-purple-300 hover:text-white border border-purple-500/30 transition-colors shrink-0 cursor-pointer"
              title="Copy URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {isPlaceholder ? (
            <div className="p-4 rounded-xl bg-[#15111F] border border-purple-500/20 text-xs text-[#AAA3B8] space-y-2">
              <div className="flex items-center gap-1.5 text-purple-300 font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Configurable GitHub Placeholder</span>
              </div>
              <p className="leading-relaxed">
                This link is currently configured with the placeholder <code className="text-purple-200 font-mono">YOUR_USERNAME</code>.
              </p>
              <p className="leading-relaxed text-[11px]">
                To link to your actual published repository, open <code className="text-purple-200 font-mono">src/data/portfolioData.ts</code> and update the <code className="text-purple-200 font-mono">githubUrl</code> field with your GitHub profile username.
              </p>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200">
              This repository is live and ready to view on GitHub!
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-purple-500/20 flex items-center justify-end gap-2">
          {!isPlaceholder && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg hover:from-purple-500 hover:to-violet-500 transition-all cursor-pointer"
            >
              <span>Visit on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#AAA3B8] hover:text-[#F5F3FA] bg-[#15111F] border border-purple-500/20 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
