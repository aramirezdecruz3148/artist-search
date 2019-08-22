import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtistReleases } from '../../../services/getArtistsDeetsApi';
import Releases from '../../releases/Releases';
import Paging from '../../paging/Paging';

export default class ReleaseContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    releaseArray: [],
    loading: true,
    page: 1,
    error: null
  }

  fetchReleases = () => {
    return getArtistReleases(this.props.match.params.id, this.state.page)
      .then(({ albums }) => {
        this.setState({
          releaseArray: albums,
          loading: false
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  changePageCount = (page) => {
    this.setState({ page });  
  }

  componentDidMount() {
    this.fetchReleases();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchReleases();
  }

  render() {
    const { releaseArray, page, error, loading } = this.state;

    if(error) return <h1>Unable to load releases...</h1>;
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;

    return (
      <>
        <Paging onClickPrevious={() => this.changePageCount(page - 1)} onClickNext={() => this.changePageCount(page + 1)}/>
        <Releases releaseArray={releaseArray} />
      </>
    );
  }
}
