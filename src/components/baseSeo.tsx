import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  title: string;
}

type site = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const BaseSeo: React.FC<Props> = ({ title }) => {
  const data: site = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default BaseSeo;
