/*
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Document loaded');
    try{
        console.log('Trying to fetch data');
        const githubAPI = 'https://api.github.com/repos/sorsagan/portfolioexample'; // change this to your repo
        const response = await fetch(githubAPI);
        console.log('Fetch attempted');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data.stargazers_count);
        if(data && data.stargazers_count) {
            const githubData = data.stargazers_count;
            console.log('Star count:', githubData);
            const starCountElement = document.querySelector('.starcount');
            if (starCountElement) {
                starCountElement.textContent = `${githubData}`;
                console.log('Element updated');
            } else {
                console.log('Element .starcount not found');
            }
        } else {
            console.log('Failed to fetch star count');
        }
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
});
*/

// use only if you have a github repo and want to display the star count