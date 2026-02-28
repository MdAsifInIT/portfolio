import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const SkillModal = ({ isOpen, onClose, skill, category }) => {
    if (!isOpen || !skill) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl animate-slideUp custom-scrollbar">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content Container */}
                <div className="p-8 md:p-10 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/40 rounded-full border border-blue-200 dark:border-blue-500/30">
                            {category}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {skill.name}
                    </h2>

                    <div className="pt-4 space-y-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {skill.description}
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                        {skill.url && (
                            <a
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-500/20"
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
