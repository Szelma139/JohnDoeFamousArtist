const initialState  = {

      title: "",
      text:"",
      url: "",
  }
  const trackDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TRACK_INFO":
        return state;
      case "ADD_TRACKS_INFO":
        const newObj = { ...action.payload };
        return {...state,
            ...newObj
      }
      default:
        return state;
    }
  };
  
  
  export default trackDataReducer;