import React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "./components/layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About">
      <p className="text-md">Hello :)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="There is no content really" />
  </>
);

export default AboutPage;
