
import React, { useState } from 'react';
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
  Timer
} from 'lucide-react';
import { MODULES, BONUSES, FAQS, TESTIMONIALS } from './constants';

const CTAButton = ({ text = "Quiero mis indicaciones IA Pro", className = "" }) => (
  <a 
    href="#pricing" 
    className={`inline-flex items-center justify-center px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/20 active:scale-95 ${className}`}
  >
    {text}
    <ArrowRight className="ml-2 w-6 h-6" />
  </a>
);

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Banner Urgency */}
      <div className="bg-emerald-600 text-white py-2 text-center text-xs font-bold uppercase tracking-widest px-4">
        🔥 Oferta especial de lanzamiento: 75% OFF solo por esta semana
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500 rounded-full blur-[140px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-bold mb-8">
            <Timer className="w-4 h-4 mr-2" />
            ACCESO INMEDIATO DISPONIBLE
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-balance">
            2000 Prompts IA que Facturan: <span className="text-emerald-400">Tus Primeros $1000</span> en 30 Días
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Deja de pedirle favores a ChatGPT. Aprende a darle órdenes que generen <span className="text-white underline decoration-emerald-500">dinero real</span>. El sistema "Copy-Paste" que las agencias no quieren que tengas.
          </p>

          <div className="flex flex-col items-center gap-6">
            <CTAButton text="¡Sí, quiero facturar con IA ahora!" />
            <p className="text-slate-500 text-sm flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1 text-emerald-500" /> 
              Garantía de satisfacción de 7 días incluida
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-xs italic text-slate-600 mb-2">"{t.text}"</p>
                <p className="text-xs font-bold text-slate-900">— {t.name}, {t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Este sistema es para ti si...</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Quieres vender servicios", desc: "Copywriting, redes sociales o consultoría IA con resultados de experto." },
              { title: "No tienes tiempo", desc: "Necesitas delegar la creación de contenido a la IA sin que parezca un robot." },
              { title: "Buscas escalar", desc: "Quieres crear ofertas de alto ticket que conviertan tráfico frío en clientes." },
              { title: "Eres freelancer", desc: "Y quieres cobrar más entregando trabajos en tiempo récord." },
              { title: "Eres dueño de negocio", desc: "Y necesitas anuncios que realmente traigan ventas, no solo likes." },
              { title: "Eres perfeccionista", desc: "Odias las respuestas genéricas y quieres prompts con lógica humana." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <CTAButton text="¡Dame acceso a PROMPTX!" />
          </div>
        </div>
      </section>

      {/* Comparison Section (Free vs Pro) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">¿Por qué los prompts GRATIS no funcionan?</h2>
            <p className="text-slate-400">La diferencia entre un juguete y una herramienta de negocios.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-slate-800 rounded-[2rem] overflow-hidden border border-slate-800">
            <div className="bg-slate-900 p-8 md:p-12">
              <div className="flex items-center text-red-400 mb-8">
                <AlertTriangle className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Prompts Gratis de Google</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Minus className="w-5 h-5 mr-3 text-red-500 shrink-0 mt-1" />
                  <p className="text-slate-400 text-sm">Respuestas robóticas y genéricas que tus clientes detectan al instante.</p>
                </li>
                <li className="flex items-start">
                  <Minus className="w-5 h-5 mr-3 text-red-500 shrink-0 mt-1" />
                  <p className="text-slate-400 text-sm">Sin contexto de marketing ni frameworks de venta reales.</p>
                </li>
                <li className="flex items-start">
                  <Minus className="w-5 h-5 mr-3 text-red-500 shrink-0 mt-1" />
                  <p className="text-slate-400 text-sm">Alucinaciones constantes y pérdida de tiempo corrigiendo.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-indigo-600 text-[10px] font-black uppercase px-2 py-1 rounded">Recomendado</div>
              </div>
              <div className="flex items-center text-emerald-400 mb-8">
                <Zap className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Sistema PROMPTX</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-1" />
                  <p className="text-slate-200 text-sm font-semibold">Lógica de Copywriting de respuesta directa (AIDA, PAS, etc.).</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-1" />
                  <p className="text-slate-200 text-sm font-semibold">Estructurados para monetizar: De la idea a la venta en 1 clic.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-1" />
                  <p className="text-slate-200 text-sm font-semibold">Hack de "Encadenamiento" para resultados de nivel Premium.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <CTAButton text="Elegir el Sistema Pro" className="bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20" />
          </div>
        </div>
      </section>

      {/* Modules List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Tu Arsenal Completo</h2>
            <p className="text-slate-600">6 Bloques diseñados para cubrir cada rincón de tu negocio digital.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {MODULES.map((module) => (
              <div key={module.id} className="group p-8 border-2 border-slate-100 rounded-[2rem] hover:border-indigo-600 transition-all bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl group-hover:bg-indigo-600 transition-colors">
                    {module.id}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg">
                    {module.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-slate-800">{module.title}</h3>
                <p className="text-base font-bold text-emerald-600 mb-4">{module.count} Armas de Venta</p>
                <p className="text-slate-600 text-sm leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" className="py-32 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-indigo-600 rounded-full text-xs font-black uppercase mb-8 tracking-widest">
            ÚLTIMA OPORTUNIDAD: PRECIO LANZAMIENTO
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">No dejes que tu competencia use esto antes que tú</h2>
          
          <div className="bg-white text-slate-900 p-8 md:p-16 rounded-[3rem] shadow-3xl shadow-indigo-500/20 relative mt-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-8 py-3 rounded-2xl font-black text-lg shadow-lg">
              TODO INCLUIDO
            </div>
            
            <div className="mb-12">
              <p className="text-slate-400 text-lg mb-2 line-through font-bold">Precio Regular: USD 197</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-black mr-2 text-slate-900">USD</span>
                <span className="text-8xl md:text-9xl font-black tracking-tighter text-indigo-600">47</span>
              </div>
              <p className="text-emerald-600 font-black text-xl mt-4">PAGO ÚNICO • ACCESO PARA SIEMPRE</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-left mb-12 max-w-xl mx-auto border-t border-slate-100 pt-8">
              {[
                "Pack 2000+ Prompts Cash",
                "Licencia de Uso Comercial",
                "Acceso a la Tabla Notion",
                "Guía de Auditoría de IA",
                "Actualizaciones Vitalicias",
                "Soporte Prioritario"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
            
            <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl text-2xl font-black transition-all shadow-2xl shadow-indigo-200 transform hover:-translate-y-1">
              SÍ, QUIERO ACCESO INMEDIATO
            </button>
            
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center space-x-4 grayscale opacity-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4" />
              </div>
              <p className="text-xs text-slate-400 font-medium">Pago seguro procesado por Stripe/PayPal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-black mb-12 text-center tracking-tight">Resolvemos tus dudas</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                  {openFaq === idx ? <Minus className="w-6 h-6 text-indigo-600 shrink-0" /> : <Plus className="w-6 h-6 text-slate-300 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 text-slate-600 text-sm leading-relaxed">
                    <div className="w-full h-px bg-slate-50 mb-6"></div>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee & Final Closure */}
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-indigo-50 rounded-[3rem] p-12 mb-16 border border-indigo-100">
            <ShieldCheck className="w-20 h-20 text-indigo-600 mx-auto mb-8" />
            <h2 className="text-3xl font-black mb-6 text-slate-900 leading-tight">Garantía "Sin Riesgos" de 7 Días</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              No quiero tu dinero si esto no te hace ganar tiempo o vender más. Úsalo, testéalo, copia los prompts. Si no estás volando en una semana, escríbenos a <span className="font-bold text-indigo-600 underline">soporte@promptx.com</span> y te devolvemos cada centavo. Sin preguntas, sin rencores.
            </p>
            <div className="flex flex-col items-center">
              <CTAButton text="Probar PROMPTX Sin Riesgo" />
              <p className="mt-4 text-sm font-bold text-indigo-600">Última oportunidad para acceder a este precio.</p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-widest gap-6">
            <div className="text-2xl font-black tracking-tighter text-slate-900">PROMPTX<span className="text-indigo-600">.</span></div>
            <p>© 2024 - El contenido de esta página es educativo. Los resultados varían según la implementación.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-600 transition-colors">Términos</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
