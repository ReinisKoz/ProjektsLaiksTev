<script setup>
import { ref } from 'vue';
import 'primeicons/primeicons.css';

// Form data
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const validationMessage = ref('');

// Handle form submission
const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    validationMessage.value = "Passwords do not match!";
  } else {
    validationMessage.value = '';
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    console.log("User Data:", userData);
    // Send data to server via fetch/axios (Uncomment below if needed)
    // fetch('register.php', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  }
};
</script>

<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Create a Company Account</h2>
      <div class="option-for-client">
        <button @click="$router.push('/register')" class="client-btn">Register as Client</button>
      </div>
      <p class="subtext">Join us today!</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Company Name <i class="pi pi-user"></i></label>
          <input type="text" id="name" v-model="name" placeholder="Enter your company name" required>
        </div>

        <div class="form-group">
          <label for="name">What will you offer? <i class="pi pi-question-circle"></i></label>
          <input type="text" id="name" v-model="name" placeholder="Enter your booking options" required>
        </div>

        <div class="form-group">
          <label for="email">Email <i class="pi pi-envelope"></i></label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required>
        </div>

        

        <div class="form-group">
          <label for="password">Password <i class="pi pi-lock"></i></label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password <i class="pi pi-lock"></i></label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" required>
        </div>

        <p v-if="validationMessage" class="error-message">{{ validationMessage }}</p>

        <button type="submit">Register <i class="pi pi-user-plus"></i></button>
      </form>

      <div class="extra-links">
        <RouterLink to = "/login">Already have an account? Login</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background & Centering */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  width: 800px;
}

/* Registration Box */
.register-box {
  background: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

/* Headings */
h2 {
  margin-bottom: 10px;
  color: #333;
  font-size: 28px;
}

.subtext {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

/* Form Fields */
.form-group {
  text-align: left;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  color: #333;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: 0.3s;
}

input:focus {
  border-color: #ff7f99;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 127, 153, 0.5);
}

/* Error Message */
.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}

/* Submit Button */
button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff7f99, #ffb6c1);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background: linear-gradient(135deg, #ff4f75, #ff9ba8);
}

button i {
  margin-left: 10px;
}

/* Extra Links */
.extra-links {
  margin-top: 15px;
  font-size: 14px;
}

.extra-links a {
  color: #ff4f75;
  text-decoration: none;
  font-weight: bold;
}

.extra-links a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
  .register-box {
    padding: 30px;
  }

  h2 {
    font-size: 24px;
  }
}
</style>
