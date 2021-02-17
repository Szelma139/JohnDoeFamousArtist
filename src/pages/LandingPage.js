import React from "react";

import { StoryList } from "./StoryList";

import { MainForm } from "../Components/MultiStepForm/MainForm";
import { DatePicker } from "../Components/DatePicker";
import { Story } from "../Components/Story";

import { Modal } from "../Components/Modal";

export const LandingPage = () => {
  return (
    <div>
      <StoryList />
      {/* <MainForm/> */}

      <Story
        widgetYear="2015"
        widgetTitle="Night Vision"
        title="Hell and silence is an EP by Las Vegas rock group"
        widgetLineWidth="80%"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <Story
        widgetYear="2018"
        widgetTitle="Whatever comes first!"
        title="Next epic track coming your way"
        widgetLineWidth="80%"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Modal />
    </div>
  );
};
