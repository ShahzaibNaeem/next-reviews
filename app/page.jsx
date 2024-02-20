import Header from "@/components/Header";
import {getReviews} from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const reviews = await getReviews(3);

  return (
    <>
      <Header>Special Games! by Bakar ustaad</Header>
      <p>Only the Best games in the World</p>

      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => {
          const {slug, image, title} = review;
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
                <h2 className="font-semibold py-1 sm:px-3">{title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
