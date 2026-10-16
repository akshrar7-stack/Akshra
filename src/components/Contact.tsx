import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Sparkles,
  MapPin,
  Clock,
  AlertCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedAction, setSubmittedAction] = useState<'mailto' | 'copied' | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject line';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Akshra,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    setSubmittedAction('mailto');
    setTimeout(() => setSubmittedAction(null), 6000);
  };

  const handleCopyMessage = () => {
    if (!validate()) return;

    const formattedMessage = `To: ${portfolioData.contact.email}
From: ${formData.name} (${formData.email})
Subject: ${formData.subject}

Message:
${formData.message}`;

    navigator.clipboard.writeText(formattedMessage);
    setSubmittedAction('copied');
    setTimeout(() => setSubmittedAction(null), 4000);
  };

  const handleCopyDirectEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative tech-grid-pattern border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3FA]">
            Have an idea? Let's connect.
          </h2>
          <p className="text-base text-[#AAA3B8] max-w-xl mt-2 leading-relaxed">
            I'm always interested in learning, exploring new ideas, and connecting with people who enjoy building things. Feel free to reach out.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#100D18] border border-purple-500/25 shadow-lg shadow-purple-950/20">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/25 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyDirectEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-purple-300 hover:text-white bg-purple-950/40 border border-purple-500/25 rounded-md transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {emailCopied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-sm font-semibold text-[#AAA3B8] uppercase tracking-wider font-mono">
                Direct Email
              </h3>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-lg font-bold text-[#F5F3FA] hover:text-purple-300 transition-colors block mt-1 break-all"
              >
                {portfolioData.contact.email}
              </a>
              <p className="text-xs text-[#AAA3B8] mt-2">
                Fastest way to get in touch for projects, queries, or student opportunities.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub Card */}
              <a
                href={portfolioData.contact.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#100D18] border border-purple-500/20 hover:border-purple-400/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AAA3B8] group-hover:text-purple-300 transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-300">GitHub Profile</span>
                  <p className="text-sm font-semibold text-[#F5F3FA] group-hover:text-purple-200 transition-colors truncate">
                    @YOUR_USERNAME
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={portfolioData.contact.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#100D18] border border-purple-500/20 hover:border-purple-400/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AAA3B8] group-hover:text-purple-300 transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-300">LinkedIn Profile</span>
                  <p className="text-sm font-semibold text-[#F5F3FA] group-hover:text-purple-200 transition-colors truncate">
                    in/YOUR_USERNAME
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Status Info */}
            <div className="p-5 rounded-2xl bg-[#15111F]/60 border border-purple-500/15 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#AAA3B8]">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Based in: <strong className="text-[#F5F3FA]">{portfolioData.contact.location}</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#AAA3B8]">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Response Time: <strong className="text-[#F5F3FA]">Typically within 24-48 hours</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-purple-300 font-mono pt-2 border-t border-purple-500/10">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{portfolioData.contact.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Honest Client-Side Fallback */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#100D18] border border-purple-500/25 p-6 sm:p-8 shadow-xl shadow-purple-950/20">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#F5F3FA] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#AAA3B8]">
                  Fill out the form below. When you click send, it will launch your default email app with the message pre-filled, or you can copy the formatted text.
                </p>
              </div>

              {submittedAction && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    {submittedAction === 'mailto' ? (
                      <>
                        <p className="font-semibold text-purple-200">
                          Opening your email client...
                        </p>
                        <p className="text-[#AAA3B8] mt-1">
                          If your email client didn't open automatically, you can also use the "Copy Message Text" button below to paste it into Gmail or your preferred provider.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold text-emerald-300">
                          Message copied to clipboard!
                        </p>
                        <p className="text-[#AAA3B8] mt-1">
                          You can now paste this directly into an email to{' '}
                          <span className="font-mono text-purple-300">{portfolioData.contact.email}</span>.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSendViaEmail} noValidate className="space-y-4">
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#AAA3B8] mb-1.5"
                    >
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#15111F] border text-xs text-[#F5F3FA] placeholder-[#AAA3B8]/40 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500/70 focus:border-rose-400'
                          : 'border-purple-500/20 focus:border-purple-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#AAA3B8] mb-1.5"
                    >
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#15111F] border text-xs text-[#F5F3FA] placeholder-[#AAA3B8]/40 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500/70 focus:border-rose-400'
                          : 'border-purple-500/20 focus:border-purple-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-[#AAA3B8] mb-1.5"
                  >
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="e.g. Question about Skyflow / Collaboration opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#15111F] border text-xs text-[#F5F3FA] placeholder-[#AAA3B8]/40 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500/70 focus:border-rose-400'
                        : 'border-purple-500/20 focus:border-purple-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#AAA3B8] mb-1.5"
                  >
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Write your note, question, or opportunity details here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#15111F] border text-xs text-[#F5F3FA] placeholder-[#AAA3B8]/40 focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-rose-500/70 focus:border-rose-400'
                        : 'border-purple-500/20 focus:border-purple-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg shadow-lg shadow-purple-900/40 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message (Email Client)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-purple-300 hover:text-white bg-[#15111F] hover:bg-purple-950/60 border border-purple-500/25 rounded-lg transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Message Text</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#AAA3B8]/70 pt-2 font-mono">
                  🔒 Static site configuration: no third-party tracking or unwanted backend message storage.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
