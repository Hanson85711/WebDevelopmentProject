import { initDatabase } from "./db/init.js";
import { Post } from "./db/models/post.js";

await initDatabase();

const post = new Post({
  title: "Hello Mongoose!",
  author: "Hanson Lee",
  contents: "This post is stored in MongoDB database using Mongoose",
  tags: ["mongoose", "mongoDB"],
});

await post.save()
const posts = await Post.find()
console.log(posts) 