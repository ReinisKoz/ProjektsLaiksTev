<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import 'primeicons/primeicons.css';

const router = useRouter();

const email = ref('');
const password = ref('');
const validationMessage = ref('');
const successMessage = ref('');

const handleSubmit = () => {
  if (!email.value || !password.value) {
    validationMessage.value = "Please fill in all fields.";
    return;
  }

  // Simulate login success
  validationMessage.value = '';
  successMessage.value = "Login successful! Redirecting...";

  // Reset form
  email.value = '';
  password.value = '';

  setTimeout(() => {
    router.push('/loggedin');
  }, 2000);
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Welcome Back</h2>
      <p class="subtext">Sign in to continue</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email <i class="pi pi-envelope"></i></label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required>
        </div>

        <div class="form-group">
          <label for="password">Password <i class="pi pi-lock"></i></label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
        </div>

        <p v-if="validationMessage" class="error-message">{{ validationMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

        <button type="submit">Login <i class="pi pi-sign-in"></i></button>
      </form>

      <div class="extra-links">
        <a href="#">Forgot Password?</a> | 
        <RouterLink to="/register">Create an Account</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  width: 800px;
}

.login-box {
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
  transition: 0.3s;
}

input:focus {
  border-color: #ff7f99;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 127, 153, 0.5);
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

@media (max-width: 480px) {
  .login-box {
    padding: 30px;
  }

  h2 {
    font-size: 24px;
  }
}
</style>
