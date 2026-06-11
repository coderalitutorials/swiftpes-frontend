




// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   brown: "#5C4033",
//   yellow: "#F2C12E",
//   textDark: "#2D221E",
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (e.target.name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is missing");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Processing callback sync...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request sent successfully! 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Connection error. Retry.";
//         },
//       },
//       {
//         style: { fontFamily: "sans-serif", fontSize: "13px" },
//         success: { style: { background: brandColors.brown, color: "#FFFFFF" } },
//         error: { style: { background: "#DC2626", color: "#FFFFFF" } },
//       }
//     );
//   };

//   return (
//     <section className="bg-white py-16 md:py-24 relative overflow-visible z-30">
    
//       {/* <Toaster position="top-right" reverseOrder={false} /> */}




// <Toaster
//   position="top-center"
//   reverseOrder={false}
//   gutter={12}
//   containerStyle={{
//     top: "110px",
//     zIndex: 999999,
//   }}
//   toastOptions={{
//     duration: 4000,
//     style: {
//       background: "#5C4033",
//       color: "#FFFFFF",
//       border: "1px solid #F2C12E",
//       borderRadius: "12px",
//       fontSize: "13px",
//       fontWeight: "600",
//       zIndex: 999999,
//       boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//     },
//     success: {
//       style: {
//         background: "#5C4033",
//         color: "#FFFFFF",
//         border: "1px solid #F2C12E",
//       },
//       iconTheme: {
//         primary: "#F2C12E",
//         secondary: "#5C4033",
//       },
//     },
//     error: {
//       style: {
//         background: "#DC2626",
//         color: "#FFFFFF",
//         border: "1px solid #FCA5A5",
//       },
//     },
//     loading: {
//       style: {
//         background: "#5C4033",
//         color: "#FFFFFF",
//         border: "1px solid #F2C12E",
//       },
//     },
//   }}
// />




//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Exact Layout Grid Structure from image_e612e1.png */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
//           {/* LEFT SIDE: Clean About Information Layout */}
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="lg:col-span-7 space-y-6 text-left lg:pr-4"
//           >
//             <motion.div variants={fadeUp} className="space-y-4">
//               {/* Reference Blue Border Line replaced with Brand Accent Line */}
//               <div className="flex items-center gap-3">
//                 <span className="w-10 h-[2px] bg-[#F2C12E] block"></span>
//                 <span className="text-[#F2C12E] text-xs md:text-sm font-bold uppercase tracking-widest block">
//                   About Our Company
//                 </span>
//               </div>
              
//               <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2D221E] leading-tight">
//                 Most awarded pest control services since 2008
//               </h2>
//             </motion.div>

//             <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
//               Don't let pests compromise your property or health. Our local expert team in Chelsea is fully certified and equipped to eliminate infestations safely, ensuring your home or business premises remain completely protected and secure.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-gray-500 text-sm leading-relaxed hidden sm:block">
//               We focus on smart protection and clean living solutions. By choosing us, you get same-day emergency responses and professional pest eradication treatments tailored to your precise timeline.
//             </motion.p>
//           </motion.div>

//           {/* RIGHT SIDE: Elegant Floating Overlay Form Card Block */}
//           <motion.div 
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 w-full lg:-mt-32 bg-white rounded-md shadow-2xl border border-gray-100 p-6 sm:p-10"
//           >
//             <div className="text-center md:text-left mb-8">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
//                 Book a Service
//               </h3>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
//               {/* Field 1: Name */}
//               <div className="space-y-1.5">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-700">
//                   Your Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your full name"
//                   required
//                   className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#F2C12E] text-gray-900 placeholder:text-gray-400 font-medium transition-all"
//                 />
//               </div>

//               {/* Field 2: Postcode */}
//               <div className="space-y-1.5">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-700">
//                   Postcode <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="e.g. SW3, SW10"
//                   required
//                   className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#F2C12E] text-gray-900 placeholder:text-gray-400 font-medium transition-all"
//                 />
//               </div>

//               {/* Field 3: Phone */}
//               <div className="space-y-1.5">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-700">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Best number to reach you"
//                   required
//                   className={`w-full bg-gray-50 border rounded px-4 py-3 text-sm outline-none focus:bg-white font-medium transition-all text-gray-900 placeholder:text-gray-400 ${
//                     phoneError ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#F2C12E]"
//                   }`}
//                 />
//                 {phoneError && (
//                   <p className="text-red-500 text-xs font-semibold mt-1">⚠️ {phoneError}</p>
//                 )}
//               </div>

//               {/* Submit Button Block - Exact Style Match with Logo Color Yellow */}
//               <div className="pt-4">
//                 <motion.button
//                   whileHover={{ backgroundColor: "#dbad24" }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   disabled={loading}
//                   className="w-full sm:w-auto bg-[#F2C12E] text-neutral-900 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md shadow-[#F2C12E]/10"
//                 >
//                   {loading ? "SUBMITTING..." : "SUBMIT DETAILS"}
//                 </motion.button>
//               </div>

//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }



















// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// // Premium Logo Colors from pesrid.png.png
// const brandColors = {
//   navyDark: "#020b14",
//   panelBlue: "#031E39",
//   tealAccent: "#4FA3A5",
//   mintLight: "#76C7C0",
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 35 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
// };

// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (e.target.name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     // Modern custom toast style using the new brand layout identity
//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Securing connection grid...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request queued! A technician will call shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Transmission failed. Try again.";
//         },
//       },
//       {
//         style: { 
//           fontFamily: "sans-serif", 
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
//           backdropFilter: "blur(12px)"
//         },
//         success: { 
//           style: { 
//             background: "#031E39", 
//             color: "#FFFFFF", 
//             border: `1px solid ${brandColors.mintLight}`,
//             boxShadow: "0 10px 30px rgba(118,199,192,0.15)"
//           } 
//         },
//         error: { 
//           style: { 
//             background: "#4c0519", 
//             color: "#fecdd3", 
//             border: "1px solid #f43f5e" 
//           } 
//         },
//       }
//     );
//   };

//   return (
//     <section className="bg-[#020b14] py-20 md:py-28 relative overflow-hidden z-30 border-t border-white/5">
      
//       {/* Decorative Brand Light Glow behind layout */}
//       <div className="absolute top-[50%] left-[-20%] w-[500px] h-[500px] rounded-full bg-[#4FA3A5]/5 blur-[120px] pointer-events-none" />

//       {/* Customized Toaster configuration matching the exact logo profile */}
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#031E39/90",
//             color: "#FFFFFF",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: "16px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
//           },
//           loading: {
//             style: {
//               background: "#031E39",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.tealAccent}`,
//             },
//           },
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT SIDE: Clean Asymmetrical About Copy */}
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="lg:col-span-6 space-y-6 text-left"
//           >
//             <motion.div variants={fadeUp} className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-[2px] bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] block"></span>
//                 <span className="text-[#76C7C0] text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] block">
//                   Corporate Overview
//                 </span>
//               </div>
              
//               <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
//                 Defending Sidcup Properties <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//                   With Scientific Precision
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.p variants={fadeUp} className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
//               Pesrid Services Sidcup delivers advanced, high-tier bio-security and pest eradication models engineered for both industrial compounds and residential sectors. Our local emergency strike teams operate with absolute anonymity and unmatched speed.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-slate-400 text-sm leading-relaxed hidden sm:block border-l-2 border-[#4FA3A5]/30 pl-4 py-1">
//               From severe rodent extractions to complex insect structural treatment cycles, we guarantee absolute environmental safety under strict regulatory compliance frameworks across London.
//             </motion.p>
//           </motion.div>

//           {/* RIGHT SIDE: Floating Premium Glassmorphic Form Dashboard */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto bg-gradient-to-b from-[#031E39]/40 to-transparent rounded-3xl border border-white/10 backdrop-blur-xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
//           >
//             <div className="text-left mb-6 border-b border-white/5 pb-4">
//               <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
//                 Request Field Deployment
//               </h3>
//               <p className="text-xs text-slate-400 mt-1">Submit parameters for an immediate diagnostic call</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
//               {/* Input Layout Box 1 */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                   Client Identity Name <span className="text-[#76C7C0]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="e.g. John Doe"
//                   required
//                   className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4FA3A5] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4FA3A5]/20 transition-all duration-300"
//                 />
//               </div>

//               {/* Two Column Grid Row for Fields 2 & 3 */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div className="space-y-2">
//                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                     Sidcup Postcode <span className="text-[#76C7C0]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. DA14, DA15"
//                     required
//                     className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4FA3A5] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4FA3A5]/20 transition-all duration-300"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                     Secure Contact Line <span className="text-[#76C7C0]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best phone number"
//                     required
//                     className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:bg-white/[0.05] focus:ring-1 transition-all duration-300 ${
//                       phoneError ? "border-red-500 focus:ring-red-500/20" : "border-white/10 focus:border-[#4FA3A5] focus:ring-[#4FA3A5]/20"
//                     }`}
//                   />
//                 </div>
//               </div>

//               {phoneError && (
//                 <p className="text-red-400 text-xs font-semibold mt-1 flex items-center gap-1.5">
//                   <span>⚠️</span> {phoneError}
//                 </p>
//               )}

//               {/* Action Trigger Button */}
//               <div className="pt-4">
//                 <motion.button
//                   whileTap={{ scale: 0.97 }}
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] py-4 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50 font-sans shadow-lg shadow-[#4FA3A5]/20"
//                 >
//                   {loading ? "TRANSMITTING DATA..." : "AUTHORISE CALL BACK"}
//                 </motion.button>
//               </div>

//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   navyDark: "#020b14",
//   panelBlue: "#031E39",
//   tealAccent: "#4FA3A5",
//   mintLight: "#76C7C0",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Securing connection grid...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request queued! A technician will call shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Transmission failed. Try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
//         },
//         success: {
//           style: {
//             background: "#031E39",
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.mintLight}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="bg-[#020b14] py-20 md:py-28 relative overflow-hidden z-30 border-t border-white/5">
//       <div className="absolute top-[50%] left-[-20%] w-[360px] h-[360px] rounded-full bg-[#4FA3A5]/5 blur-3xl pointer-events-none" />

//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#031E39",
//             color: "#FFFFFF",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: "16px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: "#031E39",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.tealAccent}`,
//             },
//           },
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 space-y-6 text-left">
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-[2px] bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] block"></span>
//                 <span className="text-[#76C7C0] text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] block">
//                   Corporate Overview
//                 </span>
//               </div>

//               <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
//                 Defending Sidcup Properties <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//                   With Scientific Precision
//                 </span>
//               </h2>
//             </div>

//             <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
//               Pesrid Services Sidcup delivers advanced, high-tier bio-security
//               and pest eradication models engineered for both industrial
//               compounds and residential sectors. Our local emergency strike teams
//               operate with absolute anonymity and unmatched speed.
//             </p>

//             <p className="text-slate-400 text-sm leading-relaxed hidden sm:block border-l-2 border-[#4FA3A5]/30 pl-4 py-1">
//               From severe rodent extractions to complex insect structural
//               treatment cycles, we guarantee absolute environmental safety under
//               strict regulatory compliance frameworks across London.
//             </p>
//           </div>

//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto bg-gradient-to-b from-[#031E39]/70 to-[#031E39]/20 rounded-3xl border border-white/10 p-8 sm:p-12 shadow-xl">
//             <div className="text-left mb-6 border-b border-white/5 pb-4">
//               <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
//                 Request Field Deployment
//               </h3>
//               <p className="text-xs text-slate-400 mt-1">
//                 Submit parameters for an immediate diagnostic call
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 text-left">
//               <div className="space-y-2">
//                 <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                   Client Identity Name <span className="text-[#76C7C0]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="e.g. John Doe"
//                   required
//                   className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4FA3A5] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4FA3A5]/20 transition-colors duration-200"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div className="space-y-2">
//                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                     Sidcup Postcode <span className="text-[#76C7C0]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. DA14, DA15"
//                     required
//                     className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4FA3A5] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4FA3A5]/20 transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                     Secure Contact Line <span className="text-[#76C7C0]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best phone number"
//                     required
//                     className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:bg-white/[0.05] focus:ring-1 transition-colors duration-200 ${
//                       phoneError
//                         ? "border-red-500 focus:ring-red-500/20"
//                         : "border-white/10 focus:border-[#4FA3A5] focus:ring-[#4FA3A5]/20"
//                     }`}
//                   />
//                 </div>
//               </div>

//               {phoneError && (
//                 <p className="text-red-400 text-xs font-semibold mt-1 flex items-center gap-1.5">
//                   <span>⚠️</span> {phoneError}
//                 </p>
//               )}

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] py-4 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-transform duration-200 cursor-pointer disabled:opacity-50 font-sans shadow-lg shadow-[#4FA3A5]/20 active:scale-[0.98]"
//                 >
//                   {loading ? "TRANSMITTING DATA..." : "AUTHORISE CALL BACK"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// // Logo Theme Colors Updated
// const brandColors = {
//   purpleDark: "#120c1a",
//   panelPurple: "#1b1224",
//   primaryPurple: "#4B1B67",
//   secondaryBronze: "#A35C37",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     loading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Processing your request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request received! A specialist will call you shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Connection failed. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
//         },
//         success: {
//           style: {
//             background: brandColors.panelPurple,
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.secondaryBronze}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="bg-[#120c1a] py-20 md:py-28 relative overflow-hidden z-30 border-t border-white/5">
//       {/* Background Glow Effect */}
//       <div className="absolute top-[50%] left-[-20%] w-[360px] h-[360px] rounded-full bg-[#4B1B67]/10 blur-3xl pointer-events-none" />

//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: brandColors.panelPurple,
//             color: "#FFFFFF",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: "16px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: brandColors.panelPurple,
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.primaryPurple}`,
//             },
//           },
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Side: Text Content */}
//           <div className="lg:col-span-6 space-y-6 text-left animate-[fadeUp_0.7s_ease-out_both]">
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <span className="w-8 h-[2px] bg-gradient-to-r from-[#4B1B67] to-[#A35C37] block"></span>
//                 <span className="text-[#A35C37] text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] block">
//                   Company Overview
//                 </span>
//               </div>

//               <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
//                 Protecting Worcester Homes <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d277d] to-[#b86d42]">
//                   With Fast & Safe Solutions
//                 </span>
//               </h2>
//             </div>

//             <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
//               SwiftPes Services Worcester delivers high-tier, reliable pest control
//               and eradication services engineered for both commercial properties 
//               and residential sectors. Our local emergency response teams operate 
//               with absolute discretion, rapid dispatch, and unmatched efficiency.
//             </p>

//             <p className="text-slate-400 text-sm leading-relaxed hidden sm:block border-l-2 border-[#4B1B67]/30 pl-4 py-1">
//               From immediate rodent control to comprehensive insect management and proofing, 
//               we guarantee absolute environmental safety under strict local regulatory 
//               compliance frameworks across Worcester.
//             </p>
//           </div>

//           {/* Right Side: Interactive Callback Form */}
//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto bg-gradient-to-b from-[#1b1224]/80 to-[#1b1224]/30 rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-md animate-[fadeUp_0.7s_ease-out_0.15s_both]">
//             <div className="text-left mb-6 border-b border-white/5 pb-4">
//               <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
//                 Request a Callback
//               </h3>
//               <p className="text-xs text-slate-400 mt-1">
//                 Enter your details below for an immediate advice or service call
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 text-left">
//               <div className="space-y-2">
//                 <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                   Your Name <span className="text-[#A35C37]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="e.g. John Doe"
//                   required
//                   className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4B1B67] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4B1B67]/20 transition-colors duration-200"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div className="space-y-2">
//                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                     Worcester Postcode <span className="text-[#A35C37]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. WR1, WR2"
//                     required
//                     className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4B1B67] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4B1B67]/20 transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
//                     Contact Phone <span className="text-[#A35C37]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best contact number"
//                     required
//                     className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:bg-white/[0.05] focus:ring-1 transition-colors duration-200 ${
//                       phoneError
//                         ? "border-red-500 focus:ring-red-500/20"
//                         : "border-white/10 focus:border-[#4B1B67] focus:ring-[#4B1B67]/20"
//                     }`}
//                   />
//                 </div>
//               </div>

//               {phoneError && (
//                 <p className="text-red-400 text-xs font-semibold mt-1 flex items-center gap-1.5">
//                   <span>⚠️</span> {phoneError}
//                 </p>
//               )}

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-[#4B1B67] to-[#A35C37] text-white py-4 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-transform duration-200 cursor-pointer disabled:opacity-50 font-sans shadow-lg shadow-[#4B1B67]/20 active:scale-[0.98] hover:-translate-y-0.5"
//                 >
//                   {loading ? "SENDING REQUEST..." : "REQUEST CHAT BACK NOW"}
//                 </button>
//               </div>
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }












import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Logo Theme Colors Updated
const brandColors = {
  purpleDark: "#120c1a",
  panelPurple: "#1b1224",
  primaryPurple: "#4B1B67",
  secondaryBronze: "#A35C37",
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    // ✅ FIX: loading(true) ko badal kar setLoading(true) kar diya
    setLoading(true);

    toast.promise(
      axios.post("https://swiftpes-backend.vercel.app/api/callback", formData),
      {
        loading: "Processing your request...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Callback request received! A specialist will call you shortly. 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Connection failed. Please try again.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "16px",
          padding: "12px 20px",
        },
        success: {
          style: {
            background: brandColors.panelPurple,
            color: "#FFFFFF",
            border: `1px solid ${brandColors.secondaryBronze}`,
          },
        },
        error: {
          style: {
            background: "#4c0519",
            color: "#fecdd3",
            border: "1px solid #f43f5e",
          },
        },
      }
    );
  };

  return (
    <section className="bg-[#120c1a] py-20 md:py-28 relative overflow-hidden z-30 border-t border-white/5">
      {/* Background Glow Effect */}
      <div className="absolute top-[50%] left-[-20%] w-[360px] h-[360px] rounded-full bg-[#4B1B67]/10 blur-3xl pointer-events-none" />

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: "110px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,
          style: {
            background: brandColors.panelPurple,
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
          loading: {
            style: {
              background: brandColors.panelPurple,
              color: "#FFFFFF",
              border: `1px solid ${brandColors.primaryPurple}`,
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left animate-[fadeUp_0.7s_ease-out_both]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#4B1B67] to-[#A35C37] block"></span>
                <span className="text-[#A35C37] text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] block">
                  Company Overview
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
                Protecting Worcester Homes <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d277d] to-[#b86d42]">
                  With Fast & Safe Solutions
                </span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              SwiftPes Services Worcester delivers high-tier, reliable pest control
              and eradication services engineered for both commercial properties 
              and residential sectors. Our local emergency response teams operate 
              with absolute discretion, rapid dispatch, and unmatched efficiency.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed hidden sm:block border-l-2 border-[#4B1B67]/30 pl-4 py-1">
              From immediate rodent control to comprehensive insect management and proofing, 
              we guarantee absolute environmental safety under strict local regulatory 
              compliance frameworks across Worcester.
            </p>
          </div>

          {/* Right Side: Interactive Callback Form */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto bg-gradient-to-b from-[#1b1224]/80 to-[#1b1224]/30 rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-md animate-[fadeUp_0.7s_ease-out_0.15s_both]">
            <div className="text-left mb-6 border-b border-white/5 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Request a Callback
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter your details below for an immediate advice or service call
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
                  Your Name <span className="text-[#A35C37]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4B1B67] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4B1B67]/20 transition-colors duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
                    Worcester Postcode <span className="text-[#A35C37]">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="e.g. WR1, WR2"
                    required
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4B1B67] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4B1B67]/20 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
                    Contact Phone <span className="text-[#A35C37]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Best contact number"
                    required
                    className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:bg-white/[0.05] focus:ring-1 transition-colors duration-200 ${
                      phoneError
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-white/10 focus:border-[#4B1B67] focus:ring-[#4B1B67]/20"
                    }`}
                  />
                </div>
              </div>

              {phoneError && (
                <p className="text-red-400 text-xs font-semibold mt-1 flex items-center gap-1.5">
                  <span>⚠️</span> {phoneError}
                </p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#4B1B67] to-[#A35C37] text-white py-4 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-transform duration-200 cursor-pointer disabled:opacity-50 font-sans shadow-lg shadow-[#4B1B67]/20 active:scale-[0.98] hover:-translate-y-0.5"
                >
                  {loading ? "SENDING REQUEST..." : "REQUEST CHAT BACK NOW"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}