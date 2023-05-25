import React from "react";
import ReactDOM from "react-dom/client";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

const Polotono = ({ store }) => {
  const page = store.addPage();
  page.setSize({
    width: 300,
    height: 500,
    useMagic: true,
  });
  return (
    <PolotnoContainer style={{ width: "100%", height: "100%" }}>
      <SidePanelWrap style={{ width: "100%" }}>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        {/**  --main : #64E1CA; 
    --dark-mint: #53D7A4; */}
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} bleedColor="#64E1CA" />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

export default Polotono;
