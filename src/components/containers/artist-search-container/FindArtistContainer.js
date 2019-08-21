import React, { Component } from 'react';
import { getArtists } from '../../../services/getArtistsName';
import SearchArtist from '../../search-artist/SearchArtist';
import Artists from '../../artists/Artists';

export default class FindArtistContainer extends Component {
  state = {
    artistArray: [],
    artist: '',
    loading: true, 
    error: null
  }

  onInputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  fetchArtists = () => {
    return getArtists(this.state.artist) 
      .then(({ artists }) => {
        this.setState({ 
          artistArray: artists, 
          loading: false 
        });
      })
      .catch(err => this.setState({ 
        error: err, 
        loading: true
      }));
  }

  onButtonClick = () => {
    return  this.fetchArtists();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.artist !== this.state.artist) return this.fetchArtists();
  }

  render() {
    const { 
      artistArray, 
      artist, 
      loading, 
      error 
    } = this.state;

    if(error) return <h1>Unable to load artists...</h1>
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
    
    return (
      <>
        <SearchArtist 
          artist={artist} 
          onButtonClick ={this.onButtonClick} 
          onInputChange={this.onInputChange} 
        />
        <Artists artistArray={artistArray} />
      </>
    );
  }
}
