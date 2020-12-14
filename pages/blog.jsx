import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Link from "next/link";
import Image from "next/image";
import BlogPost from "../components/BlogPost";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/table/8bbe8ed333e74157b4dd4b38ebe5e23a"
  ).then((res) => res.json());
  return {
    props: {
      posts: data,
    },
  };
}

export const Blog = ({ posts }) => {
  console.log("from the table", posts);
  return (
    <div>
      <div style={{ maxWidth: 768, margin: "auto" }}>
        {/* <ul> */}
        {posts.map((post) => (
          <BlogPost post={post} />
          // <li key={post.id}>
          //   <Image
          //     src={`${post.thumbnail}`}
          //     alt="Picture of the author"
          //     width={200}
          //     height={200}
          //   />
          //   <Link href={`/${post.id}`} passHref as="test">
          //     {post.Name}
          //   </Link>
          // </li>
        ))}
        {/* </ul> */}
        {/* <NotionRenderer blockMap={blockMap} /> */}
      </div>
    </div>
  );
};

export default Blog;
