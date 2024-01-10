import { z, defineCollection } from 'astro:content'

// import { blogShema } from '@app/model'
import { stackShema } from '@app/model'
import { projectsShema } from '@app/model'

// const blogCollection = defineCollection({
//   schema: blogShema,
// })

const BlogPosts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string().trim(),
    author: z.string().trim(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const stackCollection = defineCollection({
  schema: stackShema,
})

const projectsCollection = defineCollection({
  schema: projectsShema,
})

export const collections = {
  blogs: BlogPosts,
  stack: stackCollection,
  projects: projectsCollection,
}
