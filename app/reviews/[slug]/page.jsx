import Header from "@/components/Header";
import ShareLinkButton from "@/components/ShareLinkButton";
import {getReview} from "@/lib/reviews";
import Image from "next/image";
import {notFound} from "next/navigation";

export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   const slugs = await getSlugs();
//   return slugs;
// }

export async function generateMetadata({params: {slug}}) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

export default async function ReviewsPage({params: {slug}}) {
  console.log("[ReviewPage]", slug);

  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  const {title, subtitle, date, image, body} = review;
  return (
    <>
      <Header>{title}</Header>
      <p className="font-semibold pb-3">{subtitle}</p>
      <div className="flex gap-3 items-baseline my-2">
        <p>{date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={image}
        priority
        className="rounded mb-2"
        alt="Scary King"
        width="640"
        height="340"
      />
      <article
        dangerouslySetInnerHTML={{__html: body}}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
