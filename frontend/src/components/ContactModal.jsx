'use client';
import React, { useState } from 'react';
import { X, Mail, User, MessageSquare, Send } from 'lucide-react';
import { personalInfo, siteConfig } from '../data/mock';
import useModalControls from '../hooks/useModalControls';
import { canUseDOM, createMailtoHref } from '../lib/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  useModalControls(isOpen, onClose);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const mailtoHref = createMailtoHref({
        email: personalInfo.email,
        subject: `Portfolio Contact from ${formData.name.trim()}`,
        body: `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
      });

      if (!mailtoHref) {
        setErrors({ form: 'Contact email is unavailable' });
        return;
      }

      if (canUseDOM) {
        window.location.href = mailtoHref;
      }
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className="relative bg-white/95 dark:bg-gray-950/95 rounded-3xl shadow-2xl shadow-slate-950/20 dark:shadow-black/50 max-w-md w-full p-8 animate-slideUp border border-white/80 dark:border-white/10 backdrop-blur-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white mb-2">{siteConfig.contact.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-6">{siteConfig.contact.description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.form && <p className="text-sm font-medium text-red-600 dark:text-red-400">{errors.form}</p>}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-white/85 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 transition-all duration-200 ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-gray-200 dark:border-white/10 focus:ring-blue-500/20 focus:border-blue-500'
                }`}
                placeholder="Your name"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-white/85 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 transition-all duration-200 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-gray-200 dark:border-white/10 focus:ring-blue-500/20 focus:border-blue-500'
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-white/85 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 transition-all duration-200 resize-none ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500/20'
                    : 'border-gray-200 dark:border-white/10 focus:ring-blue-500/20 focus:border-blue-500'
                }`}
                placeholder="Your message..."
              ></textarea>
            </div>
            {errors.message && <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 border border-white/20"
          >
            <Send className="w-5 h-5" />
            {siteConfig.contact.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
