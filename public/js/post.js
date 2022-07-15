const posting = async (event) => {

    event.preventDefault();
  
    const title = document.querySelector('#post-title');
    const text = document.querySelector('#post-text');
  
    if (title && body) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      }
    }
  };

document
.querySelector('.post-form')
.addEventListener('submit', posting);