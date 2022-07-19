const newPost = async (event) => {


    event.preventDefault();
    const title = document.querySelector('#post-title').value;
    const text = document.querySelector('#post-text').value;
  
    if (title && text) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      }
    }
  };

  const deletePost = async (event) => {

    event.preventDefault();
    console.log("Start of deletePost");
    const title = document.querySelector('#post-title');
    const postId = document.querySelector('#post-id');

    // console.log(postId);
  
    if (title && body) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        console.log("End of deletePost");
      }
    }
  }



document.querySelector('.post-form').addEventListener('submit', newPost);

document
.querySelector('.post-delete')
.addEventListener('submit', deletePost)