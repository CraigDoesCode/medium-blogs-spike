const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

const myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");
const requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

const url = `https://v1.nocodeapi.com/craigdoescode/medium/${process.env.MEDIUM_KEY}`;
async function getMediumPosts() {
  const data = await fetch(url, requestOptions);
  const posts = await data.json();

  return posts;
}

async function logPosts() {
  const posts = await getMediumPosts();
  console.log(posts);
}

async function logPostDetails() {
  const posts = await getMediumPosts();
  posts.forEach((post) => {
    console.log(post.title);
    console.log(post.link);
    console.log(new Date(post.published));
    console.log(post.category);
  });
}

logPostDetails();
