import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "./components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className="text-md">I'm making this following the Gatsby Tutorial</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
