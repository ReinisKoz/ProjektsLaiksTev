<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-pic">
        <img src="/Images/prof.png" alt="Profile Picture" />
      </div>
    </div>
    <div class="profile-info">
      <h2 class="fullname">{{ user.name }}</h2>
      <p class="location">What do we offer? : {{ user.bookings }}</p>
    </div>
    <div class="profile-details">
      <div class="description">
        <label>Job Title: </label>
        <span v-if="!editing">{{ user.jobTitle }}</span>
        <input v-else v-model="user.jobTitle" type="text" />
      </div>
      <div class="description">
        <label>Education: </label>
        <span v-if="!editing">{{ user.education }}</span>
        <input v-else v-model="user.education" type="text" />
      </div>
    </div>
    <button @click="toggleEdit" class="show-more">{{ editing ? 'Save' : 'Edit' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      user: {
        name: "NagiPriekšTevis",
        bookings: "Manicure, Pedicure",
        jobTitle: "Manicure and Pedicure Specialist",
        education: "RVT",
      },
    };
  },
  methods: {
    toggleEdit() {
      this.editing = !this.editing;
    },
  },
};
</script>

<style scoped>
.profile-container {
  width: 350px;
  margin: auto;
  padding: 20px;
  background: #1e1e1e;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  align-content: center;
}

.profile-header {
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  padding: 50px 20px;
  border-radius: 15px 15px 0 0;
  position: relative;
}

.profile-pic img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #fff;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease-in-out;
}

.profile-pic img:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.profile-info {
  margin-top: 60px;
}

.fullname {
  color: #fff;
}

.location {
  font-size: 14px;
  color: #bbb;
}

.profile-details {
  margin-top: 20px;
  padding: 20px;
}

.description {
  color: #aaa;
  font-size: 14px;
  margin-bottom: 10px;
}

description input {
  background: #2a2a2a;
  border: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.show-more {
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.show-more:hover {
  background: linear-gradient(90deg, #ff5e6c, #ff4f9a);
  transform: scale(1.05);
}
</style>