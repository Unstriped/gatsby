import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import BaseSeo from "../components/baseSeo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className="text-md">I'm making this following the Gatsby Tutorial</p>
      <StaticImage
        className="max-w-xs mt-8"
        alt="Gatsby Logo"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <BaseSeo title="Home Page" />;
export default IndexPage;
