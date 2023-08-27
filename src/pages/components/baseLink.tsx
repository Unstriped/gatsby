import React from "react";
import { Link } from "gatsby";

interface Props {
  label: string;
}

const BaseLink: React.FC<Props> = ({ label }) => {
  return (
    <Link
      className="text-blue-600 visited:text-purple-600 capitalize"
      to="/about"
    >
      {label}
    </Link>
  );
};

export default BaseLink;
