import { z } from 'astro:content'

export const blogShema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  heroPicture: z.string(),
  heroPictureAlt: z.string(),
  heroImages: z.array(z.string()),
  heroImagesFormat: z.array(z.string()),
  heroImagesAlt: z.array(z.string()),
  heroDescription: z.string(),
  publishDate: z.date(),
  editDate: z.date(),
})
export type blogShema = z.infer<typeof blogShema>

export const stackShema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  iconFormat: z.string(),
  iconAlt: z.string(),
  heroImage: z.string(),
  heroFormat: z.string(),
  heroImageAlt: z.string(),
  ogImage: z.string(),
  ogFormat: z.string(),
  ogImageAlt: z.string(),
  CTA: z.string(),
  url: z.string(),
  publishDate: z.date(),
  editDate: z.date(),
})
export type stackShema = z.infer<typeof stackShema>

export const projectsShema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  heroImage: z.string(),
  heroFormat: z.string(),
  heroImageAlt: z.string(),
  ogImage: z.string(),
  ogFormat: z.string(),
  ogImageAlt: z.string(),
  url: z.string(),
  github: z.string(),
  publishDate: z.date(),
  editDate: z.date(),
})
export type projectsShema = z.infer<typeof projectsShema>
