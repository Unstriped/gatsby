import * as React from "react";
import Layout from "../../components/layout";
import BaseSeo from "../../components/baseSeo";
import { HeadFC, PageProps, type StaticQueryDocument, graphql } from "gatsby";
import { mdxNode } from "./index";

interface DataProps {
  mdx: mdxNode;
}

const BlogPost: React.FC<PageProps<DataProps>> = ({
  data,
  children,
}: {
  data: DataProps;
  children: undefined;
}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="italic">{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query: StaticQueryDocument = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <BaseSeo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
