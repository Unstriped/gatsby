import React, { ReactNode } from "react";
import BaseLink from "./baseLink";

interface Props {
  pageTitle: string;
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <div className="p-4">
      <nav>
        <ul className="flex gap-4">
          <li>
            <BaseLink label="home" />
          </li>
          <li>
            <BaseLink label="about" />
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
