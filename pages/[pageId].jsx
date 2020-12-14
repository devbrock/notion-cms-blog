import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";

import { NotionRenderer } from "react-notion";

export async function getServerSideProps(context) {
  const pageId = context.params?.pageId;

  if (!pageId) {
    return;
  }

  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${pageId}`
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

const Post = ({ blockMap }) => {
  if (!blockMap || Object.keys(blockMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    );
  }

  const title =
    blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer
        blockMap={blockMap}
        // fullPage
        // customBlockComponents={{
        //   page: ({ blockValue, renderComponent }) => (
        //     <Link href={`/${blockValue.id}`}>{renderComponent()}</Link>
        //   ),
        // }}
      />
      <style jsx global>{`
        .notion {
          max-width: 1024px;
          margin: 72px auto;
          font-family: "JetBrains Mono", monospace;
          color: #fff;
          font-size: 18px;
          line-height: 1.6;
        }
        .notion-blank {
          display: none;
        }
        .notion-text {
          margin-bottom: 32px;
        }
        h1 {
          color: #ff0a78;
          font-weight: 700 !important;
          font-size: 45px !important;
          font-style: italic;
        }
        h2 {
          color: #ffe100;
          font-style: italic;
        }
        .notion-page-header {
          display: none;
        }
        .notion-page-cover {
          margin-top: 32px;
        }
        .notion-title {
          color: #ff0a78;
        }
        .notion-callout {
          background-color: #182635;
          border-left: 6px;
          border-left-style: solid;
          border-color: #5773ff;
        }
        .notion-emoji {
          display: none;
        }
        .notion-inline-code {
          color: #5773ff;
        }
        div :global(.notion-code) {
          box-sizing: border-box;
          background-color: #151f28;
          margin-bottom: 32px;
        }
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
};
export default Post;
