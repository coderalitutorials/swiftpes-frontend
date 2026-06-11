






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   // Smooth premium animations
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 25 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-80px)] sm:min-h-screen bg-[#5C3A21] text-white overflow-hidden font-sans flex items-center w-full[-1px]">
      
//       {/* 1. BACKGROUND IMAGE LAYER */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img 
//             src="/images/mobile-herohome.webp" 
//             alt="PesSave Pest Control Chelsea" 

//             className="w-full h-full object-cover object-[center_15%] select-none pointer-events-none"
//           />
//         </picture>
        
//         {/* Balanced premium gradient shade overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-900/70 to-neutral-900/40 md:from-neutral-950/85 md:via-neutral-900/60 md:to-transparent z-10" />
//       </div>

//       {/* 2. MAIN CONTENT CONTAINER */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 pt-20 pb-16">
        
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="max-w-3xl space-y-5 md:space-y-6 text-left"
//         >
//           {/* Top Small Tracker Subheading */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-xs md:text-sm mt-10 font-black tracking-[0.25em] uppercase text-[#F1C423]"
//           >
//             Smart Protection. Clean Living.
//           </motion.p>

//           {/* Main Solid Massive Left-Aligned Heading */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-4xl sm:text-6xl lg:text-[74px] font-black tracking-tight leading-[1.05] text-white uppercase"
//           >
//             We Are Here For <br />
//             <span className="block mt-1 text-white">Pest Control Needs!</span>
//           </motion.h1>

//           {/* Clean Descriptive Paragraph Block */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-sm sm:text-base md:text-lg text-neutral-200 max-w-xl font-normal leading-relaxed pt-1"
//           >
//             Complete residential and commercial pest management solutions across Chelsea, London. Fast, safe, and fully certified treatments to secure your home or business premises today.
//           </motion.p>

//           {/* Action Call Trigger Row */}
//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-wrap items-center gap-6 sm:gap-8 pt-5 md:pt-6"
//           >
//             {/* Corporate Logo Yellow (#F1C423) Button */}
//             <Link 
//               to="/contact-us" 
//               className="bg-[#F1C423] hover:bg-[#e5b228] text-neutral-950 font-black text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group shadow-lg shadow-[#F1C423]/10"
//             >
//               Book Now
//               <span className="transition-transform group-hover:translate-x-1 font-semibold">➔</span>
//             </Link>

//             {/* Direct Phone Number Action Anchoring */}
//             <div className="flex items-center gap-2.5">
//               <svg 
//                 className="w-5 h-5 text-[#F1C423]" 
//                 fill="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
//               </svg>
//               <a 
//                 href="tel:07440112498" 
//                 className="text-xl md:text-2xl font-black text-[#F1C423] hover:text-white transition-colors tracking-tight"
//               >
//                 07440 112498
//               </a>
//             </div>
//           </motion.div>

//         </motion.div>

//       </div>

//     </div>
//   );
// }













// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   // Ultra-smooth custom easing for upscale look
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 35 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 }
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-[#010a12] text-white overflow-hidden font-sans flex items-center pt-24 md:pt-28">
      
//       {/* 1. BACKGROUND GRADIENT & LIGHT GLOW EFFECTS (No simple flat color) */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {/* Soft atmospheric gradient glow from logo teal theme */}
//         <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#4FA3A5]/10 blur-[150px] pointer-events-none" />
//         <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#76C7C0]/5 blur-[130px] pointer-events-none" />
        
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img 
//             src="/images/mobile-herohome.webp" 
//             alt="Pesrid Services Sidcup London" 
//             className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none mix-blend-luminosity"
//           />
//         </picture>
        
//         {/* Dynamic dark multi-directional overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#010a12]/80 via-[#010a12]/95 to-[#010a12]" />
//       </div>

//       {/* 2. ASYMMETRICAL SPLIT LAYOUT CONTAINER */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 py-12 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* LEFT SIDE: Heading & Premium Text Block */}
//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-7 space-y-6 md:space-y-7 text-left"
//           >
//             {/* Minimal High-End Badge */}
//             <motion.div 
//               variants={fadeInUp}
//               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4FA3A5]/10 to-[#76C7C0]/10 border border-[#4FA3A5]/20 backdrop-blur-sm"
//             >
//               <span className="w-2 h-2 rounded-full bg-[#76C7C0] animate-pulse" />
//               <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#76C7C0]">
//                 24/7 Rapid Response Unit
//               </span>
//             </motion.div>

//             {/* Completely New Intersecting Typography */}
//             <motion.h1 
//               variants={fadeInUp}
//               className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white uppercase"
//             >
//               Advanced <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] drop-shadow-[0_0_15px_rgba(79,163,165,0.2)]">
//                 Pest Isolation
//               </span> <br />
//               & Control
//             </motion.h1>

//             {/* Completely Fresh Target Copy For Sidcup */}
//             <motion.p 
//               variants={fadeInUp}
//               className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed"
//             >
//               Shielding residential estates and commercial assets across Sidcup and the greater London area. Deploying scientific, certified extraction methods to ensure your environment remains completely sterile.
//             </motion.p>

//             {/* Premium Teal Theme Action Triggers */}
//             <motion.div 
//               variants={fadeInUp}
//               className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
//             >
//               <Link 
//                 to="/contact-us" 
//                 className="relative overflow-hidden bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#010a12] font-extrabold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-[#4FA3A5]/20 group"
//               >
//                 <span className="relative z-10 inline-flex items-center gap-2">
//                   Enquire Now
//                   <span className="transition-transform group-hover:translate-x-1 font-semibold">➔</span>
//                 </span>
//               </Link>

//               {/* Sophisticated Contact Layout */}
//               <div className="flex flex-col">
//                 <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Emergency Line</span>
//                 <a 
//                   href="tel:07440112498" 
//                   className="text-xl md:text-2xl font-black text-white hover:text-[#76C7C0] transition-colors tracking-tight mt-0.5"
//                 >
//                   07440 112498
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE: Unique Floating Glassmorphic Quick Info Card (New Element) */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
//           >
//             <div className="relative p-6 md:p-8 rounded-3xl bg-[#031E39]/30 border border-white/10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#4FA3A5]/30 transition-all duration-500">
//               {/* Subtle background card pattern */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#76C7C0]/10 to-transparent rounded-bl-full pointer-events-none" />
              
//               <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-5 border-b border-white/5 pb-3">
//                 Local Sidcup Coverage
//               </h3>
              
//               <ul className="space-y-4">
//                 {[
//                   { title: "Response Window", desc: "Under 2 hours local deployment" },
//                   { title: "Compliance", desc: "BPCA guidelines & fully insured" },
//                   { title: "Treatments", desc: "100% Eco-sensitive & pet safe alternatives" },
//                   { title: "Clearance Rate", desc: "Guaranteed eradication assurance" }
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3.5">
//                     <span className="mt-1 h-2 w-2 rounded-full bg-[#76C7C0] shrink-0 shadow-[0_0_8px_#76C7C0]" />
//                     <div>
//                       <h4 className="text-xs uppercase tracking-wider font-bold text-[#4FA3A5]">{item.title}</h4>
//                       <p className="text-xs md:text-sm text-slate-300 mt-0.5 font-medium">{item.desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               {/* Decorative mini branding badge inside the card */}
//               <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase font-bold text-slate-400">
//                 <span>London Borough of Bexley</span>
//                 <span className="text-[#76C7C0]">Verified ✔</span>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>

//     </div>
//   );
// }
















// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 18 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.45, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="relative min-h-screen bg-[#010a12] text-white overflow-hidden font-sans flex items-center pt-24 md:pt-28">
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute -top-[20%] -left-[10%] w-[420px] h-[420px] rounded-full bg-[#4FA3A5]/10 blur-3xl pointer-events-none" />
//         <div className="absolute top-[40%] right-[-10%] w-[360px] h-[360px] rounded-full bg-[#76C7C0]/5 blur-3xl pointer-events-none" />

//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/mobile-herohome.webp"
//             alt="Pesrid Services Sidcup London"
//             className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
//             loading="eager"
//             decoding="async"
//             fetchPriority="high"
//           />
//         </picture>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#010a12]/80 via-[#010a12]/95 to-[#010a12]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 py-12 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.08 }}
//             className="lg:col-span-7 space-y-6 md:space-y-7 text-left"
//           >
//             <motion.div
//               variants={fadeInUp}
//               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4FA3A5]/10 to-[#76C7C0]/10 border border-[#4FA3A5]/20"
//             >
//               <span className="w-2 h-2 rounded-full bg-[#76C7C0]" />
//               <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#76C7C0]">
//                 24/7 Rapid Response Unit
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white uppercase"
//             >
//               Advanced <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//                 Pest Isolation
//               </span>{" "}
//               <br />
//               & Control
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed"
//             >
//               Shielding residential estates and commercial assets across Sidcup
//               and the greater London area. Deploying scientific, certified
//               extraction methods to ensure your environment remains completely
//               sterile.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
//             >
//               <Link
//                 to="/contact-us"
//                 className="relative overflow-hidden bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#010a12] font-extrabold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-transform duration-200 active:scale-95 shadow-lg shadow-[#4FA3A5]/20 group"
//               >
//                 <span className="relative z-10 inline-flex items-center gap-2">
//                   Enquire Now
//                   <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold">
//                     ➔
//                   </span>
//                 </span>
//               </Link>

//               <div className="flex flex-col">
//                 <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
//                   Emergency Line
//                 </span>
//                 <a
//                   href="tel:07440112498"
//                   className="text-xl md:text-2xl font-black text-white hover:text-[#76C7C0] transition-colors tracking-tight mt-0.5"
//                 >
//                   07440 112498
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
//             className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
//           >
//             <div className="relative p-6 md:p-8 rounded-3xl bg-[#031E39]/70 border border-white/10 shadow-xl overflow-hidden hover:border-[#4FA3A5]/30 transition-colors duration-300">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#76C7C0]/10 to-transparent rounded-bl-full pointer-events-none" />

//               <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-5 border-b border-white/5 pb-3">
//                 Local Sidcup Coverage
//               </h3>

//               <ul className="space-y-4">
//                 {[
//                   {
//                     title: "Response Window",
//                     desc: "Under 2 hours local deployment",
//                   },
//                   {
//                     title: "Compliance",
//                     desc: "BPCA guidelines & fully insured",
//                   },
//                   {
//                     title: "Treatments",
//                     desc: "100% Eco-sensitive & pet safe alternatives",
//                   },
//                   {
//                     title: "Clearance Rate",
//                     desc: "Guaranteed eradication assurance",
//                   },
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3.5">
//                     <span className="mt-1 h-2 w-2 rounded-full bg-[#76C7C0] shrink-0" />
//                     <div>
//                       <h4 className="text-xs uppercase tracking-wider font-bold text-[#4FA3A5]">
//                         {item.title}
//                       </h4>
//                       <p className="text-xs md:text-sm text-slate-300 mt-0.5 font-medium">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase font-bold text-slate-400">
//                 <span>London Borough of Bexley</span>
//                 <span className="text-[#76C7C0]">Verified ✔</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }













import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#120c1a] text-white overflow-hidden font-sans flex items-center pt-24 md:pt-28">
      {/* Background Gradients & Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Glow effects matching logo colors */}
        <div className="absolute -top-[20%] -left-[10%] w-[420px] h-[420px] rounded-full bg-[#4B1B67]/20 blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] right-[-10%] w-[360px] h-[360px] rounded-full bg-[#A35C37]/15 blur-3xl pointer-events-none" />

        <picture>
          <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
          <img
            src="/images/herohome.webp"
            alt="SwiftPes Services Worcester"
            className="w-full h-full object-cover object-center opacity-50 select-none pointer-events-none"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {/* Lightened gradient overlay for better image clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120c1a]/60 via-[#120c1a]/85 to-[#120c1a]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="lg:col-span-7 space-y-6 md:space-y-7 text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4B1B67]/30 to-[#A35C37]/30 border border-[#4B1B67]/40 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#A35C37]" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#A35C37]">
                 Rapid Pest Response
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white uppercase drop-shadow-md"
            >
              Swift Action <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d277d] to-[#b86d42]">
                Safe Solutions
              </span>{" "}
              <br />
              & Total Control
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed drop-shadow"
            >
              Shielding residential properties and commercial assets across Worcester. 
              Deploying advanced, certified pest extraction and eradication methods to 
              ensure your environment remains completely pest-free and secure.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
            >
              <Link
                to="/contact-us"
                className="relative overflow-hidden bg-gradient-to-r from-[#4B1B67] to-[#A35C37] text-white font-extrabold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-transform duration-200 active:scale-95 shadow-lg shadow-[#4B1B67]/30 group"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Enquire Now
                  <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold">
                    ➔
                  </span>
                </span>
              </Link>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">
                  Emergency Line
                </span>
                <a
                  href="tel:07440112498"
                  className="text-xl md:text-2xl font-black text-white hover:text-[#A35C37] transition-colors tracking-tight mt-0.5"
                >
                  07438 164691
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="relative p-6 md:p-8 rounded-3xl bg-[#1b1224]/80 border border-white/10 shadow-2xl overflow-hidden hover:border-[#4B1B67]/50 transition-colors duration-300 backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#A35C37]/15 to-transparent rounded-bl-full pointer-events-none" />

              <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-5 border-b border-white/5 pb-3">
                Local Worcester Coverage
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Response Window",
                    desc: "Under 2 hours local deployment across Worcester",
                  },
                  {
                    title: "Compliance",
                    desc: "BPCA guidelines aligned & fully insured team",
                  },
                  {
                    title: "Treatments",
                    desc: "100% Eco-sensitive & pet safe alternatives",
                  },
                  {
                    title: "Clearance Rate",
                    desc: "Guaranteed eradication and protection assurance",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#A35C37] shrink-0" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#A35C37]">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-200 mt-0.5 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase font-bold text-slate-300">
                <span>SwiftPes Services Worcester</span>
                <span className="text-[#A35C37]">Verified ✔</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}