import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Calendar, Shield } from 'lucide-react';

const CertificationModal = ({ isOpen, onClose, certification }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const [year, month] = dateStr.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-gray-100 dark:border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-500 dark:text-gray-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                {certification.code}
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                {certification.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {certification.issuer}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {certification.description}
          </p>

          {/* Dates */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="font-medium">Issued:</span> {formatDate(certification.issueDate)}
            </div>
            {certification.expiryDate && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Shield className="w-4 h-4 text-amber-500" />
                <span className="font-medium">Expires:</span> {formatDate(certification.expiryDate)}
              </div>
            )}
            {!certification.expiryDate && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <Shield className="w-4 h-4" />
                Does not expire
              </div>
            )}
          </div>

          {/* Credential ID */}
          {certification.credentialId && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">Credential ID:</span>{' '}
              <span className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {certification.credentialId}
              </span>
            </div>
          )}

          {/* Skills */}
          {certification.skills && certification.skills.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Skills Validated
              </h4>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-lg border border-blue-100 dark:border-blue-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verify Button */}
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <ExternalLink className="w-4 h-4" />
              Verify Credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
