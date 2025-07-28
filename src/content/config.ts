import { defineCollection, z } from 'astro:content';

// Schema para información básica del usuario
const basicsSchema = z.object({
  name: z.string(),
  label: z.string(),
  image: z.string(),
  email: z.string(),
  url: z.string(),
  location: z.object({
    city: z.string(),
    region: z.string(),
  }),
  profiles: z.array(
    z.object({
      network: z.string(),
      username: z.string(),
      url: z.string(),
    })
  ),
});

// Schema para trabajos/experiencia laboral
const workSchema = z.object({
  name: z.string(),
  position: z.string(),
  startDate: z.date(),
  endDate: z.date().nullable(),
  isRemote: z.boolean().optional().default(true),
});

// Schema para resumen/about
const summarySchema = z.object({});

// Schema para proyectos
const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url(),
  highlights: z.array(z.string()),
  github: z.string().url().optional(),
  isActive: z.boolean().optional().default(false),
});

// Schema para educación
const educationSchema = z.object({
  institution: z.string(),
  area: z.string(),
  startDate: z.string().date(),
  endDate: z.string().date().nullable(),
});

// Schema para certificados
const certificateSchema = z.object({
  name: z.string(),
  organization: z.string(),
  date: z.string().date(),
  url: z.string().url(),
});

// Schema para habilidades técnicas
const skillSchema = z.object({
  name: z.string(),
});

// Schema para habilidades blandas
const softSkillSchema = z.object({
  name: z.string(),
});

// Schema principal del CV/Resume
const resumeSchema = z.object({
  basics: basicsSchema,
  education: z.array(educationSchema),
  certificates: z.array(certificateSchema),
  skills: z.array(skillSchema),
  softskills: z.array(softSkillSchema),
});

// Definición de colecciones
const summaryCollection = defineCollection({
  type: 'content',
  schema: summarySchema,
});

const workCollection = defineCollection({
  type: 'content',
  schema: workSchema,
});

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const resumeCollection = defineCollection({
  type: 'data',
  schema: resumeSchema,
});

// Exportar todas las colecciones
export const collections = { 
  cv: resumeCollection,
  works: workCollection,
  summary: summaryCollection,
  projects: projectCollection,
};

// Exportar tipos TypeScript
export type Resume = z.infer<typeof resumeSchema>;
export type Summary = z.infer<typeof summarySchema>;
export type Work = z.infer<typeof workSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Basics = z.infer<typeof basicsSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Certificate = z.infer<typeof certificateSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type SoftSkill = z.infer<typeof softSkillSchema>;