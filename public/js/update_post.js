const updatePost = async (event) => {

    event.preventDefault();
    const title = document.querySelector('#post-title').value;
    const text = document.querySelector('#post-text').value;
    const id = event.target.getAttribute('data-id');
    alert(`title is ${title}, text body is ${text}, and ID is ${id}`)
  
    if (title && text && id) {
      const response = await fetch(`/updatepost/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, text, id }),
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert("NOT OKAY")
      }
    } else {
        alert("first if statment failed");
    }
  };


document.querySelector('.post-form').addEventListener('click', updatePost);