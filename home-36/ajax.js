const API = 'https://jsonplaceholder.typicode.com';

fetch(`${API}/posts`)
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)));
  


//   .then(posts => {
//     posts.forEach(post => document.body.appendChild(getBlogPost(post)))
//   })
  
//   function getBlogPost(post) {
//       const blogPost = document.createElement('div');
//       const userNumber = document.createElement('p')
      
//       const title = document.createElement('h2');
//       const description = document.createElement('p');
//       userNumber.innerText = post.id;
//       title.innerText = post.title;
//       description.innerText = post.body;
      
//       blogPost.appendChild(userNumber);
//       blogPost.appendChild(title);
//       blogPost.appendChild(description);
//       blogPost.appendChild(document.createElement('hr'));

//       return blogPost;
//     }
  




