import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-3xl">Welcome to my Gatsby site!</h1>
        <p className="text-md">
          I'm making this by following the Gatsby Tutorial.
        </p>
      </section>
    </main>
  );
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
