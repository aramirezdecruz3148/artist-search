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
