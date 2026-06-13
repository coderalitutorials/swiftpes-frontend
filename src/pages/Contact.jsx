


// import { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// const colors = {
//   bgMain: "#FFFFFF",
//   bgDarkBlock: "#5C4033",
//   accentYellow: "#F2C12E",
//   neutralDark: "#0A0A0A",
//   cardBg: "#FDFBF7",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Control",
//     "Carpet Moth Control Treatment",
//     "Carpet Beetle Treatment",
//     "Cockroach Control Service",
//     "Rats & Mice Control",
//     "Flea Control",
//     "Wasps Nest Control",
//     "Bumble Bee Control",
//     "Squirrel Control",
//     "Hygiene and Proofing Services",
//     "Birds Control Services",
//     "Pigeons Control Services",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can you treat a pest problem in Chelsea?",
//       answer:
//         "We offer immediate local dispatch times across Chelsea and surrounding premium UK territories. For emergency threats, our specialists aim to deploy within hours.",
//     },
//     {
//       question: "Are your pest control treatments safe for pets and children?",
//       answer:
//         "Yes, family safety is our prime constraint. We utilize highly targeted biological eradication systems and guide you safely through containment timelines.",
//     },
//     {
//       question: "Do you offer proofing to stop rodents from returning?",
//       answer:
//         "Absolutely. We locate hidden nested hotspots, block incoming structural pathways with heavy meshes, and establish premium permanent seal safeguards.",
//     },
//     {
//       question: "Will I need more than one visit?",
//       answer:
//         "Outbreak dynamics vary. While simple treatments conclude instantly, complex rodent structures or bed bugs require a systematic 2 to 3 stage clearance procedure.",
//     },
//     {
//       question: "Do you provide commercial pest control?",
//       answer:
//         "Yes, PesSave operates discreet premium coverage accounts for retail outlets, corporate high-rises, and major commercial kitchen setups across London.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request securely...", {
//       style: {
//         background: colors.bgDarkBlock,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.accentYellow}33`,
//       },
//     });

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/contact",
//         formData
//       );

//       toast.success(
//         res.data.message || "Pest service request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.bgDarkBlock,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.accentYellow}88`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-white text-neutral-900 min-h-screen font-sans antialiased selection:bg-[#F2C12E] selection:text-[#5C4033] overflow-x-hidden w-full">
//       <Toaster position="top-right" reverseOrder={false} />

//       <section className="relative min-h-[420px] sm:min-h-[520px] flex items-center justify-start overflow-hidden bg-[#5C4033] w-full">
//         <div
//           className="
//             absolute inset-0 z-0
//             bg-cover bg-no-repeat
//             bg-[position:center_28%]
//             sm:bg-[position:center_24%]
//             lg:bg-[position:center_20%]
//             opacity-70
//             select-none pointer-events-none
//           "
//           style={{
//             backgroundImage: "url('/images/contact-hero.webp')",
//           }}
//         />

//         <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#5C4033]/78 via-[#5C4033]/52 to-[#5C4033]/20" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left pt-24 pb-28">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl space-y-3"
//           >
//             <div className="flex items-center gap-3">
//               <span className="w-8 h-[2px] bg-[#F2C12E]" />
//               <span className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.3em]">
//                 Get In Touch
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//               Contact Us
//             </h1>

//             <p className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
//               Have an urgent infestation problem? Connect with our dedicated
//               London dispatch office right now for instant elite clearance
//               procedures.
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

//       <section className="pt-12 pb-20 sm:pt-16 sm:pb-28 bg-white relative z-20 w-full">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full flex flex-col justify-between p-8 sm:p-12 bg-[#cdbdb6] shadow-xl shadow-neutral-200/50 group"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-luminosity scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
//                 style={{
//                   backgroundImage:
//                     "url('/images/sidebanner.webp')",
//                 }}
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/95 via-[#5C4033]/70 to-[#5C4033]/40 z-0" />

//               <div className="relative z-10 space-y-4 text-left">
//                 <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F2C12E] bg-[#F2C12E]/10 px-3 py-1.5 rounded-md border border-[#F2C12E]/20">
//                   PesSave Hub
//                 </span>

//                 <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight pt-2">
//                   Premium Eradication Frameworks
//                 </h3>
//               </div>

//               <div className="relative z-10 text-left pt-12 space-y-4 border-t border-white/10">
//                 <p className="text-gray-200 text-sm leading-relaxed font-medium">
//                   We secure residential grids and complex corporate
//                   architectures using zero-compromise mechanical barriers and
//                   toxicologically filtered treatments.
//                 </p>

//                 <div className="pt-2">
//                   <p className="text-[10px] font-black uppercase tracking-widest text-[#F2C12E]">
//                     // Emergency Response
//                   </p>
//                   <p className="text-base font-black text-white mt-0.5">
//                     07405 613595
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-7 w-full flex flex-col justify-center text-left"
//             >
//               <div className="mb-8">
//                 <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950">
//                   Request Inspection
//                 </h2>

//                 <p className="text-gray-500 text-sm sm:text-base mt-2 font-normal">
//                   Fill out our verification module below to receive direct,
//                   transparent quotes. No surprise margins.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6 w-full">
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   {[
//                     {
//                       label: "Your Full Name",
//                       name: "name",
//                       type: "text",
//                       placeholder: "e.g. John Doe",
//                     },
//                     {
//                       label: "Email Address",
//                       name: "email",
//                       type: "email",
//                       placeholder: "e.g. john@example.com",
//                     },
//                     {
//                       label: "Phone Number",
//                       name: "phone",
//                       type: "tel",
//                       placeholder: "e.g. +44 7405 613595",
//                     },
//                     {
//                       label: "Postcode Location",
//                       name: "postcode",
//                       type: "text",
//                       placeholder: "e.g. W1D",
//                     },
//                   ].map((field) => (
//                     <div key={field.name} className="space-y-2 w-full">
//                       <label className="block text-xs font-black text-neutral-800 tracking-wider uppercase">
//                         {field.label}{" "}
//                         <span className="text-[#5C4033]">*</span>
//                       </label>

//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         placeholder={field.placeholder}
//                         required
//                         className="w-full bg-[#FDFBF7] border border-neutral-200/70 focus:border-[#5C4033] rounded-xl px-4 py-3.5 outline-none transition-all text-neutral-950 placeholder:text-neutral-400 text-sm font-medium focus:ring-2 focus:ring-[#5C4033]/5"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="space-y-2 w-full">
//                   <label className="block text-xs font-black text-neutral-800 tracking-wider uppercase">
//                     Required Pest Target{" "}
//                     <span className="text-[#5C4033]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-[#FDFBF7] border border-neutral-200/70 focus:border-[#5C4033] rounded-xl pl-4 pr-12 py-3.5 outline-none transition-all text-neutral-950 appearance-none cursor-pointer text-sm font-medium focus:ring-2 focus:ring-[#5C4033]/5"
//                     >
//                       <option value="" className="text-neutral-400">
//                         Select target infection route...
//                       </option>

//                       {services.map((srv, idx) => (
//                         <option key={idx} value={srv} className="text-neutral-900">
//                           {srv}
//                         </option>
//                       ))}
//                     </select>

//                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
//                       ▼
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-2 w-full">
//                   <label className="block text-xs font-black text-neutral-800 tracking-wider uppercase">
//                     Situation Description{" "}
//                     <span className="text-[#5C4033]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Provide details about structural damages or pest sightings..."
//                     required
//                     className="w-full bg-[#FDFBF7] border border-neutral-200/70 focus:border-[#5C4033] rounded-xl px-4 py-3.5 outline-none transition-all text-neutral-950 placeholder:text-neutral-400 text-sm font-medium resize-none focus:ring-2 focus:ring-[#5C4033]/5"
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full sm:w-auto px-8 py-4 bg-[#5C4033] border border-[#5C4033] text-white hover:bg-[#5C4033]/90 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#5C4033]/10 disabled:opacity-50"
//                   >
//                     {loading
//                       ? "Processing Securely..."
//                       : "Book Immediate Inspection"}
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-neutral-50 py-16 border-t border-b border-neutral-100 w-full relative z-20">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-10 items-center">
//           <div className="lg:col-span-4 space-y-6 text-left">
//             <div className="p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm space-y-4">
//               <div className="w-12 h-12 rounded-xl bg-[#5C4033]/5 border border-[#5C4033]/10 flex items-center justify-center">
//                 <svg className="w-6 h-6" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
//                 </svg>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[10px] bg-[#5C4033]/5 border border-[#5C4033]/10 text-[#5C4033] px-2 py-0.5 rounded font-black tracking-wider uppercase">
//                     Verified UK Listing
//                   </span>

//                   <span className="text-[#F2C12E] text-xs">★★★★★</span>
//                 </div>

//                 <h4 className="text-base font-black text-neutral-950 uppercase tracking-tight">
//                   PesSave Google Profile
//                 </h4>

//                 <p className="text-xs text-gray-500 font-medium">
//                   Access reviews and localized service coverage across Chelsea
//                   and surrounding London areas.
//                 </p>

//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Chelsea%2C%20London%2C%20UK"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs font-black text-[#5C4033] hover:underline inline-flex items-center gap-1 pt-1"
//                 >
//                   Explore Profile →
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden border border-neutral-200/70 h-[340px] relative shadow-md">
//             <iframe
//               title="Chelsea London UK"
//               src="https://www.google.com/maps?q=Chelsea,%20London,%20UK&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-12 relative z-20 border-b border-neutral-100 w-full">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {[
//             {
//               label: "Local Premium Hub",
//               val: "Soho & Chelsea, London, UK",
//               icon: "📍",
//             },
//             {
//               label: "Corporate Support",
//               val: "info@pessave.co.uk",
//               icon: "✉️",
//               link: "mailto:info@pessave.co.uk",
//             },
//             {
//               label: "Direct Emergency Helpline",
//               val: "07405 613595",
//               icon: "📞",
//               link: "tel:07405 613595",
//             },
//           ].map((node, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-4 bg-[#FDFBF7] border border-neutral-200/50 rounded-xl p-5 hover:border-[#5C4033]/30 transition-all duration-300"
//             >
//               <div className="text-xl bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-200/30 shadow-sm">
//                 {node.icon}
//               </div>

//               <div className="text-left">
//                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">
//                   {node.label}
//                 </p>

//                 {node.link ? (
//                   <a
//                     href={node.link}
//                     className="text-sm font-black text-neutral-900 hover:text-[#5C4033] transition-colors"
//                   >
//                     {node.val}
//                   </a>
//                 ) : (
//                   <p className="text-sm font-black text-neutral-900">
//                     {node.val}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-24 bg-[#FDFBF7] relative z-20 w-full">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-xs text-[#5C4033] font-black uppercase tracking-[0.2em]">
//               // Faq Interface
//             </span>

//             <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-900 mt-2">
//               Frequently Answered Frameworks
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`border transition-all duration-300 rounded-xl overflow-hidden ${
//                     isOpen
//                       ? "bg-white border-[#5C4033]/30 shadow-md"
//                       : "bg-white border-neutral-200/70 hover:border-[#5C4033]/20"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none"
//                   >
//                     <span className="font-black text-sm sm:text-base text-neutral-900 tracking-tight">
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-xl font-light transform transition-transform duration-300 ${
//                         isOpen ? "rotate-45 text-[#5C4033]" : "text-neutral-400"
//                       }`}
//                     >
//                       ＋
//                     </span>
//                   </button>

//                   <AnimatePresence initial={false}>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.2, ease: "linear" }}
//                       >
//                         <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-neutral-100 pt-3 font-normal">
//                           {faq.answer}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;




















// import React, { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
// import { 
//   ShieldCheck, 
//   Mail, 
//   PhoneCall, 
//   MapPin, 
//   Terminal, 
//   HelpCircle, 
//   ChevronDown, 
//   Send, 
//   User, 
//   FileText, 
//   Lock,
//   Globe
// } from "lucide-react";

// // PREMIUM BASE COLORS FOR TOAST SYNC
// const colors = {
//   bgDarkBlock: "#041221",
//   accentYellow: "#76C7C0", // Synced with modern premium layout palette
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Control",
//     "Carpet Moth Control Treatment",
//     "Carpet Beetle Treatment",
//     "Cockroach Control Service",
//     "Rats & Mice Control",
//     "Flea Control",
//     "Wasps Nest Control",
//     "Bumble Bee Control",
//     "Squirrel Control",
//     "Hygiene and Proofing Services",
//     "Birds Control Services",
//     "Pigeons Control Services",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can you treat a pest problem in Sidcup?",
//       answer:
//         "We offer immediate local dispatch times across Sidcup and surrounding premium UK territories. For emergency threats, our specialists aim to deploy within hours.",
//     },
//     {
//       question: "Are your pest control treatments safe for pets and children?",
//       answer:
//         "Yes, family safety is our prime constraint. We utilize highly targeted biological eradication systems and guide you safely through containment timelines.",
//     },
//     {
//       question: "Do you offer proofing to stop rodents from returning?",
//       answer:
//         "Absolutely. We locate hidden nested hotspots, block incoming structural pathways with heavy meshes, and establish premium permanent seal safeguards.",
//     },
//     {
//       question: "Will I need more than one visit?",
//       answer:
//         "Outbreak dynamics vary. While simple treatments conclude instantly, complex rodent structures or bed bugs require a systematic 2 to 3 stage clearance procedure.",
//     },
//     {
//       question: "Do you provide commercial pest control?",
//       answer:
//         "Yes, PesSave operates discreet premium coverage accounts for retail outlets, corporate high-rises, and major commercial kitchen setups across London.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request securely...", {
//       style: {
//         background: colors.bgDarkBlock,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.accentYellow}33`,
//       },
//     });

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/contact",
//         formData
//       );

//       toast.success(
//         res.data.message || "Pest service request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.bgDarkBlock,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.accentYellow}88`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#020b14] text-slate-200 min-h-screen font-sans antialiased selection:bg-[#4FA3A5]/30 selection:text-white overflow-x-hidden w-full relative">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* BACKGROUND GRAPHIC MOTIFS */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
//       <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#4FA3A5]/5 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-[#76C7C0]/5 rounded-full blur-[140px] pointer-events-none" />

//       {/* ================= HERO ZONE WITH GLASSMORPHISM BACKING ================= */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden border-b border-white/[0.06]">
//         <div className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-luminosity">
//           <img 
//             src="/images/contact-hero.webp" 
//             alt="Sidcup Command Center Grid" 
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/60 to-transparent" />
//         </div>

//         <div className="relative z-10 max-w-3xl space-y-4 text-left bg-black/30 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl">
//           <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] px-3 py-1.5 rounded-md">
//             <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//             <span className="text-slate-400 text-[10px] font-mono tracking-widest uppercase">
//               PesSave Dispatch Portal // Secure Line
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             Connect With <br />
//             <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-200 bg-clip-text text-transparent">
//               Our Fleet Operators
//             </span>
//           </h1>

//           <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
//             Facing an active infiltration path inside your property architecture? Transmit your location metrics directly to our premium Sidcup deployment office.
//           </p>
//         </div>
//       </section>

//       {/* ================= INTEGRATED GRID: MODULES & DISPATCH CHANNELS ================= */}
//       <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
//           {/* LEFT SIDEBAR: CORE STATS & INFRASTRUCTURE */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-5 flex flex-col justify-between gap-6"
//           >
//             {/* BRAND CONTAINER */}
//             <div className="bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.08] rounded-3xl p-8 text-left relative overflow-hidden group flex-1 flex flex-col justify-between min-h-[320px]">
//               <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
//                 <img 
//                   src="/images/sidebanner.webp" 
//                   alt="PesSave High-Velocity Eradication Asset" 
//                   className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/50 to-transparent z-0" />

//               <div className="relative z-10 space-y-3">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded border border-[#76C7C0]/20">
//                   Sidcup HQ Network
//                 </span>
//                 <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight pt-2">
//                   Premium Eradication Frameworks
//                 </h3>
//               </div>

//               <div className="relative z-10 space-y-4 pt-8 border-t border-white/[0.06]">
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   We secure structural parameters using low-toxicity biological insulation layers and high-tensile custom mesh barriers across residential and corporate boundaries.
//                 </p>
//                 <div className="bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl flex items-center justify-between font-mono">
//                   <div className="text-left">
//                     <span className="text-[9px] text-slate-500 uppercase tracking-widest block">// Instant Helpline</span>
//                     <span className="text-sm font-bold text-white tracking-tight">07405 613595</span>
//                   </div>
//                   <PhoneCall className="w-4 h-4 text-[#4FA3A5]" />
//                 </div>
//               </div>
//             </div>

//             {/* QUICK CONTACT NODES BLOCK */}
//             <div className="space-y-3">
//               {[
//                 {
//                   label: "Local Premium Hub",
//                   val: "Sidcup, London, UK",
//                   icon: <MapPin className="w-4 h-4 text-[#76C7C0]" />,
//                 },
//                 {
//                   label: "Corporate Support",
//                   val: "info@pessave.co.uk",
//                   icon: <Mail className="w-4 h-4 text-[#4FA3A5]" />,
//                   link: "mailto:info@pessave.co.uk",
//                 },
//                 {
//                   label: "Direct Emergency Line",
//                   val: "07405 613595",
//                   icon: <PhoneCall className="w-4 h-4 text-[#76C7C0]" />,
//                   link: "tel:07405 613595",
//                 },
//               ].map((node, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 hover:border-[#4FA3A5]/30 transition-all duration-300 text-left"
//                 >
//                   <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
//                     {node.icon}
//                   </div>
//                   <div>
//                     <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">
//                       {node.label}
//                     </p>
//                     {node.link ? (
//                       <a
//                         href={node.link}
//                         className="text-xs sm:text-sm font-bold text-slate-200 hover:text-[#76C7C0] transition-colors font-mono"
//                       >
//                         {node.val}
//                       </a>
//                     ) : (
//                       <p className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
//                         {node.val}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </motion.div>

//           {/* RIGHT SIDEBAR: HIGH-END SAAS VERIFICATION INTERFACE (FORM) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="lg:col-span-7 w-full bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 sm:p-10 flex flex-col justify-center text-left backdrop-blur-sm relative"
//           >
//             <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#76C7C0]/40 to-transparent" />
            
//             <div className="mb-8">
//               <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
//                 Request Target Inspection
//               </h2>
//               <p className="text-slate-400 text-xs sm:text-sm mt-1">
//                 Fill out our structural validation framework below to calculate direct deployment quotes.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 w-full">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 {[
//                   {
//                     label: "Your Full Name",
//                     name: "name",
//                     type: "text",
//                     placeholder: "e.g. John Doe",
//                     icon: <User className="w-3.5 h-3.5 text-slate-500" />
//                   },
//                   {
//                     label: "Email Address",
//                     name: "email",
//                     type: "email",
//                     placeholder: "e.g. john@example.com",
//                     icon: <Mail className="w-3.5 h-3.5 text-slate-500" />
//                   },
//                   {
//                     label: "Phone Number",
//                     name: "phone",
//                     type: "tel",
//                     placeholder: "e.g. +44 7405 613595",
//                     icon: <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
//                   },
//                   {
//                     label: "Postcode Location",
//                     name: "postcode",
//                     type: "text",
//                     placeholder: "e.g. DA14",
//                     icon: <MapPin className="w-3.5 h-3.5 text-slate-500" />
//                   },
//                 ].map((field) => (
//                   <div key={field.name} className="space-y-1.5 w-full">
//                     <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                       {field.icon}
//                       <span>{field.label}</span>
//                       <span className="text-[#4FA3A5]">*</span>
//                     </label>

//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       required
//                       className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-all text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* DROPDOWN TARGET */}
//               <div className="space-y-1.5 w-full">
//                 <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                   <FileText className="w-3.5 h-3.5 text-slate-500" />
//                   <span>Required Pest Target</span>
//                   <span className="text-[#4FA3A5]">*</span>
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl pl-4 pr-12 py-3 outline-none transition-all text-slate-100 appearance-none cursor-pointer text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
//                   >
//                     <option value="" className="bg-[#020b14] text-slate-500">
//                       Select target infection route...
//                     </option>

//                     {services.map((srv, idx) => (
//                       <option key={idx} value={srv} className="bg-[#020b14] text-slate-300">
//                         {srv}
//                       </option>
//                     ))}
//                   </select>

//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* TEXTAREA DESCRIPTION */}
//               <div className="space-y-1.5 w-full">
//                 <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                   <Terminal className="w-3.5 h-3.5 text-slate-500" />
//                   <span>Situation Description</span>
//                   <span className="text-[#4FA3A5]">*</span>
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Provide parameters about structural damage indicators or vector sights..."
//                   required
//                   className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-all text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium resize-none focus:ring-4 focus:ring-[#76C7C0]/5"
//                 />
//               </div>

//               {/* ENCRYPTED SECURITY BADGE & SUBMIT */}
//               <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
//                   <Lock className="w-3 h-3 text-[#4FA3A5]" />
//                   <span>End-To-End TLS Encrypted Validation</span>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-3.5 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-slate-950 hover:brightness-110 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#4FA3A5]/10 disabled:opacity-40 inline-flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     "Processing Request..."
//                   ) : (
//                     <>
//                       <span>Book Immediate Clearance</span>
//                       <Send className="w-3.5 h-3.5" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>

//         </div>
//       </section>

//       {/* ================= SIDCUP MAP INTEGRATION MATRIX ================= */}
//       <section className="bg-black/20 py-16 border-t border-b border-white/[0.04] w-full relative">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-center">
          
//           <div className="lg:col-span-4 text-left space-y-4">
//             <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl shadow-xl space-y-4">
//               <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center">
//                 <Globe className="w-5 h-5 text-[#76C7C0]" />
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[9px] font-mono bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 text-[#4FA3A5] px-2 py-0.5 rounded font-bold tracking-wider uppercase">
//                     Verified UK Vector Hub
//                   </span>
//                   <span className="text-xs text-[#76C7C0]">★★★★★</span>
//                 </div>

//                 <h4 className="text-base font-black text-white uppercase tracking-tight">
//                   PesSave Corporate Node
//                 </h4>

//                 <p className="text-xs text-slate-400 leading-relaxed font-normal">
//                   Access direct local reviews and geo-mapped rapid intervention networks across Sidcup and the larger Greater London framework.
//                 </p>

//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Sidcup%2C%20London%2C%20UK"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs font-mono text-[#76C7C0] hover:underline inline-flex items-center gap-1 pt-2"
//                 >
//                   Explore Mapping Grid →
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden border border-white/[0.08] h-[340px] relative shadow-2xl bg-black/40">
//             <iframe
//               title="Sidcup London UK Grid Map"
//               src="https://www.google.com/maps?q=Sidcup,%20London,%20UK&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }} // Clean Premium Dark Map Mode Styling
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ================= FAQ SECTION INTERFACE ================= */}
//       <section className="py-24 relative w-full">
//         <div className="max-w-4xl mx-auto px-6">
          
//           <div className="text-center max-w-xl mx-auto mb-14 space-y-1">
//             <span className="text-xs text-[#4FA3A5] font-mono font-bold uppercase tracking-[0.2em]">
//               // FAQ Knowledge Framework
//             </span>
//             <h2 className="text-3xl font-black uppercase tracking-tight text-white">
//               Frequently Answered Frameworks
//             </h2>
//           </div>

//           <div className="space-y-3.5">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
//                     isOpen
//                       ? "bg-white/[0.02] border-[#76C7C0]/30 shadow-xl"
//                       : "bg-white/[0.01] border-white/[0.05] hover:border-white/[0.12]"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none group"
//                   >
//                     <span className="font-bold text-sm sm:text-base text-slate-200 tracking-tight transition-colors group-hover:text-white flex items-center gap-2.5">
//                       <HelpCircle className="w-4 h-4 text-[#4FA3A5] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-slate-500 font-mono transition-transform duration-300 text-lg ${
//                         isOpen ? "rotate-180 text-[#76C7C0]" : ""
//                       }`}
//                     >
//                       {isOpen ? "▲" : "▼"}
//                     </span>
//                   </button>

//                   <AnimatePresence initial={false}>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.2, ease: "linear" }}
//                       >
//                         <div className="px-6 pb-5 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3 font-normal">
//                           {faq.answer}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;














import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  PhoneCall,
  MapPin,
  Terminal,
  HelpCircle,
  ChevronDown,
  Send,
  User,
  FileText,
  Lock,
  Globe,
} from "lucide-react";

const colors = {
  bgDarkBlock: "#041221",
  accentYellow: "#76C7C0",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    "Ants Control",
    "Bed Bugs Control",
    "Carpet Moth Control Treatment",
    "Carpet Beetle Treatment",
    "Cockroach Control Service",
    "Rats & Mice Control",
    "Flea Control",
    "Wasps Nest Control",
    "Bumble Bee Control",
    "Squirrel Control",
    "Hygiene and Proofing Services",
    "Birds Control Services",
    "Pigeons Control Services",
  ];

  const faqs = [
    {
      question: "How quickly can you treat a pest problem in Worcester?",
      answer:
        "We offer immediate local dispatch times across Worcester and surrounding premium UK territories. For emergency threats, our specialists aim to deploy within hours.",
    },
    {
      question: "Are your pest control treatments safe for pets and children?",
      answer:
        "Yes, family safety is our prime constraint. We utilize highly targeted biological eradication systems and guide you safely through containment timelines.",
    },
    {
      question: "Do you offer proofing to stop rodents from returning?",
      answer:
        "Absolutely. We locate hidden nested hotspots, block incoming structural pathways with heavy meshes, and establish premium permanent seal safeguards.",
    },
    {
      question: "Will I need more than one visit?",
      answer:
        "Outbreak dynamics vary. While simple treatments conclude instantly, complex rodent structures or bed bugs require a systematic 2 to 3 stage clearance procedure.",
    },
    {
      question: "Do you provide commercial pest control?",
      answer:
        "Yes, PesSave operates discreet premium coverage accounts for retail outlets, corporate high-rises, and major commercial kitchen setups across London and Worcester.",
    },
  ];

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading("Sending your request securely...", {
      style: {
        background: colors.bgDarkBlock,
        color: "#FFFFFF",
        borderRadius: "12px",
        border: `1px solid ${colors.accentYellow}33`,
      },
    });

    try {
      const res = await axios.post("https://swiftpes-backend.vercel.app/api/contact", formData);

      toast.success(
        res.data.message || "Pest service request submitted successfully!",
        {
          id: loaderToast,
          duration: 4000,
          icon: "🛡️",
          style: {
            background: colors.bgDarkBlock,
            color: "#FFFFFF",
            border: `1px solid ${colors.accentYellow}88`,
            borderRadius: "12px",
          },
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again.",
        {
          id: loaderToast,
          duration: 4000,
          style: {
            background: "#7f1d1d",
            color: "#FFFFFF",
            borderRadius: "12px",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#020b14] text-slate-200 min-h-screen font-sans antialiased selection:bg-[#4FA3A5]/30 selection:text-white overflow-x-hidden w-full relative">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
      <div className="absolute top-20 left-10 w-[360px] h-[360px] bg-[#4FA3A5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[420px] h-[420px] bg-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
          <img
            src="/images/contact-hero.webp"
            alt="Worcester Command Center Grid"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/55 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4 text-left bg-black/40 p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-xl animate-[fadeUp_0.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] px-3 py-1.5 rounded-md">
            <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
            <span className="text-slate-400 text-[10px] font-mono tracking-widest uppercase">
              swiftpes Services worcester
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
            Connect With <br />
            <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-200 bg-clip-text text-transparent">
              Our Fleet Operators
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
            Facing an active infiltration path inside your property architecture?
            Transmit your location metrics directly to our premium Worcester
            deployment office.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Side Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 animate-[fadeUp_0.7s_ease-out_both]">
            <div className="bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.08] rounded-3xl p-8 text-left relative overflow-hidden group flex-1 flex flex-col justify-between min-h-[320px]">
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
                <img
                  src="/images/sidebanner.webp"
                  alt="PesSave High-Velocity Eradication Asset"
                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/50 to-transparent z-0" />

              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded border border-[#76C7C0]/20">
                  Worcester HQ Network
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight pt-2">
                  Premium Eradication Frameworks
                </h3>
              </div>

              <div className="relative z-10 space-y-4 pt-8 border-t border-white/[0.06]">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  We secure structural parameters using low-toxicity biological
                  insulation layers and high-tensile custom mesh barriers across
                  residential and corporate boundaries.
                </p>

                <div className="bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl flex items-center justify-between font-mono">
                  <div className="text-left">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest block">
                      // Instant Helpline
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      07438 164691
                    </span>
                  </div>
                  <PhoneCall className="w-4 h-4 text-[#4FA3A5]" />
                </div>
              </div>
            </div>

            {/* Contact Nodes */}
            <div className="space-y-3">
              {[
                {
                  label: "Local Premium Hub",
                  val: "Worcester, UK",
                  icon: <MapPin className="w-4 h-4 text-[#76C7C0]" />,
                },
                {
                  label: "Corporate Support",
                  val: "info@pestcontrolworcester.uk",
                  icon: <Mail className="w-4 h-4 text-[#4FA3A5]" />,
                  link: "mailto:info@pestcontrolworcester.uk",
                },
                {
                  label: "Direct Emergency Line",
                  val: "07438 164691",
                  icon: <PhoneCall className="w-4 h-4 text-[#76C7C0]" />,
                  link: "tel:07438164691",
                },
              ].map((node, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 hover:border-[#4FA3A5]/30 transition-colors duration-200 text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
                    {node.icon}
                  </div>

                  <div>
                    <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">
                      {node.label}
                    </p>

                    {node.link ? (
                      <a
                        href={node.link}
                        className="text-xs sm:text-sm font-bold text-slate-200 hover:text-[#76C7C0] transition-colors font-mono"
                      >
                        {node.val}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
                        {node.val}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 w-full bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 sm:p-10 flex flex-col justify-center text-left relative animate-[fadeUp_0.7s_ease-out_0.1s_both]">
            <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#76C7C0]/40 to-transparent" />

            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Request Target Inspection
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill out our structural validation framework below to calculate
                direct deployment quotes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    label: "Your Full Name",
                    name: "name",
                    type: "text",
                    placeholder: "e.g. John Doe",
                    icon: <User className="w-3.5 h-3.5 text-slate-500" />,
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    type: "email",
                    placeholder: "e.g. john@example.com",
                    icon: <Mail className="w-3.5 h-3.5 text-slate-500" />,
                  },
                  {
                    label: "Phone Number",
                    name: "phone",
                    type: "tel",
                    placeholder: "e.g. +44 7405 613595",
                    icon: <PhoneCall className="w-3.5 h-3.5 text-slate-500" />,
                  },
                  {
                    label: "Postcode Location",
                    name: "postcode",
                    type: "text",
                    placeholder: "e.g. WR1",
                    icon: <MapPin className="w-3.5 h-3.5 text-slate-500" />,
                  },
                ].map((field) => (
                  <div key={field.name} className="space-y-1.5 w-full">
                    <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                      {field.icon}
                      <span>{field.label}</span>
                      <span className="text-[#4FA3A5]">*</span>
                    </label>

                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1.5 w-full">
                <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Required Pest Target</span>
                  <span className="text-[#4FA3A5]">*</span>
                </label>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl pl-4 pr-12 py-3 outline-none transition-colors duration-200 text-slate-100 appearance-none cursor-pointer text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
                  >
                    <option value="" className="bg-[#020b14] text-slate-500">
                      Select target infection route...
                    </option>

                    {services.map((srv, idx) => (
                      <option
                        key={idx}
                        value={srv}
                        className="bg-[#020b14] text-slate-300"
                      >
                        {srv}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 w-full">
                <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                  <span>Situation Description</span>
                  <span className="text-[#4FA3A5]">*</span>
                </label>

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide parameters about structural damage indicators or vector sights..."
                  required
                  className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium resize-none focus:ring-4 focus:ring-[#76C7C0]/5"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                  <Lock className="w-3 h-3 text-[#4FA3A5]" />
                  <span>End-To-End TLS Encrypted Validation</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-slate-950 hover:brightness-110 rounded-xl font-bold text-xs uppercase tracking-widest transition-transform duration-200 shadow-lg shadow-[#4FA3A5]/10 disabled:opacity-40 inline-flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {loading ? (
                    "Processing Request..."
                  ) : (
                    <>
                      <span>Book Immediate Clearance</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-black/20 py-16 border-t border-b border-white/[0.04] w-full relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-left space-y-4 animate-[fadeUp_0.7s_ease-out_both]">
            <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#76C7C0]" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 text-[#4FA3A5] px-2 py-0.5 rounded font-bold tracking-wider uppercase">
                    Verified UK Vector Hub
                  </span>
                  <span className="text-xs text-[#76C7C0]">★★★★★</span>
                </div>

                <h4 className="text-base font-black text-white uppercase tracking-tight">
                  Swiftpes Corporate Node
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Access direct local reviews and geo-mapped rapid intervention
                  networks across Worcester and the larger premium territories.
                </p>

                <a
                  href="https://maps.app.goo.gl/Ah1cNvKCYRHpekrH7?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#76C7C0] hover:underline inline-flex items-center gap-1 pt-2"
                >
                  Explore Mapping Grid →
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden border border-white/[0.08] h-[340px] relative shadow-xl bg-black/40 animate-[fadeUp_0.7s_ease-out_0.1s_both]">
            <iframe
              title="Worcester UK Grid Map"
              src="https://maps.google.com/maps?q=Worcester,%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative w-full">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-1 animate-[fadeUp_0.7s_ease-out_both]">
            <span className="text-xs text-[#4FA3A5] font-mono font-bold uppercase tracking-[0.2em]">
            FAQ Knowledge Framework
            </span>

            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              Frequently Answered Frameworks
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className={`border transition-colors duration-200 rounded-2xl overflow-hidden animate-[fadeUp_0.7s_ease-out_both] ${
                    isOpen
                      ? "bg-white/[0.02] border-[#76C7C0]/30 shadow-xl"
                      : "bg-white/[0.01] border-white/[0.05] hover:border-white/[0.12]"
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none group"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-200 tracking-tight transition-colors duration-200 group-hover:text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#4FA3A5] shrink-0" />
                      {faq.question}
                    </span>

                    <span
                      className={`text-slate-500 font-mono transition-transform duration-200 text-lg ${
                        isOpen ? "rotate-180 text-[#76C7C0]" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;











