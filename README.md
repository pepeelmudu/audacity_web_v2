# Audacity Web V1

Landing page MVP para Audacity - AI Talent Engine

## 🚀 Instalación

### 1. Instalar Node.js

Si no tienes Node.js instalado, descárgalo desde: https://nodejs.org/

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`

### 4. Build para producción

```bash
npm run build
```

### 5. Preview de producción

```bash
npm run preview
```

## 📁 Estructura del proyecto

```
audacity_web_v1/
├── public/              # Assets estáticos (logos, imágenes)
├── src/
│   ├── components/     # Componentes React
│   │   ├── Header.jsx
│   │   ├── TerminalBar.jsx
│   │   ├── Hero.jsx
│   │   ├── ChatForm.jsx
│   │   └── Logo.jsx
│   ├── data/
│   │   └── content.js  # Contenido para Candidate/Company
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales y Tailwind
├── index.html
└── package.json
```

## 🎨 Características

- ✅ Cambio dinámico entre modo Candidate y Company
- ✅ Animación marquee en la barra terminal
- ✅ Formulario de contacto funcional
- ✅ Diseño responsive
- ✅ Transiciones suaves entre temas

## 🎯 Próximos pasos

1. Añadir el logo real en `src/components/Logo.jsx`
2. Personalizar los campos del formulario según necesidades
3. Conectar el formulario con un backend/email service
4. Añadir más animaciones si es necesario

## 📦 Tecnologías

- React 18
- Vite
- Tailwind CSS
- ESLint

