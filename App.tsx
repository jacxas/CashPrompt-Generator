
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Target, 
  DollarSign, 
  Layers, 
  ArrowRight,
  Plus,
  Minus,
  ShieldCheck,
  Check,
  AlertTriangle,
  Star,
  Users,
  Timer,
  Gift,
  ArrowDown
} from 'lucide-react';
import { MODULES, BONUSES, FAQS, TESTIMONIALS } from './constants';
import { cn } from './src/lib/utils';

const AnimatedCounter = ({ value, duration = 2.5, suffix = "" }: { value: number; duration?: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration,
        ease: [0.16, 1, 0.3, 1]
      });
      return () => controls.stop();
    }
  }, [value, duration, count, isInView]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return (
    <motion.span 
      ref={ref}
      animate={displayValue > 0 && displayValue < value ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.2 }}
    >
      {displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

const CTAButton = ({ text = "Quiero mis indicaciones IA Pro", className = "", secondary = false }) => (
  <div className="relative group inline-flex">
    {/* Subtle Glow Layer */}
    {!secondary && (
      <div className="absolute inset-0 bg-indigo-500/40 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
    )}
    {secondary && (
      <div className="absolute inset-0 bg-indigo-200/40 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
    )}
    
    <motion.a 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href="#pricing" 
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-5 rounded-2xl text-xl font-bold transition-all overflow-hidden shadow-xl active:scale-95",
        secondary 
          ? "bg-white text-indigo-600 border-2 border-indigo-100 hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/20" 
          : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/50",
        className
      )}
    >
      <span className="relative z-10 flex items-center">
        {text}
        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </span>
      {!secondary && (
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
      )}
      {secondary && (
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-indigo-600/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
      )}
    </motion.a>
  </div>
);

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const MotionSection = motion.section;

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    },
    viewport: { once: true }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    viewport: { once: true, margin: "-50px" }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Banner Urgency */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-emerald-600 text-white py-2.5 text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-4 sticky top-0 z-50 shadow-lg"
      >
        🔥 Oferta especial de lanzamiento: 85% OFF solo por esta semana
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-28 md:pt-40 md:pb-52 bg-slate-950 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-indigo-600/30 rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-emerald-600/20 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase mb-12"
          >
            <Timer className="w-4 h-4 mr-2.5 text-emerald-400" />
            SISTEMA PROMPTX v4.0 • ACCESO INMEDIATO
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] font-black tracking-tighter mb-10 leading-[0.85] text-balance"
          >
            <AnimatedCounter value={2000} suffix="+" /> Prompts IA que <span className="gradient-text drop-shadow-[0_0_35px_rgba(99,102,241,0.3)]">Facturan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Deja de pedirle favores a ChatGPT. Aprende a darle órdenes que generen <span className="text-white underline decoration-emerald-500 decoration-4 underline-offset-8 font-black tracking-tight">dinero real</span>. El sistema definitivo diseñado para emprendedores.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <CTAButton text="¡Sí, quiero facturar con IA ahora!" className="w-full md:w-auto" />
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                <span className="text-sm font-bold text-slate-300 ml-1">4.9/5 basado en 800+ alumnos</span>
              </div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-black flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-500" /> 
                Garantía de satisfacción de 7 días
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <MotionSection 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-slate-50 border-b border-slate-100"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              { label: "Alumnos Satisfechos", value: 15240, suffix: "+", icon: <Users className="w-5 h-5" /> },
              { label: "Prompts de Alta Conversión", value: 2000, suffix: "+", icon: <Zap className="w-5 h-5" /> },
              { label: "Crecimiento Comunidad", value: 850, suffix: "%", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Tasa de Éxito", value: 98, suffix: "%", icon: <CheckCircle2 className="w-5 h-5" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg text-indigo-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Trust Marks Bar */}
      <MotionSection 
        {...fadeInUp}
        className="py-12 bg-white border-y border-slate-100"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {['FORBES', 'TECHRUNCH', 'ENTREPRENEUR', 'WIRED', 'THE VERGE'].map((brand) => (
              <motion.span 
                key={brand}
                variants={itemVariants}
                className="text-lg md:text-2xl font-black tracking-tighter"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* For Whom Section */}
      <MotionSection 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 md:py-40 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 md:mb-24 tracking-tighter text-balance"
          >
            Este sistema es para ti si...
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left"
          >
            {[
              { title: "Venta de Servicios", desc: "Copywriting, redes sociales o consultoría IA con resultados de experto.", icon: <DollarSign /> },
              { title: "Falta de Tiempo", desc: "Necesitas delegar la creación de contenido a la IA sin que parezca un robot.", icon: <Clock /> },
              { title: "Escalabilidad", desc: "Quieres crear ofertas de alto ticket que conviertan tráfico frío en clientes.", icon: <TrendingUp /> },
              { title: "Freelancing", desc: "Y quieres cobrar más entregando trabajos en tiempo récord.", icon: <Users /> },
              { title: "Dueño de Negocio", desc: "Y necesitas anuncios que realmente traigan ventas, no solo likes.", icon: <Target /> },
              { title: "Perfeccionismo", desc: "Odias las respuestas genéricas y quieres prompts con lógica humana.", icon: <Check /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-slate-50 border-2 border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all flex flex-col h-full group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white shadow-xl shadow-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-indigo-600 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7 sm:w-8 sm:h-8" })}
                </div>
                <h3 className="font-black text-xl sm:text-2xl mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-24">
            <CTAButton text="¡DAME ACCESO A PROMPTX!" secondary className="text-sm tracking-widest" />
          </motion.div>
        </div>
      </MotionSection>

      {/* Comparison Section (Free vs Pro) */}
      <MotionSection 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 md:py-44 bg-slate-950 text-white relative"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div variants={itemVariants} className="text-center mb-20 md:mb-28">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">Prompts <span className="text-red-500">GRATIS</span> <br className="hidden md:block" /> vs el Sistema Pro</h2>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">La diferencia entre un juguete y una herramienta de negocios profesional de alto rendimiento.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 relative items-stretch">
            <motion.div 
              variants={itemVariants}
              className="bg-slate-900 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-800/50 flex flex-col"
            >
              <div className="flex items-center text-red-500 mb-10 md:mb-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shrink-0">
                  <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Caminando a ciegas</h3>
              </div>
              <ul className="space-y-8 md:space-y-10 flex-grow">
                {[
                  "Respuestas robóticas y genéricas que tus clientes ignoran.",
                  "Sin contexto de marketing ni frameworks de venta reales.",
                  "Alucinaciones constantes y tiempo perdido corrigiendo.",
                  "Resultados planos sin conexión emocional con el lector."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 mr-4 sm:mr-5 text-red-500 shrink-0 mt-1" />
                    <p className="text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-indigo-600 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-[0_30px_100px_-20px_rgba(79,70,229,0.4)] relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 p-6 md:p-10 z-20">
                <div className="bg-white/20 backdrop-blur-md text-[9px] sm:text-[10px] font-black uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/20 tracking-[0.2em] sm:tracking-[0.3em] shadow-xl">RECOMENDADO</div>
              </div>
              <div className="flex items-center text-white mb-10 md:mb-12 relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shrink-0 backdrop-blur-sm">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">El Sistema PROMPTX</h3>
              </div>
              <ul className="space-y-8 md:space-y-10 relative z-10 flex-grow">
                {[
                  "Lógica de Copywriting de respuesta directa (AIDA, PAS).",
                  "Estructurados para monetizar: De la idea a la venta.",
                  "Hack de \"Encadenamiento\" para resultados Premium.",
                  "Prompts con personalidad y tono de marca ajustable."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-white/25 rounded-full p-1.5 mr-4 sm:mr-5 shrink-0 mt-1">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white stroke-[4px]" />
                    </div>
                    <p className="text-white text-base sm:text-lg md:text-xl font-black leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-[2000ms]" />
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-24 text-center">
            <CTAButton text="Elegir el Camino Rápido" className="bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30 scale-110" />
          </motion.div>
        </div>
      </MotionSection>

      {/* Modules List */}
      <MotionSection 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 md:py-44 bg-white"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={itemVariants} className="text-center mb-20 md:mb-28">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">Tu Arsenal Completo</h2>
            <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">6 Bloques de élite diseñados para cubrir cada rincón de tu imperio digital.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            {MODULES.map((module) => (
              <motion.div 
                key={module.id} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-8 sm:p-10 md:p-12 border-2 border-slate-100 rounded-[2.5rem] sm:rounded-[3.5rem] hover:border-indigo-600 transition-all bg-slate-50/50 hover:bg-white hover:shadow-4xl hover:shadow-indigo-500/10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-950 text-white rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center font-black text-2xl sm:text-3xl group-hover:bg-indigo-600 group-hover:rotate-6 transition-all shadow-xl">
                    {module.id}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-indigo-600 bg-indigo-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-indigo-100">
                    {module.tag}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{module.title}</h4>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="h-1.5 w-12 sm:w-14 bg-emerald-500 rounded-full"></div>
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-600">{module.count} INDICACIONES</p>
                </div>
                <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 flex-grow font-medium">{module.description}</p>
                <div className="pt-6 sm:pt-8 border-t border-slate-100 flex items-center justify-between group-hover:border-indigo-50 transition-colors">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">INCLUIDO EN EL PACK</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all text-slate-400">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Bonus Section */}
      <MotionSection 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 md:py-44 bg-indigo-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none rotate-12">
          <Gift className="w-[40rem] h-[40rem]" />
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-28">
            <div className="inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase mb-8 tracking-[0.3em] shadow-xl shadow-indigo-600/20">
              REGALOS EXCLUSIVOS
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter">Si te unes hoy, te llevas esto <span className="text-indigo-600">GRATIS</span></h2>
            <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-2xl mx-auto">Valoramos tu rapidez. Estos bonos desaparecen en poco tiempo.</p>
          </motion.div>
 
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {BONUSES.map((bonus, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 sm:p-10 md:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-indigo-100/50 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 sm:gap-10 group hover:border-indigo-600 transition-all shadow-xl shadow-indigo-500/5"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-50 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                  <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">{bonus.title}</h3>
                    <span className="inline-block text-[9px] sm:text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-emerald-100 uppercase tracking-widest self-center sm:self-start">{bonus.value}</span>
                  </div>
                  <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium">{bonus.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-20 md:mt-28 text-center">
            <div className="bg-white/70 backdrop-blur-md inline-block p-6 sm:p-7 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-indigo-100 md:mb-14 mb-10 shadow-2xl">
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-800 tracking-tight">VALOR TOTAL DE LOS BONOS: <span className="text-red-500 line-through md:mx-3 mx-2">USD 93</span> <span className="text-emerald-600">¡GRATIS HOY!</span></p>
            </div>
            <br />
            <CTAButton text="Incluir mis Regalos Gratis" className="scale-100 sm:scale-110" />
          </motion.div>
        </div>
      </MotionSection>

      {/* Testimonials Grid */}
      <MotionSection 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 md:py-44 bg-white"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={itemVariants} className="text-center mb-20 md:mb-28">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-balance">Gente Real Facturando con <span className="text-indigo-600">PROMPTX</span></h2>
            <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-3xl mx-auto">No nos creas a nosotros, cree en los resultados de nuestra comunidad global.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -12, rotate: (i % 2 === 0 ? 1 : -1) }}
                className="p-8 sm:p-10 bg-slate-50 rounded-[2.5rem] sm:rounded-[3rem] border-2 border-slate-100 relative group hover:bg-white hover:shadow-4xl transition-all flex flex-col h-full"
              >
                <div className="flex text-amber-500 mb-6 sm:mb-8 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 text-base sm:text-lg md:text-xl italic leading-relaxed mb-8 sm:mb-10 flex-grow font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4 sm:gap-5 mt-auto pt-6 sm:pt-8 border-t border-slate-100/50">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 rounded-xl sm:rounded-[1.25rem] flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-sm sm:text-base">{t.name}</p>
                    <p className="text-[10px] sm:text-xs font-black text-indigo-600 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-slate-100 rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Pricing Section */}
      <MotionSection 
        id="pricing" 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-28 md:py-44 lg:py-64 bg-slate-950 text-white relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-indigo-600/20 rounded-full blur-[140px]"
          />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.div variants={itemVariants}>
            <div className="inline-block px-5 py-2.5 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase mb-12 tracking-[0.3em] shadow-2xl shadow-indigo-600/40">
              ÚLTIMA OPORTUNIDAD: PRECIO LANZAMIENTO
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter leading-[0.85] text-balance">Tu IA es una <br className="hidden sm:block" /> <span className="gradient-text drop-shadow-2xl">Máquina de Dinero</span></h2>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white text-slate-900 p-8 sm:p-12 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-4xl shadow-indigo-500/20 relative mt-16 group"
          >
            <div className="absolute -top-7 md:-top-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-8 md:px-14 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-2xl shadow-[0_20px_50px_rgba(16,185,129,0.4)] tracking-tight whitespace-nowrap">
              OFERTA DE UN SOLO PAGO
            </div>
            
            <div className="mb-12 md:mb-20 pt-8 sm:pt-0">
              <p className="text-slate-400 text-lg md:text-2xl mb-4 md:mb-6 line-through font-bold text-center">Precio Regular: USD 197</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-black mr-2 md:mr-4 mb-2 md:mb-4 text-slate-900">USD</span>
                <span className="text-7xl sm:text-9xl md:text-[13rem] font-black tracking-tighter text-indigo-600 leading-[0.8] drop-shadow-sm">47</span>
              </div>
              <p className="text-emerald-600 font-black text-xl md:text-3xl mt-6 md:mt-12 tracking-tight uppercase text-center">PAGO ÚNICO • ACCESO VITALICIO</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-left mb-12 md:mb-20 max-w-3xl mx-auto border-t-2 sm:border-t-4 border-slate-50 pt-10 md:pt-16">
              {[
                "Pack 2000+ Prompts Cash",
                "6 Bloques de Maestría (A-F)",
                "Licencia Comercial Incluida",
                "Base de Datos Notion ELITE",
                "Guía: Ingeniería de Prompting",
                "Workshops de Monetización",
                "Checklist Anti-Robot IA",
                "Actualizaciones Vitalicias"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm sm:text-lg font-black text-slate-700">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-50 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-5 shrink-0">
                    <Check className="w-3 h-3 sm:w-5 sm:h-5 text-emerald-500 stroke-[4px] sm:stroke-[5px]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            
            <div className="relative group/pricing-glow">
              <div className="absolute inset-0 bg-indigo-500/50 blur-3xl rounded-[2.5rem] opacity-0 group-hover/pricing-glow:opacity-100 group-hover/pricing-glow:scale-110 transition-all duration-700 pointer-events-none" />
              
              <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 md:py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] md:rounded-[2.5rem] text-2xl md:text-4xl font-black transition-all shadow-[0_25px_60px_-10px_rgba(79,70,229,0.5)] hover:shadow-indigo-500/60 transform relative overflow-hidden group/btn"
              >
                <span className="relative z-10 uppercase tracking-tighter">SÍ, DAME MI ARSENAL IA</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer pointer-events-none transition-all duration-1000" />
              </motion.button>
            </div>
            
            <p className="mt-10 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em] flex items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              CONEXIÓN 100% SEGURA Y ENCRIPTADA
            </p>
            
            <div className="mt-16 flex flex-col items-center gap-8 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <div className="flex items-center space-x-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Visa_Inc._logo.svg" alt="Visa" className="h-7" />
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* Commercial FAQ */}
      <MotionSection 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 md:py-44 bg-slate-50"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-20 md:mb-28 text-center tracking-tighter"
          >
            Resolvemos tus dudas
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="space-y-4 md:space-y-6"
          >
            {FAQS.map((faq, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white border-2 border-slate-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:border-indigo-200 transition-colors"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-7 sm:p-10 md:p-12 text-left transition-colors"
                >
                  <span className="text-lg md:text-2xl font-black text-slate-900 pr-6 sm:pr-10 leading-tight">{faq.question}</span>
                  <div className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all shrink-0",
                    openFaq === idx ? "bg-indigo-600 text-white rotate-180" : "bg-slate-100 text-slate-400 rotate-0"
                  )}>
                    {openFaq === idx ? <Minus className="w-5 h-5 sm:w-6 sm:h-6" /> : <Plus className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-7 sm:px-10 md:px-12 pb-10 md:pb-12 text-slate-500 text-base md:text-xl leading-relaxed font-medium"
                    >
                      <div className="w-full h-px bg-slate-50 mb-7 sm:mb-10"></div>
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Guarantee & Final Closure */}
      <footer className="py-32 md:py-52 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-indigo-600 text-white rounded-[4rem] md:rounded-[5rem] p-12 md:p-32 mb-28 relative overflow-hidden shadow-4xl shadow-indigo-500/30"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-y-6 origin-top-left pointer-events-none translate-y-[-20%]"></div>

            <ShieldCheck className="w-28 h-28 text-white mx-auto mb-12 drop-shadow-2xl animate-pulse" />
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">Garantía "Sin Preguntas" de 7 Días</h2>
            <p className="text-white/80 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed mb-16 font-medium">
              No quiero tu dinero si esto no te hace ganar tiempo o vender más. Úsalo, testéalo, copia los prompts. Si no estás volando en una semana, envíanos un correo y te devolvemos cada centavo. <span className="text-white font-black underline decoration-white/30 decoration-2 underline-offset-8 transition-all hover:decoration-white">Tu satisfacción es nuestra obsesión.</span>
            </p>
            <div className="flex flex-col items-center">
              <CTAButton text="Probar PROMPTX Sin Riesgo" secondary className="bg-white text-indigo-600 hover:bg-slate-50 scale-110" />
            </div>
          </motion.div>
          
          <div className="pt-20 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] gap-12">
            <div className="text-4xl font-black tracking-tighter text-slate-900">PROMPTX<span className="text-indigo-600">.</span></div>
            <p className="text-center md:text-left leading-loose max-w-md">© 2024 • EL FUTURO ES DE QUIENES SABEN PREGUNTAR • TODOS LOS DERECHOS RESERVADOS • RESULTADOS NO GARANTIZADOS</p>
            <div className="flex space-x-12">
              <a href="#" className="hover:text-indigo-600 transition-colors uppercase">Términos</a>
              <a href="#" className="hover:text-indigo-600 transition-colors uppercase">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
