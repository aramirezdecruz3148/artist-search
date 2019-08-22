export const getArtists = (artistName, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'Unable to load artists, try again!';

      return res.json();
    })
    .then(({ count, artists }) => { 
      const totalPages = count;
      const singers = artists.map(singer => ({
        artistId: singer.id,
        artistName: singer.name,
        artistDeets: singer.disambiguation
      }));
      return {
        singers, 
        totalPages
      };
    });
};

export const getArtistReleases = (artistId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'Unable to load releases, try again!';

      return res.json();
    })
    .then(({ releases }) => {
      const albums = releases.map(album => ({
        releaseId: album.id,
        releaseTitle: album.title,
        releaseDate: album['release-events'][0].date,
        coverArtCount: album['cover-art-archive'].front
      }));
      return {
        albums
      };
    });
};
