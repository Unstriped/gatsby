import React from "react";
import { HeadFC, PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-3xl">About me</h1>
        <p className="text-md">Hello :)</p>
      </section>
    </main>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="There is no content really" />
  </>
);

export default AboutPage;
