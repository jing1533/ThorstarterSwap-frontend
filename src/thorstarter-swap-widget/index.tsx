"use client";

import NoSSR from "react-no-ssr";
import { Widget } from "@rango-dev/widget-embedded";
import configs from "../configs.json";

function ThorstarterSwapWidget() {
  return (
    <NoSSR>
      <Widget config={configs} />
    </NoSSR>
  );
}

export default ThorstarterSwapWidget;
