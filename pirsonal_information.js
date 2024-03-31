// Function to clear form fields
function clearForm() {
  document.getElementById("userForm").reset();
}

// Function to handle form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  var fullName = formData.get("firstName") + " " + formData.get("lastName");
  var email = formData.get("email");
  var phone = formData.get("phone");
  var dob = formData.get("dob");
  var gender = formData.get("gender");
  var address = formData.get("address");
  var image = formData.get("image");

  var cardContainer = document.getElementById("cardContainer");

  var card = `
<div class="col-md-4">
  <div class="card mb-4">
    ${image ? `<img src="${URL.createObjectURL(image)}" class="card-img-top" alt="Profile Picture">` : ''}
    <div class="card-body">
      <h5 class="card-title">${fullName}</h5>
      <p class="card-text"><strong>Email:</strong> ${email}</p>
      <p class="card-text"><strong>Phone:</strong> ${phone}</p>
      <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
      <p class="card-text"><strong>Gender:</strong> ${gender}</p>
      <p class="card-text"><strong>Address:</strong> ${address}</p>
    </div>
  </div>
</div>
`;

  cardContainer.insertAdjacentHTML("beforeend", card);

  clearForm();
});
