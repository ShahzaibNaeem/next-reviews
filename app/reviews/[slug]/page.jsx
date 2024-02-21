import Header from "@/components/Header";
import ShareLinkButton from "@/components/ShareLinkButton";
import {getReview, getSlugs} from "@/lib/reviews";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs;
}
export async function generateMetadata({params: {slug}}) {
  const {title} = await getReview(slug);
  return {
    title,
  };
}

export default async function ReviewsPage({params: {slug}}) {
  const {title, subtitle, date, image, body} = await getReview(slug);
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
