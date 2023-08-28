import React from "react";
import Layout from "../../components/layout";
import BaseSeo from "../../components/baseSeo";
import { HeadFC, PageProps, type StaticQueryDocument, graphql } from "gatsby";
import BaseLink from "../../components/baseLink";

export type mdxNode = {
  frontmatter: {
    date: string;
    title: string;
    slug: string;
  };
  id: string;
  excerpt: string;
};

interface DataProps {
  allMdx: {
    nodes: mdxNode[];
  };
}

const BlogPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article className="my-4 max-w-lg" key={node.id}>
          <h2 className="font-semibold text-lg capitalize">
            <BaseLink
              label={node.frontmatter.title}
              to={node.frontmatter.slug}
            />
          </h2>
          <p className="font-light italic">Posted: {node.frontmatter.date} </p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query: StaticQueryDocument = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <BaseSeo title="My Blog Posts" />;

export default BlogPage;
