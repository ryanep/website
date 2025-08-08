import { z } from "zod";
import { blogPostSchema, parseBlogPost } from "#/utils/parsers/blog-post";
import type { GetBlogQuery } from "#/generated/sdk";

const blogSchema = z.object({
  blogPosts: z.object({
    items: z.array(blogPostSchema),
  }),
});

export const parseBlog = (blog: GetBlogQuery) => {
  const parsedBlog = blogSchema.safeParse(blog);

  if (!parsedBlog.success) {
    console.error(parsedBlog.error);
    throw new Error("Failed to parse blog page query data.");
  }

  return {
    blogPosts: parsedBlog.data.blogPosts.items.map((blogPost) =>
      parseBlogPost(blogPost)
    ),
  };
};
