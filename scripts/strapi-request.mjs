import {writeFileSync} from "node:fs";
import {stringify} from "qs";

const toAppend = stringify(
  {
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: {image: {fields: ["url"]}},
    pagination: {
      pageSize: 1,
      withCount: false,
    },
  },
  {encodeValuesOnly: true}
);
const api = "http://localhost:1337/api/reviews/?" + toAppend;
console.log(api);

const response = await fetch(api);
const data = await response.json();
const formattedJSON = JSON.stringify(data, null, 2);
// Write Node Js file
const filepath = "./scripts/strapi-request.json";
writeFileSync(filepath, formattedJSON);
