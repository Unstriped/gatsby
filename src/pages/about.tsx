import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import BaseSeo from "../components/baseSeo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About">
      <p className="text-md">Hello :)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <BaseSeo title="About" />;

export default AboutPage;
