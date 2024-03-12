import {CACHE_TAG_REVIEWS} from "@/lib/reviews";
import {revalidateTag} from "next/cache";

export async function POST(request) {
  const payload = await request.json();
  if (payload.model === "review") {
    revalidateTag(CACHE_TAG_REVIEWS);
    console.log("REvalidate: ", CACHE_TAG_REVIEWS);
  }
  return new Response(null);
}
