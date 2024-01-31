import Header from "@/components/Header";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReviews } from "@/lib/reviews";

export async function generateMetadata({ params: { slug } }) {
  const {
    data: { title },
  } = await getReviews(slug);
  return {
    title,
  };
}
export default async function ReviewsPage({ params: { slug } }) {
  console.log(slug);
  const { html, data } = await getReviews(slug);
  return (
    <>
      <Header>{data.title}</Header>
      <div className="flex gap-3 items-baseline my-2">
        <p>{data.date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={data.image}
        className="rounded mb-2"
        alt="Scary King"
        width="640"
        height="340"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
