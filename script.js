// Sample users data - a small database of example users
const users = [
    {
        id: 1,
        name: "Rudransh",
        username: "Rudransh",
        profilePic: "images/users/user1.jpg",
        coverPhoto: "images/cover1.jpg",
        bio: "Web developer and social media enthusiast",
        works: "Software Developer at Tech Corp",
        education: "Computer Science, Tech University",
        location: "New York, USA",
        relationship: "Single",
        friends: [2, 3, 4, 5],
        posts: [1, 3, 5]
    },
    {
        id: 2,
        name: "Swati",
        username: "swati",
        profilePic: "images/users/user2.jpg",
        coverPhoto: "images/cover2.jpg",
        bio: "Digital artist and photography lover",
        works: "UX Designer at Creative Labs",
        education: "Graphic Design, Art Institute",
        location: "San Francisco, USA",
        relationship: "In a relationship",
        friends: [1, 3, 5],
        posts: [2, 6]
    },
    {
        id: 3,
        name: "Manu Pal",
        username: "manupal",
        profilePic: "images/users/user3.jpg",
        coverPhoto: "images/cover3.jpg",
        bio: "Tech enthusiast and gamer",
        works: "Game Developer at Game Studio",
        education: "Game Development, Tech College",
        location: "Los Angeles, USA",
        relationship: "Married",
        friends: [1, 2, 4],
        posts: [4, 8]
    },
    {
        id: 4,
        name: "Roshni",
        username: "roshni",
        profilePic: "images/users/user4.jpg",
        coverPhoto: "images/cover4.jpg",
        bio: "Travel blogger and food lover",
        works: "Content Creator",
        education: "Journalism, Media University",
        location: "Miami, USA",
        relationship: "Single",
        friends: [1, 3, 5],
        posts: [7]
    },
    {
        id: 5,
        name: "Pranjal",
        username: "pranjal",
        profilePic: "images/users/user5.jpg",
        coverPhoto: "images/cover5.jpg",
        bio: "Music producer and fitness enthusiast",
        works: "Music Producer at Sound Studio",
        education: "Music Production, Arts Academy",
        location: "Chicago, USA",
        relationship: "Complicated",
        friends: [1, 2, 4],
        posts: [9, 10]
    }
];

// Sample posts data
const posts = [
    {
        id: 1,
        userId: 1,
        text: "Just launched my new website! Check it out and let me know what you think.",
        image: "images/posts/post2.jpg",
        date: "2023-05-15T14:30:00",
        likes: [2, 3, 5],
        comments: [
            { id: 1, userId: 2, text: "Looks amazing! Great job!", date: "2023-05-15T14:45:00" },
            { id: 2, userId: 3, text: "The design is so clean and modern!", date: "2023-05-15T15:00:00" }
        ],
        shares: 5
    },
    {
        id: 2,
        userId: 2,
        text: "Just finished this new digital art piece. What do you all think?",
        image: "images/posts/post1.jpg",
        date: "2023-05-14T10:15:00",
        likes: [1, 3, 4],
        comments: [
            { id: 3, userId: 1, text: "This is incredible! You're so talented!", date: "2023-05-14T10:30:00" },
            { id: 4, userId: 4, text: "I love the colors you used!", date: "2023-05-14T11:00:00" }
        ],
        shares: 8
    },
    {
        id: 3,
        userId: 1,
        text: "Beautiful day at the beach!",
        image: "images/posts/post3.jpg",
        date: "2023-05-13T16:45:00",
        likes: [2, 4, 5],
        comments: [
            { id: 5, userId: 2, text: "I'm so jealous! Looks amazing!", date: "2023-05-13T17:00:00" }
        ],
        shares: 3
    },
    {
        id: 4,
        userId: 3,
        text: "Just got the new gaming setup! Ready for some serious gaming sessions.",
        image: "images/posts/post4.jpg",
        date: "2023-05-12T20:30:00",
        likes: [1, 5],
        comments: [
            { id: 6, userId: 1, text: "That looks awesome! What games are you playing?", date: "2023-05-12T20:45:00" },
            { id: 7, userId: 5, text: "Great setup! I need to upgrade mine too.", date: "2023-05-12T21:00:00" }
        ],
        shares: 4
    },
    {
        id: 5,
        userId: 1,
        text: "Had a great time at the tech conference today. Met so many interesting people!",
        image: "images/posts/post5.jpg",
        date: "2023-05-11T18:15:00",
        likes: [2, 3, 4],
        comments: [],
        shares: 2
    },
    {
        id: 6,
        userId: 2,
        text: "Working on a new project. Can't wait to share it with you all!",
        image: null,
        date: "2023-05-10T09:00:00",
        likes: [1, 3],
        comments: [
            { id: 8, userId: 1, text: "Looking forward to seeing it!", date: "2023-05-10T09:15:00" }
        ],
        shares: 1
    },
    {
        id: 7,
        userId: 4,
        text: "Just visited this amazing restaurant! The food was incredible.",
        image: "images/posts/post7.jpg",
        date: "2023-05-09T19:30:00",
        likes: [1, 2, 3, 5],
        comments: [
            { id: 9, userId: 2, text: "What restaurant is this? I need to go!", date: "2023-05-09T19:45:00" },
            { id: 10, userId: 5, text: "That looks delicious!", date: "2023-05-09T20:00:00" }
        ],
        shares: 6
    },
    {
        id: 8,
        userId: 3,
        text: "Just released a new mobile game! Download it and let me know what you think.",
        image: "images/posts/post8.jpg",
        date: "2023-05-08T14:00:00",
        likes: [1, 2, 4, 5],
        comments: [
            { id: 11, userId: 1, text: "Just downloaded it! It's really fun!", date: "2023-05-08T14:30:00" },
            { id: 12, userId: 2, text: "Great job! The graphics are amazing.", date: "2023-05-08T15:00:00" }
        ],
        shares: 10
    },
    {
        id: 9,
        userId: 5,
        text: "Just finished my workout. Feeling great!",
        image: "images/posts/post9.jpg",
        date: "2023-05-07T08:30:00",
        likes: [1, 3, 4],
        comments: [
            { id: 13, userId: 4, text: "What's your workout routine?", date: "2023-05-07T08:45:00" },
            { id: 14, userId: 1, text: "Looking good! Keep it up!", date: "2023-05-07T09:00:00" }
        ],
        shares: 2
    },
    {
        id: 10,
        userId: 5,
        text: "Check out my new music track! Link in the comments.",
        image: "images/posts/post10.jpg",
        date: "2023-05-06T16:00:00",
        likes: [1, 2, 3, 4],
        comments: [
            { id: 15, userId: 5, text: "https://musiclink.com/mytrack", date: "2023-05-06T16:01:00" },
            { id: 16, userId: 2, text: "This is amazing! Love the beat!", date: "2023-05-06T16:30:00" },
            { id: 17, userId: 1, text: "Great work! Can't stop listening to it!", date: "2023-05-06T17:00:00" }
        ],
        shares: 15
    }
];

// Store the current user ID (for this demo, we'll use user 1 as the current user)
let currentUserId = 1;
let currentViewingUserId = null;
let currentViewingPostId = null;

// DOM Elements
const postsContainer = document.getElementById('posts-container');
const friendSuggestions = document.getElementById('friend-suggestions');
const profileView = document.getElementById('profile-view');
const mainContent = document.getElementById('main-content');
const profilePosts = document.getElementById('profile-posts');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profilePic = document.getElementById('profile-pic');
const profileCover = document.getElementById('profile-cover');
const profileWork = document.getElementById('profile-work');
const profileEducation = document.getElementById('profile-education');
const profileLocation = document.getElementById('profile-location');
const profileRelationship = document.getElementById('profile-relationship');
const profileFriendsGrid = document.getElementById('profile-friends-grid');
const profilePhotosGrid = document.getElementById('profile-photos-grid');
const postDetailView = document.getElementById('post-detail-view');
const detailPostContent = document.getElementById('detail-post-content');
const commentsContainer = document.getElementById('comments-container');
const commentInput = document.getElementById('comment-input');
const postCommentBtn = document.getElementById('post-comment-btn');
const closePostDetail = document.getElementById('close-post-detail');
const createPostBtn = document.getElementById('create-post-btn');
const postText = document.getElementById('post-text');
const currentUserImg = document.getElementById('current-user-img');
const currentUserName = document.getElementById('current-user-name');
const commentUserImg = document.getElementById('comment-user-img');
const homeLink = document.getElementById('home-link');
const profileLink = document.getElementById('profile-link');

// Initialize the app
function init() {
    // Set current user info
    const currentUser = getUserById(currentUserId);
    if (currentUserImg) currentUserImg.src = currentUser.profilePic;
    if (currentUserName) currentUserName.textContent = currentUser.name;
    if (commentUserImg) commentUserImg.src = currentUser.profilePic;

    // Load posts
    loadPosts();

    // Load friend suggestions
    loadFriendSuggestions();

    // Add event listeners
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            showHomePage();
        });
    }

    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            showProfilePage(currentUserId);
        });
    }

    if (createPostBtn) {
        createPostBtn.addEventListener('click', createPost);
    }

    if (closePostDetail) {
        closePostDetail.addEventListener('click', closePostDetailView);
    }

    if (postCommentBtn) {
        postCommentBtn.addEventListener('click', addComment);
    }

    // Set up profile tab navigation
    const profileNavButtons = document.querySelectorAll('.profile-nav button');
    profileNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            profileNavButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab panes
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Show the corresponding tab pane
            const tabId = 'profile-' + this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Get user by ID
function getUserById(userId) {
    return users.find(user => user.id === userId);
}

// Get post by ID
function getPostById(postId) {
    return posts.find(post => post.id === postId);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMilliseconds = now - date;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
        return 'Just now';
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
}

// Load posts
function loadPosts(userId = null) {
    const container = userId ? profilePosts : postsContainer;
    if (!container) return;

    container.innerHTML = '';

    let filteredPosts = posts;
    
    // If userId is provided, only show posts from that user
    if (userId) {
        filteredPosts = posts.filter(post => post.userId === userId);
    }

    // Sort posts by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    filteredPosts.forEach(post => {
        const user = getUserById(post.userId);
        const isLiked = post.likes.includes(currentUserId);
        
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${user.profilePic}" alt="${user.name}'s Profile Picture">
                <div class="post-info">
                    <h3>${user.name}</h3>
                    <span>${formatDate(post.date)}</span>
                </div>
            </div>
            <div class="post-content">
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            </div>
            <div class="post-stats">
                <div>
                    <span>${post.likes.length} likes</span>
                </div>
                <div>
                    <span>${post.comments.length} comments • ${post.shares} shares</span>
                </div>
            </div>
            <div class="post-actions">
                <div class="post-action ${isLiked ? 'liked' : ''}" data-action="like" data-post-id="${post.id}">
                    <i class="fas fa-thumbs-up"></i>
                    <span>Like</span>
                </div>
                <div class="post-action" data-action="comment" data-post-id="${post.id}">
                    <i class="fas fa-comment"></i>
                    <span>Comment</span>
                </div>
                <div class="post-action" data-action="share" data-post-id="${post.id}">
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </div>
            </div>
        `;

        // Add event listeners for post actions
        const postActions = postElement.querySelectorAll('.post-action');
        postActions.forEach(action => {
            action.addEventListener('click', handlePostAction);
        });

        container.appendChild(postElement);
    });
}

// Handle post actions (like, comment, share)
function handlePostAction(event) {
    const action = event.currentTarget.getAttribute('data-action');
    const postId = parseInt(event.currentTarget.getAttribute('data-post-id'));
    const post = getPostById(postId);

    if (action === 'like') {
        toggleLike(post);
        event.currentTarget.classList.toggle('liked');
        
        // Update like count
        const postElement = event.currentTarget.closest('.post');
        const likeCount = postElement.querySelector('.post-stats span');
        likeCount.textContent = `${post.likes.length} likes`;
    } else if (action === 'comment') {
        showPostDetailView(postId);
    } else if (action === 'share') {
        sharePost(post);
    }
}

// Toggle like on a post
function toggleLike(post) {
    const likeIndex = post.likes.indexOf(currentUserId);
    if (likeIndex === -1) {
        // User hasn't liked the post yet, so add like
        post.likes.push(currentUserId);
    } else {
        // User already liked the post, so remove like
        post.likes.splice(likeIndex, 1);
    }
}

// Share a post
function sharePost(post) {
    post.shares += 1;
    alert('Post shared successfully!');
}

// Show post detail view for comments
function showPostDetailView(postId) {
    currentViewingPostId = postId;
    const post = getPostById(postId);
    const user = getUserById(post.userId);
    
    detailPostContent.innerHTML = `
        <div class="post">
            <div class="post-header">
                <img src="${user.profilePic}" alt="${user.name}'s Profile Picture">
                <div class="post-info">
                    <h3>${user.name}</h3>
                    <span>${formatDate(post.date)}</span>
                </div>
            </div>
            <div class="post-content">
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            </div>
            <div class="post-stats">
                <div>
                    <span>${post.likes.length} likes</span>
                </div>
                <div>
                    <span>${post.comments.length} comments • ${post.shares} shares</span>
                </div>
            </div>
        </div>
    `;
    
    loadComments(post);
    
    postDetailView.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close post detail view
function closePostDetailView() {
    postDetailView.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentViewingPostId = null;
}

// Load comments for a post
function loadComments(post) {
    commentsContainer.innerHTML = '';
    
    post.comments.forEach(comment => {
        const commentUser = getUserById(comment.userId);
        
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <img src="${commentUser.profilePic}" alt="${commentUser.name}'s Profile Picture">
            <div class="comment-content">
                <h4>${commentUser.name}</h4>
                <p>${comment.text}</p>
                <div class="comment-date">${formatDate(comment.date)}</div>
            </div>
        `;
        
        commentsContainer.appendChild(commentElement);
    });
}

// Add a comment to a post
function addComment() {
    if (!commentInput.value.trim() || !currentViewingPostId) return;
    
    const post = getPostById(currentViewingPostId);
    
    // Create a new comment
    const newComment = {
        id: post.comments.length > 0 ? Math.max(...post.comments.map(c => c.id)) + 1 : 1,
        userId: currentUserId,
        text: commentInput.value.trim(),
        date: new Date().toISOString()
    };
    
    // Add comment to post
    post.comments.push(newComment);
    
    // Reload comments
    loadComments(post);
    
    // Clear input
    commentInput.value = '';
}

// Load friend suggestions
function loadFriendSuggestions() {
    if (!friendSuggestions) return;
    
    friendSuggestions.innerHTML = '';
    
    const currentUser = getUserById(currentUserId);
    const suggestions = users.filter(user => 
        user.id !== currentUserId && !currentUser.friends.includes(user.id)
    ).slice(0, 3); // Show only 3 suggestions
    
    suggestions.forEach(user => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'friend-suggestion';
        suggestionElement.innerHTML = `
            <img src="${user.profilePic}" alt="${user.name}'s Profile Picture">
            <div class="suggestion-info">
                <h4>${user.name}</h4>
                <p>${user.friends.length} friends</p>
            </div>
            <button data-user-id="${user.id}">Add Friend</button>
        `;
        
        // Add event listener for add friend button
        const addFriendBtn = suggestionElement.querySelector('button');
        addFriendBtn.addEventListener('click', function() {
            addFriend(user.id);
            this.textContent = 'Request Sent';
            this.disabled = true;
        });
        
        friendSuggestions.appendChild(suggestionElement);
    });
}

// Add friend
function addFriend(userId) {
    const currentUser = getUserById(currentUserId);
    if (!currentUser.friends.includes(userId)) {
        currentUser.friends.push(userId);
        
        // In a real app, you would send this to a server
        // For this demo, we'll just show an alert
        alert(`Friend request sent to ${getUserById(userId).name}!`);
    }
}

// Show profile page
function showProfilePage(userId) {
    currentViewingUserId = userId;
    const user = getUserById(userId);
    
    // Set profile information
    profileName.textContent = user.name;
    profileBio.textContent = user.bio;
    profilePic.src = user.profilePic;
    profileCover.src = user.coverPhoto;
    profileWork.textContent = user.works;
    profileEducation.textContent = user.education;
    profileLocation.textContent = user.location;
    profileRelationship.textContent = user.relationship;
    
    // Load user's posts
    loadPosts(userId);
    
    // Load user's friends
    loadProfileFriends(user);
    
    // Load user's photos
    loadProfilePhotos(user);
    
    // Show profile view and hide main content
    profileView.style.display = 'block';
    mainContent.style.display = 'none';
}

// Show home page
function showHomePage() {
    // Hide profile view and show main content
    profileView.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Reset current viewing user
    currentViewingUserId = null;
    
    // Reload posts
    loadPosts();
}

// Load profile friends
function loadProfileFriends(user) {
    profileFriendsGrid.innerHTML = '';
    
    user.friends.forEach(friendId => {
        const friend = getUserById(friendId);
        
        const friendElement = document.createElement('div');
        friendElement.className = 'friend-card';
        friendElement.innerHTML = `
            <img src="${friend.profilePic}" alt="${friend.name}'s Profile Picture">
            <h4>${friend.name}</h4>
        `;
        
        // Add click event to view friend's profile
        friendElement.addEventListener('click', function() {
            showProfilePage(friendId);
        });
        
        profileFriendsGrid.appendChild(friendElement);
    });
}

// Load profile photos
function loadProfilePhotos(user) {
    profilePhotosGrid.innerHTML = '';
    
    // Get all posts from user that have images
    const userPosts = posts.filter(post => post.userId === user.id && post.image);
    
    userPosts.forEach(post => {
        const photoElement = document.createElement('div');
        photoElement.className = 'photo-card';
        photoElement.innerHTML = `
            <img src="${post.image}" alt="Photo">
        `;
        
        // Add click event to view photo detail
        photoElement.addEventListener('click', function() {
            showPostDetailView(post.id);
        });
        
        profilePhotosGrid.appendChild(photoElement);
    });
}

// Create a new post
function createPost() {
    if (!postText.value.trim()) return;
    
    // Create a new post
    const newPostId = Math.max(...posts.map(p => p.id)) + 1;
    const newPost = {
        id: newPostId,
        userId: currentUserId,
        text: postText.value.trim(),
        image: null, // In a real app, you would allow image upload
        date: new Date().toISOString(),
        likes: [],
        comments: [],
        shares: 0
    };
    
    // Add post to posts array
    posts.unshift(newPost);
    
    // Add post ID to user's posts
    const currentUser = getUserById(currentUserId);
    currentUser.posts.push(newPostId);
    
    // Reload posts
    loadPosts();
    
    // Clear input
    postText.value = '';
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Additional utility functions for future expansion

// Edit a post
function editPost(postId, newText) {
    const post = getPostById(postId);
    if (post && post.userId === currentUserId) {
        post.text = newText;
        loadPosts(currentViewingUserId);
        return true;
    }
    return false;
}

// Delete a post
function deletePost(postId) {
    const index = posts.findIndex(post => post.id === postId);
    if (index !== -1 && posts[index].userId === currentUserId) {
        // Remove post from posts array
        const deletedPost = posts.splice(index, 1)[0];
        
        // Remove post ID from user's posts
        const user = getUserById(currentUserId);
        const postIndex = user.posts.indexOf(postId);
        if (postIndex !== -1) {
            user.posts.splice(postIndex, 1);
        }
        
        // Reload posts
        loadPosts(currentViewingUserId);
        return true;
    }
    return false;
}

// Search posts by text content
function searchPosts(searchTerm) {
    if (!searchTerm.trim()) return [];
    
    const normalizedTerm = searchTerm.toLowerCase().trim();
    return posts.filter(post => {
        // Search in post text
        if (post.text.toLowerCase().includes(normalizedTerm)) return true;
        
        // Search in comments
        if (post.comments.some(comment => comment.text.toLowerCase().includes(normalizedTerm))) return true;
        
        // Search by user name
        const user = getUserById(post.userId);
        if (user.name.toLowerCase().includes(normalizedTerm)) return true;
        
        return false;
    });
}

// Update user profile
function updateUserProfile(userId, updates) {
    const user = getUserById(userId);
    if (user && userId === currentUserId) {
        // Update user properties
        Object.assign(user, updates);
        
        // If profile page is currently shown, update it
        if (currentViewingUserId === userId) {
            profileName.textContent = user.name;
            profileBio.textContent = user.bio;
            profileWork.textContent = user.works;
            profileEducation.textContent = user.education;
            profileLocation.textContent = user.location;
            profileRelationship.textContent = user.relationship;
        }
        
        return true;
    }
    return false;
} 
