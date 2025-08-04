  async function loadMediumPosts(username) {
    const feedUrl = `https://medium.com/feed/@${username}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const postsContainer = document.getElementById('medium-posts');

      data.items.slice(0, 4).forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-6';
        postElement.setAttribute('data-aos', 'fade-up');
        postElement.setAttribute('data-aos-delay', 200 * (index + 1));

        postElement.innerHTML = `
          <div class="service-item">
            <img src="assets/img/portfolio/medium.png" class="img-fluid" alt="" loading="lazy">
            <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
            <p>${post.description.substring(0, 150)}...</p>
          </div>
        `;

        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Failed to fetch Medium posts:', error);
    }
  }

  loadMediumPosts('bayujunisp');