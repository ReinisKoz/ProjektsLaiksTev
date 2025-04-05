<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} LaiksTev. All rights reserved.</p>
      <div class="footer-links">
        <RouterLink to="/aboutus">About</RouterLink>
        <RouterLink to="/contactUs">Contact</RouterLink>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #333;
  color: #333;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  position: relative;
  bottom: 0;
  left: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
}

.footer-links a:hover {
  text-decoration: underline;
}

p{
  color: #fff;
}
</style>
