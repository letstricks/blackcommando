import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#08090c] border-t border-white/10 py-16 text-neutral-300 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo variant="horizontal" />
            <p className="text-sm text-neutral-400 leading-relaxed font-light mt-3">
              Professional, disciplined security services for businesses, residences, and events across Tamil Nadu.
            </p>
            <p className="text-xs text-red-500 font-mono font-bold">
              ISO 9001:2015 Cert: 230422083182QRA
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries Served</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Armed & Unarmed Guards</li>
              <li>Residential Security</li>
              <li>Event Crowd Control</li>
              <li>Industrial & Textile Security</li>
              <li>Bodyguard & Executive Protection</li>
              <li>Patrol & Quick Response Team</li>
            </ul>
          </div>

          {/* Col 4: Operations Address */}
          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <p className="text-neutral-400 leading-relaxed">
              D. No. 6/2921, Karupparayan Kovil St, P.N. Road, Tiruppur, Tamil Nadu — 641602
            </p>
            <p className="text-white font-bold text-base">
              +91 94403 34046
            </p>
            <p className="text-emerald-400 font-medium text-xs">
              Control Room: Open 24/7
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-white/5 text-xs text-neutral-400 leading-relaxed font-light">
          <strong>Civilian Security Force Disclaimer:</strong> Black Cat Commando Security Force (BCC Security Services) is a private commercial security agency independently certified under ISO 9001:2015. The agency is a civilian commercial contractor and has NO affiliation, sponsorship, or association with the National Security Guard (NSG), Indian Armed Forces, Ministry of Home Affairs, or State Police forces.
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
          <span>© 2026 Black Cat Commando Security Force. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
