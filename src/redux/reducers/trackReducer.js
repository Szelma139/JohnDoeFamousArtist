const initialState  = {
  tracks:
[
  {
    widgetTitle: "from the forthcoming album, `nurture`",
    widgetYear: "10 lut 2021",
    title: "Porter Robinson - Look at the Sky (Official Music Video)",
    text:
      "Sometimes when making music or art, we can think of ourselves as working alone. But that isn't ever really the case -- if I think about it, if I was raised in total isolation without exposure to culture, I would never have come up with any of the concepts of harmony, rhythm, twelve notes in a scale, the idea of chords, the idea of melody, the concept of a 'chorus' or 'verse' or 'drum' -- much less would I be able to physically build an instrument, build a computer, or write music production software.",
    url: "https://www.youtube.com/embed/TJBh_hj6DzE",
  },

  {
    widgetTitle: "#TwoStepsFromHellFridays",
    widgetYear: "29 sty 2021",
    title: "Thomas Bergersen - Mир",
    text: `Humanity Chapter II is available on:
    Apple Music: https://smarturl.it/Humanity2_AppleMusic​
    Spotify: https://smarturl.it/Humanity2_Spotify​
    Amazon: https://smarturl.it/Humanity2_Amazon​
    Deezer: https://smarturl.it/Humanity2_Deezer​
    Tidal: https://smarturl.it/Humanity2_Tidal​`,
    url: "https://www.youtube.com/embed/s8zZL5UIVzQ",
  },
  {
    widgetTitle: "RAFAŁ RUTKOWSKI ",
    widgetYear: "3 sty 2020",
    title: "Remastered - RAFAŁ RUTKOWSKI | Stand-Up | Całe Nagranie (2020)",
    text:
      "aki mocno odgrzewany kotlet. Wszystko już było, ale w zasadzie na początku Rafał o tym wspominał. No niestety już jakaś moc nie ta, 4/10, mimo wszystko nadal szanuję i oglądać będę. :)",
    url: "https://www.youtube.com/embed/966MHjTvq30",
  },
  {
    widgetTitle: "sdsI ",
    widgetYear: "3 sdds20",
    title: "Remsdsd - RAFAŁ RUTKOWSKI | Stand-Up | Całe Nagranie (2020)",
    text:
      "aki zzzz, ale w zasadzie na początku Rafał o tym wspominał. No niestety już jakaś moc nie ta, 4/10, mimo wszystko nadal szanuję i oglądać będę. :)",
    url: "https://www.youtube.com/embed/966MHjTvq30",
  },
  {
    widgetTitle: "#TwoStepsFromHellFridays",
    widgetYear: "29 sty 2021",
    title: "Thomas Bergersen - Mир",
    text: `Humanity Chapter II is available on:
    Apple Music: https://smarturl.it/Humanity2_AppleMusic​
    Spotify: https://smarturl.it/Humanity2_Spotify​
    Amazon: https://smarturl.it/Humanity2_Amazon​
    Deezer: https://smarturl.it/Humanity2_Deezer​
    Tidal: https://smarturl.it/Humanity2_Tidal​`,
    url: "https://www.youtube.com/embed/s8zZL5UIVzQ",
  },

]
}
const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return state;
    case "ADD_TRACKS":
      const newObj = { ...action.payload };
      return {...state,
      tracks: [...state.tracks,newObj]
    }
    default:
      return state;
  }
};


export default trackReducer;