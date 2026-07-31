'use client';
import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import useModalControls from '../hooks/useModalControls';
import { getSafeExternalUrl } from '../lib/browser';

const SkillModal = ({ isOpen, onClose, skill, category }) => {
    useModalControls(isOpen, onClose);

    if (!isOpen || !skill) return null;

    const skillUrl = getSafeExternalUrl(skill.url);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/68 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-gray-950/95 rounded-3xl shadow-2xl shadow-slate-950/20 dark:shadow-black/60 animate-slideUp custom-scrollbar border border-white/80 dark:border-white/10 backdrop-blur-xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-100/90 dark:bg-white/10 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/15 hover:scale-105 transition-all duration-200"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content Container */}
                <div className="p-8 md:p-10 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-300 uppercase bg-blue-100 dark:bg-blue-900/40 rounded-full border border-blue-200 dark:border-blue-500/30 shadow-sm">
                            {category}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 dark:text-white">
                        {skill.name}
                    </h2>

                    <div className="pt-4 space-y-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                            {skill.description}
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-100 dark:border-white/10">
                        {skillUrl && (
                            <a
                                href={skillUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Official Website
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillModal;
