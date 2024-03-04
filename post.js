const loadPost = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
        const data = await res.json();

        console.log('API Response:', data);

        if (data && Array.isArray(data)) {
            const posts = data;
            displayPosts(posts);
        } else {
            console.error('Invalid data structure from the API');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayPosts = posts => {
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = 'card w-96 bg-base-100 mt-12 p-4 container';
        postCard.innerHTML = `
        <div class="card bg-base-100 shadow-xl ">
            <figure><img src="${post.cover_image}" alt="Post Image" /></figure>
            <div class="card-body">
            <p class="flex"><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16">
            <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg></span>${post.author.posted_date}</p>
              <h2 class="card-title">${post.title}</h2>
              <p>${post.description}</p>
              <div class="card-actions justify-start">
              <div class="avatar">
              <div class="w-12 rounded-full">
                <img src="${post.profile_image}"/>
              </div>
            </div>
            <div class="para">
            <p class="font-bold">${post.author.name}</p>
            <p>${post.author.designation}</p>
            </div>
              </div>
            </div>
          </div>
        `;
        postContainer.appendChild(postCard);
    });
}

loadPost();