import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindArtistContainer from './containers/artist-search-container/FindArtistContainer';
import ReleaseContainer from './containers/release-container/ReleaseContainer';
import SongContainer from './containers/song-container/SongContainer';

export default function App() {
  return (
    <>
    <Router>
      <Route exact path='/' component={FindArtistContainer} />
      <Route path='/releases/:artistName/:artistId' component={ReleaseContainer} />
      <Route path='/songs/:artistName/:releaseId' component={SongContainer} />
    </Router>
    </>
  );
}
