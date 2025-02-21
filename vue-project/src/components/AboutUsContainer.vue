<script setup>
import { ref } from 'vue';

// Form data
const name = ref('');
const email = ref('');
const message = ref('');

// Validation message
const validationMessage = ref('');

// Handle form submission
const handleSubmit = () => {
  // Check if all fields are filled
  if (!name.value || !email.value || !message.value) {
    validationMessage.value = "Please fill in all fields.";
  } else {
    validationMessage.value = '';
    // Process form data (e.g., send to API or server)
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value
    };
    console.log("Form Data:", formData);
    // Example: Send the data using fetch or axios
    // fetch('about_us.php', { method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' }});
  }
};
</script>

<template>
  <div class="container">
    <div class="form-container">
      <h2>About Us</h2>
      <form @submit.prevent="handleSubmit">

        <label for="aboutName">Full Name</label>
        <input type="text" id="aboutName" v-model="name" required>

        <label for="aboutEmail">Email</label>
        <input type="email" id="aboutEmail" v-model="email" required>

        <label for="aboutMessage">Your Message</label>
        <textarea id="aboutMessage" v-model="message" rows="4" required></textarea>

        <button type="submit">
          Submit
          <span class="material-symbols-outlined"></span>
        </button>
      </form>

      <!-- Show validation message if form is incomplete -->
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Container to center the form */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

input:focus,
textarea:focus {
  border-color: #007BFF;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
}

button {
  width: 100%;
  padding: 12px;
  background-color: #ffb6c1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: #ff7f99;
}

button span {
  margin-left: 10px;
}

textarea {
  resize: vertical;
}

.validation-message {
  color: red;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
</style>
