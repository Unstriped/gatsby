import * as React from "react";
import Layout from "../../components/layout";
import BaseSeo from "../../components/baseSeo";
import { HeadFC, PageProps, type StaticQueryDocument, graphql } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image";

interface DataProps {
  mdx: Queries.Mdx;
}

const BlogPost: React.FC<PageProps<DataProps>> = ({
  data,
  children,
}: {
  data: DataProps;
  children: undefined;
}) => {
  // Not sure how to fix this error, so using any for now
  const img: any = data?.mdx?.frontmatter?.hero_image;
  const image = getImage(img);

  return (
    <Layout pageTitle={data?.mdx?.frontmatter?.title || ""}>
      <p className="italic">{data?.mdx?.frontmatter?.date || "Unknown Date"}</p>
      {image && (
        <>
          <GatsbyImage
            image={image}
            alt={
              data?.mdx?.frontmatter?.hero_image_alt || "Unknown Description"
            }
          />
          <p className="text-slate-500 mb-4 mx-2">
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter?.hero_image_credit_link || ""}>
              {data?.mdx?.frontmatter?.hero_image_credit_text}
            </a>
          </p>
        </>
      )}

      {children}
    </Layout>
  );
};

export const query: StaticQueryDocument = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <BaseSeo title={data?.mdx?.frontmatter?.title || ""} />
);

export default BlogPost;
