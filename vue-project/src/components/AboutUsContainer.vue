<script setup>
</script>

<template>
  <div class="about-container">
    <div class="about-content">
      <h1>About LaiksTev</h1>
      <p>
        Welcome to <strong>LaiksTev</strong>, your one-stop solution for effortless appointment booking in the beauty, wellness, and health industry. 
        Our platform simplifies the process of scheduling appointments for salons, spas, fitness centers, and medical professionals.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>📅 Easy online booking for beauty, fitness, and medical services.</li>
        <li>💳 Secure online & offline payment options.</li>
        <li>📍 Find top-rated professionals near you.</li>
        <li>📲 Mobile-friendly for a seamless experience.</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        We believe in making self-care and health management accessible. Whether you need a spa day, a gym session, or a medical consultation, 
        <strong>LaiksTev</strong> ensures you can schedule it with ease.
      </p>

      <div class="about-image">
        <img src="/Images/logo.png" alt="LaiksTev Team">
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.about-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
}

h1 {
  color: #3d3d3d;
  margin-bottom: 10px;
}

h2 {
  color: #5a5a5a;
  margin-top: 20px;
}

p {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
}

ul {
  text-align: left;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

li::before {
  content: "✔ ";
  color: #ffb6c1; /* Pastel pink */
  font-weight: bold;
}

.about-image {
  margin-top: 20px;
}

.about-image img {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .about-content {
    padding: 20px;
  }
}
</style>
