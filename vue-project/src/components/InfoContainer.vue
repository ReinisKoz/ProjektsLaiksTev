<script setup>

</script>

<template>
    <main>
    <div class="content">
      <div class="text-container">
        <h1>What do we offer?</h1>
        <h2>We offer online booking to your favourite places!</h2>
        <p>I'ts 2025, why are we still calling to reserve some appointments? Its time to change that!</p>
      </div>
      <div class="image-container">
        <img src="/Images/booknow.png" alt="A big image">
      </div>
    </div>
  </main>

</template>

<style scoped>
body, main, header {
  margin: 0;
  padding: 0;
}

main {
  background-color: #aca5a5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}

.text-container {
  flex: 1; /* Takes half of the space */
  padding: 20px;
}

.image-container {
  flex: 1; /* Takes half of the space */
  display: flex;
  justify-content: flex-end; /* Push image to the right */
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px; /* Optional: adds rounded corners */
}
</style>