//LOGS USER OUT UPON CLICKING LOG OUT BUTTON
const logout = async () => {
    const response = await fetch('/api/parents/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      //DIRECTS USER BACK TO HOMEPAGE ONCE SUCCESSFULLY LOGGED OUT
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  