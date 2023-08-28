import React, { ReactNode } from "react";
import BaseLink from "./baseLink";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  pageTitle: string;
  children?: ReactNode;
}

type site = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const data: site = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="p-4">
      <header className="capitalize text-5xl mb-2 text-slate-600">
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className="flex gap-4 mb-4">
          <li>
            <BaseLink label="home" to="/" />
          </li>
          <li>
            <BaseLink label="about" to="/about" />
          </li>
          <li>
            <BaseLink label="blog" to="/blog" />
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="capitalize text-3xl mb-2">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
