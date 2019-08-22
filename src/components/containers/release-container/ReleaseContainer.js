import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtistReleases } from '../../../services/getArtistsDeetsApi';
import Releases from '../../releases/Releases';

export default class ReleaseContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    releaseArray: [],
    loading: true,
    error: null
  }

  fetchReleases = () => {
    return getArtistReleases(this.props.match.params.id)
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

  componentDidMount() {
    this.fetchReleases();
  }

  //for state I am going to need page, error, loading
  //will need to reuse the paging component
  //will need to render this inside of a route in app
  render() {
    const { releaseArray } = this.state;
    return (
      <Releases releaseArray={releaseArray} />
    );
  }
}
