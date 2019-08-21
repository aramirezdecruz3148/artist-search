import React, { Component } from 'react';
import { getArtists } from '../../../services/getArtistsName';
import SearchArtist from '../../search-artist/SearchArtist';
import Artists from '../../artists/Artists';
import Paging from '../../paging/Paging';

export default class FindArtistContainer extends Component {
  state = {
    artistArray: [],
    artist: '',
    loading: false, 
    error: null, 
    page: 1
  }

  onInputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  fetchArtists = () => {
    return getArtists(this.state.artist, this.state.page) 
      .then(({ singers }) => {
        this.setState({ 
          artistArray: singers, 
          loading: false 
        });
      })
      .catch(err => this.setState({ 
        error: err, 
        loading: true
      }));
  }

  onButtonClick = () => {
    this.setState({ loading: true });
    return  this.fetchArtists();
  }

  changePageCount = (page) => {
    this.setState({ page });  
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchArtists();
  }

  render() {
    const { 
      artistArray, 
      artist, 
      loading, 
      error,
      page
    } = this.state;

    if(error) return <h1>Unable to load artists...</h1>;
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;
    
    return (
      <>
        <SearchArtist 
          artist={artist} 
          onButtonClick ={this.onButtonClick} 
          onInputChange={this.onInputChange} 
        />
        <Paging onClickPrevious={() => this.changePageCount(page - 1)} onClickNext={() => this.changePageCount(page + 1)} />
        <Artists artistArray={artistArray} />
      </>
    );
  }
}
