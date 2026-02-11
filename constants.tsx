
import React from 'react';
import { ModuleBlock, Bonus, FAQItem } from './types';

export const MODULES: ModuleBlock[] = [
  { id: 'A', title: 'Bloque A – Nivel Fácil', count: 100, description: 'Indicaciones directas para tareas cotidianas. Ideal para romper el hielo con la IA y obtener resultados inmediatos sin complicaciones.', tag: 'Principiante' },
  { id: 'B', title: 'Bloque B – Nivel Medio', count: 100, description: 'Estructuras de prompts que requieren un poco más de contexto. Perfecto para redactar emails y captions que realmente conectan.', tag: 'Intermedio' },
  { id: 'C', title: 'Bloque C – Nivel Difícil', count: 100, description: 'Ingeniería de prompts avanzada. Frameworks complejos para análisis de mercado y creación de estrategias de negocio completas.', tag: 'Avanzado' },
  { id: 'D', title: 'Bloque D – Intermedio Medio-Fácil', count: 100, description: 'El punto dulce de la productividad. Automatiza respuestas y atención al cliente con un tono humano y profesional.', tag: 'Productividad' },
  { id: 'E', title: 'Bloque E – Intermedio Medio-Difícil', count: 100, description: 'Enfocado en copy de ventas de alto impacto. Estructuras persuasivas para landing pages y guiones de venta en video.', tag: 'Ventas' },
  { id: 'F', title: 'Bloque F – Transformar Free → Pro', count: 100, description: 'Cómo lograr que la versión gratuita de ChatGPT o Claude entregue resultados de nivel premium mediante técnicas de encadenamiento.', tag: 'Especial' },
];

export const BONUSES: Bonus[] = [
  { title: 'Mini-Guía: El Arte de Iterar', description: 'Cómo ajustar una respuesta mediocre de la IA hasta convertirla en una joya de marketing.', value: 'USD 27' },
  { title: 'Checklist de Auditoría de Contenido', description: 'Asegúrate de que lo que genera la IA no parezca escrito por un robot antes de publicar.', value: 'USD 19' },
  { title: 'Tabla Maestra en Notion', description: 'Acceso a una base de datos organizada para que encuentres el prompt que necesitas en segundos.', value: 'GRATIS' },
  { title: 'Workshop Grabado: Monetización IA', description: '3 estrategias reales para vender servicios de copywriting usando PROMPTX.', value: 'USD 47' },
];

export const FAQS: FAQItem[] = [
  { question: '¿Puedo revender estos prompts?', answer: 'Tienes una licencia de uso comercial para crear contenido y servicios para tus clientes. Sin embargo, no está permitida la reventa del pack PROMPTX como producto propio.' },
  { question: '¿Funciona con Gemini, Claude o Llama?', answer: 'Sí. El 95% de los prompts son agnósticos al modelo. Hemos testeado el sistema en ChatGPT, Claude 3.5, Gemini Pro y modelos locales con resultados excepcionales.' },
  { question: '¿Cuánto tiempo necesito por día para ver resultados?', answer: 'Con el sistema "Copia y Pega", puedes generar el contenido de toda una semana en menos de 20 minutos. No necesitas "aprender" ingeniería de prompts, solo usarlos.' },
  { question: '¿Necesito la versión Pro de ChatGPT?', answer: 'No es obligatorio. El Bloque F está dedicado exclusivamente a hackear las versiones gratuitas para que entreguen resultados de nivel profesional.' },
  { question: '¿Cómo recibo el acceso?', answer: 'Inmediatamente después de la compra. Recibirás un enlace de descarga y acceso a la plataforma privada de por vida.' },
  { question: '¿Hay actualizaciones incluidas?', answer: 'Sí. El mercado de la IA vuela. Cada vez que optimizamos un bloque o añadimos prompts nuevos, los recibes en tu correo sin pagar un centavo extra.' },
];

export const TESTIMONIALS = [
  { name: 'Juan G.', role: 'Freelancer', text: 'Vendí mi primer pack de servicios de contenido en solo 7 días usando los frameworks del Bloque E. Recuperé la inversión el primer día.' },
  { name: 'María R.', role: 'Creadora Digital', text: 'Automaticé mi Instagram por completo. Ahora solo le dedico 10 minutos al día y mis impresiones subieron un 40%.' },
  { name: 'Carlos D.', role: 'Agency Owner', text: 'El Bloque de "Transformar Free a Pro" es una joya. Mis redactores ahora entregan piezas que parecen escritas por seniors.' },
  { name: 'Lucía M.', role: 'E-commerce', text: 'Escribí todas las fichas de producto de mi tienda en una tarde. Antes tardaba semanas.' }
];
