// // Lấy dữ liệu từ API
// fetch('/api/emails')
//     .then(response => response.json())
//     .then(data => {
//         const emailsDiv = document.getElementById('emails');
//         data.forEach(email => {
//             const emailDiv = document.createElement('div');
//             emailDiv.className = 'email';
//             emailDiv.innerHTML = `
//                 <h3>${email.subject}</h3>
//                 <p><strong>From:</strong> ${email.sender}</p>
//                 <p>${email.body}</p>
//             `;
//             emailsDiv.appendChild(emailDiv);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching emails:', error);
//     });


document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/emails')
      .then(response => response.json())
      .then(data => {
        const emailList = document.getElementById('emailList');
        emailList.innerHTML = ''; // Xóa dữ liệu cũ
  
        if (Array.isArray(data) && data.length > 0) {
          data.forEach(email => {
            const emailItem = document.createElement('div');
            emailItem.innerHTML = `
              <p><strong>Title:</strong> ${email.subject}</p>
              <p><strong>From:</strong> ${email.sender}</p>
              <p>${email.body}</p>
              <hr>
            `;
            emailList.appendChild(emailItem);
          });
        } else {
          emailList.innerHTML = '<p>No emails found.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
      });
  });
  