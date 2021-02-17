import React from "react";

import { FlexContainer } from "./FlexContainer";
import { TrackInfo } from "./TrackInfo";
import { TrackPlayer } from "./TrackPlayer";

import './TrackWidget.css';

export const TrackWidget = ({ even, track }) => {
  return (
    <div className="container m-top-4 m-bottom-2 flex row">
      {even ? (
        <>
          <TrackInfo text={track.text} widgetTitle={track.widgetTitle} widgetYear={track.widgetYear} title={track.title} key={track.text+track.title} />
          <TrackPlayer url={track.url} />
        </>
      ) : (
        <>
          <TrackPlayer url={track.url}/>
          <TrackInfo text={track.text} widgetTitle={track.widgetTitle} widgetYear={track.widgetYear} title={track.title} key={track.text+track.title} />
        </>
      )}
    </div>
  );
};
