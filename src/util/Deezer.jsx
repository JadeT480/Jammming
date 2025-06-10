const Deezer = {
  search(term) {
    return new Promise((resolve, reject) => {
      const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        if (!data.data) {
          resolve([]);
          return;
        }
        resolve(data.data.map(track => ({
          id: track.id,
          name: track.title,
          artist: track.artist.name,
          album: track.album.title,
          uri: track.link,
          preview: track.preview,
        })));
      };  

      const script = document.createElement('script');
      script.src = `https://api.deezer.com/search?q=${encodeURIComponent(term)}&output=jsonp&callback=${callbackName}`;
      script.onerror = () => {
        delete window[callbackName];
        document.body.removeChild(script);
        reject(new Error('JSONP request failed'));
      };
      document.body.appendChild(script);
    });
  },
  savePlaylist(name, trackUris) {
    // Just a stub - saving not supported
    return Promise.resolve();
  }
};

export default Deezer;
