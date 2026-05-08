
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CTAButton = ({ text = "Quiero mis indicaciones IA Pro", className = "", secondary = false }) => (
  <motion.a 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#pricing" 
    className={cn(
      "relative inline-flex items-center justify-center px-8 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl active:scale-95 group overflow-hidden",
      secondary 
        ? "bg-white text-indigo-600 border-2 border-indigo-100 hover:border-indigo-600 shadow-indigo-100/50" 
        : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20",
      className
    )}
  >
    <span className="relative z-10 flex items-center">
      {text}
      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </span>
    {!secondary && (
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
    )}
  </motion.a>
);

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner Urgency */}
      <div className="bg-emerald-600 text-white py-2 text-center text-xs font-black uppercase tracking-widest px-4 sticky top-0 z-50">
        🔥 Oferta especial de lanzamiento: 75% OFF solo por esta semana
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-slate-950 text-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-600 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-black tracking-widest uppercase mb-10"
          >
            <Timer className="w-4 h-4 mr-2 text-emerald-400" />
            ACCESO INMEDIATO DISPONIBLE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.9] text-balance"
          >
            2000 Prompts IA que <span className="gradient-text">Facturan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Deja de pedirle favores a ChatGPT. Aprende a darle órdenes que generen <span className="text-white underline decoration-emerald-500 decoration-2 underline-offset-4 font-bold tracking-tight">dinero real</span>. El sistema "Copy-Paste" definitivo.
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

      {/* Trust Marks Bar */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-black tracking-tighter">FORBES</span>
            <span className="text-xl font-black tracking-tighter">TECHRUNCH</span>
            <span className="text-xl font-black tracking-tighter">ENTREPRENEUR</span>
            <span className="text-xl font-black tracking-tighter">WIRED</span>
            <span className="text-xl font-black tracking-tighter">THE VERGE</span>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-6xl font-black mb-20 tracking-tight"
          >
            Este sistema es para ti si...
          </motion.h2>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {[
              { title: "Quieres vender servicios", desc: "Copywriting, redes sociales o consultoría IA con resultados de experto.", icon: <DollarSign /> },
              { title: "No tienes tiempo", desc: "Necesitas delegar la creación de contenido a la IA sin que parezca un robot.", icon: <Clock /> },
              { title: "Buscas escalar", desc: "Quieres crear ofertas de alto ticket que conviertan tráfico frío en clientes.", icon: <TrendingUp /> },
              { title: "Eres freelancer", desc: "Y quieres cobrar más entregando trabajos en tiempo récord.", icon: <Users /> },
              { title: "Eres dueño de negocio", desc: "Y necesitas anuncios que realmente traigan ventas, no solo likes.", icon: <Target /> },
              { title: "Eres perfeccionista", desc: "Odias las respuestas genéricas y quieres prompts con lógica humana.", icon: <Check /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="p-10 rounded-[2.5rem] bg-slate-50 border-2 border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all flex flex-col h-full group"
              >
                <div className="w-14 h-14 bg-white shadow-xl shadow-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 transition-transform group-hover:scale-110">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="font-black text-2xl mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeInUp} className="mt-20">
            <CTAButton text="¡Dame acceso a PROMPTX!" secondary />
          </motion.div>
        </div>
      </section>

      {/* Comparison Section (Free vs Pro) */}
      <section className="py-32 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black mb-6">¿Por qué los prompts <span className="text-red-500">GRATIS</span> no funcionan?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">La diferencia entre un juguete y una herramienta de negocios profesional.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 relative">
            <motion.div 
              {...fadeInUp}
              className="bg-slate-900/50 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-slate-800 relative z-10"
            >
              <div className="flex items-center text-red-500 mb-10">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black">La Manera Lenta</h3>
              </div>
              <ul className="space-y-8">
                {[
                  "Respuestas robóticas y genéricas que tus clientes detectan al instante.",
                  "Sin contexto de marketing ni frameworks de venta reales.",
                  "Alucinaciones constantes y pérdida de tiempo corrigiendo.",
                  "Resultados planos que no evocan ninguna emoción en el lector."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Minus className="w-5 h-5 mr-4 text-red-500 shrink-0 mt-1" />
                    <p className="text-slate-400 text-lg font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="bg-indigo-600 p-10 md:p-14 rounded-[3rem] shadow-3xl shadow-indigo-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-white/20 backdrop-blur-md text-[10px] font-black uppercase px-3 py-1.5 rounded-lg border border-white/20 tracking-widest">Recomendado</div>
              </div>
              <div className="flex items-center text-white mb-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-7 h-7 fill-white" />
                </div>
                <h3 className="text-3xl font-black">Sistema PROMPTX</h3>
              </div>
              <ul className="space-y-8">
                {[
                  "Lógica de Copywriting de respuesta directa (AIDA, PAS, etc.).",
                  "Estructurados para monetizar: De la idea a la venta en 1 clic.",
                  "Hack de \"Encadenamiento\" para resultados de nivel Premium.",
                  "Prompts con personalidad propia y tono de marca ajustable."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-4 shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white text-lg font-bold">{item}</p>
                  </li>
                ))}
              </ul>
              
              {/* Abstract Shape */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            </motion.div>
          </div>
          
          <motion.div {...fadeInUp} className="mt-20 text-center">
            <CTAButton text="Cambiar al Sistema Pro Ahora" className="bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30" />
          </motion.div>
        </div>
      </section>

      {/* Modules List */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black mb-6">Tu Arsenal Completo</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">6 Bloques diseñados para cubrir cada rincón de tu imperio digital.</p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {MODULES.map((module) => (
              <motion.div 
                key={module.id} 
                variants={fadeInUp}
                className="group p-10 border-2 border-slate-100 rounded-[3rem] hover:border-indigo-600 transition-all bg-slate-50/50 hover:bg-white hover:shadow-3xl hover:shadow-indigo-500/10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-3xl group-hover:bg-indigo-600 group-hover:rotate-6 transition-all">
                    {module.id}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl">
                    {module.tag}
                  </span>
                </div>
                <h4 className="text-2xl font-black mb-3 text-slate-800">{module.title}</h4>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600">{module.count} Indicaciones</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{module.description}</p>
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400">INCLUIDO EN EL PACK</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bonus Section (MISSING BEFORE) */}
      <section className="py-32 bg-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Gift className="w-96 h-96" />
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <div className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-xs font-black uppercase mb-6 tracking-widest">
              REGALOS EXCLUSIVOS
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-6">Si te unes hoy, te llevas esto <span className="text-indigo-600">GRATIS</span></h2>
            <p className="text-slate-500 text-xl font-medium">Valoramos tu rapidez. Estos bonos desaparecen pronto.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {BONUSES.map((bonus, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] border-2 border-indigo-100 flex flex-col md:flex-row items-center gap-8 group hover:border-indigo-600 transition-colors"
              >
                <div className="w-20 h-20 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Gift className="w-10 h-10 text-indigo-600" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-black text-slate-800">{bonus.title}</h3>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{bonus.value}</span>
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed">{bonus.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeInUp} className="mt-20 text-center">
            <div className="bg-white/50 backdrop-blur-sm inline-block p-4 rounded-3xl border border-indigo-100 mb-10">
              <p className="text-lg font-bold text-slate-700">VALOR TOTAL DE LOS BONOS: <span className="text-red-500 line-through">USD 93</span> <span className="text-emerald-600 ml-2">¡GRATIS HOY!</span></p>
            </div>
            <br />
            <CTAButton text="Incluir mis Regalos Gratis" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid (IMPROVED) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">Gente Real Facturando con <span className="text-indigo-600">PROMPTX</span></h2>
            <p className="text-slate-500 text-xl font-medium">No nos creas a nosotros, cree en los resultados de nuestra comunidad.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="flex text-amber-400 mb-6 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 text-base italic leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-black text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 rotate-12 opacity-0 group-hover:opacity-100 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-40 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div {...fadeInUp}>
            <div className="inline-block px-4 py-2 bg-indigo-600 rounded-full text-xs font-black uppercase mb-10 tracking-widest animate-bounce">
              ÚLTIMA OPORTUNIDAD: PRECIO LANZAMIENTO
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">Transforma tu IA en una <span className="gradient-text">Máquina de Dinero</span></h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-slate-900 p-10 md:p-20 rounded-[4rem] shadow-4xl shadow-indigo-500/20 relative mt-16 group"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-12 py-4 rounded-[1.5rem] font-black text-xl shadow-2xl shadow-emerald-500/30 tracking-tight">
              OFERTA DE UN SOLO PAGO
            </div>
            
            <div className="mb-14">
              <p className="text-slate-400 text-xl mb-4 line-through font-bold">Precio de lista: USD 197</p>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-black mr-3 text-slate-900">USD</span>
                <span className="text-9xl md:text-[11rem] font-black tracking-tighter text-indigo-600 leading-none">47</span>
              </div>
              <p className="text-emerald-600 font-extrabold text-2xl mt-6 tracking-tight uppercase">PAGO ÚNICO • ACCESO VITALICIO</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-16 max-w-2xl mx-auto border-t-2 border-slate-50 pt-12">
              {[
                "Pack 2000+ Prompts Cash",
                "6 Bloques de Maestría (A-F)",
                "Licencia Comercial Incluida",
                "Base de Datos Notion PRO",
                "Guía: El Arte de Iterar",
                "Workshops de Monetización",
                "Checklist Anti-Robot IA",
                "Actualizaciones Vitalicias"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm font-bold text-slate-600">
                  <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center mr-3 shrink-0">
                    <Check className="w-4 h-4 text-emerald-500 stroke-[3px]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            
            <button className="w-full py-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] text-3xl font-black transition-all shadow-3xl shadow-indigo-500/30 transform hover:-translate-y-2 active:scale-95 group-hover:animate-pulse-slow relative overflow-hidden">
              <span className="relative z-10">SÍ, DAME MI ARSENAL IA</span>
            </button>
            <p className="mt-6 text-xs font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Pago 100% Seguro y Encriptado
            </p>
            
            <div className="mt-12 flex flex-col items-center gap-6 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              <div className="flex items-center space-x-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commercial FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-6xl font-black mb-20 text-center tracking-tight"
          >
            Resolvemos tus dudas
          </motion.h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:border-indigo-200 transition-colors"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-10 text-left transition-colors"
                >
                  <span className="text-xl font-bold text-slate-800 pr-10">{faq.question}</span>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                    openFaq === idx ? "bg-indigo-600 text-white rotate-180" : "bg-slate-50 text-slate-400 rotate-0"
                  )}>
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-10 pb-10 text-slate-500 text-lg leading-relaxed font-medium"
                    >
                      <div className="w-full h-px bg-slate-50 mb-8"></div>
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee & Final Closure */}
      <footer className="py-32 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-indigo-600 text-white rounded-[4rem] p-12 md:p-24 mb-24 relative overflow-hidden"
          >
            {/* Background Shape */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-y-3 origin-top-left"></div>

            <ShieldCheck className="w-24 h-24 text-white mx-auto mb-10 drop-shadow-2xl" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Garantía "Sin Preguntas" de 7 Días</h2>
            <p className="text-white/80 max-w-3xl mx-auto text-xl leading-relaxed mb-12 font-medium">
              No quiero tu dinero si esto no te hace ganar tiempo o vender más. Úsalo, testéalo, copia los prompts. Si no estás volando en una semana, escríbenos y te devolvemos cada centavo. <span className="text-white font-black">Tu satisfacción es mi prioridad absoluta.</span>
            </p>
            <div className="flex flex-col items-center">
              <CTAButton text="Probar PROMPTX Sin Riesgo" secondary className="bg-white text-indigo-600 hover:bg-slate-50" />
            </div>
          </motion.div>
          
          <div className="pt-16 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs font-black uppercase tracking-[0.3em] gap-10">
            <div className="text-3xl font-black tracking-tighter text-slate-900">PROMPTX<span className="text-indigo-600">.</span></div>
            <p className="text-center md:text-left leading-loose">© 2024 • EL FUTURO ES DE QUIENES SABEN PREGUNTAR • TODOS LOS DERECHOS RESERVADOS</p>
            <div className="flex space-x-10">
              <a href="#" className="hover:text-indigo-600 transition-colors">Legal</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
