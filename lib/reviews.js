import {marked} from "marked";
import {stringify} from "qs";

const CMS_URL = "http://localhost:1337";

//-------Fetch Reviews Function
export async function fetchReviews(parameters) {
  // URLQuery using qs library
  const toAppend = stringify(parameters, {encodeValuesOnly: true});
  const api = `${CMS_URL}/api/reviews?` + toAppend;
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`CMS throw an Error ${response.status}`);
  }
  return await response.json();
}

//----Contrution reviews Object
function reviewsObject({attributes}) {
  const {
    slug,
    title,
    publishedAt,
    subtitle,
    image: {
      data: {
        attributes: {url},
      },
    },
  } = attributes;
  return {
    slug,
    title,
    subtitle,
    date: publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + url,
  };
}

// ---- Get Review Function
export async function getReview(slugValue) {
  const {data} = await fetchReviews({
    filters: {
      slug: {
        $eq: slugValue,
      },
    },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: {image: {fields: ["url"]}},
    pagination: {
      pageSize: 1,
      withCount: false,
    },
  });
  const item = data[0];
  return {
    ...reviewsObject(item),
    body: marked(item.attributes.body, {headerIds: false, mangle: false}),
  };
}

// ---- Get Reviews Function
export async function getReviews(pageSize) {
  const {data} = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: {image: {fields: ["url"]}},
    sort: ["publishedAt:desc"],
    pagination: {
      pageSize,
    },
  });
  return data.map(reviewsObject);
}

// ---- Get Slugs Function
export async function getSlugs() {
  const {data} = await fetchReviews({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: {
      pageSize: 100,
    },
  });
  return data.map(({attributes}) => {
    return {slug: attributes.slug};
  });
}
