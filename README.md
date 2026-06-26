<div align="center">

# ⚡ CashPrompt Generator

**Generador de prompts monetizables con IA — Frontend React + Gemini API + Sistema Freemium**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Gemini](https://img.shields.io/badge/Gemini-API-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Ver en AI Studio](https://ai.studio/apps/e240b4fc-d011-47d1-a626-e21029f370c3)

</div>

---

## 🧠 ¿Qué es CashPrompt Generator?

CashPrompt Generator es la capa frontend del sistema CashPrompt. Una aplicación web que permite a usuarios generar, personalizar y vender prompts optimizados para IA utilizando **Gemini API**. Incluye modelo freemium con límites configurables y sistema de pago integrado.

## ✨ Características

- 🤖 Generación de prompts con **Gemini Flash / Pro**
- 💰 Modelo **freemium**: uso gratuito limitado + planes de pago
- 🎨 Interfaz intuitiva para crear y personalizar prompts
- 📄 Exportación de prompts en múltiples formatos
- 📊 Panel de historial y prompts favoritos
- 🔗 Integración con **cashprompt-backend** para ventas
- 🚀 Deploy optimizado para **Vercel**

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 15 / React 19, TypeScript |
| Estilos | Tailwind CSS 4 |
| IA | Gemini API (Google AI Studio) |
| Pagos | PayPal SDK |
| Backend | [cashprompt-backend](https://github.com/jacxas/cashprompt-backend) |
| Deploy | Vercel |

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 20+
- API Key de [Google AI Studio](https://ai.google.dev/)

### Instalación

```bash
git clone https://github.com/jacxas/CashPrompt-Generator.git
cd CashPrompt-Generator
npm install
```

### Configuración

```bash
cp .env.example .env.local
```

```env
GEMINI_API_KEY=tu_clave_aqui
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_paypal
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Ejecutar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🌐 Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jacxas/CashPrompt-Generator)

Configurá las variables `GEMINI_API_KEY` y `NEXT_PUBLIC_PAYPAL_CLIENT_ID` en el dashboard de Vercel.

## 🔗 Proyectos Relacionados

- **[cashprompt-backend](https://github.com/jacxas/cashprompt-backend)** — API y motor de agentes
- **[PROMPTX](https://github.com/jacxas/PROMPTX)** — Versión standalone con Gemini + PayPal

## 📄 Licencia

MIT © [jacxas](https://github.com/jacxas)
