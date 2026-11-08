# Black Cat Commando Security Force 🛡️

A modern, high-performance security agency website built with **React, Next.js 14 (App Router), TypeScript, and Tailwind CSS**. Designed specifically with an elite tactical dark/monochrome theme accented by gold insignia and crimson status indicators.

---

## 🎖️ Operational & Accreditation Credentials

- **Company Name:** Black Cat Commando Security Force (BCC Security Services)
- **Quality Accreditation:** ISO 9001:2015 Quality Management System Certified
- **Certificate Number:** `230422083182QRA` (Audited by Qchecker Reckoning Accreditation - QRA)
- **Authorized Scope:** Private Security Services
- **Headquarters:** D. No. 6/2921, Karupparayan Kovil Street, P.N. Road (Opp. Muthoot Finance, Pandiyan Nagar), Tiruppur, Tamil Nadu — 641602, India
- **Hotline / 24/7 Command Center:** `+91 94403 34046`

> **Legal Disclaimer:** Black Cat Commando Security Force is a private commercial civilian security agency and is **not affiliated** with the National Security Guard (NSG), Indian Armed Forces, Ministry of Home Affairs, or State Police forces.

---

## 🚀 Key Features

1. **Tactical Monochrome & Gold Aesthetic:**
   - Deep matte blacks (`#08090c`, `#0d0f12`), carbon grid texturing, sharp military corner brackets, and gold brass insignia accents.
   - High-contrast typography and tactical monospaced metrics.

2. **Custom Vector Emblem System (`components/Logo.tsx`):**
   - Fierce black panther stealth emblem with crimson night-vision eyes.
   - Dual variants: Horizontal navbar lockup and octagonal crest badge.

3. **All 8 Core Security Services:**
   - Armed & Unarmed Security Guards
   - Residential Gated Communities & Apartments
   - Event Security & VIP Crowd Management
   - Industrial & Warehouse Loss Prevention (Textile Mills)
   - Corporate & Retail Concierge Security
   - Bodyguard & Executive Escort (PSO)
   - Mobile Patrol & Quick Response Team (QRT)
   - Security Consulting & Site Risk Audits

4. **Interactive Security Personnel Estimator (`components/CostCalculator.tsx`):**
   - Prospective clients can choose site type, 8h/12h/24h shifts, and guard strength to preview deployment requirements and request a quotation.

5. **24/7 Command Center Bar & Floating Actions:**
   - Emergency top bar with active status radar.
   - Floating WhatsApp button with live pulse and prefilled message.
   - Sticky "Get Free Assessment" drawer and click-to-call.

6. **Careers & Recruitment Portal (`components/CareersSection.tsx`):**
   - Guard criteria, PF/ESI benefits, free uniform details, ex-servicemen priority, and quick online enlistment form.

7. **Validated Contact Page & Google Maps Embed (`components/ContactSection.tsx`):**
   - Site assessment booking form with immediate feedback and reference ID.
   - Interactive Google Map embed of Tiruppur P.N. Road location.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── about/            # Dedicated About Page
│   ├── careers/          # Careers & Guard Enlistment Page
│   ├── contact/          # Contact & Assessment Page
│   ├── industries/       # Industries Served Page
│   ├── privacy/          # Privacy Policy
│   ├── services/         # Complete 8-Service Catalog
│   ├── terms/            # Terms & Conditions
│   ├── why-choose-us/    # Value Proposition Page
│   ├── globals.css       # Tactical styling & carbon grid
│   ├── icon.svg          # Custom tactical SVG favicon
│   ├── layout.tsx        # SEO Meta tags & site shell
│   └── page.tsx          # Full-featured landing page
├── components/
│   ├── AboutSection.tsx      # Mission, Vision & ISO Details
│   ├── CareersSection.tsx    # Recruitment portal & application
│   ├── ContactSection.tsx    # Form & Google Maps embed
│   ├── CostCalculator.tsx    # Interactive security estimator
│   ├── EmergencyBar.tsx      # Top 24/7 dispatch status bar
│   ├── FloatingActions.tsx   # Floating WhatsApp & Call
│   ├── Footer.tsx            # Footer & legal disclaimer
│   ├── Hero.tsx              # High-impact hero section
│   ├── HowItWorks.tsx        # 4-Step deployment roadmap
│   ├── IndustriesSection.tsx # 9 Sector protection cards
│   ├── Logo.tsx              # Vector Black Cat Emblem
│   ├── Navbar.tsx            # Sticky tactical header
│   ├── QuoteModal.tsx        # Site assessment popup modal
│   ├── ServicesSection.tsx   # Filterable 8-service catalog
│   ├── Testimonials.tsx      # Client reviews
│   └── WhyChooseUs.tsx       # 6 Core differentiators
└── public/
```

---

© 2026 Black Cat Commando Security Force. All rights reserved.
