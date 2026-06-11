



// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Links are white by default to pop perfectly on top of the hero image
//   const navClass = ({ isActive }) =>
//     `text-[15px] lg:text-base font-black uppercase tracking-[0.12em] transition-all duration-200 ${
//       isActive ? 'text-[#F1C423]' : 'text-white hover:text-[#F1C423]'
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-black uppercase tracking-wider transition-all ${
//       isActive
//         ? 'bg-[#F1C423] text-neutral-950'
//         : 'text-white hover:bg-white/10'
//     }`;

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -5 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
     
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-24 md:h-28 ${
//         isScrolled 
//           ? 'bg-neutral-950/40 backdrop-blur-md border-b border-white/5 shadow-lg' 
//           : 'bg-transparent border-b border-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* --- LOGO CONTAINER --- */}
//           <Link 
//             to="/" 
//             className="flex items-center justify-start h-full cursor-pointer active:scale-98 transition-transform shrink-0 py-2"
//           >
//             <img 
//               src="images/peslog.webp" 
//               alt="PesSave Logo" 
//               className="h-14 md:h-20 lg:h-22 w-auto object-contain block" 
//             />
//           </Link>

//           {/* --- DESKTOP NAVIGATION LINKS & LOCATION --- */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             <div className="flex items-center gap-6 lg:gap-9">
//               <NavLink to="/" className={navClass}>Home</NavLink>
//               <NavLink to="/about-us" className={navClass}>About</NavLink>
//               <NavLink to="/services" className={navClass}>Services</NavLink>
//               <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
//             </div>
            
//             {/* White Text Location Divider to stand out on dark imagery */}
//             <div className="flex items-center gap-2 text-white font-black text-sm lg:text-[15px] uppercase tracking-widest pl-6 lg:pl-8 border-l-2 border-white/20 h-6">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth={2.5} 
//                 stroke="currentColor" 
//                 className="w-4.5 h-4.5 text-[#F1C423] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span className="whitespace-nowrap">Chelsea, London</span>
//             </div>
//           </div>

//           {/* --- HAMBURGER MENU BUTTON (Mobile White/Transparent Theme) --- */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-all active:scale-90 bg-white/5 hover:bg-white/10 border border-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-xl font-black">✕</span>
//             ) : (
//               <span className="text-3xl font-light">☰</span>
//             )}
//           </button>

//         </div>
//       </div>

//       {/* --- MOBILE DRAWER SLIDE DOWN (Dark themed background to blend with transparency) --- */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: 'easeInOut' }}
//             className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-t border-white/5 shadow-2xl overflow-hidden absolute top-full left-0 w-full"
//           >
//             <div className="px-6 py-6 flex flex-col gap-2">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact</NavLink>
              
//               {/* Mobile Dark Theme Location Footer */}
//               <div className="border-t border-white/10 mt-3 pt-4 flex items-center gap-2.5 text-xs text-neutral-300 font-black uppercase tracking-widest px-5 py-3 bg-white/5 rounded-xl">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   strokeWidth={2.5} 
//                   stroke="currentColor" 
//                   className="w-4 h-4 text-[#F1C423]"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//                 </svg>
//                 <span>Chelsea, London, UK</span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }














// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Premium Custom Design: Text styling with the new Teal theme from the logo
//   const navClass = ({ isActive }) =>
//     `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-all duration-300 relative py-1 ${
//       isActive 
//         ? 'text-[#76C7C0] drop-shadow-[0_0_8px_rgba(118,199,192,0.5)]' 
//         : 'text-slate-200 hover:text-[#4FA3A5]'
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-all duration-200 ${
//       isActive
//         ? 'bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] font-black shadow-lg shadow-[#4FA3A5]/20'
//         : 'text-slate-300 hover:bg-white/5 hover:text-white'
//     }`;

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -8 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-24 md:h-28 ${
//         isScrolled 
//           ? 'bg-[#020b14]/70 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
//           : 'bg-transparent border-b border-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* --- LOGO CONTAINER (Pesrid Services Logo) --- */}
//           <Link 
//             to="/" 
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//           >
//             <img 
//               src="images/pesrid.png.png" 
//               alt="Pesrid Services Sidcup Logo" 
//               className="h-16 md:h-22 lg:h-24 w-auto object-contain block" 
//             />
//           </Link>

//           {/* --- DESKTOP NAVIGATION --- */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             <div className="flex items-center gap-6 lg:gap-9">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />}
//                   </>
//                 )}
//               </NavLink>
//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />}
//                   </>
//                 )}
//               </NavLink>
//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />}
//                   </>
//                 )}
//               </NavLink>
//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && <motion.span layoutId="underline" className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />}
//                   </>
//                 )}
//               </NavLink>
//             </div>
            
//             {/* New Location Pin updated to Sidcup, London with Brand Accent Color */}
//             <div className="flex items-center gap-2.5 text-slate-300 font-bold text-xs lg:text-sm uppercase tracking-widest pl-6 lg:pl-8 border-l border-white/10 h-6">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth={2.5} 
//                 stroke="currentColor" 
//                 className="w-4.5 h-4.5 text-[#4FA3A5] drop-shadow-[0_0_4px_rgba(79,163,165,0.4)] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span className="whitespace-nowrap tracking-[0.1em]">Sidcup, London</span>
//             </div>
//           </div>

//           {/* --- HAMBURGER MENU BUTTON --- */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-all active:scale-90 bg-white/5 hover:bg-white/10 border border-white/5 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#76C7C0]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>

//         </div>
//       </div>

//       {/* --- MOBILE DRAWER SLIDE DOWN --- */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             className="md:hidden bg-[#020b14]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl overflow-hidden absolute top-full left-0 w-full"
//           >
//             <div className="px-6 py-6 flex flex-col gap-2">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>
              
//               {/* Mobile Sidebar Footer Location */}
//               <div className="border-t border-white/5 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-400 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   strokeWidth={2.5} 
//                   stroke="currentColor" 
//                   className="w-4 h-4 text-[#4FA3A5]"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//                 </svg>
//                 <span>Sidcup, London, UK</span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }














import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 10;

          setIsScrolled((prev) => {
            if (prev === shouldBeScrolled) return prev;
            return shouldBeScrolled;
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 ${
      isActive
        ? "text-[#76C7C0]"
        : "text-slate-200 hover:text-[#4FA3A5]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
      isActive
        ? "bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] font-black shadow-lg shadow-[#4FA3A5]/20"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#020b14]/90 border-b border-white/5 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/swiftpeslogo.webp"
              alt="Pesrid Services Sidcup Logo"
              className="h-16 md:h-22 lg:h-24 w-auto object-contain block"
              loading="eager"
              decoding="async"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-6 lg:gap-9">
              <NavLink to="/" className={navClass}>
                {({ isActive }) => (
                  <>
                    Home
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/services" className={navClass}>
                {({ isActive }) => (
                  <>
                    Services
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/about-us" className={navClass}>
                {({ isActive }) => (
                  <>
                    About Us
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/contact-us" className={navClass}>
                {({ isActive }) => (
                  <>
                    Contact Us
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
                    )}
                  </>
                )}
              </NavLink>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300 font-bold text-xs lg:text-sm uppercase tracking-widest pl-6 lg:pl-8 border-l border-white/10 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#4FA3A5] shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="whitespace-nowrap tracking-[0.1em]">
                worcester, London
              </span>
            </div>
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-white/10 border border-white/5 shrink-0"
            aria-label="Toggle menu"
          >
            {open ? (
              <span className="text-xl font-bold text-[#76C7C0]">✕</span>
            ) : (
              <span className="text-2xl font-light">☰</span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#020b14]/95 border-t border-white/5 shadow-xl overflow-hidden absolute top-full left-0 w-full">
          <div className="px-6 py-6 flex flex-col gap-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
              Home
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
              Services
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
              About Us
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
              Contact Us
            </NavLink>

            <div className="border-t border-white/5 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-400 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#4FA3A5]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>worcester, London, UK</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}