import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "@clayui/css/lib/css/atlas.css";

import Flags from "./components/Flags";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Flags
    companyName="Liferay"
    enabled={true}
    message="Report"
    reasons={{
      "harmful-dangerous-acts": "Harmful Dangerous Acts",
      "infringes-my-rights": "Infringes My Rights",
      "sexual-content": "Sexual Content",
      "hateful-or-abusive-content": "Hateful or Abusive Content",
      spam: "Spam",
      "violent-or-repulsive-content": "Violent or Repulsive Content"
    }}
    urlTermsOfUse="https://google.com"
  />,
  rootElement
);
