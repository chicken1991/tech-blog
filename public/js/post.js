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
    const post_id = document.querySelector(``).value;

    alert("starting to delete " + post_id)

    // console.log(postId);
  
    if (post_id) {
      const response = await fetch(`/api/post/${post_id}`, {
        method: 'DELETE',
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
.addEventListener('click', deletePost)