export const getArtists = (artistName, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'Unable to load artists, try again!';

      return res.json();
    })
    .then(({ artists }) => {
      const singers = artists.map(singer => ({
        artistId: singer.id,
        artistName: singer.name,
        artistDeets: singer.disambiguation
      }));
      return {
        singers
      };
    });
};

export const getArtistReleases = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Unable to load releases, try again!';

      return res.json();
    })
    .then(({ releases }) => {
      const albums = releases.map(album => ({
        releaseId: album.id,
        releaseTitle: album.title,
        releaseDate: album['release-events'][0].date
      }));
      return {
        albums
      };
    });
};
