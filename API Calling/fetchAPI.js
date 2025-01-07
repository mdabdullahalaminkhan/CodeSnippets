fetch("https://api.example.com/resource", {
  method: "POST", // HTTP method (uppercase preferred)
  headers: {
    "Content-Type": "application/json", // Standard header
    Authorization: "Bearer YOUR_TOKEN", // Standard header
    email: "name@email.com", // Custom header
  },
  body: JSON.stringify({ key: "value" }), // Request payload
})
  .then((response) => response.json())
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error.message));
