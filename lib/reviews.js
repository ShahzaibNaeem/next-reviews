import matter from "gray-matter";
import { marked } from "marked";
import { readdir, readFile } from "node:fs/promises";

export async function getFeauturedReview() {
  const reviews = await getReviewsList();
  return reviews[0];
}
export async function getReviews(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const { content, data } = matter(text);
  console.log(content);
  const html = marked.parse(content);
  return { slug, html, data };
}

export async function getReviewsList() {
  const files = await readdir("./content/reviews");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReviews(slug);
    reviews.push(review);
  }

  reviews.sort((a, b) => {
    return b.data.date.localeCompare(a.data.date);
  });

  return reviews;
}
