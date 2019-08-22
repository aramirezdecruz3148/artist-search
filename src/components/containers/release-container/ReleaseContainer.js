import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtistReleases } from '../../../services/getArtistsDeetsApi';
import Releases from '../../releases/Releases';
import Paging from '../../paging/Paging';

export default class ReleaseContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object
  }

  state = {
    releaseArray: [],
    loading: true,
    page: 1,
    totalPages: 1,
    error: null
  }

  fetchReleases = () => {
    return getArtistReleases(this.props.match.params.artistId, this.state.page)
      .then(({ totalPages, albums }) => {
        this.setState({
          releaseArray: albums,
          loading: false,
          totalPages: Math.ceil(totalPages / 25)
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  changePageCount = (page) => {
    this.setState({ page }); 
    this.props.history.push(`/releases/${this.props.match.params.id}?page=${page}`); 
  }

  componentDidMount() {
    this.fetchReleases();
    const pageSearch = new URLSearchParams(this.props.location.search);
    const page = parseInt(pageSearch.get('page')) || 1;
    if(pageSearch) {
      this.setState({ page });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchReleases();
  }

  render() {
    const { 
      releaseArray, 
      page, 
      error, 
      loading,
      totalPages 
    } = this.state;

    if(error) return <h1>Unable to load releases...</h1>;
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;

    return (
      <>
        <Paging 
          onClickPrevious={() => this.changePageCount(page - 1)} 
          onClickNext={() => this.changePageCount(page + 1)}
          disableNext={totalPages === page}
          disablePrev={page === 1}
          currentPage={page}
          totalPages={totalPages}
        />
        <Releases releaseArray={releaseArray} />
      </>
    );
  }
}
