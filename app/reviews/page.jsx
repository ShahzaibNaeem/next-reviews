import Link from "next/link";
import Header from "@/components/Header";
import { getReviewsList } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
  description: "Only the Best games in the World",
};
export default async function ReviewsPage() {
  const reviews = await getReviewsList();
  return (
    <>
      <Header>Reviews Page</Header>
      <p>here we have list of all the reviews</p>
      <ul className="flex flex-row flex-wrap gap-3 font-orbitron">
        {reviews.map((review) => {
          const {
            slug,
            data: { title, image },
          } = review;
          return (
            <li
              className="bg-white border  w-60 text-center hover:shadow-xl"
              key={slug}
            >
              <Link href={`/reviews/${slug}`}>
                <img
                  src={image}
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
