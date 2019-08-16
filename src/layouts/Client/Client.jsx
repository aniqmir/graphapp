import React from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import CourageIcon from "@material-ui/icons/Rowing";
import CreativityIcon from "@material-ui/icons/Create";
import CompassionIcon from "@material-ui/icons/Mood";
import CollaborationIcon from "@material-ui/icons/SupervisorAccount";
import CommunicationIcon from "@material-ui/icons/Call";
import CommitmentIcon from "@material-ui/icons/Cached";
import CredibilityIcon from "@material-ui/icons/CreditCard";
import DecisivenessIcon from "@material-ui/icons/ThumbUp";
import EmotionalEffectivenessIcon from "@material-ui/icons/Favorite";
import SituationalAwarenessIcon from "@material-ui/icons/Satellite";
import TeamLeaderShipIcon from "@material-ui/icons/HowToReg";
import InnovationIcon from "@material-ui/icons/RateReview";
import NetworkingIcon from "@material-ui/icons/NetworkCell";
import YourTrueSelfIcon from "@material-ui/icons/Accessibility";
import WinningIcon from "@material-ui/icons/Star";

import CourageView from "../../views/CreativityView/CreativityView.jsx";
import CreativityView from "../../views/CreativityView/CreativityView.jsx";
import CompassionView from "../../views/CreativityView/CreativityView.jsx";
import CollaborationView from "../../views/CreativityView/CreativityView.jsx";
import CommunicationView from "../../views/CreativityView/CreativityView.jsx";
import CommitmentView from "../../views/CreativityView/CreativityView.jsx";
import CredibilityView from "../../views/CreativityView/CreativityView.jsx";
import DecisivenessView from "../../views/CreativityView/CreativityView.jsx";

import EmotionalEffectivenessView from "../../views/SituationalAwarenessView/SituationalAwarenessView.jsx";
import SituationalAwarenessView from "../../views/SituationalAwarenessView/SituationalAwarenessView.jsx";

import TeamLeaderShipView from "../../views/TeamWorkView/TeamWorkView.jsx";
import InnovationView from "../../views/TeamWorkView/TeamWorkView.jsx";
import NetworkingView from "../../views/TeamWorkView/TeamWorkView.jsx";
import YourTrueSelfView from "../../views/TeamWorkView/TeamWorkView.jsx";
import WinningView from "../../views/TeamWorkView/TeamWorkView.jsx";

export default function Dashboard(props) {
  const listitemnames = [
    "courage",
    "creativity",
    "compassion",
    "collaboration",
    "communications",
    "commitment",
    "credibility",
    "decisiveness",
    "emotionaleffectiveness",
    "situationalawareness",
    "teamleadership",
    "innovation",
    "networking",
    "yourtrueself",
    "winning"
  ];
  const icons = [
    <CourageIcon />,
    <CreativityIcon />,
    <CompassionIcon />,
    <CollaborationIcon />,
    <CommunicationIcon />,
    <CommitmentIcon />,
    <CredibilityIcon />,
    <DecisivenessIcon />,
    <EmotionalEffectivenessIcon />,
    <SituationalAwarenessIcon />,
    <TeamLeaderShipIcon />,
    <InnovationIcon />,
    <NetworkingIcon />,
    <YourTrueSelfIcon />,
    <WinningIcon />
  ];

  const loggedIn = localStorage.getItem("loggedIn"); //this state stays in Redux
  const token = "abc";

  const pathname = props.location.pathname.split("/");
  const viewname = pathname[1];
  const username = localStorage.getItem("username");

  const view = {
    courage: <CourageView token={token} />,
    creativity: <CreativityView token={token} />,
    compassion: <CompassionView token={token} />,
    collaboration: <CollaborationView token={token} />,
    communications: <CommunicationView token={token} />,
    commitment: <CommitmentView token={token} />,
    credibility: <CredibilityView token={token} />,
    decisiveness: <DecisivenessView token={token} />,
    emotionaleffectiveness: <EmotionalEffectivenessView token={token} />,
    situationalawareness: <SituationalAwarenessView token={token} />,
    teamleadership: <TeamLeaderShipView token={token} />,
    innovation: <InnovationView token={token} />,
    networking: <NetworkingView token={token} />,
    yourtrueself: <YourTrueSelfView token={token} />,
    winning: <WinningView token={token} />
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
        username={username}
      />
    );
  }
}
