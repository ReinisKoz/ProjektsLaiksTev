<script setup>
    import 'primeicons/primeicons.css'
</script>
<template>
    <div class="container">
      <div class="form-container">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="loginEmail">Email <i class="pi pi-envelope"></i></label>
            <input type="email" id="loginEmail" v-model="email" required>
          </div>
  
          <div class="form-group">
            <label for="loginPassword">Password <i class="pi pi-lock"></i></label>
            <input type="password" id="loginPassword" v-model="password" required>
          </div>
  
          <button type="submit">
            <span class="material-symbols-outlined">Login</span>
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic (e.g., send data to server)
        console.log("Submitted email:", this.email);
        console.log("Submitted password:", this.password);
        // You can use fetch or axios to send a POST request to your backend (e.g., login.php)
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  </style>
  