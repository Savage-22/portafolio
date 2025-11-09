# 📝 Guía Rápida de Personalización

## ⚡ Pasos Rápidos para Personalizar Tu Portafolio

### 1️⃣ Información Personal Básica

#### `src/components/header/Navbar.jsx`
```jsx
// Línea 15 - Cambia tu nombre
<h1 className="...">
  Tu Nombre Aquí  {/* ← CAMBIAR */}
</h1>
```

#### `src/components/sections/Hero.jsx`
```jsx
// Líneas 14-21 - Tu información principal
<h1 className="...">
  Tu Nombre Completo  {/* ← CAMBIAR */}
</h1>
<h2 className="...">
  Tu Título/Profesión  {/* ← CAMBIAR */}
</h2>

// Línea 26 - Tu descripción
<p className="...">
  Tu descripción profesional aquí...  {/* ← CAMBIAR */}
</p>
```

### 2️⃣ Sobre Mí

#### `src/components/sections/About.jsx`
```jsx
// Líneas 33-46 - Reemplaza con tu historia
<p>
  Tu biografía profesional...  {/* ← CAMBIAR */}
</p>

// Líneas 51-59 - Tus estadísticas
<p className="text-3xl font-bold text-blue-400">3+</p>  {/* ← CAMBIAR */}
<p className="text-gray-400 text-sm">Años de experiencia</p>
```

### 3️⃣ Habilidades

#### `src/components/sections/Skills.jsx`
```jsx
// Líneas 5-32 - Modifica tus skills
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },  {/* ← AJUSTA los niveles */}
      // Agrega o quita skills según necesites
    ]
  }
]
```

### 4️⃣ Proyectos

#### `src/components/sections/Projects.jsx`
```jsx
// Líneas 4-64 - Reemplaza con tus proyectos reales
const projects = [
  {
    title: 'Nombre del Proyecto',  {/* ← CAMBIAR */}
    description: 'Descripción...',  {/* ← CAMBIAR */}
    image: '🛒',  {/* ← Emoji o ruta a imagen */}
    technologies: ['React', 'Node.js'],  {/* ← CAMBIAR */}
    githubUrl: 'https://github.com/tu-usuario/proyecto',  {/* ← CAMBIAR */}
    liveUrl: 'https://tu-proyecto.com',  {/* ← CAMBIAR */}
    featured: true
  }
]
```

### 5️⃣ Contacto

#### `src/components/sections/Contact.jsx`
```jsx
// Línea 47 - Email
<a href="mailto:tu-email@example.com">  {/* ← CAMBIAR */}
  tu-email@example.com
</a>

// Línea 61 - Teléfono
<a href="tel:+123456789">  {/* ← CAMBIAR */}
  +1 (234) 567-890
</a>

// Línea 76 - Ubicación
<p className="text-gray-400">
  Tu Ciudad, País  {/* ← CAMBIAR */}
</p>
```

### 6️⃣ Redes Sociales

#### `src/components/footer/Footer.jsx` y `src/components/sections/Contact.jsx`
```jsx
// Actualiza los enlaces en ambos archivos:
<a href="https://github.com/tu-usuario">  {/* ← CAMBIAR */}
<a href="https://linkedin.com/in/tu-perfil">  {/* ← CAMBIAR */}
<a href="https://twitter.com/tu-usuario">  {/* ← CAMBIAR */}
<a href="mailto:tu-email@example.com">  {/* ← CAMBIAR */}
```

### 7️⃣ SEO (Meta Tags)

#### `index.html`
```html
<!-- Líneas 7-11 - Información SEO -->
<title>Tu Nombre - Tu Título | Portafolio</title>  <!-- CAMBIAR -->
<meta name="description" content="Tu descripción..." />  <!-- CAMBIAR -->
<meta property="og:url" content="https://tu-dominio.com" />  <!-- CAMBIAR -->
```

---

## 🎨 Cambiar Colores (Opcional)

Los colores principales están definidos en clases de Tailwind CSS. Busca y reemplaza:

- `blue-400`, `blue-500`, `blue-600` → Tu color primario
- `purple-400`, `purple-500` → Tu color secundario
- `gray-700`, `gray-800`, `gray-900` → Tu esquema de grises

---

## 🖼️ Agregar Imágenes

### Para tu foto de perfil:

1. Coloca tu foto en `public/` (ejemplo: `public/foto-perfil.jpg`)
2. En `About.jsx`, reemplaza:

```jsx
// Busca esto (línea ~28):
<div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-8xl">
  👨‍💻
</div>

// Reemplázalo por:
<img 
  src="/foto-perfil.jpg" 
  alt="Tu Nombre" 
  className="w-full h-full rounded-full object-cover"
/>
```

### Para imágenes de proyectos:

1. Coloca imágenes en `public/projects/`
2. En `Projects.jsx`, cambia:

```jsx
image: '/projects/mi-proyecto.jpg'  // En lugar del emoji
```

3. Actualiza el código de renderizado:

```jsx
// Busca la línea ~135 y reemplaza:
<div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-8xl">
  {project.image}
</div>

// Por:
<div className="h-48 overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
  />
</div>
```

---

## 📧 Configurar Formulario de Contacto

### Opción 1: EmailJS (Recomendado)

1. Crea cuenta en [emailjs.com](https://www.emailjs.com/)
2. Crea un servicio y plantilla
3. Instala EmailJS:
```bash
npm install @emailjs/browser
```

4. Actualiza `Contact.jsx`:
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(
    () => setStatus('¡Mensaje enviado!'),
    () => setStatus('Error al enviar')
  );
};
```

### Opción 2: Formspree (Más Simple)

1. Regístrate en [formspree.io](https://formspree.io/)
2. Crea un formulario y obtén el endpoint
3. Actualiza el form en `Contact.jsx`:
```jsx
<form 
  action="https://formspree.io/f/TU_FORM_ID" 
  method="POST"
>
```

---

## ✅ Checklist Pre-Despliegue

- [ ] Cambié mi nombre en Navbar y Hero
- [ ] Actualicé mi biografía en About
- [ ] Modifiqué las habilidades según mi stack
- [ ] Agregué mis proyectos reales
- [ ] Actualicé email, teléfono y ubicación
- [ ] Cambié todos los enlaces de redes sociales
- [ ] Actualicé meta tags en index.html
- [ ] (Opcional) Reemplacé emojis por imágenes reales
- [ ] (Opcional) Configuré formulario de contacto
- [ ] Probé `npm run build` sin errores
- [ ] Probé en móvil (responsive)

---

## 🚀 Comandos para Desarrollo

```bash
# Ver en navegador
npm run dev

# Probar build de producción
npm run build
npm run preview

# Verificar errores
npm run lint
```

---

## 💡 Tips Rápidos

1. **No toques** la estructura de carpetas ni los imports
2. **Busca** `{/* ← CAMBIAR */}` para encontrar rápido qué modificar
3. **Prueba** cada cambio con `npm run dev`
4. **Commitea** a menudo: `git add . && git commit -m "Actualización"`
5. **Guarda** el CV en `public/cv.pdf`

---

## 🆘 Problemas Comunes

### "El proyecto no se ve bien en móvil"
✅ Ya está optimizado. Prueba con DevTools (F12) → Toggle device toolbar

### "Las animaciones no funcionan"
✅ Refresca la página con Ctrl + Shift + R

### "No se ven los iconos"
✅ Los SVG están incluidos en el código, no necesitas instalar nada

### "El formulario no funciona"
✅ Por defecto es solo visual. Sigue la guía de EmailJS arriba

---

¿Necesitas ayuda? Revisa el README.md principal o abre un issue en GitHub.
