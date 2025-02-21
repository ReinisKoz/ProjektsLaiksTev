<script setup>
import 'primeicons/primeicons.css'
import { ref } from 'vue';

// Form data
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Validation message
const validationMessage = ref('');

// Handle form submission
const handleSubmit = () => {
  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    validationMessage.value = "Passwords do not match!";
  } else {
    validationMessage.value = '';
    // Send data to the server (you can use fetch or axios for API calls)
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    console.log("User Data:", userData);
    // Uncomment below to send the data to your PHP endpoint
    // fetch('register.php', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }
};
</script>

<template>
  <div class="container">
    <div class="form-container">
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit">

        <label for="registerName">Full Name
            <i class="pi pi-id-card"></i>
        </label>
        <input type="text" id="registerName" v-model="name" required>

        <label for="registerEmail">Email
            <i class="pi pi-envelope"></i>
        </label>
        <input type="email" id="registerEmail" v-model="email" required>

        <label for="registerPassword">Password
            <i class="pi pi-lock"></i>
        </label>
        <input type="password" id="registerPassword" v-model="password" required>

        <label for="confirmPassword">Confirm Password
            <i class="pi pi-lock"></i>
        </label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>

        <button type="submit">
            Submit
          <span class="material-symbols-outlined"></span>
        </button>
      </form>

      <!-- Show validation message if passwords do not match -->
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
  height: 100vh; /* Full viewport height */
  margin: 0;
}

.form-container {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
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

label span {
  vertical-align: middle;
  margin-left: 8px;
  color: #888;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

input:focus {
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

.validation-message {
  color: red;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
</style>
