import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ featuredPosts }) {
  return (
    <div>
      <Head>
        <title>Kamlesh&apos;s Blog</title>
      </Head>
      <h4>featured Blogs</h4>
      <div className="posts">
        {featuredPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      {/* <h4>All Blogs</h4>

      <div className="posts">
        {nonFeaturedPosts.map((post, index) => (
          <>
            <Post key={index} post={post} />
          </>
        ))}
      </div> */}

      <div className="">
        <Link href="blogs">
          <a className="btn">Load More</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files form the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and front matter from post
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      featuredPosts: posts.sort(sortByDate).filter((e) => {
        return e.frontmatter.featured == "yes";
      }),
    },
  };
}
