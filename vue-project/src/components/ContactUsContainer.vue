<script setup>
import { ref } from 'vue';

// Form data
const name = ref('');
const email = ref('');
const message = ref('');
const validationMessage = ref('');

// Handle form submission
const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    validationMessage.value = "Please fill in all fields.";
  } else {
    validationMessage.value = '';
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value
    };
    console.log("Form Data:", formData);
    // Example: Send the data to an API
    // fetch('contact_us.php', { method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' }});
  }
};
</script>

<template>
  <div class="contact-container">
    <div class="contact-box">
      <h2>Contact Us</h2>
      <p class="subtext">We'd love to hear from you!</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name <i class="pi pi-user"></i></label>
          <input type="text" id="name" v-model="name" placeholder="Enter your full name" required>
        </div>

        <div class="form-group">
          <label for="email">Email <i class="pi pi-envelope"></i></label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required>
        </div>

        <div class="form-group">
          <label for="message">Message <i class="pi pi-comment"></i></label>
          <textarea id="message" v-model="message" rows="4" placeholder="Type your message here" required></textarea>
        </div>

        <p v-if="validationMessage" class="error-message">{{ validationMessage }}</p>

        <button type="submit">Send Message <i class="pi pi-send"></i></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Background & Centering */
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  width: 900px;
}

/* Contact Form Box */
.contact-box {
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

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: 0.3s;
}

input:focus, textarea:focus {
  border-color: #ff7f99;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 127, 153, 0.5);
}

textarea {
  resize: vertical;
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

/* Responsive */
@media (max-width: 480px) {
  .contact-box {
    padding: 30px;
  }

  h2 {
    font-size: 24px;
  }
}
</style>
