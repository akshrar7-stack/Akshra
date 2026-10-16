import React, { useState } from 'react';
import { X, Plane, Search, Database, Code, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface SkyflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSourceCode: () => void;
}

export const SkyflowModal: React.FC<SkyflowModalProps> = ({ isOpen, onClose, onOpenSourceCode }) => {
  const [selectedOrigin, setSelectedOrigin] = useState('DEL');
  const [selectedDest, setSelectedDest] = useState('ALL');
  const [activeTab, setActiveTab] = useState<'interactive' | 'csv' | 'code'>('interactive');

  if (!isOpen) return null;

  const project = portfolioData.projects.find((p) => p.id === 'skyflow-airline')!;

  const allFlights = [
    { flight_no: "SK-204", origin: "DEL", origin_name: "Delhi", dest: "BOM", dest_name: "Mumbai", status: "On Time", seats: 18, dep_time: "08:30", arr_time: "10:45" },
    { flight_no: "SK-319", origin: "DEL", origin_name: "Delhi", dest: "BLR", dest_name: "Bengaluru", status: "Boarding", seats: 4, dep_time: "11:15", arr_time: "14:00" },
    { flight_no: "SK-408", origin: "BOM", origin_name: "Mumbai", dest: "GOI", dest_name: "Goa", status: "Scheduled", seats: 32, dep_time: "15:20", arr_time: "16:40" },
    { flight_no: "SK-512", origin: "DEL", origin_name: "Delhi", dest: "DXB", dest_name: "Dubai", status: "Scheduled", seats: 45, dep_time: "18:00", arr_time: "20:30" },
    { flight_no: "SK-610", origin: "BOM", origin_name: "Mumbai", dest: "DEL", dest_name: "Delhi", status: "Scheduled", seats: 28, dep_time: "19:45", arr_time: "22:00" },
  ];

  const filteredFlights = allFlights.filter((flight) => {
    const matchOrigin = selectedOrigin === 'ALL' || flight.origin === selectedOrigin;
    const matchDest = selectedDest === 'ALL' || flight.dest === selectedDest;
    return matchOrigin && matchDest;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skyflow-modal-title"
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#100D18] border border-purple-500/30 shadow-2xl shadow-purple-950/60 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#15111F] border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/25">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h3 id="skyflow-modal-title" className="text-lg font-bold text-[#F5F3FA]">
                {project.title}
              </h3>
              <p className="text-xs text-[#AAA3B8]">
                Interactive Simulation & CSV Storage Architecture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#AAA3B8] hover:text-[#F5F3FA] hover:bg-purple-950/40 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-3 bg-[#0D0A14] border-b border-purple-500/15 text-xs font-mono">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/30'
                : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
            }`}
          >
            Flight Search Simulator
          </button>
          <button
            onClick={() => setActiveTab('csv')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'csv'
                ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/30'
                : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
            }`}
          >
            Raw CSV Registry
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/30'
                : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
            }`}
          >
            Python Source Code
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'interactive' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#15111F] border border-purple-500/20 text-xs text-[#AAA3B8]">
                <p className="leading-relaxed">
                  <strong className="text-purple-300">How it works:</strong> The Skyflow application operates in Python using standard library modules (<code className="text-purple-200 font-mono">csv</code> and <code className="text-purple-200 font-mono">os</code>). It loads tabular records from a structured flat file into memory, validating origins and destinations with procedural loops.
                </p>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#08070D] p-3 rounded-xl border border-purple-500/20">
                <div>
                  <label className="block text-[11px] font-mono text-purple-400 mb-1">
                    Select Origin:
                  </label>
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full bg-[#15111F] text-xs text-[#F5F3FA] p-2 rounded-lg border border-purple-500/30 focus:border-purple-400 outline-none"
                  >
                    <option value="ALL">All Origins</option>
                    <option value="DEL">DEL — Delhi</option>
                    <option value="BOM">BOM — Mumbai</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-purple-400 mb-1">
                    Select Destination:
                  </label>
                  <select
                    value={selectedDest}
                    onChange={(e) => setSelectedDest(e.target.value)}
                    className="w-full bg-[#15111F] text-xs text-[#F5F3FA] p-2 rounded-lg border border-purple-500/30 focus:border-purple-400 outline-none"
                  >
                    <option value="ALL">All Destinations</option>
                    <option value="BOM">BOM — Mumbai</option>
                    <option value="BLR">BLR — Bengaluru</option>
                    <option value="GOI">GOI — Goa</option>
                    <option value="DXB">DXB — Dubai</option>
                    <option value="DEL">DEL — Delhi</option>
                  </select>
                </div>
              </div>

              {/* Flights Results */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#AAA3B8] px-1">
                  <span>Results ({filteredFlights.length} flights found)</span>
                  <span className="text-purple-400">Query: CSV DictReader filter</span>
                </div>

                {filteredFlights.length === 0 ? (
                  <div className="p-8 text-center bg-[#08070D] rounded-xl border border-purple-500/15 text-sm text-[#AAA3B8]">
                    No flights matching this specific route. Try selecting another origin/destination!
                  </div>
                ) : (
                  filteredFlights.map((flight) => (
                    <div
                      key={flight.flight_no}
                      className="p-3.5 rounded-xl bg-[#15111F] border border-purple-500/20 hover:border-purple-400/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-purple-300 bg-purple-950/60 px-2 py-1 rounded border border-purple-500/30">
                          {flight.flight_no}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F3FA]">
                            <span>{flight.origin_name} ({flight.origin})</span>
                            <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                            <span>{flight.dest_name} ({flight.dest})</span>
                          </div>
                          <p className="text-[11px] text-[#AAA3B8] mt-0.5">
                            Departs {flight.dep_time} · Arrives {flight.arr_time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-medium ${
                          flight.status === 'On Time'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                            : flight.status === 'Boarding'
                            ? 'bg-amber-950/60 text-amber-400 border border-amber-500/30'
                            : 'bg-purple-950/60 text-purple-300 border border-purple-500/30'
                        }`}>
                          {flight.status}
                        </span>
                        <span className="font-mono text-purple-300">
                          {flight.seats} seats available
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'csv' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#AAA3B8]">
                <span className="font-mono text-purple-300">flights_registry.csv (Flat-file database)</span>
                <span>UTF-8 Comma-Separated Values</span>
              </div>
              <div className="bg-[#08070D] p-4 rounded-xl border border-purple-500/20 font-mono text-xs leading-relaxed text-[#AAA3B8] overflow-x-auto">
                <p className="text-purple-400 font-semibold">flight_no,origin,origin_code,destination,dest_code,status,seats_left</p>
                <p className="text-purple-200">SK-204,Delhi,DEL,Mumbai,BOM,On Time,18</p>
                <p className="text-purple-200">SK-319,Delhi,DEL,Bengaluru,BLR,Boarding,4</p>
                <p className="text-purple-200">SK-408,Mumbai,BOM,Goa,GOI,Scheduled,32</p>
                <p className="text-purple-200">SK-512,Delhi,DEL,Dubai,DXB,Scheduled,45</p>
                <p className="text-purple-200">SK-610,Mumbai,BOM,Delhi,DEL,Scheduled,28</p>
              </div>
              <p className="text-xs text-[#AAA3B8] leading-relaxed">
                By organizing airline records in standardized CSV rows, Python scripts can safely append new bookings, compute passenger totals, and export clean datasets for analysis in Pandas or SQL.
              </p>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#AAA3B8]">
                <span className="font-mono text-purple-300">skyflow_core.py</span>
                <span>Python 3.x</span>
              </div>
              <pre className="bg-[#08070D] p-4 rounded-xl border border-purple-500/20 font-mono text-xs leading-relaxed text-purple-200 overflow-x-auto">
                {project.codeSnippet.code}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#15111F] border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#AAA3B8]">
            <span>Key Technologies:</span>{' '}
            <span className="text-purple-300 font-mono">Python · CSV Handling · File I/O</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSourceCode}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#F5F3FA] bg-purple-900/60 hover:bg-purple-800/70 border border-purple-500/30 rounded-lg transition-colors cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Inspect Source Code</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-[#AAA3B8] hover:text-[#F5F3FA] bg-[#100D18] border border-purple-500/20 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
