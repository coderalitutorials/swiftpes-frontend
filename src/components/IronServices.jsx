



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// // Brand Color Standards mapped precisely to PesSave Identity
// const brandColors = {
//   brown: "#5C3A21",
//   yellow: "#F1C423",
//   textMain: "#1A1512",
// };

// // Completely Fresh and New Descriptive Pest Data
// const homeServices = [
//   {
//     id: 1,
//     num: "01.",
//     title: "Mice & Rodent Control",
//     image: "/images/rodents.webp",
//     details:
//       "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around your property floorboards.",
//   },
//   {
//     id: 2,
//     num: "02.",
//     title: "Wasp Nest Eradication",
//     image: "/images/wasps.webp",
//     details:
//       "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, eco-certified solutions.",
//   },
//   {
//     id: 3,
//     num: "03.",
//     title: "Heat Treatment for Bed Bugs",
//     image: "/images/bedbugs.webp",
//     details:
//       "Premium chemical-free thermal heat solutions engineered to penetrate deep mattress fibers, joints, and luxury textiles, ensuring complete elimination in a single visit.",
//   },
// ];

// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.2 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 35 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
// };

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-white py-20 sm:py-28 text-neutral-900 overflow-hidden z-20 relative w-full">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* --- SECTION HEADER: Exact Layout Match --- */}
//         <div className="text-left max-w-3xl mb-16 sm:mb-24 space-y-3">
//           <div className="flex items-center gap-3">
//             <span className="w-12 h-[2px] bg-[#F1C423] block"></span>
//             <span className="text-[#F1C423] text-xs font-black uppercase tracking-[0.25em] block">
//               Services
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1512] leading-tight uppercase">
//             Offering best pest <br />
//             management services
//           </h2>
//         </div>

//         {/* --- SERVICES STACK: Exact Split Row Structure --- */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="space-y-20 sm:space-y-32"
//         >
//           {homeServices.map((service, index) => {
//             const isEven = index % 2 === 1;
            
//             return (
//               <motion.div
//                 key={service.id}
//                 variants={fadeUp}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24 cursor-pointer select-none ${
//                   isEven ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Visual Image Screen Container */}
//                 <div className="w-full lg:w-1/2 h-[300px] sm:h-[420px] overflow-hidden relative bg-neutral-50 shadow-xl rounded-2xl border border-neutral-100 shrink-0">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-[#5C3A21]/5 group-hover:bg-transparent transition-colors duration-300" />
//                 </div>

//                 {/* Content Side Container with Dynamic Linking Lines */}
//                 <div className="w-full lg:w-1/2 text-left relative flex flex-col justify-center">
                  
//                   {/* Subtle Connecting Line Aesthetic */}
//                   <div className={`hidden lg:block absolute top-7 w-16 h-[1px] bg-neutral-200 transition-colors group-hover:bg-[#F1C423] ${
//                     isEven ? "-right-20" : "-left-24"
//                   }`} />

//                   {/* Serial Number Counter */}
//                   <span className="text-sm font-black text-[#F1C423] tracking-widest block mb-4">
//                     {service.num}
//                   </span>

//                   {/* Service Headline Title */}
//                   <h3 className="text-2xl sm:text-4xl font-black text-[#1A1512] uppercase tracking-tight mb-4 group-hover:text-[#5C3A21] transition-colors duration-200">
//                     {service.title}
//                   </h3>

//                   {/* Core Paragraph description text block */}
//                   <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-xl">
//                     {service.details}
//                   </p>

//                   {/* Updated Interactive Action Trigger Button Anchor */}
//                   <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#1A1512] uppercase tracking-widest group-hover:text-[#F1C423] transition-colors duration-200 w-fit">
//                     <span>Book Your Inspection</span>
//                     <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* --- GLOBAL CALL TO ACTION: View More Services Layout --- */}
//         <motion.div 
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-center mt-20 sm:mt-28"
//         >
//           <motion.button
//             whileHover={{ scale: 1.02, backgroundColor: "#5C3A21", borderColor: "#5C3A21", color: "#FFFFFF" }}
//             whileTap={{ scale: 0.98 }}
//             onClick={(e) => {
//               e.stopPropagation(); // Main section grid redirection clear link structure
//               navigate("/services");
//             }}
//             className="inline-flex items-center gap-3 bg-transparent text-[#5C3A21] border-2 border-[#5C3A21] font-black text-xs sm:text-sm uppercase tracking-widest px-8 sm:px-10 py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
//           >
//             <span>View More Services</span>
//             <span className="text-xs">➔</span>
//           </motion.button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ShieldAlert, Sparkles, Crosshair, ArrowRight, CornerDownRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Exclusion Protocol",
//       details: "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around floorboards.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Rapid Neutralization",
//       details: "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, eco-certified solutions.",
//     },
//     {
//       id: "03",
//       title: "Thermal Bed Bug Elimination",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Biosecurity Heat",
//       details: "Premium chemical-free thermal heat solutions engineered to penetrate deep mattress fibers and luxury textiles, ensuring complete elimination in a single visit.",
//     },
//   ];

//   return (
//     /* Added group/section to monitor hover states across the entire container boundaries */
//     <section className="bg-[#020b14] py-24 sm:py-32 text-white relative overflow-hidden z-30 border-b border-white/[0.04] group/section">
      
//       {/* GLOBAL BACKGROUND LIGHTNING MATRIX EFFECTS */}
//       {/* 1. Structural Sci-Fi Matrix Grid Lines - Sparks up under whole section hover */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none transition-all duration-1000 group-hover/section:bg-[size:2rem_2rem] group-hover/section:opacity-40" />
      
//       {/* 2. Top-Left & Top-Right Global Corner Lightning Rays */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4FA3A5]/0 via-[#76C7C0]/0 to-transparent rounded-full blur-[140px] pointer-events-none opacity-0 group-hover/section:opacity-100 group-hover/section:from-[#4FA3A5]/15 transition-all duration-1000 mix-blend-screen" />
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#76C7C0]/0 via-[#4FA3A5]/0 to-transparent rounded-full blur-[140px] pointer-events-none opacity-0 group-hover/section:opacity-100 group-hover/section:from-[#76C7C0]/15 transition-all duration-1000 mix-blend-screen" />

//       {/* 3. Bottom-Left & Bottom-Right Global Corner Lightning Rays */}
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#76C7C0]/0 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none opacity-0 group-hover/section:opacity-100 group-hover/section:from-[#76C7C0]/10 transition-all duration-1000 mix-blend-screen" />
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#4FA3A5]/0 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none opacity-0 group-hover/section:opacity-100 group-hover/section:from-[#4FA3A5]/10 transition-all duration-1000 mix-blend-screen" />

//       {/* Extreme Center Backdrop Ambient Glows */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#4FA3A5]/10 to-transparent rounded-full blur-[120px] pointer-events-none transition-all duration-700 group-hover/section:from-[#4FA3A5]/25" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* CENTERED TECH HEADER COMPONENT */}
//         <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
//           <div className="inline-flex items-center gap-2.5 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//             <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-bold">System Capabilities</span>
//           </div>
          
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]">
//             Enterprise Pest Suppression <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//               & Asset Protection
//             </span>
//           </h2>
//           <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
//             Deploying algorithmic remediation matrices and structural fortification systems across the Sidcup regional infrastructure.
//           </p>
//         </div>

//         {/* ISOMETRIC TECH MATRIX GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl relative">
          
//           {servicesData.map((service) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 className="bg-[#020b14] p-8 sm:p-10 relative flex flex-col justify-between min-h-[460px] group cursor-pointer transition-all duration-500 overflow-hidden"
//               >
//                 {/* 1. BACKLIT LIGHTNING CANVAS LAYER (Strictly Behind Everything) */}
//                 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//                   {/* Neon Cyan Lightning Strike - Burst out behind image layer */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#4FA3A5]/25 via-[#76C7C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-110 group-hover:scale-100 mix-blend-screen" />
                  
//                   {/* High Intense Radial Backlight Glow Source */}
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#4FA3A5]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />
//                 </div>

//                 {/* 2. CRYSTAL CLEAR IMAGE LAYER (Resting safely on top of backlight aura) */}
//                 <div className="absolute inset-0 z-10 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
//                   <img 
//                     src={service.image} 
//                     alt={service.title} 
//                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 filter contrast-[1.02] brightness-95 saturate-[0.95] group-hover:scale-105 object-center origin-center"
//                   />
//                   {/* Soft bottom edge feathering to ensure dark theme layout unity */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
//                 </div>

//                 {/* Grid Micro Component Corners Decoration */}
//                 <div className="absolute top-4 right-4 text-white/40 group-hover:text-[#76C7C0] transition-colors font-mono text-xs select-none relative z-30">
//                   +{service.id}
//                 </div>

//                 {/* TOP BLOCK ELEMENTS (Foreground Content) */}
//                 <div className="space-y-6 relative z-20">
//                   <div className="flex items-center justify-between">
//                     {/* Specialized Vector Badge Container */}
//                     <div className="w-12 h-12 rounded-2xl bg-[#020b14]/90 border border-white/10 flex items-center justify-center group-hover:border-[#4FA3A5] group-hover:bg-[#4FA3A5]/20 transition-all duration-300 shadow-xl backdrop-blur-md">
//                       <Icon className="w-5 h-5 text-slate-200 group-hover:text-[#76C7C0] transition-colors" strokeWidth={1.5} />
//                     </div>
                    
//                     {/* Dynamic Tech Function Code Label */}
//                     <span className="text-[9px] font-mono tracking-widest text-white bg-[#020b14]/90 border border-white/15 px-2.5 py-1 rounded-md uppercase group-hover:border-[#76C7C0] transition-all backdrop-blur-sm">
//                       {service.tag}
//                     </span>
//                   </div>

//                   <div className="space-y-3">
//                     <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#76C7C0] transition-colors duration-300 [text-shadow:0_3px_12px_rgba(0,0,0,0.95)]">
//                       {service.title}
//                     </h3>
//                     <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-300 group-hover:text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">
//                       {service.details}
//                     </p>
//                   </div>
//                 </div>

//                 {/* BOTTOM ACTION ROW CONTROLLER */}
//                 <div className="pt-12 relative z-20 flex items-center justify-between border-t border-white/[0.15] group-hover:border-[#4FA3A5]/40 transition-all duration-500">
//                   <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white uppercase transition-colors [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]">
//                     <CornerDownRight className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                     <span>Deploy Tech Unit</span>
//                   </div>

//                   <div className="w-8 h-8 rounded-xl bg-[#020b14]/90 border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-[#76C7C0] group-hover:bg-[#4FA3A5]/40 group-hover:translate-x-1 shadow-lg backdrop-blur-sm">
//                     <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
//                   </div>
//                 </div>

//                 {/* Card Border Line Glow Tracker */}
//                 <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4FA3A5]/0 to-transparent group-hover:via-[#76C7C0] transition-all duration-700 z-30" />
//               </div>
//             );
//           })}

//         </div>

//         {/* BOTTOM GLOBAL METRIC LINKING CONTROL */}
//         <div className="text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/10 hover:border-[#4FA3A5]/40 text-white font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg backdrop-blur-md cursor-pointer"
//           >
//             <span>VIEW ALL OPERATIONAL MODES</span>
//             <span className="text-xs text-[#76C7C0] group-hover:translate-x-1 transition-transform">➔</span>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ShieldAlert, Sparkles, Crosshair, ArrowRight, CornerDownRight } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Exclusion Protocol",
//       details: "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around floorboards.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Rapid Neutralization",
//       details: "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, eco-certified solutions.",
//     },
//     {
//       id: "03",
//       title: "Thermal Bed Bug Elimination",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Biosecurity Heat",
//       details: "Premium chemical-free thermal heat solutions engineered to penetrate deep mattress fibers and luxury textiles, ensuring complete elimination in a single visit.",
//     },
//   ];

//   return (
//     /* group/section keeps monitoring hover states for the entire block container */
//     <section className="bg-[#020b14] py-24 sm:py-32 text-white relative overflow-hidden z-30 border-b border-white/[0.04] group/section">
      
//       {/* ---------------------------------------------------------------------- */}
//       {/* NEW INTENSE BACKGROUND LIGHTNING GLOWS (Triggers on Section Hover)     */}
//       {/* ---------------------------------------------------------------------- */}
      
//       {/* Top Lightning Aura - Floods the area above the cards (Marked Area) */}
//       <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] h-[250px] bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] rounded-full blur-[130px] pointer-events-none opacity-0 group-hover/section:opacity-25 transition-all duration-700 ease-out mix-blend-screen" />

//       {/* Left & Right Peripheral Ambient Thunder Flares */}
//       <div className="absolute top-1/4 left-0 w-[400px] h-[500px] bg-[#4FA3A5] rounded-full blur-[150px] pointer-events-none opacity-0 group-hover/section:opacity-20 transition-all duration-700 ease-out mix-blend-screen" />
//       <div className="absolute top-1/4 right-0 w-[400px] h-[500px] bg-[#76C7C0] rounded-full blur-[150px] pointer-events-none opacity-0 group-hover/section:opacity-20 transition-all duration-700 ease-out mix-blend-screen" />

//       {/* Bottom Glow Matrix - Activates under the cards area */}
//       <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[70%] h-[200px] bg-[#4FA3A5] rounded-full blur-[140px] pointer-events-none opacity-0 group-hover/section:opacity-15 transition-all duration-700 ease-out mix-blend-screen" />

//       {/* Sci-Fi Grid Lines Layer */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none transition-all duration-700 group-hover/section:opacity-30" />

//       {/* ---------------------------------------------------------------------- */}

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* CENTERED TECH HEADER COMPONENT */}
//         <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
//           <div className="inline-flex items-center gap-2.5 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//             <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-bold">System Capabilities</span>
//           </div>
          
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]">
//             Enterprise Pest Suppression <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//               & Asset Protection
//             </span>
//           </h2>
//           <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
//             Deploying algorithmic remediation matrices and structural fortification systems across the Sidcup regional infrastructure.
//           </p>
//         </div>

//         {/* ISOMETRIC TECH MATRIX GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl relative">
          
//           {servicesData.map((service) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 className="bg-[#020b14] p-8 sm:p-10 relative flex flex-col justify-between min-h-[460px] group cursor-pointer transition-all duration-500 overflow-hidden"
//               >
//                 {/* Individual Card Background Lightning Effects */}
//                 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#4FA3A5]/25 via-[#76C7C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-110 group-hover:scale-100 mix-blend-screen" />
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#4FA3A5]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />
//                 </div>

//                 {/* SOLID CRISP IMAGE LAYER (Perfect Visibility As Per Screenshot) */}
//                 <div className="absolute inset-0 z-10 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
//                   <img 
//                     src={service.image} 
//                     alt={service.title} 
//                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 filter contrast-[1.02] brightness-95 saturate-[0.95] group-hover:scale-105 object-center origin-center"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
//                 </div>

//                 {/* Micro Components Inside Card */}
//                 <div className="absolute top-4 right-4 text-white/40 group-hover:text-[#76C7C0] transition-colors font-mono text-xs select-none relative z-30">
//                   +{service.id}
//                 </div>

//                 {/* Content Layer */}
//                 <div className="space-y-6 relative z-20">
//                   <div className="flex items-center justify-between">
//                     <div className="w-12 h-12 rounded-2xl bg-[#020b14]/90 border border-white/10 flex items-center justify-center group-hover:border-[#4FA3A5] group-hover:bg-[#4FA3A5]/20 transition-all duration-300 shadow-xl backdrop-blur-md">
//                       <Icon className="w-5 h-5 text-slate-200 group-hover:text-[#76C7C0] transition-colors" strokeWidth={1.5} />
//                     </div>
                    
//                     <span className="text-[9px] font-mono tracking-widest text-white bg-[#020b14]/90 border border-white/15 px-2.5 py-1 rounded-md uppercase group-hover:border-[#76C7C0] transition-all backdrop-blur-sm">
//                       {service.tag}
//                     </span>
//                   </div>

//                   <div className="space-y-3">
//                     <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#76C7C0] transition-colors duration-300 [text-shadow:0_3px_12px_rgba(0,0,0,0.95)]">
//                       {service.title}
//                     </h3>
//                     <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-300 group-hover:text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">
//                       {service.details}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Footer Action Row */}
//                 <div className="pt-12 relative z-20 flex items-center justify-between border-t border-white/[0.15] group-hover:border-[#4FA3A5]/40 transition-all duration-500">
//                   <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white uppercase transition-colors [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]">
//                     <CornerDownRight className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                     <span>Deploy Tech Unit</span>
//                   </div>

//                   <div className="w-8 h-8 rounded-xl bg-[#020b14]/90 border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-[#76C7C0] group-hover:bg-[#4FA3A5]/40 group-hover:translate-x-1 shadow-lg backdrop-blur-sm">
//                     <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
//                   </div>
//                 </div>

//                 <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4FA3A5]/0 to-transparent group-hover:via-[#76C7C0] transition-all duration-700 z-30" />
//               </div>
//             );
//           })}

//         </div>

//         {/* BOTTOM GLOBAL METRIC LINKING CONTROL */}
//         <div className="text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/10 hover:border-[#4FA3A5]/40 text-white font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg backdrop-blur-md cursor-pointer"
//           >
//             <span>VIEW ALL OPERATIONAL MODES</span>
//             <span className="text-xs text-[#76C7C0] group-hover:translate-x-1 transition-transform">➔</span>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }










import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  Sparkles,
  Crosshair,
  ArrowRight,
  CornerDownRight,
} from "lucide-react";

export default function PesSaveServices() {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: "01",
      title: "Mice & Rodent Control",
      icon: ShieldAlert,
      image: "/images/rodents.webp",
      tag: "Exclusion Method",
      details:
        "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around your property.",
    },
    {
      id: "02",
      title: "Wasp Nest Eradication",
      icon: Crosshair,
      image: "/images/wasps.webp",
      tag: "Rapid Treatment",
      details:
        "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, local response teams.",
    },
    {
      id: "03",
      title: "Bed Bug Heat Elimination",
      icon: Sparkles,
      image: "/images/bedbugs.webp",
      tag: "Thermal Solution",
      details:
        "Premium eco-friendly thermal heat solutions engineered to penetrate deep mattress fibers and luxury textiles, ensuring complete elimination in a single visit.",
    },
  ];

  return (
    <section className="bg-[#120c1a] py-24 sm:py-32 text-white relative overflow-hidden z-30 border-b border-white/[0.04] group/section">
      {/* Brand Ambient Glows */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[180px] bg-[#4B1B67]/15 rounded-full blur-3xl pointer-events-none opacity-0 group-hover/section:opacity-60 transition-opacity duration-300" />
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[160px] bg-[#A35C37]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover/section:opacity-40 transition-opacity duration-300" />

      {/* Grid Pattern Layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 animate-[fadeUp_0.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A35C37] opacity-90" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#A35C37] uppercase font-bold">
              Our Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]">
            Professional Pest Control <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d277d] to-[#b86d42]">
              & Property Protection
            </span>
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Providing reliable pest eradication services and preventive structural 
            fortification lines across the local Worcester region.
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl relative">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => navigate("/contact-us")}
                className="bg-[#120c1a] p-8 sm:p-10 relative flex flex-col justify-between min-h-[460px] group cursor-pointer transition-transform duration-200 overflow-hidden hover:-translate-y-1 animate-[fadeUp_0.7s_ease-out_both]"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Overlay Brand Hover Shimmer */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4B1B67]/20 via-[#A35C37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Background Image & Dark Layer */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-300 brightness-90 group-hover:scale-[1.03] object-center origin-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120c1a] via-[#120c1a]/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
                </div>

                {/* Index Number */}
                <div className="absolute top-4 right-4 text-white/30 group-hover:text-[#A35C37] transition-colors duration-200 font-mono text-xs select-none z-30">
                  +{service.id}
                </div>

                {/* Card Main Content */}
                <div className="space-y-6 relative z-20">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#120c1a]/95 border border-white/10 flex items-center justify-center group-hover:border-[#4B1B67] group-hover:bg-[#4B1B67]/30 transition-colors duration-200 shadow-lg">
                      <Icon
                        className="w-5 h-5 text-slate-200 group-hover:text-[#A35C37] transition-colors duration-200"
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className="text-[9px] font-mono tracking-widest text-white bg-[#120c1a]/90 border border-white/15 px-2.5 py-1 rounded-md uppercase group-hover:border-[#A35C37] transition-colors duration-200">
                      {service.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#A35C37] transition-colors duration-200 [text-shadow:0_3px_12px_rgba(0,0,0,0.95)]">
                      {service.title}
                    </h3>

                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-200 group-hover:text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">
                      {service.details}
                    </p>
                  </div>
                </div>

                {/* Card Footer Button Action */}
                <div className="pt-12 relative z-20 flex items-center justify-between border-t border-white/[0.15] group-hover:border-[#4B1B67]/40 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white uppercase [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]">
                    <CornerDownRight className="w-3.5 h-3.5 text-[#A35C37]" />
                    <span>Book Specialist</span>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-[#120c1a]/90 border border-white/15 flex items-center justify-center transition-transform duration-200 group-hover:border-[#A35C37] group-hover:bg-[#4B1B67]/50 group-hover:translate-x-1 shadow-lg">
                    <ArrowRight
                      className="w-3.5 h-3.5 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Bottom Border Accent Highlight */}
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A35C37]/0 to-transparent group-hover:via-[#A35C37] transition-colors duration-300 z-30" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 hover:border-[#4B1B67]/40 text-white font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-transform duration-200 group shadow-lg cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>VIEW ALL SERVICES</span>
            <span className="text-xs text-[#A35C37] group-hover:translate-x-1 transition-transform duration-200">
              ➔
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}