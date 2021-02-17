const initialState  = {
      widgetTitle: "",
      widgetYear: "",
     
  }
  const widgetInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TRACKS":
        return state;
      case "ADD_WIDGET_INFO":
        const newObj = { ...action.payload };
        return {...state, newObj
        }
      default:
        return state;
    }
  };
  
  
  export default widgetInfoReducer;