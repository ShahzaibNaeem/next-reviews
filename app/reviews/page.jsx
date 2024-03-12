import Link from "next/link";
import Header from "@/components/Header";
import {getReviews} from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";

const PAGE_SIZE = 6;

export const metadata = {
  title: "Reviews",
  description: "Only the Best games in the World",
};

export default async function ReviewsPage({searchParams}) {
  const page = parsePageParam(searchParams.page);
  const {pageCount, reviews} = await getReviews(PAGE_SIZE, page);
  console.log("[ReviewsPage]", page);
  return (
    <>
      <Header>Reviews Page</Header>
      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
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

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
