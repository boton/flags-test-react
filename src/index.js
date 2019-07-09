import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "@clayui/css/lib/css/atlas.css";

import Flags from "./components/Flags";

const rootElement = document.getElementById("root");
ReactDOM.render(<Flags />, rootElement);
