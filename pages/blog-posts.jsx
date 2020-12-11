import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/table/8bbe8ed333e74157b4dd4b38ebe5e23a"
  ).then((res) => res.json());

  //   https://www.notion.so/devbrock/Chronica-Redesign-Requirements-f8ff61d6f10944dd8e726e628105195e

  return {
    props: {
      posts: data,
    },
  };
}

export const BlogPosts = ({ posts }) => {
  console.log("from the table", posts);
  return (
    <div>
      <div style={{ maxWidth: 768, margin: "auto" }}>
        <p>blog posts</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/${post.id}`}>{post.Name}</Link>
            </li>
          ))}
        </ul>
        {/* <NotionRenderer blockMap={blockMap} /> */}
      </div>
    </div>
  );
};

export default BlogPosts;
