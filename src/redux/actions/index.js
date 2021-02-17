
export const addTrack = (track)=> {
    return {
        type: "ADD_TRACK",
        payload: track
    };
}


export const getTracks = ()=> {
    return {
        type:"GET_TRACKS"
    };
}