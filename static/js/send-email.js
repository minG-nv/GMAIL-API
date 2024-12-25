
// Lưu email vào file JSON
document.getElementById('saveEmailForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const body = document.getElementById('body').value;

  fetch('/save-email', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({body}),
  })
    .then(response => response.json())
    .then(data => {
      const responseMessage = document.getElementById('responseMessage');
      if (data.status === 'success') {
        responseMessage.textContent = data.message;
        responseMessage.style.color = 'green';
      } else {
        responseMessage.textContent = data.message;
        responseMessage.style.color = 'red';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Gửi email từ file JSON
document.getElementById('sendSavedEmails').addEventListener('click', function () {
  fetch('/send-saved-emails', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      const responseMessage = document.getElementById('responseMessage');
      if (data.status === 'success') {
        responseMessage.textContent = data.message;
        responseMessage.style.color = 'green';
      } else {
        responseMessage.textContent = data.message;
        responseMessage.style.color = 'red';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});