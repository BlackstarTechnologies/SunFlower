import { Page_ } from "@components/subcomponents/PageBase";
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
      <div className="relative h-full min-h-[80vh] min-w-full mt-[2rem]">
        <NewContractButton />
        Home
      </div>
    </Page_>
  );
}
