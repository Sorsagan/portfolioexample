document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/417302173056237568');/* https://github.com/Phineas/lanyard */ //check the github for more info
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data && data.data && data.data.spotify) {
        const spotify = data.data.spotify;
        const notActiveElement = document.querySelector('.notActive');
        const spotifyPElement = document.querySelector('.spotifyP');
        const spotifyAElement = document.querySelector('.spotifyA');
        const spotifyImgElement = document.querySelector('.spotifyImg');
        notActiveElement.textContent = '';
        spotifyPElement.textContent = `${spotify.song}`;
        spotifyAElement.textContent = `${spotify.artist}`;
        spotifyImgElement.style.backgroundImage = `url(${spotify.album_art_url})`;
      } else {
        console.log('Spotify is not open');
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  });