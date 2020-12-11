import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
// import "../styles/synthwave84.css";

import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/ca896cdc-7eef-43eb-bc10-1e05989e082e"
  ).then((res) => res.json());

  //   https://www.notion.so/devbrock/Chronica-Redesign-Requirements-f8ff61d6f10944dd8e726e628105195e

  return {
    props: {
      blockMap: data,
    },
  };
}

const Post = ({ blockMap }) => (
  <div style={{ maxWidth: 768, margin: "auto" }}>
    <NotionRenderer blockMap={blockMap} />
  </div>
);

export default Post;
