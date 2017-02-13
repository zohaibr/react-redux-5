import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function(allSongs) {
  const stations = {};
  allSongs.forEach((song) => {
    if (stations.hasOwnProperty(song.genre)) {
      stations[song.genre].push(song);
    } else {
      stations[song.genre] = [song];
    }
  });
  return stations;
}


const mapStateToProps = function (state) {
  return {stations: convertSongsToStations(state.songs)};
};

const mapDispatchToProps = function (dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);
