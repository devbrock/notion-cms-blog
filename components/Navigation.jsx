import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <span>Brock Balducci</span>
        </Link>
        <div className="nav-right">
          <Link href="/blog">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Uses</Link>
        </div>
      </nav>

      <style jsx global>
        {`
          nav {
            display: flex;
            flex: 1 1 0%;
            background-color: #182635;
            font-weight: 700;
            font-size: 16px;
            padding: 10px;
            text-decoration: none;
          }
          a {
            margin: 0 1rem;
          }
          span {
            font-weight: 900;
            font-size: 20px;
            cursor: pointer;
            color: #ff0a78;
            font-style: italic;
          }
          .nav-right {
            margin-left: auto;
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
