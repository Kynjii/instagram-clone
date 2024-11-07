const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// RENDERS 'posts' into the FEED ELEMENT and creates unique IDs for each "like" icon

posts.forEach((post, index) => {
	let div = document.getElementById("feed-element")
  
	div.innerHTML += `
            <div class="feed-card">
                    <div class="feed-card-header">
                        <img src="${post.avatar}" alt="poster's profile picture" class="author-avatar">
                        
                        <div class="poster-info">                
                            <div id="author-name" class="author-name" alt="name of the author">${post.name}
                            </div>
                            <div id="author-location" class="author-location" alt="location of the author when the post was made">${post.location}
                            </div> 
                        </div>
                    </div>
                    
                    <img src="${post.post}" class="post-img">
                    
                    <div class="interactive-card-el">
                        <img src="/images/icon-heart.png" alt="The like button" class="btn-like" id="like-el-${index}">
                        <img src="/images/icon-comment.png" alt="The comment button" class="btn-comment">
                        <img src="/images/icon-dm.png" alt="The DM button" class="btn-dm">
                    </div>
                    <div class="post-likes" id="like-number-${index}">
                        ${post.likes} likes
                    </div>
                    <div class="post-desc"><span class="author-username">${post.username}</span> ${post.comment}
                    </div>           
            </div>     
  `
})

// Adds event listeners for each like button
posts.forEach((post, index) => {
    const likeEl = document.getElementById(`like-el-${index}`)
    const likeNum = document.getElementById(`like-number-${index}`)

    likeEl.addEventListener('click', function() {
        // Increments the likes in the data and updates the DOM
        post.likes++
        likeNum.textContent = `${post.likes} likes`
    });
});
