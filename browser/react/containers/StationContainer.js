import React from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {toggleSong} from '../action-creators/player';
import {convertSong} from '../utils';

// const convertSongsToStations = function(allSongs) {
//   const stations = {};
//   allSongs.forEach((song) => {
//     if (stations.hasOwnProperty(song.genre)) {
//       stations[song.genre].push(song);
//     } else {
//       stations[song.genre] = [song];
//     }
//   });
//   return stations;
// };

const mapStateToProps = function (state, ownProps) {
    const getGenreSongs = function (genre) {
        // const stations = convertSongsToStations(state.songs);
        // return stations[genre];
        return state.songs.filter((song) =>
            song.genre === ownProps.params.genreName
        ).map(convertSong);
    };
  return {
      genreName: ownProps.params.genreName,
      songs: getGenreSongs(ownProps.params.genreName),
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying
    };
};

const mapDispatchToProps = function (dispatch) {
  return {
      toggleOne: function(song, list) {
          dispatch(toggleSong(song, list));
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);
