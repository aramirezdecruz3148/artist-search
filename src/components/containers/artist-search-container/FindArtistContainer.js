import React, { Component } from 'react';
import { getArtists } from '../../../services/getArtistsDeetsApi';
import SearchArtist from '../../search-artist/SearchArtist';
import Artists from '../../artists/Artists';
import Paging from '../../paging/Paging';
import PropTypes from 'prop-types';

export default class FindArtistContainer extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  }

  state = {
    artistArray: [],
    artist: '',
    loading: false, 
    error: null, 
    page: 1,
    totalPages: 1
  }

  onInputChange = ({ target }) => {
    this.setState({ artist: target.value }, () => {
      this.props.history.push(`/?query=${this.state.artist}`);
    });
  }

  fetchArtists = () => {
    return getArtists(this.state.artist, this.state.page) 
      .then(({ totalPages, singers }) => {
        this.setState({ 
          artistArray: singers, 
          loading: false,
          totalPages: Math.ceil(totalPages / 25)
        });
      })
      .catch(err => this.setState({ 
        error: err, 
        loading: true
      }));
  }

  onButtonClick = () => {
    this.setState({ loading: true, page: 1 });
    return this.fetchArtists();
  }

  changePageCount = (page) => {
    this.setState({ page }); 
    this.props.history.push(`/?query=${this.state.artist}&page=${page}`);
  }

  componentDidMount() {
    const searchArtist = new URLSearchParams(this.props.location.search);
    const queryArtist = searchArtist.get('query');
    const page = parseInt(searchArtist.get('page')) || 1;
    if(queryArtist) {
      this.setState({ artist: queryArtist, page }, () => {
        return this.fetchArtists();
      });
    }
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
      page,
      totalPages
    } = this.state;

    if(error) return (
      <>
        <SearchArtist 
          artist={artist} 
          onButtonClick ={this.onButtonClick} 
          onInputChange={this.onInputChange} 
        />
        <h3>Sorry, no artists match that name, why not try another?</h3>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </>
    );
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;
    if(totalPages === 1) return (
      <>
        <h2>Find your favorite recording artist...</h2>
        <SearchArtist 
          artist={artist} 
          onButtonClick ={this.onButtonClick} 
          onInputChange={this.onInputChange} 
        />
        <Artists artistArray={artistArray} />
      </>
    );
    if(totalPages === 0) return (
      <>
      <SearchArtist 
        artist={artist} 
        onButtonClick ={this.onButtonClick} 
        onInputChange={this.onInputChange} 
      />
      <h3>Sorry, no artists match that name, why not try another?</h3>
      <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </>
    );

    return (
      <>
        <h2>Search for your favorite recording artist</h2>
        <SearchArtist 
          artist={artist} 
          onButtonClick ={this.onButtonClick} 
          onInputChange={this.onInputChange} 
        />
        <Paging 
          onClickPrevious={() => this.changePageCount(page - 1)} 
          onClickNext={() => this.changePageCount(page + 1)} 
          disableNext={totalPages === page}
          disablePrev={page === 1}
          currentPage={page}
          totalPages={totalPages}
        />
        <Artists artistArray={artistArray} />
      </>
    );
  }
}
