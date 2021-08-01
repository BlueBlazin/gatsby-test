import React from "react";
import { Link } from "gatsby";

import "./style.css";
import Card from "../components/Card/Card";

function IndexPage() {
  return (
    <div className="container">
      <Card>
        <div>Index Page</div>
        <Link to="/about">About</Link>
      </Card>
    </div>
  );
}

export default IndexPage;
