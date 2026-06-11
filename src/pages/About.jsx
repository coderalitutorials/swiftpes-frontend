



// import React, { useEffect, useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   animate,
//   useInView,
// } from "framer-motion";

// function ContentCounter({ value, duration = 2.4 }) {
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
//   const suffix = value.replace(/[0-9]/g, "");

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-40px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration,
//         ease: "easeOut",
//       });

//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   return (
//     <span ref={ref} className="inline-flex">
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// export default function AboutUsPage() {
//   const textVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const stats = [
//     { number: "1,000+", label: "Happy Customer" },
//     { number: "100%", label: "Quality Control" },
//     { number: "26+", label: "People Working" },
//     { number: "12+", label: "Years of Experience" },
//   ];

//   const features = [
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//         </svg>
//       ),
//       title: "Satisfaction Is Guaranteed",
//       description:
//         "We back our eco-friendly chemical applications and mechanical barrier proofings with rigorous structural warranty timelines for ultimate peace of mind.",
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Insured Eradication Team",
//       description:
//         "Our complete baseline taskforce consists of fully vetted, licensed, and certified local operators equipped to handle hazardous environments safely.",
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       ),
//       title: "Targeted Local Treatments",
//       description:
//         "We map out deep localized biological infestation vectors specifically optimized for residential structural layers and massive food processing hubs.",
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//         </svg>
//       ),
//       title: "Free Phone Estimates",
//       description:
//         "Reach our support desk at any time to break down emergency outbreak pricing variables or setup instant technical diagnostic inspections.",
//     },
//   ];

//   return (
//     <main className="bg-white font-sans antialiased text-neutral-900 overflow-hidden w-full">
//       <section className="relative min-h-[520px] flex items-center justify-start overflow-hidden bg-[#5C4033] w-full">
//         <div
//           className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:center_18%] sm:bg-[position:center_18%] lg:bg-[position:center_16%] opacity-70 select-none pointer-events-none"
//           style={{
//             backgroundImage: "url('/images/about/hero-bg.webp')",
//           }}
//         />

//         <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#5C4033]/78 via-[#5C4033]/52 to-[#5C4033]/20" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left pt-24 pb-28">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="max-w-2xl space-y-4"
//           >
//             <div className="flex items-center gap-3">
//               <span className="w-8 h-[2px] bg-[#F2C12E]" />
//               <span className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.3em]">
//                 Who We Are
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//               About Us
//             </h1>

//             <p className="text-gray-100 text-sm sm:text-base leading-relaxed font-normal pt-2 max-w-xl">
//               At PesSave, we provide definitive, rapid, and highly secure pest
//               control treatments across the region. We focus on identifying
//               structural vulnerabilities directly at the root, delivering direct
//               and permanent peace of mind for both commercial and residential
//               spaces.
//             </p>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none select-none z-20">
//           <svg
//             viewBox="0 0 1440 90"
//             preserveAspectRatio="none"
//             className="block w-full h-[35px] sm:h-[55px]"
//           >
//             <path
//               fill="#ffffff"
//               d="M0,45 C220,80 420,70 650,48 C850,28 1050,25 1240,48 C1320,58 1380,60 1440,50 L1440,90 L0,90 Z"
//             />
//           </svg>
//         </div>
//       </section>

//       <section className="bg-white pt-8 pb-20 sm:pt-12 sm:pb-28 text-neutral-900 overflow-hidden relative z-20 w-full">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className="lg:col-span-5 relative w-full"
//             >
//               <div className="overflow-hidden rounded-xl shadow-xl shadow-neutral-200/80 border border-neutral-100 w-full">
//                 <img
//                   src="/images/about/pest-operator.webp"
//                   alt="Professional PesSave pest control operator"
//                   className="w-full h-[380px] sm:h-[520px] object-cover object-center hover:scale-[1.02] transition-transform duration-500 select-none"
//                 />
//               </div>
//             </motion.div>

//             <div className="lg:col-span-7 space-y-8 text-left w-full">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ staggerChildren: 0.12 }}
//                 className="space-y-6"
//               >
//                 <motion.h2
//                   variants={textVariant}
//                   className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 uppercase"
//                 >
//                   A few words about us
//                 </motion.h2>

//                 <motion.p
//                   variants={textVariant}
//                   className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal"
//                 >
//                   PesSave stands at the forefront of advanced, eco-friendly pest
//                   eradication. We have designed our workflows around complete
//                   operational clarity, substituting traditional, high-toxicity
//                   quick fixes with long-term barrier proofing and biological
//                   tracking matrices that secure your structural layouts completely.
//                 </motion.p>

//                 <motion.p
//                   variants={textVariant}
//                   className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal"
//                 >
//                   Our certified technicians inspect hidden nested hot-spots,
//                   evaluate precise localized risk metrics, and install absolute
//                   barriers so pest outbreaks cannot replicate inside your home or
//                   corporate kitchen spaces again.
//                 </motion.p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-30px" }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 pt-8 border-t border-neutral-100 mt-12 w-full"
//               >
//                 {stats.map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className="space-y-1.5 text-left sm:border-l sm:border-neutral-200 sm:pl-4 first:border-l-0 first:pl-0"
//                   >
//                     <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#F2C12E] select-none leading-none">
//                       <ContentCounter value={stat.number} />
//                     </div>

//                     <div className="text-xs sm:text-sm font-bold text-[#5C4033] uppercase tracking-wide leading-tight">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-neutral-50 border-t border-neutral-100 overflow-hidden w-full relative z-20">
//         <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
//           <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[480px] lg:min-h-full flex items-center justify-center p-8 sm:p-12 bg-[#5C4033] overflow-hidden">
//             <div
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105 pointer-events-none select-none"
//               style={{
//                 backgroundImage: "url('/images/about/trust-banner-bg.webp')",
//               }}
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/90 via-[#5C4033]/70 to-[#5C4033]/90 z-0" />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative z-10 text-center space-y-3 max-w-sm"
//             >
//               <p className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.25em] block leading-none">
//                 Satisfaction Guaranteed
//               </p>

//               <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
//                 Why people trust our service?
//               </h3>
//             </motion.div>
//           </div>

//           <div className="lg:col-span-7 bg-white p-8 sm:p-16 lg:p-24 flex items-center justify-center">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-16 w-full max-w-4xl">
//               {features.map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-20px" }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   className="space-y-4 text-left group"
//                 >
//                   <div className="text-[#F2C12E] bg-[#F2C12E]/5 w-14 h-14 rounded-xl flex items-center justify-center border border-[#F2C12E]/10 group-hover:bg-[#F2C12E]/10 transition-all duration-300">
//                     {item.icon}
//                   </div>

//                   <div className="space-y-2">
//                     <h4 className="text-lg font-black text-neutral-950 uppercase tracking-tight">
//                       {item.title}
//                     </h4>

//                     <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed font-normal">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }















// import React, { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
// import { ShieldCheck, Users, Activity, CheckCircle, Target, ShieldAlert, PhoneCall, Terminal, Shield, Flame, Search, Eye } from "lucide-react";

// // PREMIUM MICRO-COUNTER LOGIC
// function ContentCounter({ value, duration = 2 }) {
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
//   const suffix = value.replace(/[0-9]/g, "");

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-20px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration,
//         ease: [0.16, 1, 0.3, 1],
//       });
//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   return (
//     <span ref={ref} className="inline-flex items-center font-mono">
//       <motion.span>{rounded}</motion.span>
//       <span className="text-[#76C7C0] ml-0.5">{suffix}</span>
//     </span>
//   );
// }

// export default function AboutUsPage() {
//   const [activeTab, setActiveTab] = useState(0);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   const pestDirectives = [
//     {
//       phase: "Phase 01",
//       title: "Thermal & Moisture Scanning",
//       tagline: "Locating Hidden Subterranean Nests",
//       desc: "Our specialized field operators deploy advanced thermal sensors and moisture meters to pinpoint termite sub-colonies and rodent runways deep within wall voids without drilling."
//     },
//     {
//       phase: "Phase 02",
//       title: "Targeted Eco-Infusion",
//       tagline: "Eliminating Infestations At The Source",
//       desc: "We apply low-toxicity, EPA-approved molecular baits and localized perimeter barriers. This completely disrupts breeding cycles of cockroaches, bed bugs, and ants while keeping your pets safe."
//     },
//     {
//       phase: "Phase 03",
//       title: "Perimeter Shielding",
//       tagline: "Long-Term Structural Insulation",
//       desc: "Our operators seal architectural entry entryways, installing chemical and physical liquid barriers around your estate foundations to prevent any secondary vector migration."
//     }
//   ];

//   return (
//     <main className="bg-[#020b14] font-sans antialiased text-slate-200 overflow-hidden w-full relative min-h-screen">
      
//       {/* BACKGROUND GRAPHIC LINES */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
//       <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-[#4FA3A5]/10 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      
//       {/* ================= HERO ZONE WITH INTEGRATED BACKGROUND IMAGE ================= */}
//       <section className="relative pt-40 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden rounded-b-[40px] border-b border-white/[0.05]">
//         <div className="absolute inset-0 z-0 opacity-10 grayscale mix-blend-overlay pointer-events-none">
//           {/* IMAGE SLOT 1: HERO BACKGROUND PEST CONTEXT */}
//           <img 
//             src="/images/about/pest-hero-bg.webp" 
//             alt="Professional Exterminator Spraying Perimeter" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-[#020b14]" />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
//           <div className="lg:col-span-8 space-y-4 text-left">
//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3 py-1.5 rounded-md backdrop-blur-md">
//               <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//               <span className="text-slate-400 text-[10px] font-mono tracking-widest uppercase">
//                 PesSave HQ // Eradication Framework
//               </span>
//             </div>
//             <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
//               The Next Generation Of <br />
//               <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-300 bg-clip-text text-transparent">
//                 Premium Pest Control
//               </span>
//             </h1>
//           </div>

//           <div className="lg:col-span-4 text-left border-l-2 border-[#4FA3A5] pl-6 lg:mb-2">
//             <p className="text-slate-400 text-sm leading-relaxed font-normal">
//               At PesSave, we replace outdated, messy chemical sprays with targeted digital tracking and eco-engineered structural barriers. Real eradication, zero temporary cover-ups.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= ASYMMETRIC BENTO OPERATION MATRIX ================= */}
//       <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
//         >
          
//           {/* BENTO CARD 1: IMAGE VIEWPORT + DESCRIPTION LAYER */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-7 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#4FA3A5]/30 transition-all duration-500"
//           >
//             <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl overflow-hidden">
//               {/* IMAGE SLOT 2: REAL-WORLD OPERATIONAL DETAIL */}
//               <img 
//                 src="/images/about/termite-inspection.webp" 
//                 alt="High-Tech Termite Infestation Inspection" 
//                 className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
//               />
//             </div>

//             <div className="flex items-start justify-between w-full relative z-10 mb-20">
//               <div className="space-y-2 text-left">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded">Field Protocol</span>
//                 <h3 className="text-2xl font-bold text-white uppercase tracking-tight pt-2">Anti-Termite Sub-Shields</h3>
//               </div>
//               <Search className="w-5 h-5 text-slate-500" />
//             </div>

//             <div className="relative z-10 text-left space-y-3">
//               <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
//                 We design specialized liquid bait barriers that intercept tunneling subterranean workers before they reach your flooring or foundation frameworks.
//               </p>
//               <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#76C7C0]">
//                 <Eye className="w-3.5 h-3.5" />
//                 <span>Non-invasive thermal tracking technology enabled.</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 2: REAL LIVE METRICS COUNTERS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-5 bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between relative group hover:border-[#76C7C0]/30 transition-all duration-500"
//           >
//             <div className="space-y-1.5 text-left">
//               <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Track Record</span>
//               <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Eradication Statistics</h3>
//             </div>

//             {/* Clean Integrated Grid Counters */}
//             <div className="grid grid-cols-2 gap-4 my-6">
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <CheckCircle className="w-4 h-4 text-[#76C7C0] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="1,200+" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Cleared Sites</div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <ShieldCheck className="w-4 h-4 text-[#4FA3A5] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="100%" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Safety Clearance</div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <Users className="w-4 h-4 text-[#76C7C0] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="32+" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Licensed Crew</div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <Activity className="w-4 h-4 text-[#4FA3A5] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="12+" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Years Warranty</div>
//               </div>
//             </div>

//             <div className="text-xs font-mono text-[#4FA3A5] text-left flex items-center gap-1.5 bg-[#4FA3A5]/5 px-3 py-2 rounded-lg border border-[#4FA3A5]/10">
//               <Shield className="w-3.5 h-3.5" />
//               <span>Full compliance with municipal health & safety laws.</span>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 3: INTERACTIVE PEST CONTROL TIMELINE STEPS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-12 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 md:p-10 relative overflow-hidden hover:border-white/[0.12] transition-all duration-500"
//           >
//             <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FA3A5]/40 to-transparent" />
            
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.05] pb-8 w-full text-left">
//               <div className="space-y-1">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#4FA3A5]">Tactical Methodology</span>
//                 <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Eradication Workflow</h3>
//               </div>
              
//               {/* Dynamic Step Controllers */}
//               <div className="flex flex-wrap gap-2 font-mono text-xs">
//                 {pestDirectives.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveTab(idx)}
//                     className={`px-4 py-2 rounded-lg uppercase tracking-wider transition-all duration-300 ${
//                       activeTab === idx 
//                         ? "bg-[#76C7C0]/10 border border-[#76C7C0]/30 text-[#76C7C0]" 
//                         : "bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white"
//                     }`}
//                   >
//                     {item.phase}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Displaying Focused Panel Step Content */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-center text-left min-h-[140px]">
//               <div className="md:col-span-5 space-y-1">
//                 <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">{pestDirectives[activeTab].phase} // Operational Flow</div>
//                 <h4 className="text-xl font-black text-white uppercase">{pestDirectives[activeTab].title}</h4>
//                 <p className="text-[#4FA3A5] font-mono text-xs">{pestDirectives[activeTab].tagline}</p>
//               </div>
//               <div className="md:col-span-7">
//                 <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal border-l md:border-l-2 border-white/[0.08] pl-0 md:pl-8">
//                   {pestDirectives[activeTab].desc}
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 4: ECO-FRIENDLY ATTACK CHANNELS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-6 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative group hover:border-[#4FA3A5]/20 overflow-hidden"
//           >
//             <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl overflow-hidden">
//               {/* IMAGE SLOT 3: BACKUP OPERATIONAL PIC */}
//               <img 
//                 src="/images/about/pest-barrier.webp" 
//                 alt="Spraying Chemical Protective Barrier" 
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="space-y-4 relative z-10">
//               <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center text-[#76C7C0]">
//                 <Target className="w-5 h-5" />
//               </div>
//               <div className="space-y-1">
//                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Complex Vector Mapping</h4>
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   Whether it is large-scale cockroach colonies in commercial kitchens or nested rodents inside attic spaces, we create custom targeted layouts for long-lasting structural defense.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 5: REAR TRIGGER FOR CALLS / APPRASIALS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-6 bg-[#041221]/40 border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative overflow-hidden group hover:border-[#76C7C0]/20"
//           >
//             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4FA3A5]/5 rounded-full blur-2xl pointer-events-none" />
            
//             <div className="space-y-4">
//               <div className="w-10 h-10 rounded-xl bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 flex items-center justify-center text-[#4FA3A5]">
//                 <ShieldAlert className="w-5 h-5" />
//               </div>
//               <div className="space-y-1">
//                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Emergency Treatment Response</h4>
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   Facing a massive bed bug breakout or heavy rodent infiltration? Boot our dispatch system instantly to schedule emergency inspection squads and isolate structural vulnerabilities.
//                 </p>
//               </div>
//             </div>

//             {/* Action trigger button link */}
//             <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between w-full font-mono text-xs text-[#76C7C0] group-hover:text-white transition-colors cursor-pointer">
//               <span className="flex items-center gap-2 uppercase tracking-widest font-bold">
//                 <PhoneCall className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                 Request Emergency Inspection Routine
//               </span>
//               <span className="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
//             </div>
//           </motion.div>

//         </motion.div>
//       </section>

//     </main>
//   );
// }

















// import React, { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
// import { ShieldCheck, Users, Activity, CheckCircle, Target, ShieldAlert, PhoneCall, Terminal, Shield, Search, Eye } from "lucide-react";

// // PREMIUM MICRO-COUNTER LOGIC
// function ContentCounter({ value, duration = 2 }) {
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
//   const suffix = value.replace(/[0-9]/g, "");

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-20px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration,
//         ease: [0.16, 1, 0.3, 1],
//       });
//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   return (
//     <span ref={ref} className="inline-flex items-center font-mono">
//       <motion.span>{rounded}</motion.span>
//       <span className="text-[#76C7C0] ml-0.5">{suffix}</span>
//     </span>
//   );
// }

// export default function AboutUsPage() {
//   const [activeTab, setActiveTab] = useState(0);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   const pestDirectives = [
//     {
//       phase: "Phase 01",
//       title: "Thermal & Moisture Scanning",
//       tagline: "Locating Hidden Subterranean Nests",
//       desc: "Our specialized field operators deploy advanced thermal sensors and moisture meters to pinpoint termite sub-colonies and rodent runways deep within wall voids without drilling."
//     },
//     {
//       phase: "Phase 02",
//       title: "Targeted Eco-Infusion",
//       tagline: "Eliminating Infestations At The Source",
//       desc: "We apply low-toxicity, EPA-approved molecular baits and localized perimeter barriers. This completely disrupts breeding cycles of cockroaches, bed bugs, and ants while keeping your pets safe."
//     },
//     {
//       phase: "Phase 03",
//       title: "Perimeter Shielding",
//       tagline: "Long-Term Structural Insulation",
//       desc: "Our operators seal architectural entry entryways, installing chemical and physical liquid barriers around your estate foundations to prevent any secondary vector migration."
//     }
//   ];

//   return (
//     <main className="bg-[#020b14] font-sans antialiased text-slate-200 overflow-hidden w-full relative min-h-screen">
      
//       {/* BACKGROUND GRAPHIC LINES */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
//       <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-[#4FA3A5]/10 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      
//       {/* ================= HERO ZONE WITH LIGHTER, MORE VISIBLE PEST IMAGE BACKGROUND ================= */}
//       <section className="relative pt-44 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden rounded-b-[40px] border-b border-white/[0.08]">
        
//         {/* IMAGE LAYER - Made lighter, desaturated slightly for premium tech vibe, clear visibility */}
//         <div className="absolute inset-0 z-0 opacity-40 mix-blend-normal pointer-events-none">
//           <img 
//             src="/images/about/pest-hero-bg.webp" 
//             alt="Clear Professional Exterminator Performing Advanced Structural Perimeter Treatment" 
//             className="w-full h-full object-cover object-center scale-100"
//           />
//           {/* Smooth vignette to ensure edge contrast balances with dark layout */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-[#020b14]/50" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#020b14]/70 via-transparent to-[#020b14]/70" />
//         </div>

//         {/* HERO CONTENT CONTAINER - Embedded with glassmorphism backing for premium text contrast */}
//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/[0.08] shadow-2xl">
          
//           <div className="lg:col-span-8 space-y-5 flex flex-col justify-center text-left">
//             <div className="self-start inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.12] px-3 py-1.5 rounded-md backdrop-blur-md">
//               <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//               <span className="text-slate-300 text-[10px] font-mono tracking-widest uppercase">
//                 PesSave HQ // Eradication Framework
//               </span>
//             </div>
//             <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
//               The Next Generation Of <br />
//               <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-200 bg-clip-text text-transparent">
//                 Premium Pest Control
//               </span>
//             </h1>
//           </div>

//           <div className="lg:col-span-4 flex items-center text-left border-l-2 border-[#4FA3A5] pl-6 lg:my-4">
//             <p className="text-slate-300 text-sm leading-relaxed font-normal">
//               At PesSave, we replace outdated, messy chemical sprays with targeted digital tracking and eco-engineered structural barriers. Real eradication, zero temporary cover-ups.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ================= ASYMMETRIC BENTO OPERATION MATRIX ================= */}
//       <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
//         >
          
//           {/* BENTO CARD 1: IMAGE VIEWPORT + DESCRIPTION LAYER */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-7 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#4FA3A5]/30 transition-all duration-500"
//           >
//             <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl overflow-hidden">
//               <img 
//                 src="/images/about/termite-inspection.webp" 
//                 alt="High-Tech Termite Infestation Inspection" 
//                 className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
//               />
//             </div>

//             <div className="flex items-start justify-between w-full relative z-10 mb-20">
//               <div className="space-y-2 text-left">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded">Field Protocol</span>
//                 <h3 className="text-2xl font-bold text-white uppercase tracking-tight pt-2">Anti-Termite Sub-Shields</h3>
//               </div>
//               <Search className="w-5 h-5 text-slate-500" />
//             </div>

//             <div className="relative z-10 text-left space-y-3">
//               <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
//                 We design specialized liquid bait barriers that intercept tunneling subterranean workers before they reach your flooring or foundation frameworks.
//               </p>
//               <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#76C7C0]">
//                 <Eye className="w-3.5 h-3.5" />
//                 <span>Non-invasive thermal tracking technology enabled.</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 2: REAL LIVE METRICS COUNTERS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-5 bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between relative group hover:border-[#76C7C0]/30 transition-all duration-500"
//           >
//             <div className="space-y-1.5 text-left">
//               <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Track Record</span>
//               <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Eradication Statistics</h3>
//             </div>

//             <div className="grid grid-cols-2 gap-4 my-6">
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <CheckCircle className="w-4 h-4 text-[#76C7C0] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="1,200+" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Cleared Sites</div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <ShieldCheck className="w-4 h-4 text-[#4FA3A5] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="100%" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Safety Clearance</div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <Users className="w-4 h-4 text-[#76C7C0] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="32+" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Licensed Crew</div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors">
//                 <Activity className="w-4 h-4 text-[#4FA3A5] mb-2" />
//                 <div className="text-2xl font-black text-white"><ContentCounter value="12+" /></div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">Years Warranty</div>
//               </div>
//             </div>

//             <div className="text-xs font-mono text-[#4FA3A5] text-left flex items-center gap-1.5 bg-[#4FA3A5]/5 px-3 py-2 rounded-lg border border-[#4FA3A5]/10">
//               <Shield className="w-3.5 h-3.5" />
//               <span>Full compliance with municipal health & safety laws.</span>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 3: INTERACTIVE PEST CONTROL TIMELINE STEPS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-12 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 md:p-10 relative overflow-hidden hover:border-white/[0.12] transition-all duration-500"
//           >
//             <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FA3A5]/40 to-transparent" />
            
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.05] pb-8 w-full text-left">
//               <div className="space-y-1">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#4FA3A5]">Tactical Methodology</span>
//                 <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Eradication Workflow</h3>
//               </div>
              
//               <div className="flex flex-wrap gap-2 font-mono text-xs">
//                 {pestDirectives.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveTab(idx)}
//                     className={`px-4 py-2 rounded-lg uppercase tracking-wider transition-all duration-300 ${
//                       activeTab === idx 
//                         ? "bg-[#76C7C0]/10 border border-[#76C7C0]/30 text-[#76C7C0]" 
//                         : "bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white"
//                     }`}
//                   >
//                     {item.phase}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-center text-left min-h-[140px]">
//               <div className="md:col-span-5 space-y-1">
//                 <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">{pestDirectives[activeTab].phase} // Operational Flow</div>
//                 <h4 className="text-xl font-black text-white uppercase">{pestDirectives[activeTab].title}</h4>
//                 <p className="text-[#4FA3A5] font-mono text-xs">{pestDirectives[activeTab].tagline}</p>
//               </div>
//               <div className="md:col-span-7">
//                 <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal border-l md:border-l-2 border-white/[0.08] pl-0 md:pl-8">
//                   {pestDirectives[activeTab].desc}
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 4: ECO-FRIENDLY ATTACK CHANNELS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-6 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative group hover:border-[#4FA3A5]/20 overflow-hidden"
//           >
//             <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl overflow-hidden">
//               <img 
//                 src="/images/about/pest-barrier.webp" 
//                 alt="Spraying Chemical Protective Barrier" 
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="space-y-4 relative z-10">
//               <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center text-[#76C7C0]">
//                 <Target className="w-5 h-5" />
//               </div>
//               <div className="space-y-1">
//                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Complex Vector Mapping</h4>
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   Whether it is large-scale cockroach colonies in commercial kitchens or nested rodents inside attic spaces, we create custom targeted layouts for long-lasting structural defense.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* BENTO CARD 5: REAR TRIGGER FOR CALLS / APPRASIALS */}
//           <motion.div 
//             variants={cardVariants}
//             className="lg:col-span-6 bg-[#041221]/40 border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative overflow-hidden group hover:border-[#76C7C0]/20"
//           >
//             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4FA3A5]/5 rounded-full blur-2xl pointer-events-none" />
            
//             <div className="space-y-4">
//               <div className="w-10 h-10 rounded-xl bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 flex items-center justify-center text-[#4FA3A5]">
//                 <ShieldAlert className="w-5 h-5" />
//               </div>
//               <div className="space-y-1">
//                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Emergency Treatment Response</h4>
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   Facing a massive bed bug breakout or heavy rodent infiltration? Boot our dispatch system instantly to schedule emergency inspection squads and isolate structural vulnerabilities.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between w-full font-mono text-xs text-[#76C7C0] group-hover:text-white transition-colors cursor-pointer">
//               <span className="flex items-center gap-2 uppercase tracking-widest font-bold">
//                 <PhoneCall className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                 Request Emergency Inspection Routine
//               </span>
//               <span className="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
//             </div>
//           </motion.div>

//         </motion.div>
//       </section>

//     </main>
//   );
// }
















// import React, { useEffect, useRef, useState } from "react";
// import {
//   ShieldCheck,
//   Users,
//   Activity,
//   CheckCircle,
//   Target,
//   ShieldAlert,
//   PhoneCall,
//   Terminal,
//   Shield,
//   Search,
//   Eye,
// } from "lucide-react";

// function ContentCounter({ value, duration = 1600 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const hasAnimated = useRef(false);

//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;

//           let startTime = null;

//           const animateCount = (timestamp) => {
//             if (!startTime) startTime = timestamp;

//             const progress = Math.min((timestamp - startTime) / duration, 1);
//             const currentValue = Math.round(progress * numericValue);

//             setCount(currentValue);

//             if (progress < 1) requestAnimationFrame(animateCount);
//           };

//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.25 }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, [numericValue, duration]);

//   return (
//     <span ref={ref} className="inline-flex items-center font-mono">
//       <span>{count}</span>
//       <span className="text-[#76C7C0] ml-0.5">{suffix}</span>
//     </span>
//   );
// }

// export default function AboutUsPage() {
//   const [activeTab, setActiveTab] = useState(0);

//   const pestDirectives = [
//     {
//       phase: "Phase 01",
//       title: "Thermal & Moisture Scanning",
//       tagline: "Locating Hidden Subterranean Nests",
//       desc: "Our specialized field operators deploy advanced thermal sensors and moisture meters to pinpoint termite sub-colonies and rodent runways deep within wall voids without drilling.",
//     },
//     {
//       phase: "Phase 02",
//       title: "Targeted Eco-Infusion",
//       tagline: "Eliminating Infestations At The Source",
//       desc: "We apply low-toxicity, EPA-approved molecular baits and localized perimeter barriers. This completely disrupts breeding cycles of cockroaches, bed bugs, and ants while keeping your pets safe.",
//     },
//     {
//       phase: "Phase 03",
//       title: "Perimeter Shielding",
//       tagline: "Long-Term Structural Insulation",
//       desc: "Our operators seal architectural entry entryways, installing chemical and physical liquid barriers around your estate foundations to prevent any secondary vector migration.",
//     },
//   ];

//   return (
//     <main className="bg-[#020b14] font-sans antialiased text-slate-200 overflow-hidden w-full relative min-h-screen">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-60" />
//       <div className="absolute top-0 right-0 w-[420px] h-[360px] bg-[#4FA3A5]/10 rounded-full blur-3xl pointer-events-none" />

//       <section className="relative pt-44 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden rounded-b-[40px] border-b border-white/[0.08]">
//         <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
//           <img
//             src="/images/about/pest-hero-bg.webp"
//             alt="Clear Professional Exterminator Performing Advanced Structural Perimeter Treatment"
//             className="w-full h-full object-cover object-center"
//             loading="eager"
//             decoding="async"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-[#020b14]/45" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#020b14]/65 via-transparent to-[#020b14]/65" />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-black/45 p-8 md:p-12 rounded-3xl border border-white/[0.08] shadow-xl animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="lg:col-span-8 space-y-5 flex flex-col justify-center text-left">
//             <div className="self-start inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.12] px-3 py-1.5 rounded-md">
//               <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//               <span className="text-slate-300 text-[10px] font-mono tracking-widest uppercase">
//                 PesSave HQ // Eradication Framework
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
//               The Next Generation Of <br />
//               <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-200 bg-clip-text text-transparent">
//                 Premium Pest Control
//               </span>
//             </h1>
//           </div>

//           <div className="lg:col-span-4 flex items-center text-left border-l-2 border-[#4FA3A5] pl-6 lg:my-4">
//             <p className="text-slate-300 text-sm leading-relaxed font-normal">
//               At PesSave, we replace outdated, messy chemical sprays with
//               targeted digital tracking and eco-engineered structural barriers.
//               Real eradication, zero temporary cover-ups.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//           <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#4FA3A5]/30 transition-colors duration-200 animate-[fadeUp_0.7s_ease-out_both]">
//             <div className="absolute inset-0 z-0 opacity-12 group-hover:opacity-18 transition-opacity duration-300 rounded-3xl overflow-hidden">
//               <img
//                 src="/images/about/termite-inspection.webp"
//                 alt="High-Tech Termite Infestation Inspection"
//                 className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-300"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </div>

//             <div className="flex items-start justify-between w-full relative z-10 mb-20">
//               <div className="space-y-2 text-left">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded">
//                   Field Protocol
//                 </span>
//                 <h3 className="text-2xl font-bold text-white uppercase tracking-tight pt-2">
//                   Anti-Termite Sub-Shields
//                 </h3>
//               </div>
//               <Search className="w-5 h-5 text-slate-500" />
//             </div>

//             <div className="relative z-10 text-left space-y-3">
//               <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
//                 We design specialized liquid bait barriers that intercept
//                 tunneling subterranean workers before they reach your flooring or
//                 foundation frameworks.
//               </p>
//               <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#76C7C0]">
//                 <Eye className="w-3.5 h-3.5" />
//                 <span>Non-invasive thermal tracking technology enabled.</span>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-5 bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between relative group hover:border-[#76C7C0]/30 transition-colors duration-200 animate-[fadeUp_0.7s_ease-out_0.08s_both]">
//             <div className="space-y-1.5 text-left">
//               <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
//                 Track Record
//               </span>
//               <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
//                 Eradication Statistics
//               </h3>
//             </div>

//             <div className="grid grid-cols-2 gap-4 my-6">
//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200">
//                 <CheckCircle className="w-4 h-4 text-[#76C7C0] mb-2" />
//                 <div className="text-2xl font-black text-white">
//                   <ContentCounter value="1,200+" />
//                 </div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">
//                   Cleared Sites
//                 </div>
//               </div>

//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200">
//                 <ShieldCheck className="w-4 h-4 text-[#4FA3A5] mb-2" />
//                 <div className="text-2xl font-black text-white">
//                   <ContentCounter value="100%" />
//                 </div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">
//                   Safety Clearance
//                 </div>
//               </div>

//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200">
//                 <Users className="w-4 h-4 text-[#76C7C0] mb-2" />
//                 <div className="text-2xl font-black text-white">
//                   <ContentCounter value="32+" />
//                 </div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">
//                   Licensed Crew
//                 </div>
//               </div>

//               <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200">
//                 <Activity className="w-4 h-4 text-[#4FA3A5] mb-2" />
//                 <div className="text-2xl font-black text-white">
//                   <ContentCounter value="12+" />
//                 </div>
//                 <div className="text-[10px] uppercase font-mono text-slate-500 mt-1">
//                   Years Warranty
//                 </div>
//               </div>
//             </div>

//             <div className="text-xs font-mono text-[#4FA3A5] text-left flex items-center gap-1.5 bg-[#4FA3A5]/5 px-3 py-2 rounded-lg border border-[#4FA3A5]/10">
//               <Shield className="w-3.5 h-3.5" />
//               <span>Full compliance with municipal health & safety laws.</span>
//             </div>
//           </div>

//           <div className="lg:col-span-12 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 md:p-10 relative overflow-hidden hover:border-white/[0.12] transition-colors duration-200 animate-[fadeUp_0.7s_ease-out_0.16s_both]">
//             <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FA3A5]/40 to-transparent" />

//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.05] pb-8 w-full text-left">
//               <div className="space-y-1">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#4FA3A5]">
//                   Tactical Methodology
//                 </span>
//                 <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
//                   Eradication Workflow
//                 </h3>
//               </div>

//               <div className="flex flex-wrap gap-2 font-mono text-xs">
//                 {pestDirectives.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveTab(idx)}
//                     className={`px-4 py-2 rounded-lg uppercase tracking-wider transition-colors duration-200 ${
//                       activeTab === idx
//                         ? "bg-[#76C7C0]/10 border border-[#76C7C0]/30 text-[#76C7C0]"
//                         : "bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white"
//                     }`}
//                   >
//                     {item.phase}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-center text-left min-h-[140px]">
//               <div className="md:col-span-5 space-y-1">
//                 <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">
//                   {pestDirectives[activeTab].phase} // Operational Flow
//                 </div>
//                 <h4 className="text-xl font-black text-white uppercase">
//                   {pestDirectives[activeTab].title}
//                 </h4>
//                 <p className="text-[#4FA3A5] font-mono text-xs">
//                   {pestDirectives[activeTab].tagline}
//                 </p>
//               </div>

//               <div className="md:col-span-7">
//                 <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal border-l md:border-l-2 border-white/[0.08] pl-0 md:pl-8">
//                   {pestDirectives[activeTab].desc}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-6 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative group hover:border-[#4FA3A5]/20 overflow-hidden transition-colors duration-200 animate-[fadeUp_0.7s_ease-out_0.24s_both]">
//             <div className="absolute inset-0 z-0 opacity-6 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl overflow-hidden">
//               <img
//                 src="/images/about/pest-barrier.webp"
//                 alt="Spraying Chemical Protective Barrier"
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </div>

//             <div className="space-y-4 relative z-10">
//               <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center text-[#76C7C0]">
//                 <Target className="w-5 h-5" />
//               </div>

//               <div className="space-y-1">
//                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">
//                   Complex Vector Mapping
//                 </h4>
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   Whether it is large-scale cockroach colonies in commercial
//                   kitchens or nested rodents inside attic spaces, we create
//                   custom targeted layouts for long-lasting structural defense.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-6 bg-[#041221]/40 border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative overflow-hidden group hover:border-[#76C7C0]/20 transition-colors duration-200 animate-[fadeUp_0.7s_ease-out_0.32s_both]">
//             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4FA3A5]/5 rounded-full blur-2xl pointer-events-none" />

//             <div className="space-y-4">
//               <div className="w-10 h-10 rounded-xl bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 flex items-center justify-center text-[#4FA3A5]">
//                 <ShieldAlert className="w-5 h-5" />
//               </div>

//               <div className="space-y-1">
//                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">
//                   Emergency Treatment Response
//                 </h4>
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   Facing a massive bed bug breakout or heavy rodent infiltration?
//                   Boot our dispatch system instantly to schedule emergency
//                   inspection squads and isolate structural vulnerabilities.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between w-full font-mono text-xs text-[#76C7C0] group-hover:text-white transition-colors duration-200 cursor-pointer">
//               <span className="flex items-center gap-2 uppercase tracking-widest font-bold">
//                 <PhoneCall className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                 Request Emergency Inspection Routine
//               </span>
//               <span className="text-slate-500 group-hover:translate-x-1 transition-transform duration-200">
//                 →
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }















import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Users,
  Activity,
  CheckCircle,
  Target,
  ShieldAlert,
  PhoneCall,
  Terminal,
  Shield,
  Search,
  Eye,
} from "lucide-react";

function ContentCounter({ value, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime = null;

          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.round(progress * numericValue);

            setCount(currentValue);

            if (progress < 1) requestAnimationFrame(animateCount);
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [numericValue, duration]);

  return (
    <span ref={ref} className="inline-flex items-center font-mono">
      <span>{count}</span>
      <span className="text-[#A35C37] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const pestDirectives = [
    {
      phase: "Phase 01",
      title: "Thermal & Moisture Scanning",
      tagline: "Locating Hidden Subterranean Nests",
      desc: "Our specialized field operators deploy advanced thermal sensors and moisture meters to pinpoint termite sub-colonies and rodent runways deep within wall voids without drilling.",
    },
    {
      phase: "Phase 02",
      title: "Targeted Eco-Infusion",
      tagline: "Eliminating Infestations At The Source",
      desc: "We apply low-toxicity, EPA-approved molecular baits and localized perimeter barriers. This completely disrupts breeding cycles of cockroaches, bed bugs, and ants while keeping your pets safe.",
    },
    {
      phase: "Phase 03",
      title: "Perimeter Shielding",
      tagline: "Long-Term Structural Insulation",
      desc: "Our operators seal architectural entry entryways, installing chemical and physical liquid barriers around your estate foundations to prevent any secondary vector migration.",
    },
  ];

  return (
    <main className="bg-[#120c1a] font-sans antialiased text-slate-200 overflow-hidden w-full relative min-h-screen">
      {/* Background Micro Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-[0.25]" />
      <div className="absolute top-0 right-0 w-[420px] h-[360px] bg-[#4B1B67]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden rounded-b-[40px] border-b border-white/[0.04]">
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <img
            src="/images/about/pest-hero-bg.webp"
            alt="Clear Professional Exterminator Performing Advanced Structural Perimeter Treatment"
            className="w-full h-full object-cover object-center contrast-[1.05] brightness-90"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120c1a] via-transparent to-[#120c1a]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c1a]/70 via-transparent to-[#120c1a]/70" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#120c1a]/75 p-8 md:p-12 rounded-3xl border border-white/[0.08] shadow-2xl backdrop-blur-md animate-[fadeUp_0.7s_ease-out_both]">
          <div className="lg:col-span-8 space-y-5 flex flex-col justify-center text-left">
            <div className="self-start inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] px-3 py-1.5 rounded-md">
              <Terminal className="w-3.5 h-3.5 text-[#A35C37]" />
              <span className="text-slate-300 text-[10px] font-mono tracking-widest uppercase font-bold">
                SwiftPes HQ // Eradication Framework
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              The Next Generation Of <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#A35C37] bg-clip-text text-transparent">
                Premium Pest Control
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex items-center text-left border-l-2 border-[#A35C37] pl-6 lg:my-4">
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              At SwiftPes, we replace outdated, messy chemical sprays with
              targeted digital tracking and eco-engineered structural barriers.
              Real eradication, zero temporary cover-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics & Content Layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Main Feature */}
          <div className="lg:col-span-7 bg-white/[0.015] border border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#4B1B67]/50 transition-all duration-300 shadow-xl backdrop-blur-sm animate-[fadeUp_0.7s_ease-out_both]">
            <div className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-300 rounded-3xl overflow-hidden">
              <img
                src="/images/about/termite-inspection.webp"
                alt="High-Tech Termite Infestation Inspection"
                className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex items-start justify-between w-full relative z-10 mb-20">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A35C37] bg-[#A35C37]/10 px-2.5 py-1 rounded font-bold shadow-sm">
                  Field Protocol
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight pt-2">
                  Anti-Termite Sub-Shields
                </h3>
              </div>
              <Search className="w-5 h-5 text-slate-500" />
            </div>

            <div className="relative z-10 text-left space-y-3">
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                We design specialized liquid bait barriers that intercept
                tunneling subterranean workers before they reach your flooring or
                foundation frameworks.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A35C37]">
                <Eye className="w-3.5 h-3.5" />
                <span>Non-invasive thermal tracking technology enabled.</span>
              </div>
            </div>
          </div>

          {/* Card 2: Eradication Stats Grid */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1c1229] to-[#120c1a] border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between relative group hover:border-[#A35C37]/40 transition-all duration-300 shadow-xl animate-[fadeUp_0.7s_ease-out_0.08s_both]">
            <div className="space-y-1.5 text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                Track Record
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                Eradication Statistics
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200 shadow-md">
                <CheckCircle className="w-4 h-4 text-[#A35C37] mb-2" />
                <div className="text-2xl font-black text-white">
                  <ContentCounter value="1,200+" />
                </div>
                <div className="text-[10px] uppercase font-mono text-slate-500 mt-1 font-semibold">
                  Cleared Sites
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200 shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#A35C37] mb-2" />
                <div className="text-2xl font-black text-white">
                  <ContentCounter value="100%" />
                </div>
                <div className="text-[10px] uppercase font-mono text-slate-500 mt-1 font-semibold">
                  Safety Clearance
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200 shadow-md">
                <Users className="w-4 h-4 text-[#A35C37] mb-2" />
                <div className="text-2xl font-black text-white">
                  <ContentCounter value="32+" />
                </div>
                <div className="text-[10px] uppercase font-mono text-slate-500 mt-1 font-semibold">
                  Licensed Crew
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 text-left group-hover:bg-white/[0.04] transition-colors duration-200 shadow-md">
                <Activity className="w-4 h-4 text-[#A35C37] mb-2" />
                <div className="text-2xl font-black text-white">
                  <ContentCounter value="12+" />
                </div>
                <div className="text-[10px] uppercase font-mono text-slate-500 mt-1 font-semibold">
                  Years Warranty
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-[#A35C37] text-left flex items-center gap-1.5 bg-[#A35C37]/5 px-3 py-2 rounded-lg border border-[#A35C37]/10 shadow-inner">
              <Shield className="w-3.5 h-3.5" />
              <span>Full compliance with municipal health & safety laws.</span>
            </div>
          </div>

          {/* Card 3: Tabs Workflow Panel */}
          <div className="lg:col-span-12 bg-white/[0.015] border border-white/[0.06] rounded-3xl p-8 md:p-10 relative overflow-hidden hover:border-white/[0.12] transition-all duration-300 shadow-xl backdrop-blur-sm animate-[fadeUp_0.7s_ease-out_0.16s_both]">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#4B1B67]/50 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.05] pb-8 w-full text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A35C37] font-bold">
                  Tactical Methodology
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  Eradication Workflow
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {pestDirectives.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 rounded-lg uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm ${
                      activeTab === idx
                        ? "bg-[#A35C37]/10 border border-[#A35C37]/30 text-[#A35C37]"
                        : "bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.phase}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-center text-left min-h-[140px]">
              <div className="md:col-span-5 space-y-1">
                <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">
                  {pestDirectives[activeTab].phase} // Operational Flow
                </div>
                <h4 className="text-xl font-black text-white uppercase">
                  {pestDirectives[activeTab].title}
                </h4>
                <p className="text-[#A35C37] font-mono text-xs font-semibold">
                  {pestDirectives[activeTab].tagline}
                </p>
              </div>

              <div className="md:col-span-7">
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal border-l md:border-l-2 border-white/[0.08] pl-0 md:pl-8">
                  {pestDirectives[activeTab].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Sub Feature Vector Mapping */}
          <div className="lg:col-span-6 bg-white/[0.015] border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative group hover:border-[#4B1B67]/40 overflow-hidden transition-all duration-300 shadow-xl backdrop-blur-sm animate-[fadeUp_0.7s_ease-out_0.24s_both]">
            <div className="absolute inset-0 z-0 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-300 rounded-3xl overflow-hidden">
              <img
                src="/images/about/pest-barrier.webp"
                alt="Spraying Chemical Protective Barrier"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#A35C37]/10 border border-[#A35C37]/20 flex items-center justify-center text-[#A35C37]">
                <Target className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                  Complex Vector Mapping
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Whether it is large-scale cockroach colonies in commercial
                  kitchens or nested rodents inside attic spaces, we create
                  custom targeted layouts for long-lasting structural defense.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Emergency Routine CTAs */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#120c1a] to-[#1c1229] border border-white/[0.06] rounded-3xl p-8 text-left flex flex-col justify-between relative overflow-hidden group hover:border-[#A35C37]/30 transition-all duration-300 shadow-xl animate-[fadeUp_0.7s_ease-out_0.32s_both]">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4B1B67]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#A35C37]/10 border border-[#A35C37]/20 flex items-center justify-center text-[#A35C37]">
                <ShieldAlert className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                  Emergency Treatment Response
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Facing a massive bed bug breakout or heavy rodent infiltration?
                  Boot our dispatch system instantly to schedule emergency
                  inspection squads and isolate structural vulnerabilities.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between w-full font-mono text-xs text-[#A35C37] group-hover:text-white transition-colors duration-200 cursor-pointer">
              <span className="flex items-center gap-2 uppercase tracking-widest font-bold">
                <PhoneCall className="w-3.5 h-3.5 text-[#A35C37]" />
                Request Emergency Inspection Routine
              </span>
              <span className="text-slate-500 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}