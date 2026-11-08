"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Navigation } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Armed & Unarmed Guards",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mapAddress = "D. No. 6/2921, Karupparayan Kovil Street, P.N. Road, Tiruppur, Tamil Nadu 641602";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Karupparayan Kovil Street, PN Road, Tiruppur, Tamil Nadu 641602"
  )}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Black Cat Commando Security Force, I would like to inquire about professional security services for my site.`
  );

  return (
    <section id="contact" className="py-24 bg-[#0c0d12] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-widest text-red-500 font-bold mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            Need Reliable Security? Let's Talk.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#12141d] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Thank you.
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-sm leading-relaxed">
                  Our team will contact you within 24 hours. For urgent needs, call our 24/7 hotline directly: <strong className="text-white">+91 94403 34046</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/15 rounded-xl px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wider">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/15 rounded-xl px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/15 rounded-xl px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wider">
                      Site Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tiruppur / Coimbatore"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/15 rounded-xl px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wider">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#08090c] border border-white/15 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-red-600"
                  >
                    <option value="Armed & Unarmed Guards">Armed and Unarmed Guards</option>
                    <option value="Residential Security">Residential Security</option>
                    <option value="Event Security">Event Security & Crowd Control</option>
                    <option value="Industrial and Warehouse Security">Industrial & Warehouse Security</option>
                    <option value="Corporate and Retail Security">Corporate & Retail Security</option>
                    <option value="Bodyguard and Escort Services">Bodyguard & Escort Services</option>
                    <option value="Patrol and Response">Patrol & Quick Response Team</option>
                    <option value="Security Consulting & Risk Assessment">Security Consulting & Risk Assessment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your site requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#08090c] border border-white/15 rounded-xl p-4 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Site Assessment</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Google Map with Prominent Pin */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#12141d] border border-white/10 rounded-2xl p-8 space-y-5 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight pb-3 border-b border-white/10">
                Command Center Information
              </h3>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 fill-red-500/20" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Office Location</h4>
                    <p className="text-neutral-300 leading-relaxed mt-0.5 text-sm sm:text-base">
                      {mapAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">24/7 Operations Hotline</h4>
                    <a href="tel:+919440334046" className="text-white font-bold text-base sm:text-lg hover:text-red-400 transition-colors">
                      +91 94403 34046
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Official Email</h4>
                    <a href="mailto:contact@blackcatcommandosecurity.com" className="text-neutral-300 hover:text-white text-sm sm:text-base truncate block">
                      contact@blackcatcommandosecurity.com
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2.5 text-neutral-300 font-bold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span>Control Room Open 24/7 / 365 Days</span>
                </div>
              </div>

              {/* Direct WhatsApp Pill */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919440334046?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-sm font-bold flex items-center justify-center gap-2.5 transition-all uppercase tracking-wider"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Chat On WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Map with Prominent Pin Indicator */}
            <div className="rounded-2xl overflow-hidden border border-white/15 h-64 sm:h-72 relative shadow-2xl group">
              <iframe
                title="Black Cat Commando Security Force Tiruppur Location"
                src="https://maps.google.com/maps?q=Karupparayan+Kovil+Street,+PN+Road,+Tiruppur,+Tamil+Nadu+641602&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />

              {/* Tactical Pin Badge Overlay on Top of Map */}
              <div className="absolute top-3 left-3 right-3 bg-[#08090c]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border border-white"></span>
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      Black Cat Commando HQ
                    </h5>
                    <p className="text-[11px] text-neutral-400">
                      P.N. Road, Tiruppur — 641602
                    </p>
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
