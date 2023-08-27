import React from "react";
import { Link } from "gatsby";

interface Props {
  label: string;
  to: string;
}

const BaseLink: React.FC<Props> = ({ label, to }) => {
  return (
    <Link className="text-blue-600 visited:text-purple-600 capitalize" to={to}>
      {label}
    </Link>
  );
};

export default BaseLink;
