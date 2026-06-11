

// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-white text-neutral-800 min-h-screen font-sans antialiased w-full overflow-x-hidden">
//       <section className="relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#5C3A21] w-full">
//         <div
//           className="
//             absolute inset-0 z-0
//             bg-cover bg-no-repeat
//             bg-[position:center_45%]
//             sm:bg-[position:center_42%]
//             lg:bg-[position:center_45%]
//             opacity-70
//             select-none pointer-events-none
//           "
//           style={{
//             backgroundImage: "url('/images/serviceshero.webp')",
//           }}
//         />

//         <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#5C3A21]/45 via-[#5C3A21]/55 to-[#5C3A21]/75" />

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 pt-24 pb-28">
//           <div className="flex items-center justify-center gap-3">
//             <span className="w-8 h-[2px] bg-[#E5B228]" />
//             <span className="text-[#F1C423] text-xs font-black uppercase tracking-[0.3em]">
//               Smart Protection
//             </span>
//             <span className="w-8 h-[2px] bg-[#E5B228]" />
//           </div>

//           <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             Our Services
//           </h1>

//           <p className="text-neutral-100 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal pt-1">
//             Explore our professional high-efficiency responsive solutions
//             structured to provide clean, pest-free living environments.
//           </p>
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

//       <nav className="bg-white/90 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//           <div className="flex flex-wrap gap-1.5 items-center justify-center">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-lg border ${
//                     isActive
//                       ? "bg-[#5C3A21] text-white border-[#5C3A21] shadow-md shadow-[#5C3A21]/10"
//                       : "bg-transparent text-neutral-500 border-transparent hover:text-[#5C3A21] hover:bg-neutral-50"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 max-w-6xl mx-auto px-6 relative z-20 bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
//           {filteredServices.map((service, index) => {
//             const isStaggered = index % 2 !== 0;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group relative flex flex-col items-center w-full cursor-pointer select-none transition-transform duration-300 ${
//                   isStaggered ? "md:mt-24" : "md:mb-12"
//                 }`}
//               >
//                 <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-neutral-100 relative bg-neutral-100">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
//                     loading="lazy"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />

//                   <div className="absolute inset-0 bg-[#5C3A21]/5 group-hover:bg-transparent transition-colors duration-300" />
//                 </div>

//                 <div className="w-[85%] sm:w-[80%] bg-white text-center p-6 -mt-16 shadow-xl relative z-30 rounded-xl border border-neutral-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
//                   <div className="flex items-center justify-center gap-1.5 mb-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#F1C423]" />
//                     <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
//                       {service.cat}
//                     </span>
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-black tracking-tight text-neutral-900 uppercase group-hover:text-[#5C3A21] transition-colors duration-200">
//                     {service.title}
//                   </h3>

//                   <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal max-w-sm mx-auto line-clamp-3">
//                     {service.details}
//                   </p>

//                   <div className="mt-5 pt-2.5 border-t border-neutral-100 flex items-center justify-center">
//                     <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#5C3A21] group-hover:text-[#F1C423] transition-colors flex items-center gap-1">
//                       <span>Book Service</span>
//                       <span className="transform group-hover:translate-x-1 transition-transform duration-300">
//                         →
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {filteredServices.length === 0 && (
//           <div className="text-center py-20 border border-neutral-100 bg-neutral-50/50 rounded-xl max-w-xl mx-auto shadow-sm">
//             <p className="text-xs font-black uppercase tracking-widest text-neutral-400">
//               No services found matching this category.
//             </p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;













// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   ShieldAlert, 
//   ArrowUpRight, 
//   Activity, 
//   Cpu, 
//   Zap, 
//   Fingerprint, 
//   Layers, 
//   Eye 
// } from "lucide-react";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE",
//       spec: "SUBTERRANEAN FLUSHING",
//       details: "High-performance deployment targeting deep structural micro-colonies. We dismantle hidden underground biological structures using specialized subterranean baiting arrays to clear pathways and enforce total blockades.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL",
//       spec: "THERMAL EXTINCTION PROTOCOL",
//       details: "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       details: "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       threat: "MODERATE",
//       spec: "PERIMETER EXTRACTION",
//       details: "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL",
//       spec: "GEL SYNTHESIS VECTORS",
//       details: "Enterprise-grade gel synthesis matrices combined with high-velocity flushing vectors. Eradicates deeply rooted infesting structures inside high-heat commercial culinary and industrial sectors.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL",
//       spec: "MULTI-STAGE BARRIER MESH",
//       details: "Multi-stage digital tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor vector highways and blocks ongoing return migrations completely.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "BIOLOGICAL BREAKING MIST",
//       details: "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to clean high-traffic domestic environments.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-PRESSURE ELEVATION SHIELD",
//       details: "High-altitude neutralizing deployment utilizing high-pressure localized containment vectors. Provides instant structural safety clearance for critical residential elevations and perimeter points.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       threat: "ECOLOGICAL ECO",
//       spec: "LIVE CAPTURE RELOCATION",
//       details: "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "HIGH-TENSILE CEILING TRAPS",
//       details: "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL",
//       spec: "CHEMICAL DECONTAMINATION",
//       details: "Premium multi-point chemical decontamination fields combined with absolute structural gap bridging. Seals building envelopes to ensure long-term resistance against returning biological invaders.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL",
//       spec: "SENSORY DEFENSE MATRICES",
//       details: "Architectural wire tensions, custom heavy nets, and state-of-the-art sensory defense lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#01060c] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#4FA3A5]/30">
      
//       {/* HUD DASHBOARD SCI-FI STRUCTURE LINES */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
//       <div className="absolute left-[8%] inset-y-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none hidden lg:block" />
//       <div className="absolute right-[8%] inset-y-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none hidden lg:block" />

//       {/* ================= NEW ASYMMETRICAL INTERACTIVE HERO ================= */}
//       <section className="relative pt-48 pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           <div className="lg:col-span-7 space-y-6 text-left">
//             <div className="inline-flex items-center gap-2 bg-[#4FA3A5]/5 border border-[#4FA3A5]/20 px-3 py-1 rounded-md">
//               <Fingerprint className="w-3.5 h-3.5 text-[#76C7C0]" />
//               <span className="text-[#76C7C0] text-[10px] font-mono tracking-widest uppercase">
//                 SYSTEM DEPLOYMENT CODES v2.6
//               </span>
//             </div>

//             <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase leading-none">
//               TACTICAL <br />
//               <span className="bg-gradient-to-r from-white via-slate-400 to-[#4FA3A5] bg-clip-text text-transparent">
//                 PROTECTION
//               </span>
//             </h1>

//             <p className="text-slate-400 text-sm max-w-xl font-normal leading-relaxed">
//               Industrial mitigation architecture optimized for deep-nesting vectors. We inject real-time molecular blocks and mechanical network controls to override biological environments completely.
//             </p>
//           </div>

//           <div className="lg:col-span-5 relative w-full h-[180px] lg:h-[260px] rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#041122] to-black p-6 overflow-hidden flex flex-col justify-between group shadow-2xl">
//             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#76C7C0_1px,transparent_1px)] bg-[size:16px_16px]" />
            
//             <div className="flex justify-between items-start relative z-10">
//               <Cpu className="w-6 h-6 text-[#4FA3A5] animate-pulse" />
//               <div className="text-right font-mono text-[9px] text-slate-500">
//                 <div>NETWORK: ENCRYPTED</div>
//                 <div>STATUS: ACTIVE DETECT</div>
//               </div>
//             </div>

//             <div className="relative z-10">
//               <div className="text-[10px] font-mono text-[#76C7C0] mb-1">// COVERAGE SCHEMA</div>
//               <div className="text-white text-lg font-bold tracking-tight uppercase">LONDON ASSIGNMENT AREA</div>
//             </div>

//             {/* Subtle background graphics */}
//             <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-[#4FA3A5]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#76C7C0]/20 transition-all duration-700" />
//           </div>

//         </div>
//       </section>

//       {/* ================= MINIMALIST SAAS FILTER SYSTEM ================= */}
//       <nav className="bg-[#01060c]/80 backdrop-blur-md border-b border-white/[0.05] sticky top-0 z-50 py-5">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          
//           <div className="flex items-center gap-3">
//             <div className="w-2 h-2 rounded-full bg-[#76C7C0] animate-ping" />
//             <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400">
//               Select Area Operations Matrix:
//             </span>
//           </div>

//           <div className="flex flex-wrap gap-1.5 bg-black/50 p-1 rounded-xl border border-white/[0.04]">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-lg ${
//                     isActive
//                       ? "bg-[#4FA3A5] text-black font-extrabold shadow-md shadow-[#4FA3A5]/10"
//                       : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>

//         </div>
//       </nav>

//       {/* ================= NEW SPLIT-PANE GRID SYSTEM (NO STATIC CARDS) ================= */}
//       <section className="pt-20 pb-36 max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
//         <div className="space-y-16">
//           <AnimatePresence mode="popLayout">
//             {filteredServices.map((service, index) => {
//               return (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-120px" }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.45, ease: "easeOut" }}
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className="group grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/[0.04] bg-gradient-to-r from-transparent via-white/[0.01] to-transparent hover:border-[#4FA3A5]/30 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl"
//                 >
                  
//                   {/* LEFT PANE: HIGH TECH GRAPHIC SUBSTRATE */}
//                   <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[250px] overflow-hidden bg-slate-950 border-b lg:border-b-0 lg:border-r border-white/[0.04]">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-750 ease-out group-hover:scale-102"
//                       loading="lazy"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />
                    
//                     {/* Techno gradients and details */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />
                    
//                     <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-md border border-white/[0.05]">
//                       <Layers className="w-3 h-3 text-[#4FA3A5]" />
//                       <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
//                         CAT: {service.cat}
//                       </span>
//                     </div>

//                     <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/80 px-3 py-1.5 rounded border border-white/[0.1] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <Eye className="w-3.5 h-3.5 text-[#76C7C0]" />
//                       <span className="text-[9px] font-mono text-white tracking-widest uppercase">REQUEST DISPATCH</span>
//                     </div>
//                   </div>

//                   {/* RIGHT PANE: SCI-FI DATA MATRIX DETAILS */}
//                   <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 relative">
                    
//                     <div className="space-y-4">
//                       {/* Secondary Info Header */}
//                       <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.03] pb-3">
//                         <div className="text-[10px] font-mono text-[#76C7C0] tracking-wider uppercase">
//                           SPEC // {service.spec}
//                         </div>
//                         <div className="flex items-center gap-1.5 text-[9px] font-mono bg-white/[0.02] border border-white/[0.08] px-2 py-0.5 rounded text-slate-400">
//                           <span>THREAT LAYER:</span>
//                           <span className={`font-bold ${service.threat === 'CRITICAL' || service.threat === 'IMMEDIATE THREAT' ? 'text-rose-500' : 'text-amber-400'}`}>
//                             {service.threat}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Main Title */}
//                       <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-300 flex items-center justify-between">
//                         <span>{service.title}</span>
//                         <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-[#76C7C0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
//                       </h3>

//                       {/* Description */}
//                       <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl">
//                         {service.details}
//                       </p>
//                     </div>

//                     {/* Bottom Status Panel Indicator */}
//                     <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.03] text-[10px] font-mono text-slate-500">
//                       <div className="flex items-center gap-4">
//                         <div>[ LAYER ID: 00{service.id} ]</div>
//                         <div className="hidden sm:block text-slate-600">//</div>
//                         <div className="hidden sm:flex items-center gap-1.5">
//                           <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
//                           <span>PING ACTIVE</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-1 text-[#4FA3A5] font-bold group-hover:underline">
//                         <Zap className="w-3 h-3" />
//                         <span className="uppercase tracking-widest text-[9px]">INITIALIZE INTERCEPT v2</span>
//                       </div>
//                     </div>

//                   </div>

//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* REINFORCED EMPTY DATA STATE DISPLAY */}
//         {filteredServices.length === 0 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-24 border border-white/[0.05] bg-black/40 rounded-3xl max-w-xl mx-auto shadow-2xl backdrop-blur-sm"
//           >
//             <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
//               Zero active vectors mapped inside this environment quadrant.
//             </p>
//           </motion.div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;











// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   ShieldAlert, 
//   ArrowUpRight, 
//   Activity, 
//   Cpu, 
//   Zap, 
//   Binary,
//   Layers, 
//   Terminal,
//   Compass,
//   Radio
// } from "lucide-react";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE",
//       spec: "SUBTERRANEAN FLUSHING",
//       code: "ANT-SYS-01",
//       details: "High-performance deployment targeting deep structural micro-colonies. We dismantle hidden underground biological structures using specialized subterranean baiting arrays to clear pathways and enforce total blockades.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL",
//       spec: "THERMAL EXTINCTION PROTOCOL",
//       code: "BUG-EXT-02",
//       details: "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "MTH-RES-03",
//       details: "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       threat: "MODERATE",
//       spec: "PERIMETER EXTRACTION",
//       code: "BTL-PER-04",
//       details: "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL",
//       spec: "GEL SYNTHESIS VECTORS",
//       code: "COCK-GEL-05",
//       details: "Enterprise-grade gel synthesis matrices combined with high-velocity flushing vectors. Eradicates deeply rooted infesting structures inside high-heat commercial culinary and industrial sectors.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL",
//       spec: "MULTI-STAGE BARRIER MESH",
//       code: "MCE-BAR-06",
//       details: "Multi-stage digital tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor vector highways and blocks ongoing return migrations completely.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "BIOLOGICAL BREAKING MIST",
//       code: "FLE-MST-07",
//       details: "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to clean high-traffic domestic environments.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-PRESSURE ELEVATION SHIELD",
//       code: "WSP-ELV-08",
//       details: "High-altitude neutralizing deployment utilizing high-pressure localized containment vectors. Provides instant structural safety clearance for critical residential elevations and perimeter points.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       threat: "ECOLOGICAL ECO",
//       spec: "LIVE CAPTURE RELOCATION",
//       code: "BEE-LIV-09",
//       details: "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "HIGH-TENSILE CEILING TRAPS",
//       code: "SQR-TRP-10",
//       details: "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL",
//       spec: "CHEMICAL DECONTAMINATION",
//       code: "HYG-DEC-11",
//       details: "Premium multi-point chemical decontamination fields combined with absolute structural gap bridging. Seals building envelopes to ensure long-term resistance against returning biological invaders.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL",
//       spec: "SENSORY DEFENSE MATRICES",
//       code: "BRD-SNS-12",
//       details: "Architectural wire tensions, custom heavy nets, and state-of-the-art sensory defense lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#02070e] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#4FA3A5]/40 selection:text-white">
      
//       {/* GLITCH TECH GRID MATRICES */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4FA3A5]/20 to-transparent" />

//       {/* ================= RE-NEWED TECH MATRIX CONSOLE HERO ================= */}
//       <section className="relative pt-44 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
//           {/* Main Info Module */}
//           <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#76C7C0]/5 rounded-full blur-3xl" />
            
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#76C7C0] uppercase bg-black/40 px-3 py-1 rounded-md border border-white/[0.04]">
//                 <Binary className="w-3 h-3 animate-spin" />
//                 <span>ENVIRONMENT DESTRUCTION SHELL // INITIALIZING</span>
//               </div>
//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
//                 OPERATIONAL <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-slate-200">INTELLIGENCE</span>
//               </h1>
//               <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
//                 Overriding deep biological nesting clusters through programmatic physical barriers. Select a functional asset configuration layer below to launch dynamic counter operations instantly.
//               </p>
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-6 text-[10px] font-mono text-slate-500">
//               <div>HOST: REGIONAL_CORE</div>
//               <div>PROTOCOLS: ACTIVE</div>
//             </div>
//           </div>

//           {/* Code Simulator Module */}
//           <div className="lg:col-span-5 bg-black/60 border border-white/[0.06] p-6 rounded-3xl font-mono text-[11px] text-[#4FA3A5] flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-[#76C7C0]/5 to-transparent pointer-events-none" />
            
//             <div className="space-y-2 text-slate-400">
//               <div className="flex items-center justify-between text-slate-600 border-b border-white/[0.05] pb-2 mb-3">
//                 <div className="flex items-center gap-1.5">
//                   <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//                   <span>MATRIX_LIVE_FEED</span>
//                 </div>
//                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//               </div>
//               <p className="text-[#76C7C0]"><span className="text-slate-600">&gt;</span> SYSTEM_STATUS_OK</p>
//               <p><span className="text-slate-600">&gt;</span> TARGETING VECTOR DEPLOYED [LONDON_GRID]</p>
//               <p><span className="text-slate-600">&gt;</span> BIO_FILTRATION CODES: SECURE</p>
//               <p><span className="text-slate-600">&gt;</span> INTERCEPTORS: STAGED_READY</p>
//             </div>

//             <div className="mt-6 border-t border-white/[0.05] pt-4 flex justify-between items-center text-slate-500">
//               <span>ENGAGE CONFIG LAYER</span>
//               <Compass className="w-4 h-4 text-[#76C7C0]" />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= MATRIX TAB FILTER STICKER ================= */}
//       <nav className="bg-[#02070e]/90 backdrop-blur-md border-b border-white/[0.04] sticky top-0 z-50 py-4">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
//             <Radio className="w-3.5 h-3.5 text-[#4FA3A5]" />
//             <span>FILTER GRID MODULES</span>
//           </div>

//           <div className="flex flex-wrap gap-1 bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-lg ${
//                     isActive
//                       ? "bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-black font-black"
//                       : "text-slate-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* ================= BENTO-STYLE MODULAR INTERACTIVE GRID ================= */}
//       <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           <AnimatePresence mode="popLayout">
//             {filteredServices.map((service, index) => {
//               // Mathematical bento rule configuration: Make certain indexes span wide or tall
//               const isWide = index % 4 === 0; 
              
//               return (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true, margin: "-60px" }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className={`group relative bg-gradient-to-b from-[#051121] to-[#020912] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between hover:border-[#76C7C0]/40 hover:shadow-2xl hover:shadow-[#4FA3A5]/5 transition-all duration-500 select-none ${
//                     isWide ? "lg:col-span-2" : "lg:col-span-1"
//                   }`}
//                 >
                  
//                   {/* Absolute subtle glowing matrix line */}
//                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-[#4FA3A5]/50 transition-all duration-500" />

//                   {/* Top Block Structural Data */}
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <div className="font-mono text-[9px] text-[#76C7C0] tracking-widest bg-[#4FA3A5]/5 px-2 py-0.5 rounded border border-[#4FA3A5]/10">
//                         {service.code}
//                       </div>
//                       <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
//                         <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
//                         <span>{service.threat}</span>
//                       </div>
//                     </div>

//                     <div className={`${isWide ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "space-y-3"}`}>
                      
//                       <div className={`${isWide ? "lg:col-span-7" : "w-full"} space-y-2`}>
//                         <h3 className="text-lg sm:text-xl font-black text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-300">
//                           {service.title}
//                         </h3>
//                         <p className="text-slate-400 text-xs leading-relaxed font-normal line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
//                           {service.details}
//                         </p>
//                       </div>

//                       {/* Image Module fitted asymmetric container inside item */}
//                       <div className={`${isWide ? "lg:col-span-5 h-[110px]" : "h-[130px] mt-4"} w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.04]`}>
//                         <img 
//                           src={service.image} 
//                           alt={service.title}
//                           className="w-full h-full object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
//                           loading="lazy"
//                           onError={(e) => {
//                             e.currentTarget.style.display = "none";
//                           }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#020912] via-transparent to-transparent pointer-events-none" />
//                       </div>

//                     </div>
//                   </div>

//                   {/* Bottom System Terminal Actions */}
//                   <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-slate-500">
//                     <div className="flex items-center gap-1">
//                       <Layers className="w-3 h-3 text-slate-600" />
//                       <span className="truncate max-w-[120px] uppercase">{service.spec}</span>
//                     </div>

//                     <div className="flex items-center gap-1 text-[#76C7C0] font-bold tracking-tight">
//                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">DEPLOY</span>
//                       <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//                     </div>
//                   </div>

//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* REINFORCED EMPTY DATA STATE DISPLAY */}
//         {filteredServices.length === 0 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-24 border border-white/[0.05] bg-black/40 rounded-3xl max-w-xl mx-auto shadow-2xl backdrop-blur-sm"
//           >
//             <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
//               Zero active vectors mapped inside this environment quadrant.
//             </p>
//           </motion.div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;















// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   ShieldAlert, 
//   ArrowUpRight, 
//   Activity, 
//   Cpu, 
//   Zap, 
//   Binary,
//   Layers, 
//   Terminal,
//   Compass,
//   Radio
// } from "lucide-react";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE",
//       spec: "SUBTERRANEAN FLUSHING",
//       code: "ANT-SYS-01",
//       details: "High-performance deployment targeting deep structural micro-colonies. We dismantle hidden underground biological structures using specialized subterranean baiting arrays to clear pathways and enforce total blockades.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL",
//       spec: "THERMAL EXTINCTION PROTOCOL",
//       code: "BUG-EXT-02",
//       details: "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "MTH-RES-03",
//       details: "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       threat: "MODERATE",
//       spec: "PERIMETER EXTRACTION",
//       code: "BTL-PER-04",
//       details: "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL",
//       spec: "GEL SYNTHESIS VECTORS",
//       code: "COCK-GEL-05",
//       details: "Enterprise-grade gel synthesis matrices combined with high-velocity flushing vectors. Eradicates deeply rooted infesting structures inside high-heat commercial culinary and industrial sectors.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL",
//       spec: "MULTI-STAGE BARRIER MESH",
//       code: "MCE-BAR-06",
//       details: "Multi-stage digital tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor vector highways and blocks ongoing return migrations completely.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "BIOLOGICAL BREAKING MIST",
//       code: "FLE-MST-07",
//       details: "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to clean high-traffic domestic environments.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-PRESSURE ELEVATION SHIELD",
//       code: "WSP-ELV-08",
//       details: "High-altitude neutralizing deployment utilizing high-pressure localized containment vectors. Provides instant structural safety clearance for critical residential elevations and perimeter points.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       threat: "ECOLOGICAL ECO",
//       spec: "LIVE CAPTURE RELOCATION",
//       code: "BEE-LIV-09",
//       details: "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "HIGH-TENSILE CEILING TRAPS",
//       code: "SQR-TRP-10",
//       details: "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL",
//       spec: "CHEMICAL DECONTAMINATION",
//       code: "HYG-DEC-11",
//       details: "Premium multi-point chemical decontamination fields combined with absolute structural gap bridging. Seals building envelopes to ensure long-term resistance against returning biological invaders.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL",
//       spec: "SENSORY DEFENSE MATRICES",
//       code: "BRD-SNS-12",
//       details: "Architectural wire tensions, custom heavy nets, and state-of-the-art sensory defense lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#02070e] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#4FA3A5]/40 selection:text-white">
      
//       {/* GLITCH TECH GRID MATRICES */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4FA3A5]/20 to-transparent" />

//       {/* ================= HERO MODULE ================= */}
//       <section className="relative pt-44 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
//           <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#76C7C0]/5 rounded-full blur-3xl" />
            
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#76C7C0] uppercase bg-black/40 px-3 py-1 rounded-md border border-white/[0.04]">
//                 <Binary className="w-3 h-3 animate-spin" />
//                 <span>ENVIRONMENT DESTRUCTION SHELL // INITIALIZING</span>
//               </div>
//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
//                 OPERATIONAL <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-slate-200">INTELLIGENCE</span>
//               </h1>
//               <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
//                 Overriding deep biological nesting clusters through programmatic physical barriers. Select a functional asset configuration layer below to launch dynamic counter operations instantly.
//               </p>
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-6 text-[10px] font-mono text-slate-500">
//               <div>HOST: REGIONAL_CORE</div>
//               <div>PROTOCOLS: ACTIVE</div>
//             </div>
//           </div>

//           <div className="lg:col-span-5 bg-black/60 border border-white/[0.06] p-6 rounded-3xl font-mono text-[11px] text-[#4FA3A5] flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-[#76C7C0]/5 to-transparent pointer-events-none" />
            
//             <div className="space-y-2 text-slate-400">
//               <div className="flex items-center justify-between text-slate-600 border-b border-white/[0.05] pb-2 mb-3">
//                 <div className="flex items-center gap-1.5">
//                   <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//                   <span>MATRIX_LIVE_FEED</span>
//                 </div>
//                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//               </div>
//               <p className="text-[#76C7C0]"><span className="text-slate-600">&gt;</span> SYSTEM_STATUS_OK</p>
//               <p><span className="text-slate-600">&gt;</span> TARGETING VECTOR DEPLOYED [LONDON_GRID]</p>
//               <p><span className="text-slate-600">&gt;</span> BIO_FILTRATION CODES: SECURE</p>
//               <p><span className="text-slate-600">&gt;</span> INTERCEPTORS: STAGED_READY</p>
//             </div>

//             <div className="mt-6 border-t border-white/[0.05] pt-4 flex justify-between items-center text-slate-500">
//               <span>ENGAGE CONFIG LAYER</span>
//               <Compass className="w-4 h-4 text-[#76C7C0]" />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= FILTER NAV ================= */}
//       <nav className="bg-[#02070e]/90 backdrop-blur-md border-b border-white/[0.04] sticky top-0 z-50 py-4">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
//             <Radio className="w-3.5 h-3.5 text-[#4FA3A5]" />
//             <span>FILTER GRID MODULES</span>
//           </div>

//           <div className="flex flex-wrap gap-1 bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-lg ${
//                     isActive
//                       ? "bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-black font-black"
//                       : "text-slate-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* ================= DYNAMIC BENTO GRID MATRICES ================= */}
//       <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           <AnimatePresence mode="popLayout">
//             {filteredServices.map((service, index) => {
//               // Pattern rule: First element or elements with index 4, 8, etc. become the Wide Row Layout
//               const isWide = index % 4 === 0; 
              
//               return (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, scale: 0.97 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true, margin: "-60px" }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className={`group relative bg-gradient-to-b from-[#051121] to-[#020912] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer p-6 sm:p-8 flex flex-col justify-between hover:border-[#76C7C0]/40 hover:shadow-2xl hover:shadow-[#4FA3A5]/5 transition-all duration-500 select-none ${
//                     isWide ? "lg:col-span-3" : "lg:col-span-1"
//                   }`}
//                 >
                  
//                   {/* Glowing Top Frame Accent Line */}
//                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-[#4FA3A5]/50 transition-all duration-500" />

//                   {/* Card Content Matrix */}
//                   <div className="space-y-4 h-full flex flex-col justify-between">
                    
//                     {/* Upper Meta Specifications */}
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="font-mono text-[9px] text-[#76C7C0] tracking-widest bg-[#4FA3A5]/5 px-2 py-0.5 rounded border border-[#4FA3A5]/10">
//                         {service.code}
//                       </div>
//                       <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
//                         <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
//                         <span>{service.threat}</span>
//                       </div>
//                     </div>

//                     {/* Conditional Structural Flow Grid Mapping */}
//                     <div className="flex-grow">
//                       {isWide ? (
//                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                          
//                           {/* Larger Text Layout Module */}
//                           <div className="lg:col-span-7 space-y-3.5">
//                             <h3 className="text-3xl sm:text-4xl font-black text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-300">
//                               {service.title}
//                             </h3>
//                             <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal group-hover:text-white transition-colors duration-300">
//                               {service.details}
//                             </p>
//                           </div>

//                           {/* Up-scaled Image Matrix Container */}
//                           <div className="lg:col-span-5 h-[200px] sm:h-[240px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
//                             <img 
//                               src={service.image} 
//                               alt={service.title}
//                               className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-103 transition-all duration-700 ease-out"
//                               loading="lazy"
//                               onError={(e) => {
//                                 e.currentTarget.style.display = "none";
//                               }}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-[#020912]/80 via-transparent to-transparent pointer-events-none" />
//                           </div>

//                         </div>
//                       ) : (
//                         /* Traditional Balanced Vertical Columns (3 Per Row Blocks) */
//                         <div className="space-y-4">
//                           <div className="space-y-2">
//                             <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-300">
//                               {service.title}
//                             </h3>
//                             <p className="text-slate-400 text-xs leading-relaxed font-normal line-clamp-4 group-hover:text-slate-300 transition-colors duration-300">
//                               {service.details}
//                             </p>
//                           </div>

//                           <div className="h-[140px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.04] mt-2">
//                             <img 
//                               src={service.image} 
//                               alt={service.title}
//                               className="w-full h-full object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
//                               loading="lazy"
//                               onError={(e) => {
//                                 e.currentTarget.style.display = "none";
//                               }}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-[#020912] via-transparent to-transparent pointer-events-none" />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                   </div>

//                   {/* Bottom System Action Console Strip */}
//                   <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-slate-500 w-full">
//                     <div className="flex items-center gap-1">
//                       <Layers className="w-3 h-3 text-slate-600" />
//                       <span className="truncate max-w-[180px] uppercase tracking-wider">{service.spec}</span>
//                     </div>

//                     <div className="flex items-center gap-1 text-[#76C7C0] font-bold tracking-tight">
//                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">DEPLOY</span>
//                       <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//                     </div>
//                   </div>

//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* REINFORCED EMPTY DATA STATE DISPLAY */}
//         {filteredServices.length === 0 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-24 border border-white/[0.05] bg-black/40 rounded-3xl max-w-xl mx-auto shadow-2xl backdrop-blur-sm"
//           >
//             <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
//               Zero active vectors mapped inside this environment quadrant.
//             </p>
//           </motion.div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;












// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowUpRight,
//   Binary,
//   Layers,
//   Terminal,
//   Compass,
//   Radio,
// } from "lucide-react";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE",
//       spec: "SUBTERRANEAN FLUSHING",
//       code: "ANT-SYS-01",
//       details:
//         "High-performance deployment targeting deep structural micro-colonies. We dismantle hidden underground biological structures using specialized subterranean baiting arrays to clear pathways and enforce total blockades.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL",
//       spec: "THERMAL EXTINCTION PROTOCOL",
//       code: "BUG-EXT-02",
//       details:
//         "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "MTH-RES-03",
//       details:
//         "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       threat: "MODERATE",
//       spec: "PERIMETER EXTRACTION",
//       code: "BTL-PER-04",
//       details:
//         "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL",
//       spec: "GEL SYNTHESIS VECTORS",
//       code: "COCK-GEL-05",
//       details:
//         "Enterprise-grade gel synthesis matrices combined with high-velocity flushing vectors. Eradicates deeply rooted infesting structures inside high-heat commercial culinary and industrial sectors.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL",
//       spec: "MULTI-STAGE BARRIER MESH",
//       code: "MCE-BAR-06",
//       details:
//         "Multi-stage digital tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor vector highways and blocks ongoing return migrations completely.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "BIOLOGICAL BREAKING MIST",
//       code: "FLE-MST-07",
//       details:
//         "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to clean high-traffic domestic environments.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-PRESSURE ELEVATION SHIELD",
//       code: "WSP-ELV-08",
//       details:
//         "High-altitude neutralizing deployment utilizing high-pressure localized containment vectors. Provides instant structural safety clearance for critical residential elevations and perimeter points.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       threat: "ECOLOGICAL ECO",
//       spec: "LIVE CAPTURE RELOCATION",
//       code: "BEE-LIV-09",
//       details:
//         "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "HIGH-TENSILE CEILING TRAPS",
//       code: "SQR-TRP-10",
//       details:
//         "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL",
//       spec: "CHEMICAL DECONTAMINATION",
//       code: "HYG-DEC-11",
//       details:
//         "Premium multi-point chemical decontamination fields combined with absolute structural gap bridging. Seals building envelopes to ensure long-term resistance against returning biological invaders.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL",
//       spec: "SENSORY DEFENSE MATRICES",
//       code: "BRD-SNS-12",
//       details:
//         "Architectural wire tensions, custom heavy nets, and state-of-the-art sensory defense lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#02070e] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#4FA3A5]/40 selection:text-white">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4FA3A5]/20 to-transparent" />

//       <section className="relative pt-44 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#76C7C0]/5 rounded-full blur-3xl" />

//             <div className="space-y-6 relative z-10">
//               <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#76C7C0] uppercase bg-black/40 px-3 py-1 rounded-md border border-white/[0.04]">
//                 <Binary className="w-3 h-3" />
//                 <span>ENVIRONMENT DESTRUCTION SHELL // INITIALIZING</span>
//               </div>

//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
//                 OPERATIONAL <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-slate-200">
//                   INTELLIGENCE
//                 </span>
//               </h1>

//               <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
//                 Overriding deep biological nesting clusters through programmatic
//                 physical barriers. Select a functional asset configuration layer
//                 below to launch dynamic counter operations instantly.
//               </p>
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-6 text-[10px] font-mono text-slate-500 relative z-10">
//               <div>HOST: REGIONAL_CORE</div>
//               <div>PROTOCOLS: ACTIVE</div>
//             </div>
//           </div>

//           <div className="lg:col-span-5 bg-black/60 border border-white/[0.06] p-6 rounded-3xl font-mono text-[11px] text-[#4FA3A5] flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-[#76C7C0]/5 to-transparent pointer-events-none" />

//             <div className="space-y-2 text-slate-400 relative z-10">
//               <div className="flex items-center justify-between text-slate-600 border-b border-white/[0.05] pb-2 mb-3">
//                 <div className="flex items-center gap-1.5">
//                   <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//                   <span>MATRIX_LIVE_FEED</span>
//                 </div>
//                 <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-90" />
//               </div>

//               <p className="text-[#76C7C0]">
//                 <span className="text-slate-600">&gt;</span> SYSTEM_STATUS_OK
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> TARGETING VECTOR
//                 DEPLOYED [LONDON_GRID]
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> BIO_FILTRATION
//                 CODES: SECURE
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> INTERCEPTORS:
//                 STAGED_READY
//               </p>
//             </div>

//             <div className="mt-6 border-t border-white/[0.05] pt-4 flex justify-between items-center text-slate-500 relative z-10">
//               <span>ENGAGE CONFIG LAYER</span>
//               <Compass className="w-4 h-4 text-[#76C7C0]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <nav className="bg-[#02070e]/95 border-b border-white/[0.04] sticky top-0 z-50 py-4">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
//             <Radio className="w-3.5 h-3.5 text-[#4FA3A5]" />
//             <span>FILTER GRID MODULES</span>
//           </div>

//           <div className="flex flex-wrap gap-1 bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-colors duration-200 rounded-lg ${
//                     isActive
//                       ? "bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-black font-black"
//                       : "text-slate-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           {filteredServices.map((service, index) => {
//             const isWide = index % 4 === 0;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group relative bg-gradient-to-b from-[#051121] to-[#020912] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer p-6 sm:p-8 flex flex-col justify-between hover:border-[#76C7C0]/40 hover:shadow-xl hover:shadow-[#4FA3A5]/5 transition-transform duration-200 select-none hover:-translate-y-1 animate-[fadeUp_0.7s_ease-out_both] ${
//                   isWide ? "lg:col-span-3" : "lg:col-span-1"
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-[#4FA3A5]/50 transition-colors duration-200" />

//                 <div className="space-y-4 h-full flex flex-col justify-between">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="font-mono text-[9px] text-[#76C7C0] tracking-widest bg-[#4FA3A5]/5 px-2 py-0.5 rounded border border-[#4FA3A5]/10">
//                       {service.code}
//                     </div>

//                     <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
//                       <span className="w-1 h-1 rounded-full bg-orange-500 opacity-90" />
//                       <span>{service.threat}</span>
//                     </div>
//                   </div>

//                   <div className="flex-grow">
//                     {isWide ? (
//                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
//                         <div className="lg:col-span-7 space-y-3.5">
//                           <h3 className="text-3xl sm:text-4xl font-black text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-200">
//                             {service.title}
//                           </h3>

//                           <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal group-hover:text-white transition-colors duration-200">
//                             {service.details}
//                           </p>
//                         </div>

//                         <div className="lg:col-span-5 h-[200px] sm:h-[240px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full object-cover opacity-45 group-hover:opacity-80 group-hover:scale-[1.03] transition-transform duration-300"
//                             loading="lazy"
//                             decoding="async"
//                             onError={(e) => {
//                               e.currentTarget.style.display = "none";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-[#020912]/80 via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="space-y-4">
//                         <div className="space-y-2">
//                           <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-200">
//                             {service.title}
//                           </h3>

//                           <p className="text-slate-400 text-xs leading-relaxed font-normal line-clamp-4 group-hover:text-slate-300 transition-colors duration-200">
//                             {service.details}
//                           </p>
//                         </div>

//                         <div className="h-[140px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.04] mt-2">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full object-cover opacity-35 group-hover:opacity-70 group-hover:scale-[1.03] transition-transform duration-300"
//                             loading="lazy"
//                             decoding="async"
//                             onError={(e) => {
//                               e.currentTarget.style.display = "none";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-[#020912] via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-slate-500 w-full">
//                   <div className="flex items-center gap-1">
//                     <Layers className="w-3 h-3 text-slate-600" />
//                     <span className="truncate max-w-[180px] uppercase tracking-wider">
//                       {service.spec}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1 text-[#76C7C0] font-bold tracking-tight">
//                     <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                       DEPLOY
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {filteredServices.length === 0 && (
//           <div className="text-center py-24 border border-white/[0.05] bg-black/40 rounded-3xl max-w-xl mx-auto shadow-xl animate-[fadeUp_0.7s_ease-out_both]">
//             <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
//               Zero active vectors mapped inside this environment quadrant.
//             </p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;









// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowUpRight,
//   Bug,
//   Layers,
//   Activity,
//   Compass,
//   Radio,
// } from "lucide-react";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const hasScrolled = useRef(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE RISK",
//       spec: "SUBTERRANEAN FLUSHING",
//       code: "SWIFT-ANT-01",
//       details:
//         "High-performance treatment targeting deep structural micro-colonies. We eliminate hidden underground biological structures using specialized baiting arrays to clear pathways and enforce long-term blockades.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL THREAT",
//       spec: "THERMAL EXTINCTION PROTOCOL",
//       code: "SWIFT-BUG-02",
//       details:
//         "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "SWIFT-MTH-03",
//       details:
//         "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       threat: "MODERATE RISK",
//       spec: "PERIMETER EXTRACTION",
//       code: "SWIFT-BTL-04",
//       details:
//         "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL THREAT",
//       spec: "GEL SYNTHESIS VECTORS",
//       code: "SWIFT-COCK-05",
//       details:
//         "Premium-grade gel baiting matrices combined with high-velocity flushing treatments. Eradicates deeply rooted infesting structures inside high-heat commercial kitchens and industrial sectors.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL THREAT",
//       spec: "MULTI-STAGE BARRIER MESH",
//       code: "SWIFT-MCE-06",
//       details:
//         "Multi-stage tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor rodent highways and completely blocks ongoing return migrations.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "BIOLOGICAL BREAKING MIST",
//       code: "SWIFT-FLE-07",
//       details:
//         "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to sanitize high-traffic domestic environments.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-PRESSURE ELEVATION SHIELD",
//       code: "SWIFT-WSP-08",
//       details:
//         "High-altitude neutralizing deployment utilizing safe, localized containment formulas. Provides instant safety clearance for critical residential elevations and roofline perimeter points.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       threat: "ECO-FRIENDLY REACTION",
//       spec: "LIVE CAPTURE RELOCATION",
//       code: "SWIFT-BEE-09",
//       details:
//         "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "HIGH-TENSILE CEILING TRAPS",
//       code: "SWIFT-SQR-10",
//       details:
//         "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL RISK",
//       spec: "CHEMICAL DECONTAMINATION",
//       code: "SWIFT-HYG-11",
//       details:
//         "Premium multi-point decontamination fields combined with absolute structural gap proofing. Seals building envelopes to ensure long-term resistance against returning biological pests.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL RISK",
//       spec: "SENSORY DEFENSE MATRICES",
//       code: "SWIFT-BRD-12",
//       details:
//         "Architectural wire tensions, custom heavy nets, and state-of-the-art deterrent lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state && !hasScrolled.current) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             hasScrolled.current = true;
//           }
//         }, 400);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#0b050f] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#552365]/50 selection:text-white">
//       {/* Background Grid Layout with Subtle Logo Color Accents */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#552365]/20 to-transparent" />

//       {/* Header Operational Intel Grid */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-500">
//           <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#A36646]/5 rounded-full blur-3xl" />

//             <div className="space-y-6 relative z-10">
//               <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#A36646] uppercase bg-black/40 px-3 py-1 rounded-md border border-white/[0.04]">
//                 <Bug className="w-3 h-3 animate-pulse text-[#552365]" />
//                 <span>SWIFTPES PROTECTION MATRIX // INITIALIZING</span>
//               </div>

//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
//                 OUR TARGETED <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#552365] to-[#A36646]">
//                   PEST SERVICES
//                 </span>
//               </h1>

//               <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
//                 Eradicating deep biological nesting structures through premium physical 
//                 and eco-safe barriers. Select a specialized service configuration layer 
//                 below to launch professional swift response operations instantly.
//               </p>
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-6 text-[10px] font-mono text-slate-500 relative z-10">
//               <div>DISPATCH: LONDON_CORE</div>
//               <div>RESPONSE: ACTIVE</div>
//             </div>
//           </div>

//           {/* Service Live Dashboard Card */}
//           <div className="lg:col-span-5 bg-black/60 border border-white/[0.06] p-6 rounded-3xl font-mono text-[11px] text-[#A36646] flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-[#552365]/5 to-transparent pointer-events-none" />

//             <div className="space-y-2.5 text-slate-400 relative z-10">
//               <div className="flex items-center justify-between text-slate-600 border-b border-white/[0.05] pb-2 mb-3">
//                 <div className="flex items-center gap-1.5">
//                   <Activity className="w-3.5 h-3.5 text-[#552365]" />
//                   <span>SWIFT_LIVE_STATUS</span>
//                 </div>
//                 <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-90 animate-ping" />
//               </div>

//               <p className="text-[#A36646]">
//                 <span className="text-slate-600">&gt;</span> SWIFTPES_STATUS_READY
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> EMERGENCY RESPONSE TRUCKS
//                 DEPLOYED [LONDON_GRID]
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> ECO-SAFE SANITIZATION
//                 CODES: CERTIFIED
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> TECHNIQUE EXPERTS:
//                 STAGED_READY
//               </p>
//             </div>

//             <div className="mt-6 border-t border-white/[0.05] pt-4 flex justify-between items-center text-slate-500 relative z-10">
//               <span>EXPLORE PROTECTION TYPES</span>
//               <Compass className="w-4 h-4 text-[#552365]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filter Navigation Sticky Bar */}
//       <nav className="bg-[#0b050f]/95 backdrop-blur-md border-b border-white/[0.04] sticky top-0 z-50 py-4 shadow-xl shadow-black/20">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
//             <Radio className="w-3.5 h-3.5 text-[#552365]" />
//             <span>FILTER SERVICE GRID</span>
//           </div>

//           <div className="flex flex-wrap justify-center gap-1 bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-300 rounded-lg ${
//                     isActive
//                       ? "bg-gradient-to-r from-[#552365] to-[#A36646] text-white font-black shadow-lg shadow-[#552365]/30"
//                       : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* Dynamic Services Output Display Grid */}
//       <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           {filteredServices.map((service, index) => {
//             const isWide = index % 4 === 0;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group relative bg-gradient-to-b from-[#130a1c] to-[#0b050f] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer p-6 sm:p-8 flex flex-col justify-between hover:border-[#A36646]/40 hover:shadow-2xl hover:shadow-[#552365]/10 transition-all duration-300 select-none hover:-translate-y-1.5 ${
//                   isWide ? "lg:col-span-3" : "lg:col-span-1"
//                 }`}
//                 style={{ transitionDelay: `${index * 10}ms` }}
//               >
//                 {/* Upper Glow Hover Border System */}
//                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-[#A36646]/60 transition-all duration-300" />

//                 <div className="space-y-4 h-full flex flex-col justify-between">
//                   {/* Metadata Header Layer */}
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="font-mono text-[9px] text-[#A36646] tracking-widest bg-[#552365]/10 px-2 py-0.5 rounded border border-[#552365]/20">
//                       {service.code}
//                     </div>

//                     <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#A36646] animate-pulse" />
//                       <span>{service.threat}</span>
//                     </div>
//                   </div>

//                   {/* Operational Data Text & Assets Layer */}
//                   <div className="flex-grow">
//                     {isWide ? (
//                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
//                         <div className="lg:col-span-7 space-y-3.5">
//                           <h3 className="text-2xl sm:text-4xl font-black text-white uppercase group-hover:text-[#A36646] transition-colors duration-300">
//                             {service.title}
//                           </h3>
//                           <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal group-hover:text-slate-200 transition-colors duration-300">
//                             {service.details}
//                           </p>
//                         </div>

//                         <div className="lg:col-span-5 h-[200px] sm:h-[220px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full object-cover opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
//                             loading="lazy"
//                             decoding="async"
//                             onError={(e) => {
//                               e.currentTarget.style.display = "none";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-[#0b050f]/90 via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="space-y-4 flex flex-col h-full justify-between">
//                         <div className="space-y-2">
//                           <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#A36646] transition-colors duration-300">
//                             {service.title}
//                           </h3>
//                           <p className="text-slate-400 text-xs leading-relaxed font-normal line-clamp-4 group-hover:text-slate-300 transition-colors duration-300">
//                             {service.details}
//                           </p>
//                         </div>

//                         <div className="h-[140px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.04] mt-2">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full object-cover opacity-25 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
//                             loading="lazy"
//                             decoding="async"
//                             onError={(e) => {
//                               e.currentTarget.style.display = "none";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-[#0b050f] via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Vector Specifications Lower Layer Footer */}
//                 <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-slate-500 w-full">
//                   <div className="flex items-center gap-1.5 max-w-[70%]">
//                     <Layers className="w-3 h-3 text-slate-600 flex-shrink-0" />
//                     <span className="truncate uppercase tracking-wider block">
//                       {service.spec}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1 text-[#A36646] font-bold tracking-tight flex-shrink-0">
//                     <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[9px]">
//                       BOOK NOW
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty Slate Diagnostic Feedback */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-20 border border-white/[0.05] bg-black/40 backdrop-blur-sm rounded-3xl max-w-xl mx-auto shadow-2xl transition-all duration-300">
//             <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3 animate-bounce" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 px-4">
//               No services found matching this pest category.
//             </p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;










import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ShieldAlert,
  ArrowUpRight,
  Bug,
  Layers,
  Activity,
  Compass,
  Radio,
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasScrolled = useRef(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

  const servicesData = [
    {
      id: 1,
      cat: "Insects",
      title: "Ants Control",
      image: "/images/ants.webp",
      threat: "MODERATE RISK",
      spec: "SUBTERRANEAN FLUSHING",
      code: "SWIFT-ANT-01",
      details:
        "High-performance treatment targeting deep structural micro-colonies. We eliminate hidden underground biological structures using specialized baiting arrays to clear pathways and enforce long-term blockades.",
    },
    {
      id: 2,
      cat: "Insects",
      title: "Bed Bugs Control",
      image: "/images/bedbugs.webp",
      threat: "CRITICAL THREAT",
      spec: "THERMAL EXTINCTION PROTOCOL",
      code: "SWIFT-BUG-02",
      details:
        "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
    },
    {
      id: 3,
      cat: "Insects",
      title: "Carpet Moth Control Treatment",
      image: "/images/moths.webp",
      threat: "HIGH RISK",
      spec: "RESIDUAL MICRO-SPRAYING",
      code: "SWIFT-MTH-03",
      details:
        "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
    },
    {
      id: 4,
      cat: "Insects",
      title: "Carpet Beetle Treatment",
      image: "/images/beetle.webp",
      threat: "MODERATE RISK",
      spec: "PERIMETER EXTRACTION",
      code: "SWIFT-BTL-04",
      details:
        "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
    },
    {
      id: 5,
      cat: "Insects",
      title: "Cockroach Control Service",
      image: "/images/cockroach.webp",
      threat: "CRITICAL THREAT",
      spec: "GEL SYNTHESIS VECTORS",
      code: "SWIFT-COCK-05",
      details:
        "Premium-grade gel baiting matrices combined with high-velocity flushing treatments. Eradicates deeply rooted infesting structures inside high-heat commercial kitchens and industrial sectors.",
    },
    {
      id: 6,
      cat: "Rodents & Wildlife",
      title: "Rats & Mice Control",
      image: "/images/rodents.webp",
      threat: "CRITICAL THREAT",
      spec: "MULTI-STAGE BARRIER MESH",
      code: "SWIFT-MCE-06",
      details:
        "Multi-stage tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor rodent highways and completely blocks ongoing return migrations.",
    },
    {
      id: 7,
      cat: "Insects",
      title: "Flea Control",
      image: "/images/flea.webp",
      threat: "HIGH RISK",
      spec: "BIOLOGICAL BREAKING MIST",
      code: "SWIFT-FLE-07",
      details:
        "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to sanitize high-traffic domestic environments.",
    },
    {
      id: 8,
      cat: "Insects",
      title: "Wasps Nest Control",
      image: "/images/wasps.webp",
      threat: "IMMEDIATE THREAT",
      spec: "HIGH-PRESSURE ELEVATION SHIELD",
      code: "SWIFT-WSP-08",
      details:
        "High-altitude neutralizing deployment utilizing safe, localized containment formulas. Provides instant safety clearance for critical residential elevations and roofline perimeter points.",
    },
    {
      id: 9,
      cat: "Insects",
      title: "Bumble Bee Control",
      image: "/images/bee.webp",
      threat: "ECO-FRIENDLY REACTION",
      spec: "LIVE CAPTURE RELOCATION",
      code: "SWIFT-BEE-09",
      details:
        "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
    },
    {
      id: 10,
      cat: "Rodents & Wildlife",
      title: "Squirrel Control",
      image: "/images/squirrel.webp",
      threat: "HIGH RISK",
      spec: "HIGH-TENSILE CEILING TRAPS",
      code: "SWIFT-SQR-10",
      details:
        "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
    },
    {
      id: 11,
      cat: "Birds & Prevention",
      title: "Hygiene & Proofing Services",
      image: "/images/hygene.webp",
      threat: "ENVIRONMENTAL RISK",
      spec: "CHEMICAL DECONTAMINATION",
      code: "SWIFT-HYG-11",
      details:
        "Premium multi-point decontamination fields combined with absolute structural gap proofing. Seals building envelopes to ensure long-term resistance against returning biological pests.",
    },
    {
      id: 12,
      cat: "Birds & Prevention",
      title: "Birds Control Services",
      image: "/images/birds.webp",
      threat: "HIGH STRUCTURAL RISK",
      spec: "SENSORY DEFENSE MATRICES",
      code: "SWIFT-BRD-12",
      details:
        "Architectural wire tensions, custom heavy nets, and state-of-the-art deterrent lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
    },
  ];

  useEffect(() => {
    if (location.state && !hasScrolled.current) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const targetServiceTitle = location.state.scrollToService;

        const timer = setTimeout(() => {
          const element = document.querySelector(
            `[data-title="${targetServiceTitle}"]`
          );

          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            hasScrolled.current = true;
          }
        }, 400);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.cat === selectedCategory);

  return (
    <main className="bg-[#0b050f] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#552365]/50 selection:text-white">
      {/* Background Grid Layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#552365]/20 to-transparent" />

      {/* Header Operational Intel Grid */}
      <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-500">
          
          {/* 1. OUR TARGETED PEST SERVICES DIV WITH BACKGROUND IMAGE */}
        <div 
  className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden bg-cover bg-center"
  style={{ 
    // Opacity ko kam kiya hai taake image clear nazar aaye, aur right side ko light rakha hai jaha text nahi hai
    backgroundImage: `linear-gradient(to right, rgba(11, 5, 15, 0.85) 40%, rgba(11, 5, 15, 0.4)), url('/images/your-left-bg-image.webp')` 
  }}
>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A36646]/5 rounded-full blur-3xl" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#A36646] uppercase bg-black/40 px-3 py-1 rounded-md border border-white/[0.04]">
                <Bug className="w-3 h-3 animate-pulse text-[#552365]" />
                <span>SWIFTPES PROTECTION MATRIX // INITIALIZING</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
                OUR TARGETED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#552365] to-[#A36646]">
                  PEST SERVICES
                </span>
              </h1>

              <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                Eradicating deep biological nesting structures through premium physical 
                and eco-safe barriers. Select a specialized service configuration layer 
                below to launch professional swift response operations instantly.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-6 text-[10px] font-mono text-slate-500 relative z-10">
              <div>DISPATCH: LONDON_CORE</div>
              <div>RESPONSE: ACTIVE</div>
            </div>
          </div>

          {/* 2. SWIFT LIVE STATUS DIV WITH BACKGROUND IMAGE */}
    <div 
  className="lg:col-span-5 bg-black/60 border border-white/[0.06] p-6 rounded-3xl font-mono text-[11px] text-[#A36646] flex flex-col justify-between relative overflow-hidden bg-cover bg-center"
  style={{ 
    // Overlay ko mazeed transparent (0.45) kiya hai taake live status image piche se chamke
    backgroundImage: `linear-gradient(to bottom, rgba(11, 5, 15, 0.75), rgba(11, 5, 15, 0.45)), url('/images/your-right-bg.webp')` 
  }}
>
            <div className="absolute inset-0 bg-gradient-to-b from-[#552365]/5 to-transparent pointer-events-none" />

            <div className="space-y-2.5 text-slate-400 relative z-10">
              <div className="flex items-center justify-between text-slate-600 border-b border-white/[0.05] pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#552365]" />
                  <span>SWIFT_LIVE_STATUS</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-90 animate-ping" />
              </div>

              <p className="text-[#A36646]">
                <span className="text-slate-600">&gt;</span> SWIFTPES_STATUS_READY
              </p>
              <p>
                <span className="text-slate-600">&gt;</span> EMERGENCY RESPONSE TRUCKS
                DEPLOYED [LONDON_GRID]
              </p>
              <p>
                <span className="text-slate-600">&gt;</span> ECO-SAFE SANITIZATION
                CODES: CERTIFIED
              </p>
              <p>
                <span className="text-slate-600">&gt;</span> TECHNIQUE EXPERTS:
                STAGED_READY
              </p>
            </div>

            <div className="mt-6 border-t border-white/[0.05] pt-4 flex justify-between items-center text-slate-500 relative z-10">
              <span>EXPLORE PROTECTION TYPES</span>
              <Compass className="w-4 h-4 text-[#552365]" />
            </div>
          </div>

        </div>
      </section>

      {/* Filter Navigation Sticky Bar */}
      <nav className="bg-[#0b050f]/95 backdrop-blur-md border-b border-white/[0.04] sticky top-0 z-50 py-4 shadow-xl shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            <Radio className="w-3.5 h-3.5 text-[#552365]" />
            <span>FILTER SERVICE GRID</span>
          </div>

          <div className="flex flex-wrap justify-center gap-1 bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-300 rounded-lg ${
                    isActive
                      ? "bg-gradient-to-r from-[#552365] to-[#A36646] text-white font-black shadow-lg shadow-[#552365]/30"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Dynamic Services Output Display Grid */}
      <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredServices.map((service, index) => {
            const isWide = index % 4 === 0;

            return (
              <div
                key={service.id}
                data-title={service.title}
                onClick={() => navigate("/contact-us")}
                className={`group relative bg-gradient-to-b from-[#130a1c] to-[#0b050f] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer p-6 sm:p-8 flex flex-col justify-between hover:border-[#A36646]/40 hover:shadow-2xl hover:shadow-[#552365]/10 transition-all duration-300 select-none hover:-translate-y-1.5 ${
                  isWide ? "lg:col-span-3" : "lg:col-span-1"
                }`}
                style={{ transitionDelay: `${index * 10}ms` }}
              >
                {/* Upper Glow Hover Border System */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-[#A36646]/60 transition-all duration-300" />

                <div className="space-y-4 h-full flex flex-col justify-between">
                  {/* Metadata Header Layer */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-[9px] text-[#A36646] tracking-widest bg-[#552365]/10 px-2 py-0.5 rounded border border-[#552365]/20">
                      {service.code}
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A36646] animate-pulse" />
                      <span>{service.threat}</span>
                    </div>
                  </div>

                  {/* Operational Data Text & Assets Layer */}
                  <div className="flex-grow">
                    {isWide ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
                        <div className="lg:col-span-7 space-y-3.5">
                          <h3 className="text-2xl sm:text-4xl font-black text-white uppercase group-hover:text-[#A36646] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal group-hover:text-slate-200 transition-colors duration-300">
                            {service.details}
                          </p>
                        </div>

                        <div className="lg:col-span-5 h-[200px] sm:h-[220px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b050f]/90 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 flex flex-col h-full justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#A36646] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-slate-400 text-xs leading-relaxed font-normal line-clamp-4 group-hover:text-slate-300 transition-colors duration-300">
                            {service.details}
                          </p>
                        </div>

                        <div className="h-[140px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.04] mt-2">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-25 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b050f] via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vector Specifications Lower Layer Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-slate-500 w-full">
                  <div className="flex items-center gap-1.5 max-w-[70%]">
                    <Layers className="w-3 h-3 text-slate-600 flex-shrink-0" />
                    <span className="truncate uppercase tracking-wider block">
                      {service.spec}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#A36646] font-bold tracking-tight flex-shrink-0">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[9px]">
                      BOOK NOW
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Slate Diagnostic Feedback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20 border border-white/[0.05] bg-black/40 backdrop-blur-sm rounded-3xl max-w-xl mx-auto shadow-2xl transition-all duration-300">
            <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3 animate-bounce" />
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 px-4">
              No services found matching this pest category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Services;