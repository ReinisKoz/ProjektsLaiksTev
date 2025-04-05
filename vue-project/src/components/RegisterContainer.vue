<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const userType = ref('client');
const validationMessage = ref('');
const successMessage = ref('');

const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    validationMessage.value = "Passwords do not match!";
    return;
  }

  // Placeholder for actual registration logic (e.g., API call)
  validationMessage.value = '';
  successMessage.value = "Registration successful! Redirecting to login...";

  // Reset form
  name.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';

  // Redirect to login
  setTimeout(() => {
    router.push('/login');
  }, 2000);
};
</script>

<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Create an Account</h2>

      <div class="option-for-comapany">
        <button @click="$router.push('/companyregister')" class="company-btn">Register as Company</button>
      </div>

      <p class="subtext">Join us today!</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="name" required placeholder="Enter your full name" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required placeholder="Enter your password" />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="Confirm your password" />
        </div>

        <p v-if="validationMessage" class="error-message">{{ validationMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

        <button type="submit">Register</button>
      </form>

      <div class="extra-links">
        <RouterLink to="/login">Already have an account? Login</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.register-box {
  background: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

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
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

.success-message {
  color: green;
  font-size: 14px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #ff7f99;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #ff4f75;
}

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
</style>
