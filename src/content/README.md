# Content Collections - Astro 5

Este directorio contiene todas las colecciones de contenido del proyecto usando Astro Content Collections v5.

## Estructura

```
src/content/
├── config.ts          # Configuración de colecciones y esquemas
├── cv/                # Datos del CV (JSON)
│   ├── en.json
│   └── es.json
├── works/             # Experiencia laboral (Markdown)
│   ├── en/
│   └── es/
├── projects/          # Proyectos (Markdown)
│   ├── en/
│   └── es/
└── summary/           # Resumen/About (Markdown)
    ├── en.md
    └── es.md
```

## Colecciones

### 1. CV Collection (`cv`)
- **Tipo**: `data` (JSON)
- **Contenido**: Información básica, educación, certificados, habilidades
- **Archivos**: `en.json`, `es.json`
- **Uso**: `getEntry("cv", "en")`

### 2. Works Collection (`works`)
- **Tipo**: `content` (Markdown)
- **Contenido**: Experiencia laboral
- **Estructura**: Archivos markdown con frontmatter
- **Uso**: `getCollection("works")`

**Ejemplo de archivo work:**
```markdown
---
name: "Nombre de la empresa"
position: "Cargo"
startDate: "2023-01-01"
endDate: "2023-12-31"
isRemote: true
summary: "Descripción del trabajo"
highlights: ["Logro 1", "Logro 2"]
---

Contenido adicional del trabajo...
```

### 3. Projects Collection (`projects`)
- **Tipo**: `content` (Markdown)
- **Contenido**: Proyectos personales y profesionales
- **Estructura**: Archivos markdown con frontmatter
- **Uso**: `getCollection("projects")`

**Ejemplo de archivo project:**
```markdown
---
name: "Nombre del proyecto"
description: "Descripción del proyecto"
url: "https://proyecto.com"
github: "https://github.com/usuario/proyecto"
highlights: ["Tecnología 1", "Tecnología 2"]
isActive: true
---

Descripción detallada del proyecto...
```

### 4. Summary Collection (`summary`)
- **Tipo**: `content` (Markdown)
- **Contenido**: Resumen personal/about
- **Estructura**: Archivos markdown con frontmatter
- **Uso**: `getCollection("summary")`

**Ejemplo de archivo summary:**
```markdown
---
summary: "Resumen personal"
---

Contenido del resumen en markdown...
```

## Uso en componentes

```astro
---
import { getEntry, getCollection } from 'astro:content';

// Obtener datos del CV
const entry = await getEntry("cv", LANG);

// Obtener colecciones
const summary = await getCollection("summary");
const works = await getCollection("works");
const projects = await getCollection("projects");

// Filtrar por idioma
const summaryEntry = summary.find(entry => entry.id === LANG);
const worksEntries = works.filter(entry => entry.id.startsWith(LANG + '/'));
const projectsEntries = projects.filter(entry => entry.id.startsWith(LANG + '/'));
---
```

## Filtrado por idioma

Para manejar el multilenguaje, los archivos se organizan así:
- `en.md` / `es.md` para summary
- `en/archivo.md` / `es/archivo.md` para works y projects

Y se filtran usando:
```typescript
// Para summary (archivos directos)
const summaryEntry = summary.find(entry => entry.id === LANG);

// Para works y projects (subdirectorios)
const worksEntries = works.filter(entry => entry.id.startsWith(LANG + '/'));
```

## Ventajas de esta estructura

1. **Separación de responsabilidades**: Cada tipo de contenido tiene su propia colección
2. **Tipado fuerte**: TypeScript infiere automáticamente los tipos
3. **Validación automática**: Zod valida el frontmatter de cada archivo
4. **Escalabilidad**: Fácil agregar nuevos proyectos o trabajos
5. **Multilenguaje**: Soporte nativo para múltiples idiomas
6. **Markdown**: Contenido rico con markdown para descripciones detalladas
7. **Astro 5**: Usa las últimas características de Astro 5 