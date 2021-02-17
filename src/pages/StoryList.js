import React from 'react'

import { TrackWidget } from '../Components/TrackWidget'

import { useSelector } from 'react-redux'


export const StoryList = () => {
    const tracks = useSelector(state => state.tracks.tracks);
    console.log(tracks)
    return (
        <>
{tracks?.map((track, index)=><TrackWidget track={track}even={index % 2}/>)}
        </>
    )
}
