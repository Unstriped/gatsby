import React from "react";
import Layout from "../components/layout";
import BaseSeo from "../components/baseSeo";
import { HeadFC, PageProps, graphql } from "gatsby";

type DataProps = {
  allFile: {
    nodes: { name: string }[];
  };
};

const BlogPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <BaseSeo title="My Blog Posts" />;

export default BlogPage;
