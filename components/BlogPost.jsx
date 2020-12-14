import Link from "next/link";
import Image from "next/image";

const BlogPost = ({ post }) => {
  return (
    <>
      <div className="bp">
        <div>
          <Link href={`/${post.id}`}>
            <h3 className="post-title">{post.name}</h3>
          </Link>
          <span className="post-date">{post.date}</span>
          <p className="post-desc">{post.description}</p>
          <Link href={`/${post.id}`}>
            <a className="read">Read more</a>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .bp {
          padding: 1rem 1.5rem;
          background-color: #1e262f;
          margin: 2rem 0px;
          border-radius: 10px;
        }
        .post-title {
          font-weight: 800;
          font-style: italic;
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 2.5rem;
          position: relative;
          cursor: pointer;
        }
        .post-title:hover {
          color: #ff0a78;
          text-decoration: underline;
        }
        .post-desc {
          margin-top: 0px;
          padding-top: 0.5rem;
          opacity: 0.9;
          color: #fff;
          font-size: 18px;
        }
        .post-date {
          padding-top: 0.5rem;
          font-size: 14px;
          opacity: 0.75;
          color: #fff;
        }
        .read {
          font-size: 16px;
          font-weight: 500;
          margin: 0px;
        }
      `}</style>
    </>
  );
};

export default BlogPost;
