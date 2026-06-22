document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  if (name === '' || email === '') {
    alert('Please fill out all fields');
  } else {
    alert('Message sent!');
  }
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  const footer = document.createElement('footer');
  footer.innerHTML = `<p style="text-align:center; padding:20px; color:#6b7280;">© ${year} Dileep Raj. All rights reserved.</p>`;
  document.body.appendChild(footer);
});