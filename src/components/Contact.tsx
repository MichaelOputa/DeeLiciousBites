import React from 'react';
import { Phone, Mail, MapPin, Instagram, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { WhatsAppIcon } from './WhatsAppIcon';
import LocationMap, { LOCATIONS } from './LocationMap';

export default function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.SERVICE_ID,
        import.meta.env.TEMPLATE_ID,
        form,
        import.meta.env.PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        form.reset();
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  
  return (
    <section className="py-20 bg-[#0b0b0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fff8e8] mb-4">
            Get in <span className="text-[#f4c430]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f4c430] to-[#c94b1c] mx-auto mb-6"></div>
          <p className="text-xl text-[#c5bdad] max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for orders, catering, or just to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#171715] border border-[#5f4910] rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#fff8e8] mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="tel:+2348140192298"
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#241d11] transition-colors group"
                >
                  <div className="p-3 bg-[#382b0b] rounded-full group-hover:bg-[#594512] transition-colors shrink-0">
                    <Phone className="text-[#f4c430]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#fff8e8] mb-1">Phone</h4>
                    <p className="text-[#c5bdad]">+234 814 019 2298</p>
                    <p className="text-sm text-[#958c7b]">Call us anytime</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/2348140192298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#15271b] transition-colors group"
                >
                  <div className="p-2.5 bg-[#122e1b] rounded-full group-hover:bg-[#183d25] transition-colors shrink-0">
                    <WhatsAppIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#fff8e8] mb-1">WhatsApp</h4>
                    <p className="text-[#c5bdad]">+234 814 019 2298</p>
                    <p className="text-sm text-[#958c7b]">Quick response guaranteed</p>
                  </div>
                </a>

                <a
                  href="mailto:joseph.o.adeola@gmail.com"
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#241d11] transition-colors group"
                >
                  <div className="p-3 bg-[#382b0b] rounded-full group-hover:bg-[#594512] transition-colors shrink-0">
                    <Mail className="text-[#f4c430]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#fff8e8] mb-1">Email</h4>
                    <p className="text-[#c5bdad]">joseph.o.adeola@gmail.com</p>
                    <p className="text-sm text-[#958c7b]">For inquiries and feedback</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 rounded-xl">
                  <div className="p-3 bg-[#382b0b] rounded-full shrink-0 mt-1">
                    <MapPin className="text-[#f4c430]" size={24} />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h4 className="font-semibold text-[#fff8e8] mb-1">Our Locations</h4>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#f4c430] mb-1">
                        Lagos Location
                      </p>
                      <a
                        href={LOCATIONS[0].googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 text-[#c5bdad] hover:text-[#f4c430] text-sm leading-relaxed transition-colors"
                        title="Open Lagos address on Google Maps"
                      >
                        <span>4, Prince Adeleke Close, Ikosi Ketu, Lagos</span>
                        <ExternalLink size={14} className="shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#f4c430]" />
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#f4c430] mb-1">
                        Ile-Ife Location
                      </p>
                      <a
                        href={LOCATIONS[1].googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 text-[#c5bdad] hover:text-[#f4c430] text-sm leading-relaxed transition-colors"
                        title="Open Ile-Ife address on Google Maps"
                      >
                        <span>Solar close, Mayfair Roundabout, Mayfair, Ile Ife, Osun State</span>
                        <ExternalLink size={14} className="shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#f4c430]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f4c430] to-[#c94b1c] rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Follow Us on Social Media</h3>
              <p className="mb-6 opacity-90">Stay updated with our latest dishes and special offers!</p>

              <div className="space-y-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <Instagram size={24} />
                  <span className="font-semibold">@mideola18</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#171715] border border-[#5f4910] rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#fff8e8] mb-6">Send Us a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#d8d0c0] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full px-4 py-3 bg-[#0e0e0d] text-white border border-[#443818] rounded-xl focus:ring-2 focus:ring-[#f4c430] focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#d8d0c0] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  className="w-full px-4 py-3 bg-[#0e0e0d] text-white border border-[#443818] rounded-xl focus:ring-2 focus:ring-[#f4c430] focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#d8d0c0] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-[#0e0e0d] text-white border border-[#443818] rounded-xl focus:ring-2 focus:ring-[#f4c430] focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                  placeholder="+234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#d8d0c0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0e0e0d] text-white border border-[#443818] rounded-xl focus:ring-2 focus:ring-[#f4c430] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-500"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#f4c430] to-[#c94b1c] text-[#0b0b0a] font-bold px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Integrated Interactive Google Maps Section */}
        <LocationMap />
      </div>
    </section>
  );
}
