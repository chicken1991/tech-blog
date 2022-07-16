const newPost = async (event) => {

  console.log("newPost activated, bitch");

    event.preventDefault();
    console.log("start of newPost");
    // const title = document.querySelector('#post-title').value;
    // const text = document.querySelector('#post-text').value;
    const title = "Hardcoded title";
    const text = "hardcoded text body";
  
    if (title && text) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert("response is okay");
        document.location.replace('/dashboard');
        console.log("End of newPost");
      } else {
        console.log("response not okay ==============================");
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
  };



document
.querySelector('#post-submit')
.addEventListener('submit', newPost);

document
.querySelector('.post-delete')
.addEventListener('submit', deletePost)