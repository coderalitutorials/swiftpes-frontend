// import React from "react";
// import { motion } from "framer-motion";
// import { PhoneCall, ShieldCheck, Calendar, Leaf, Award, ShieldAlert } from "lucide-react";

// export default function PesSaveWhyChooseUs() {
  
//   // High-fidelity structured metrics for PesSave
//   const trustCards = [
//     {
//       icon: PhoneCall,
//       title: "Immediate Phone Diagnostic",
//       desc: "Free emergency assessments over the phone with certified experts.",
//       color: "#4FA3A5"
//     },
//     {
//       icon: ShieldCheck,
//       title: "100% Eradication Bound",
//       desc: "Full containment protocols backed by our rigorous re-treatment guarantee.",
//       color: "#76C7C0"
//     },
//     {
//       icon: Calendar,
//       title: "Continuous Operations",
//       desc: "Flexible residential & commercial slots including late weekends.",
//       color: "#4FA3A5"
//     },
//     {
//       icon: Leaf,
//       title: "Eco-Certified Systems",
//       desc: "Targeted non-toxic compounds and smart chemical-free detection methods.",
//       color: "#76C7C0"
//     },
//     {
//       icon: Award,
//       title: "BPCA Vetted Operators",
//       desc: "London technicians are extensively trained, vetted, and fully insured.",
//       color: "#4FA3A5"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//     }
//   };

//   const cardUpVariants = {
//     hidden: { opacity: 0, y: 35 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section className="relative py-28 md:py-36 bg-[#020b14] overflow-hidden z-20 border-b border-white/[0.04] group/section">
      
//       {/* SCIFI GRID SYSTEM PATTERN OVERLAY */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

//       {/* LUXURY RADIANT FLUID INJECTORS */}
//       <div className="absolute top-1/3 left-[-15%] w-[600px] h-[600px] bg-[#4FA3A5]/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
//       <div className="absolute bottom-1/3 right-[-15%] w-[500px] h-[500px] bg-[#76C7C0]/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
//           {/* ====================================================================== */}
//           {/* LEFT SIDE: PREMIUM INTRO MATRIX & ASYMMETRIC VISUAL                    */}
//           {/* ====================================================================== */}
//           <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-28">
            
//             <div className="space-y-6">
//               {/* Tech Spec Tag */}
//               <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-3.5 py-1 rounded-md backdrop-blur-sm shadow-xl">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//                 <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">Trust Protocols</span>
//               </div>

//               {/* Aggressive Clean Headline */}
//               <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
//                 Why people trust <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] via-[#61b5b8] to-[#76C7C0]">
//                   our bio-security
//                 </span>
//               </h2>

//               {/* Context Description Copy */}
//               <p className="text-slate-400 text-sm leading-relaxed font-normal max-w-md">
//                 At PesSave, we don't just apply temporary surface treatments. Our local British-certified specialists trace infestations back to their nesting origins, delivering safe, long-lasting biological and physical barriers that secure your building structure permanently.
//               </p>
//             </div>

//             {/* Asymmetric 3D Dynamic Asset Overlay */}
//             <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.08] p-2 bg-gradient-to-b from-white/[0.04] to-transparent shadow-2xl group/frame hidden sm:block">
//               <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#020b14]">
//                 <img
//                   src="/images/why-choose-pessave.webp"
//                   alt="PesSave tactical pest elimination processing"
//                   className="w-full h-full object-cover opacity-60 group-hover/section:opacity-75 group-hover/section:scale-105 transition-all duration-1000 filter contrast-[1.1] brightness-90 saturate-[0.85] select-none"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/10 to-transparent opacity-80" />
//               </div>

//               {/* Floating Shield Badge Overlay */}
//               <div className="absolute top-6 right-6 bg-[#020b14]/90 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-2xl">
//                 <div className="w-7 h-7 rounded-lg bg-[#76C7C0]/10 flex items-center justify-center border border-[#76C7C0]/30">
//                   <ShieldAlert className="w-4 h-4 text-[#76C7C0]" />
//                 </div>
//                 <div>
//                   <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">System Check</div>
//                   <div className="text-[11px] font-black text-white uppercase">100% Guaranteed</div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* ====================================================================== */}
//           {/* RIGHT SIDE: PREMIUM GLASSMORPHIC STRUCTURED GRID STACK                  */}
//           {/* ====================================================================== */}
//           <div className="lg:col-span-7">
//             <motion.div 
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.1 }}
//             >
//               {trustCards.map((card, idx) => {
//                 const IconComponent = card.icon;
//                 return (
//                   <motion.div
//                     key={idx}
//                     variants={cardUpVariants}
//                     className={`bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.05] p-6 rounded-2xl transition-all duration-300 group/card flex flex-col justify-between shadow-xl backdrop-blur-sm ${
//                       idx === 4 ? "sm:col-span-2" : ""
//                     }`}
//                     style={{
//                       borderColor: "hover:transparent"
//                     }}
//                     whileHover={{ y: -4, borderColor: `${card.color}33` }}
//                   >
//                     <div>
//                       {/* Glass Icon Capsule */}
//                       <div 
//                         className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-all group-hover/card:scale-105"
//                         style={{ '--hover-bg': `${card.color}1a`, '--hover-border': card.color }}
//                       >
//                         <IconComponent className="w-5 h-5 transition-colors" style={{ color: card.color }} />
//                       </div>

//                       {/* Content Stack */}
//                       <h3 className="text-white font-black text-sm uppercase tracking-wider mt-5 mb-2">
//                         {card.title}
//                       </h3>
//                       <p className="text-slate-400 text-xs leading-relaxed font-normal">
//                         {card.desc}
//                       </p>
//                     </div>

//                     {/* Technical subtle corner bracket indicator */}
//                     <div className="w-4 h-4 border-b border-r border-white/0 group-hover/card:border-white/10 transition-all self-end mt-4 rounded-br-md" />
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";
import { PhoneCall, Calendar, ClipboardCheck, ArrowRight } from "lucide-react";

export default function PesSaveProcessSection() {
  const navigate = useNavigate();

  const steps = [
    {
      step: "01",
      title: "Assessment",
      icon: Calendar,
      desc: "Book your slot online or call us. Our local specialists arrive to inspect your premises thoroughly.",
    },
    {
      step: "02",
      title: "Targeted Eradication",
      icon: ClipboardCheck,
      desc: "We deploy eco-certified compounds and heat formulas tailored precisely to your specific pest issue.",
    },
    {
      step: "03",
      title: "Long-term Protection",
      icon: PhoneCall,
      desc: "Our team seals entry blocks and provides structural certification to prevent future infestations.",
    },
  ];

  return (
    <section className="bg-[#120c1a] py-24 sm:py-32 text-white relative overflow-hidden z-30 border-b border-white/[0.04] group/process">
      {/* Subtle Brand Glows */}
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#4B1B67]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-[#A35C37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A35C37]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#A35C37] uppercase font-bold">
                Operational Flow
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-[1.1]">
              How We Restore <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d277d] to-[#b86d42]">
                Your Safety Grid
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            Our clean, non-disruptive 3-stage process guarantees quick relief and ensures your domestic or commercial asset meets regulatory hygiene baselines.
          </p>
        </div>

        {/* Dynamic Connected Process Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step} 
                className="relative group/card bg-white/[0.02] border border-white/[0.05] hover:border-[#4B1B67]/40 p-8 sm:p-10 rounded-3xl transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between min-h-[300px]"
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 right-8 font-mono text-5xl font-black text-white/[0.03] group-hover/card:text-[#4B1B67]/15 transition-colors duration-300 select-none">
                  {item.step}
                </div>

                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-[#120c1a] border border-white/10 flex items-center justify-center group-hover/card:border-[#A35C37] group-hover/card:bg-[#A35C37]/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-slate-300 group-hover/card:text-[#A35C37] transition-colors duration-200" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover/card:text-[#A35C37] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 border-t border-white/[0.04] flex items-center justify-between mt-6">
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">Stage Secured</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/card:bg-[#A35C37] transition-colors duration-200" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Bar / Trigger */}
        <div className="mt-16 bg-gradient-to-r from-[#4B1B67]/20 via-[#120c1a] to-[#A35C37]/10 border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="relative flex h-3 w-3 hidden sm:inline-block">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              Dealing with an emergency pest breakout? Our rapid teams response within 2 hours.
            </p>
          </div>
          <button 
            onClick={() => navigate("/contact-us")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A35C37] hover:bg-[#A35C37]/90 text-white font-black text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md active:scale-[0.98]"
          >
            <span>Request Urgent Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}