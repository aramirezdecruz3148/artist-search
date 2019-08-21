import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindArtistContainer from './containers/artist-search-container/FindArtistContainer';

export default function App() {
  return (
    <>
    <Router>
      <Route path='/' component={FindArtistContainer} />
    </Router>
    </>
  );
}
