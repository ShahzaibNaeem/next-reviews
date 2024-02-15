import Header from "@/components/Header";
import {getFeauturedReview} from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  const {slug, title, image} = await getFeauturedReview();

  return (
    <>
      <Header>Special Games! by Bakar ustaad</Header>
      <p>Only the Best games in the World</p>

      <div className="bg-white border w-80 sm:w-full text-center hover:shadow-xl">
        <Link className="flex flex-col sm:flex-row" href={`/reviews/${slug}`}>
          <img
            src={image}
            className="rounded-t sm:rounded-l sm:rounded-r-none "
            alt="Scary King"
            width="320"
            height="180"
          />
          <h2 className="font-semibold py-1 sm:px-3">{title}</h2>
        </Link>
      </div>
    </>
  );
}
