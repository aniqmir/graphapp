import React from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import SituationalAwarenessIcon from "@material-ui/icons/Satellite";
import CreativityIcon from "@material-ui/icons/Create";
import TeamworkIcon from "@material-ui/icons/HowToReg";

import SituationalAwarenessView from "../../views/SituationalAwarenessView/SituationalAwarenessView.jsx";
import CreativityView from "../../views/CreativityView/CreativityView.jsx";
import TeamworkView from "../../views/TeamWorkView/TeamWorkView.jsx";

export default function Dashboard(props) {
  const listitemnames = ["situationalawareness", "creativity", "teamwork"];

  const icons = [
    <SituationalAwarenessIcon />,
    <CreativityIcon />,
    <TeamworkIcon />
  ];

  const loggedIn = localStorage.getItem("loggedIn"); //this state stays in Redux
  const token = "abc";

  const pathname = props.location.pathname.split("/");
  const viewname = pathname[1];

  const view = {
    situationalawareness: <SituationalAwarenessView token={token} />,
    creativity: <CreativityView token={token} />,
    teamwork: <TeamworkView token={token} />
  };

  if (!loggedIn || token.length === 0) {
    return <Redirect to="/" />;
  } else if (loggedIn && token.length !== 0) {
    return (
      <Sidebar
        history={props.history}
        listitemnames={listitemnames}
        icon={icons}
        path={pathname[1]}
        view={view[viewname]}
        heading={"Client Name"}
      />
    );
  }
}
