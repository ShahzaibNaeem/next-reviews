import Header from "@/components/Header";
import {getReviews} from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const reviews = await getReviews(3);
  console.log("[HomePage]", reviews.map((review) => review.slug).join());

  return (
    <>
      <Header>Special Games! by Bakar ustaad</Header>
      <p>Only the Best games in the World</p>

      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => {
          const {slug, image, title, subtitle} = review;
          return (
            <li
              key={slug}
              className="bg-white border w-80 sm:w-full text-center hover:shadow-xl"
            >
              <Link
                className="flex flex-col sm:flex-row"
                href={`/reviews/${slug}`}
              >
                <Image
                  src={image}
                  priority={index === 0}
                  className="rounded-t sm:rounded-l sm:rounded-r-none "
                  alt="Scary King"
                  width="320"
                  height="180"
                />
                <div className="px-2 py-1 sm:text-left">
                  <h2 className="font-semibold ">{title}</h2>
                  <p className="hidden sm:block">{subtitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
