import Link from "next/link";
import Header from "@/components/Header";
import {getReviews} from "@/lib/reviews";
import Image from "next/image";

export const metadata = {
  title: "Reviews",
  description: "Only the Best games in the World",
};

export default async function ReviewsPage() {
  const reviews = await getReviews(6);
  return (
    <>
      <Header>Reviews Page</Header>
      <p>here we have list of all the reviews</p>
      <ul className="flex flex-row flex-wrap gap-3 font-orbitron">
        {reviews.map((review, index) => {
          const {slug, image, title} = review;
          return (
            <li
              className="bg-white border  w-60 text-center hover:shadow-xl"
              key={slug}
            >
              <Link href={`/reviews/${slug}`}>
                <Image
                  src={image}
                  priority={index === 0}
                  className="rounded-t mb-2"
                  alt="Scary King"
                  width="320"
                  height="180"
                />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
