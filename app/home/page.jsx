import Feed from "@components/home/Feed";
import Page_ from "@components/subcomponents/PageBase";
import React from "react";

function NewContractButton(props) {
  return (
    <div className="new_contract_button">
      <i className="fa-regular fa-note-sticky"></i>
    </div>
  );
}

export default function Home() {
  return (
    <Page_>
      <div id="Home">
        <NewContractButton />
        Home
        <Feed />
      </div>
    </Page_>
  );
}
