import React from 'react';
import Songs from './Songs';

const DUMMY_CURRENT_SONG = {};
const DUMMY_IS_PLAYING = false;
const DUMMY_TOGGLE_ONE = function () {};

export default function (props) {
  return (
    <div>
      <h3>{ props.genreName } Station</h3>
      <Songs 
        songs={props.songs} 
        currentSong={props.currentSong} 
        isPlaying={props.isPlaying} 
        toggleOne={props.toggleOne}
      />
    </div>
  );
}