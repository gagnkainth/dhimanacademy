import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const servicesData = [
  {
    id: "study-visas",
    icon: "public",
    title: "Study Visas",
    shortDesc: "Expert guidance for top-tier international universities across the globe.",
    longDesc: (
      <>
        End-to-end guidance for studying abroad — from course &amp; university selection to applications, visa processing, and pre-departure support.
        <br /><br />
        Countries We Cover:<br />
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/ca.png" alt="Canada" className="w-[18px] rounded-sm object-contain" /> Canada</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-[18px] rounded-sm object-contain" /> UK</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-[18px] rounded-sm object-contain" /> USA</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/au.png" alt="Australia" className="w-[18px] rounded-sm object-contain" /> Australia</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/nz.png" alt="New Zealand" className="w-[18px] rounded-sm object-contain" /> New Zealand</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/cy.png" alt="Cyprus" className="w-[18px] rounded-sm object-contain" /> Cyprus</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/mu.png" alt="Mauritius" className="w-[18px] rounded-sm object-contain" /> Mauritius</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/eu.png" alt="Europe" className="w-[18px] rounded-sm object-contain" /> Europe</span>
      </>
    ),
    action: "Consult Now"
  },
  {
    id: "tourist-visas",
    icon: "luggage",
    title: "Tourist & Visitor Visas",
    shortDesc: "Hassle-free visitor visa processing for over 50 countries worldwide.",
    longDesc: (
      <>
        Hassle-free tourist visa assistance — from documentation and itinerary planning to embassy appointments — ensuring a smooth and successful travel experience.
        <br /><br />
        Popular Destinations:<br />
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/ae.png" alt="Dubai" className="w-[18px] rounded-sm object-contain" /> Dubai</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/th.png" alt="Thailand" className="w-[18px] rounded-sm object-contain" /> Thailand</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/sg.png" alt="Singapore" className="w-[18px] rounded-sm object-contain" /> Singapore</span> |{' '}
        <span className="inline-flex items-center gap-1.5"><img src="https://flagcdn.com/w20/id.png" alt="Bali" className="w-[18px] rounded-sm object-contain" /> Bali</span>
      </>
    ),
    action: "Consult Now"
  },
  {
    id: "language-training",
    icon: "language",
    title: "Language Training",
    shortDesc: "Comprehensive IELTS and PTE coaching to achieve your desired band scores.",
    longDesc: "Master English proficiency with our specialized IELTS and PTE coaching. We offer personalized attention, daily mock tests, and proven strategies to help you achieve 8+ bands. Our experienced trainers focus on all four modules: Reading, Writing, Listening, and Speaking.",
    action: "Consult Now"
  }
];

const coursesData = [
  {
    id: "ielts-pte",
    icon: "language",
    title: "IELTS / PTE Training",
    shortDesc: "Simple teaching skills to achieve 8+ bands. Focused grammar sessions and daily mock tests.",
    longDesc: "Expert-led language training to achieve 8+ bands — with certified trainers and flexible online & offline learning options.",
    action: "EXPLORE MODULES"
  },
  {
    id: "skill-training",
    icon: "laptop_mac",
    title: "Skill Training",
    shortDesc: "Professional Tally and Computer basics. Industry-standard certifications for the modern workplace.",
    longDesc: "Practical training to build essential skills — including Basic Computer Courses, Tally, and Spoken English. Certified programs designed to boost your career readiness.",
    action: "COURSE DETAILS"
  },
  {
    id: "coachings",
    icon: "account_balance",
    title: "Coaching",
    shortDesc: "Coaching for commerce students (11th & 12th). Concept-driven learning and pattern-based mock exams.",
    longDesc: "Expert guidance for Classes 11-12 (Science, Commerce & Arts), along with comprehensive support for Classes 1-10 (all subjects). Structured learning with experienced faculty — classes from 3 PM to 6 PM.",
    action: "VIEW SYLLABUS"
  }
];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCard, setActiveCard] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroImages = Array.from({ length: 11 }, (_, i) => `/hero-images/hero${i + 1}.jpeg`);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }, 150);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2500); // Changed to 2500ms so it stays for ~2s and quickly animates
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto w-full relative z-50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0 transition-shadow hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] border border-black/10">
              <img src="/logo-white.jpg" alt="Dhiman Academy Logo" className="w-[90%] sm:w-[95%] max-w-none h-auto object-contain mix-blend-screen" />
            </div>
            <div className="text-[1.35rem] sm:text-2xl font-black text-primary tracking-tighter leading-none">Dhiman Academy</div>
          </div>
          <div className="hidden md:flex gap-8 lg:gap-10 items-center">
            <a className="text-primary hover:text-secondary transition-colors font-bold" href="#home">Home</a>
            <a className="text-primary hover:text-secondary transition-colors font-bold" href="#services">Services</a>
            <a className="text-primary hover:text-secondary transition-colors font-bold" href="#courses">Courses</a>
            <a className="text-primary hover:text-secondary transition-colors font-bold" href="#review">Review</a>
            <a className="text-primary hover:text-secondary transition-colors font-bold" href="#contact">Contact</a>
            <a href="tel:+918699430200" className="cta-gradient text-white px-7 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all">Call Now</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 text-primary hover:bg-primary/5 rounded-xl transition-colors select-none flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-surface border-b border-outline-variant/10 shadow-2xl absolute top-full left-0 w-full"
            >
              <div className="flex flex-col px-8 py-6 gap-6">
                <a onClick={(e) => handleMobileNavClick(e, 'home')} className="text-xl font-bold text-primary active:text-secondary" href="#home">Home</a>
                <a onClick={(e) => handleMobileNavClick(e, 'services')} className="text-xl font-bold text-primary active:text-secondary" href="#services">Services</a>
                <a onClick={(e) => handleMobileNavClick(e, 'courses')} className="text-xl font-bold text-primary active:text-secondary" href="#courses">Courses</a>
                <a onClick={(e) => handleMobileNavClick(e, 'review')} className="text-xl font-bold text-primary active:text-secondary" href="#review">Review</a>
                <a onClick={(e) => handleMobileNavClick(e, 'contact')} className="text-xl font-bold text-primary active:text-secondary" href="#contact">Contact</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="tel:+918699430200" className="cta-gradient text-white px-7 py-4 rounded-xl font-bold text-center mt-2 shadow-xl shadow-primary/20">Call Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Expanded Card Overlay */}
        <AnimatePresence>
          {activeCard && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCard(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              />
              <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
                <motion.div
                  layoutId={`card-${activeCard.id}`}
                  className="bg-primary p-6 md:p-10 rounded-[2rem] border border-primary-container shadow-2xl w-full max-w-2xl pointer-events-auto relative overflow-y-auto max-h-[90vh] flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="absolute top-0 right-0 p-6 md:p-8 text-white pointer-events-none"
                  >
                    <span className="material-symbols-outlined text-8xl md:text-9xl">{activeCard.icon}</span>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                    <button
                      onClick={() => setActiveCard(null)}
                      className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">close</span>
                    </button>


                  </motion.div>

                  <motion.div layoutId={`icon-${activeCard.id}`} className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-sm text-white">
                    <span className="material-symbols-outlined text-3xl md:text-4xl">{activeCard.icon}</span>
                  </motion.div>

                  <motion.h3 layoutId={`title-${activeCard.id}`} className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6">{activeCard.title}</motion.h3>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} className="flex-1 flex flex-col">
                    <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-base md:text-lg whitespace-pre-wrap text-justify">
                      {activeCard.longDesc}
                    </p>

                    <div className="mt-auto">
                      <a href="#enquiry-form" onClick={() => setActiveCard(null)} className="inline-flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                        {activeCard.action} <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative bg-surface pt-8 lg:pt-16 pb-12 lg:pb-20 overflow-hidden" id="home">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[auto] lg:min-h-[70vh]">
            {/* Left Content */}
            <div className="flex flex-col items-start z-10 justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                {/* Premium Badge */}
                <div className="hidden lg:inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 shadow-[0_4px_14px_rgba(37,99,235,0.1)] mb-8 hover:shadow-[0_4px_20px_rgba(37,99,235,0.2)] transition-shadow cursor-default">
                  <div className="w-7 h-7 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 text-[15px] animate-pulse">flight_takeoff</span>
                  </div>
                  <span className="text-blue-900 font-bold text-[13px] tracking-wide uppercase">Expert Visa & Immigration Consultants</span>
                </div>

                <h1 className="text-5xl lg:text-[4rem] xl:text-[4.5rem] font-black text-primary leading-[1.05] tracking-tighter mb-6">
                  From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IELTS</span> Preparation to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Visa</span> Approval.
                </h1>

                <p className="text-lg xl:text-xl text-on-surface-variant mb-10 leading-relaxed text-justify">
                  We've got you covered. Expert coaching for IELTS, PTE, and comprehensive visa assistance to turn your global dreams into reality.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <a href="#enquiry-form" className="cta-gradient text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                    Book an Appointment
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>

                {/* New Tagline */}
                <div className="pt-6 border-t border-outline-variant/20">
                  <p className="text-xl font-bold text-primary italic">
                    "Expert in language skills (IELTS | PTE) to Visa Approvals."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Image Slider */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white z-10 order-1 lg:order-2 bg-black flex items-center justify-center">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImage}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img src={heroImages[currentImage]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xl scale-125 saturate-150" />
                  <img src={heroImages[currentImage]} alt="Hero slide" className="absolute inset-0 w-full h-full object-contain relative z-10" />
                </motion.div>
              </AnimatePresence>
              {/* Optional overlay for better blending */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 blur-[120px] pointer-events-none -z-10"></div>
        </section>

        {/* Success Stats */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-primary text-white py-16 relative z-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-fixed-dim/20">
              <div className="py-8 md:py-0">
                <div className="text-5xl font-black text-secondary-fixed mb-2 tracking-tighter">500+</div>
                <div className="text-[11px] font-black tracking-[0.3em] uppercase opacity-60">Success Stories</div>
              </div>
              <div className="py-8 md:py-0">
                <div className="text-5xl font-black text-secondary-fixed mb-2 tracking-tighter">5.0</div>
                <div className="flex justify-center gap-1 mb-2">
                  <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div className="text-[11px] font-black tracking-[0.3em] uppercase opacity-60">Five Star</div>
              </div>
              <div className="py-8 md:py-0">
                <div className="text-5xl font-black text-secondary-fixed mb-2 tracking-tighter">11+ Yrs</div>
                <div className="text-[11px] font-black tracking-[0.3em] uppercase opacity-60">Of Academic Excellence</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visa Services Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="py-32 px-8 bg-surface" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4">Global Mobility</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6">Our Speciality</h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.map((card) => (
                <motion.div
                  layoutId={`card-${card.id}`}
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  style={{ opacity: activeCard?.id === card.id ? 0 : 1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-primary p-10 rounded-[2rem] border border-primary-container hover:border-secondary/50 transition-colors duration-300 group shadow-xl cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white pointer-events-none">
                    <span className="material-symbols-outlined text-8xl">{card.icon}</span>
                  </div>
                  <motion.div layoutId={`icon-${card.id}`} className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all text-white">
                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                  </motion.div>
                  <motion.h3 layoutId={`title-${card.id}`} className="text-2xl font-bold text-white mb-4">{card.title}</motion.h3>
                  <p className="text-white/80 mb-10 leading-relaxed line-clamp-3">{card.shortDesc}</p>
                  <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all w-fit">
                    {card.action} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Curriculum Grid */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="bg-surface-container-low py-32 px-8" id="courses">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Academic Hub</span>
                <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4 tracking-tight">Academic Excellence</h2>
                <p className="text-on-surface-variant max-w-lg text-lg">Specialized learning paths designed for academic prestige and career growth.</p>
              </div>
              <div className="h-1 w-24 bg-secondary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {coursesData.map((card) => (
                <motion.div
                  layoutId={`card-${card.id}`}
                  key={card.id}
                  onClick={() => setActiveCard(card)}
                  style={{ opacity: activeCard?.id === card.id ? 0 : 1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-primary p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-shadow duration-500 group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white pointer-events-none">
                    <span className="material-symbols-outlined text-8xl">{card.icon}</span>
                  </div>
                  <motion.div layoutId={`icon-${card.id}`} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform text-white">
                    <span className="material-symbols-outlined text-secondary text-3xl">{card.icon}</span>
                  </motion.div>
                  <motion.h3 layoutId={`title-${card.id}`} className="text-2xl font-black text-white mb-5">{card.title}</motion.h3>
                  <p className="text-white/80 mb-10 leading-relaxed text-sm line-clamp-3">{card.shortDesc}</p>
                  <div className="flex items-center gap-2 text-secondary font-black text-xs tracking-widest group-hover:gap-4 transition-all">
                    {card.action} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Proof of Excellence / Testimonials */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="bg-surface-container-low py-32 px-8 relative overflow-hidden" id="review">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-[100px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-2/3">
                <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Student Testimonials</span>
                <h2 className="text-5xl font-black text-primary mb-16 tracking-tight leading-tight">The Gold Standard of <br />Academic Success.</h2>
                {/* Main Testimonial Card */}
                <div className="bg-primary p-10 rounded-3xl shadow-2xl shadow-primary/20 mb-10 relative border border-primary-container">
                  <span className="material-symbols-outlined text-6xl text-white/10 absolute top-6 right-8">format_quote</span>
                  <p className="text-white text-xl italic mb-8 leading-relaxed font-medium">"Achieved overall 7.5 bands in IELTS. The atmosphere is outstanding! The teachers are genuinely committed to every student's growth."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-sm">KS</div>
                    <div>
                      <h4 className="font-bold text-white">Kaur S</h4>
                      <p className="text-xs text-secondary font-bold uppercase tracking-widest">IELTS Student</p>
                    </div>
                  </div>
                </div>
                {/* Secondary Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-primary p-8 rounded-2xl border border-primary-container shadow-xl">
                    <p className="text-white/80 mb-6 leading-relaxed italic text-sm">"Teachers helped me score great marks in Accounts and IELTS. Highly personal attention."</p>
                    <h4 className="font-bold text-secondary text-xs uppercase tracking-widest">— Harman Singh Dosanjh</h4>
                  </div>
                  <div className="bg-primary p-8 rounded-2xl border border-primary-container shadow-xl">
                    <p className="text-white/80 mb-6 leading-relaxed italic text-sm">"Highly recommended for 11th and 12th graders facing trouble in Accountancy."</p>
                    <h4 className="font-bold text-secondary text-xs uppercase tracking-widest">— Kiran Kaur</h4>
                  </div>
                </div>
              </div>
              {/* Perfection Badge Side */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-secondary-container rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                  <div className="bg-white w-72 h-72 rounded-full flex flex-col items-center justify-center shadow-2xl relative z-10 border-[12px] border-surface">
                    <span className="material-symbols-outlined text-7xl text-secondary mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="text-5xl font-black text-primary tracking-tighter">5.0</span>
                    <div className="flex text-yellow-400 my-2 gap-0.5">
                      <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <span className="text-[10px] font-black text-on-surface-variant tracking-[0.3em] uppercase">Perfection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Map & Contact Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="py-32 px-8 bg-surface" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4">Get in Touch</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6">Contact &amp; Enquiry</h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Enquiry Form */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-outline-variant/10" id="enquiry-form">
                <h3 className="text-3xl font-black text-primary mb-8">Send an Enquiry</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const service = formData.get('service');
                  const message = formData.get('message');
                  const text = encodeURIComponent(`Hello Dhiman Academy!\n\n*Name:* ${name}\n*Query Type:* ${service}\n*Message:* ${message}`);
                  window.open(`https://wa.me/918699430200?text=${text}`, '_blank');
                  e.currentTarget.reset();
                }} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Your Name</label>
                    <input required name="name" type="text" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Query Type</label>
                    <div className="relative">
                      <select required name="service" defaultValue="" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                        <option value="" disabled>Select a service or course...</option>
                        <option value="Study Visa">Study Visa</option>
                        <option value="Tourist Visa">Tourist Visa</option>
                        <option value="IELTS or PTE">IELTS or PTE</option>
                        <option value="Skill Training">Skill Training</option>
                        <option value="Coaching">Coaching</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Message</label>
                    <textarea required name="message" rows={4} className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none" placeholder="Tell us how we can help you..."></textarea>
                  </div>
                  <button type="submit" className="w-full cta-gradient text-white py-5 rounded-xl font-black text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">send</span>
                    Enquiry Now
                  </button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="flex flex-col justify-between gap-10">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Office Address</h4>
                      <p className="text-on-surface-variant leading-relaxed">Patti - Dunia Mansoor, Near Punjab Gramin Bank,<br />VPO Bilga , Punjab 144036 , India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-3xl">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Phone Number</h4>
                      <p className="text-on-surface-variant font-medium">+91 86994 30200</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Working Hours</h4>
                      <p className="text-on-surface-variant font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dhiman+Academy,+Bilga,+Punjab"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[2rem] overflow-hidden shadow-xl h-[250px] relative border-4 border-white group cursor-pointer"
                >
                  <div className="w-full h-full bg-surface-variant flex items-center justify-center relative">
                    <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Map Location of Dhiman Academy" src="/map-screenshot.jpg" onError={(e) => { e.currentTarget.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5s8T4cJ3aAGshYO_uNFv2JtO-TGpr19aCucA2-Aqla3kjT9iGxy4U5TI3TH3b7pxK6OTWM1R8LuWsAZYxcmykWpZBt7pQEyHnjShL5wOc1uLm4_fjWLHbhCQujsSy0GsyGtn_iDpqRgfe5q_sIKK1jd5WGSuH4LeXUroIXdxvaDoa_oxrJPhdoEP7q2pD49Zg2H0c2L6Sg8TXsbya8x9Bl-pFMGdvtf6by7D6-IIc6DcL47wtCdN03gFJOCn6IAKelSMoLUaT3U2'; }} />

                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce border-[3px] border-white">
                        <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary-container/5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0 transition-shadow hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] border border-black/10">
                <img src="/logo-black.jpg" alt="Dhiman Academy Logo" className="w-[90%] sm:w-[95%] max-w-none h-auto object-contain mix-blend-multiply" />
              </div>
              <div className="text-2xl font-black tracking-tighter">Dhiman Academy</div>
            </div>
            <p className="text-primary-fixed-dim/60 text-sm leading-relaxed max-w-sm">
              Your trusted partner in Bilga for expert Visa & Immigration consulting and premier language training. Delivering 11+ years of academic excellence and global success.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg" href="https://www.google.com/maps/search/?api=1&query=Dhiman+Academy,+Bilga,+Punjab" target="_blank" rel="noreferrer" title="Google Maps Location"><span className="material-symbols-outlined text-xl">location_on</span></a>
              <a className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg" href="https://wa.me/918699430200" target="_blank" rel="noreferrer" title="WhatsApp"><span className="material-symbols-outlined text-xl">chat</span></a>
              <a className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg" href="https://www.instagram.com/dhimanacademy/" target="_blank" rel="noreferrer" title="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-secondary-fixed">Contact Info</div>
            <div className="space-y-4">
              <p className="text-sm text-primary-fixed-dim/60 flex items-start gap-3"><span className="material-symbols-outlined text-secondary text-lg">location_on</span> <span className="leading-relaxed">Patti - Dunia Mansoor, Near Punjab Gramin Bank,<br />VPO Bilga, Punjab 144036, India</span></p>
              <p className="text-sm text-primary-fixed-dim/60 flex items-start gap-3"><span className="material-symbols-outlined text-secondary text-lg">call</span> <span>+91 86994 30200</span></p>
              <p className="text-sm text-primary-fixed-dim/60 flex items-start gap-3"><span className="material-symbols-outlined text-secondary text-lg">mail</span> <span>dhimantravels2205@gmail.com<br />dhimanielts@gmail.com</span></p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-primary-fixed-dim/30 uppercase tracking-[0.2em]">
          <span>© 2026 Dhiman Academy Bilga. All rights reserved.</span>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy Policy</a>
            <a className="hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
