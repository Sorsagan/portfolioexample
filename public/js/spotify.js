document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/417302173056237568');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data && data.data && data.data.spotify) {
        const spotify = data.data.spotify;
        const spotifyPElement = document.querySelector('.spotifyP');
        const spotifyImgElement = document.querySelector('.spotifyImg');
        spotifyPElement.textContent = `${spotify.artist} - ${spotify.song}`;
        spotifyImgElement.style.backgroundImage = `url(${spotify.album_art_url})`;
      } else {
        console.log('Spotify is not open');
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  });