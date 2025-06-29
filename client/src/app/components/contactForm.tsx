import React from 'react';
import Button from './button';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="w-full bg-[#1a012a] rounded-xl shadow-lg border border-white/10 flex">
        <div className="w-full md:w-3/3 p-6">
          <form className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-white/80 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-xs rounded bg-[#11001D] border border-white text-white placeholder-white focus:ring-1 focus:ring-purple-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 text-xs rounded bg-[#11001D] border border-white text-white placeholder-white focus:ring-1 focus:ring-purple-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/80 mb-1">
                Company
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-xs rounded bg-[#11001D] border border-white text-white placeholder-white focus:ring-1 focus:ring-purple-300"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-xs text-white/80 mb-1">
                Service Needed
              </label>
              <select className="w-full px-3 py-2 text-xs rounded bg-[#11001D] border border-white text-white focus:ring-1 focus:ring-purple-300">
                <option value="">Select a service</option>
                <option value="branding">Branding</option>
                <option value="web-design">Web Design</option>
                <option value="marketing">Marketing</option>
                <option value="strategy">Strategy</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-white/80 mb-1">
                About Project
              </label>
              <textarea
                rows={2}
                className="w-full px-3 py-2 text-xs rounded bg-[#11001D] border border-white text-white placeholder-white focus:ring-1 focus:ring-purple-300"
                placeholder="Project goals..."
              ></textarea>
            </div>

            <div className="pt-1">
              <Button
                textContent="Get Started"
                className="w-full py-2 text-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
