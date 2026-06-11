


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const platformFadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
// };

// const linkContainerStagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.04 } },
// };

// const Footer = () => {
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.1 }}
//       className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans"
//     >
//       {/* TECH BACKDROP MATRIX LAYER */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-[160px] pointer-events-none" />

//       {/* MAIN LAYOUT HUB */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        
//         {/* UPPER ZONE: ASYMMETRIC SPLIT PLATFORM */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
          
//           {/* BRAND PROFILE MATRIX (5 COLUMNS) */}
//           <motion.div variants={platformFadeUp} className="lg:col-span-5 space-y-6 text-left">
//             <img
//               src="/images/peslog.webp"
//               alt="PesSave Services"
//               className="h-14 w-auto object-contain"
//             />
//             <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               Premium biological safety and structural pest containment infrastructure engineered for high-end residential and commercial zones in Chelsea.
//             </p>
//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl backdrop-blur-md shadow-xl">
//               <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </motion.div>

//           {/* DYNAMIC NAVIGATION LINKS BLOCK (7 COLUMNS) */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
            
//             {/* LINK HUB A: NAVIGATION INTERACTION */}
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Corporate Directory
//               </h4>
//               <motion.nav 
//                 variants={linkContainerStagger} 
//                 className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium"
//               >
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </motion.nav>
//             </div>

//             {/* LINK HUB B: DEEP ROUTING SERVICES */}
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
//                 Active Deployments
//               </h4>
//               <motion.div 
//                 variants={linkContainerStagger} 
//                 className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium"
//               >
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: { scrollToService: "Rats & Mice Control", category: "Rodents & Wildlife" },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: { scrollToService: "Bed Bugs Control", category: "Insects" },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: { scrollToService: "Carpet Moth Control Treatment", category: "Insects" },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </motion.div>
//             </div>

//           </div>
//         </div>

//         {/* MIDDLE ZONE: HORIZONTAL FLOW CONTACT GRID */}
//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
          
//           <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 text-left">
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>
//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Operational Base</span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">Chelsea, London, UK</span>
//             </div>
//           </div>

//           <a 
//             href="tel:07405 613595"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-all duration-300 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>
//             <div className="min-w-0 flex-grow">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Direct Hotline 24/7</span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors">07405 613595</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:text-[#76C7C0]" />
//           </a>

//           <a 
//             href="mailto:info@pessave.co.uk"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-all duration-300 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <Mail className="w-5 h-5" />
//             </div>
//             <div className="min-w-0 flex-grow truncate">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Secure Inbound Relay</span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors truncate">info@pestcontrolchelsea.uk</span>
//             </div>
//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:text-[#4FA3A5]" />
//           </a>

//         </div>

//         {/* LOWER ZONE: TERMINAL FOOTNOTE */}
//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()} <span className="text-slate-400">PesSave Services</span>. All rights engineered.
//           </p>
//           <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//             <span>PesSave System Core Architecture v2.4</span>
//           </div>
//         </div>

//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;


















import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
          <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
            <img
              src="/images/swiftpeslogo.webp"
              alt="PesSave Services"
              className="h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />

            <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
              Premium biological safety and structural pest containment
              infrastructure engineered for high-end residential and commercial
              zones in worcester.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
              <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
                London Standards Compliant
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
            <div className="space-y-6">
              <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
                Corporate Directory
              </h4>

              <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
                {[
                  { name: "System Home", path: "/" },
                  { name: "Our Corporate Profile", path: "/about-us" },
                  { name: "Treatment Protocols", path: "/services" },
                  { name: "Emergency Dispatch Hub", path: "/contact-us" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors duration-200" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
                Active Deployments
              </h4>

              <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
                {[
                  {
                    name: "Rat & Mice Control",
                    state: {
                      scrollToService: "Rats & Mice Control",
                      category: "Rodents & Wildlife",
                    },
                  },
                  {
                    name: "Bed Bugs Thermal Heat",
                    state: {
                      scrollToService: "Bed Bugs Control",
                      category: "Insects",
                    },
                  },
                  {
                    name: "Carpet Moth Eradication",
                    state: {
                      scrollToService: "Carpet Moth Control Treatment",
                      category: "Insects",
                    },
                  },
                  {
                    name: "Safe Pest Removal Matrix",
                    state: { scrollToService: null, category: "All" },
                  },
                ].map((service) => (
                  <Link
                    key={service.name}
                    to="/services"
                    state={service.state}
                    className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors duration-200" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
          <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-200 text-left">
            <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="min-w-0">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Operational Base
              </span>
              <span className="text-sm font-semibold text-slate-200 block mt-0.5">
                worcester, London, UK
              </span>
            </div>
          </div>

          <a
            href="tel:07405613595"
            className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-colors duration-200 text-left"
          >
            <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
              <Phone className="w-5 h-5" />
            </div>

            <div className="min-w-0 flex-grow">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Direct call us
              </span>
              <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors duration-200">
                07438 164691
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#76C7C0]" />
          </a>

          <a
            href="mailto:info@pestcontrolworcester.uk"
            className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-colors duration-200 text-left"
          >
            <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
              <Mail className="w-5 h-5" />
            </div>

            <div className="min-w-0 flex-grow truncate">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Secure Inbound Relay
              </span>
              <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors duration-200 truncate">
                info@pestcontrolworcester.uk
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#4FA3A5]" />
          </a>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
          <p className="tracking-wide text-center sm:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-slate-400">swiftpes Services</span>. All
            rights engineered.
          </p>

          <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
            <span>swiftpes System Core Architecture v2.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;