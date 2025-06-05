const userContainer = document.getElementById("user-container");

function fetchUsers() {
  userContainer.innerHTML = "Loading users...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = "";
      users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";

        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;

        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color: red;">Failed to load data. ${error.message}</p>`;
    });
}

// Fetch data when the page loads
window.onload = fetchUsers;
