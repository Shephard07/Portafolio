# Portafolio de Bryan Cotrina

Portafolio en React + Vite. Conserva la estructura por componentes del proyecto original, con un diseño en marfil, verde y carbón.

## Ejecutarlo en Windows

Abre una terminal en la carpeta que contiene `package.json`:

```powershell
npm install
npm run dev
```

Abre la dirección que indique Vite. No necesitas iniciar Apache ni MySQL para este proyecto.

Si ya tienes `node_modules` en tu proyecto, puedes copiar `src`, `public` e `index.html` de esta versión a tu carpeta original y ejecutar `npm run dev`. Conserva tu carpeta `.git`.

## Cambiar la información

Los datos están en **`src/data/portfolio.js`**:

- `perfil`: nombre, presentación, correo, GitHub, ubicación y LinkedIn.
- `proyectos`: título, categoría, descripción, tecnologías, enlaces y captura opcional.
- `certificados`: nombre, institución, fecha y enlace al PDF. Los seis PDF originales están incluidos en `public/certificados`.

LinkedIn está configurado con el enlace proporcionado; se oculta si su URL queda vacía. Cada proyecto tiene un enlace para abrir su web en una pestaña nueva. Puedes añadir `codigo` si quieres mostrar su repositorio. Se incluyen los cinco proyectos publicados y sus enlaces proporcionados: GesCAlim, ApiRestaurante, Reproductor de música, Restaurante Básico v1 y ApiCredenciales. Los certificados incluidos usan los nombres y fechas de los PDF proporcionados.

Ejemplo para sustituir un proyecto:

```js
{
  id: '01',
  titulo: 'Nombre de tu proyecto',
  categoria: 'Aplicación web',
  descripcion: 'Qué hace, qué problema resuelve y cuál fue tu aporte.',
  tecnologias: ['React', 'CSS'],
  codigo: 'https://github.com/tu-usuario/tu-repositorio',
  demo: '',
  imagen: '/proyectos/captura.png',
  pendiente: false,
}
```

Guarda la captura en `public/proyectos/captura.png`. Si `imagen` está vacía, se muestra una ilustración decorativa hecha con CSS.

Ejemplo de certificado:

```js
{ id: 1, titulo: 'Nombre real del curso', emisor: 'Institución', fecha: '2026', credencial: 'https://enlace-de-verificacion' }
```

La foto está en `src/assets/foto.jpg`. Puedes reemplazarla conservando ese nombre. Los textos adicionales de portada y presentación están en `src/components/Banner/Banner.jsx`.

## Formulario

El botón **Preparar correo** abre la aplicación de correo del visitante con el mensaje redactado. El visitante debe enviarlo desde allí. Requiere una aplicación de correo configurada; también está disponible el enlace de email directo. No hay backend de envío ni mensajes de éxito falsos.

## Estructura

- `Navbar`: marca, enlaces y menú móvil accesible.
- `Banner`: portada, retrato y presentación personal.
- `Proyectos`: tarjetas con ilustración o captura y enlaces opcionales.
- `Certificados`: tarjetas con el nombre del curso y la fecha; cada tarjeta abre su PDF en una pestaña nueva.
- `Contacto`: datos de contacto y formulario.
- `Footer`: marca y navegación de regreso.
- `Icon.jsx`: iconos SVG compartidos, sin dependencias adicionales.

Cada sección mantiene su archivo CSS. `src/index.css` contiene las variables de color y reglas generales; `src/App.css`, los estilos compartidos.

## Verificaciones

```powershell
npm run lint
npm run build
npm run preview
```

El ZIP no incluye `node_modules`, `.git` ni `dist`. Las fuentes de Google son opcionales: si no hay internet se usan fuentes del sistema.
