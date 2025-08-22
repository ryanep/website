import { z } from "zod";
import type { BlogPostFragment } from "#/generated/sdk";

export const blogPostSchema = z.object({
  content: z.string(),
  name: z.string(),
  publishDate: z.string(),
  slug: z.string(),
  summary: z.string(),
  sys: z.object({
    id: z.string(),
  }),
  thumbnail: z.object({
    title: z.string(),
    url: z.string(),
  }),
});

export const parseBlogPost = (blogPost: BlogPostFragment | null) => {
  const parsedBlogPost = blogPostSchema.safeParse(blogPost);

  if (!parsedBlogPost.success) {
    console.error(parsedBlogPost.error);
    throw new Error("Failed to parse blog post.");
  }

  return {
    content: parsedBlogPost.data.content,
    id: parsedBlogPost.data.sys.id,
    name: parsedBlogPost.data.name,
    publishDate: new Date(parsedBlogPost.data.publishDate),
    slug: parsedBlogPost.data.slug,
    summary: parsedBlogPost.data.summary,
    thumbnail: {
      alt: parsedBlogPost.data.thumbnail.title,
      url: parsedBlogPost.data.thumbnail.url,
    },
    url: `/blog/${parsedBlogPost.data.slug}`,
  };
};
