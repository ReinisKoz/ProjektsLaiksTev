<template>
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-pic">
          <img src="/public/Images/prof.png" alt="Profile Picture" />
        </div>
      </div>
      <div class="profile-info">
        <h2 class="fullname">{{ user.fullName }}</h2>
        <p class="location">{{ user.location }}</p>
      </div>
      <div class="profile-details">
        <p class="description">{{ user.jobTitle }}</p>
        <p class="description">{{ user.education }}</p>
        <div class="stats">
          <div>
            <span>65</span>
            <p>Friends</p>
          </div>
          <div>
            <span>43</span>
            <p>Photos</p>
          </div>
          <div>
            <span>21</span>
            <p>Comments</p>
          </div>
        </div>
      </div>
      <button class="show-more">Show More</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          fullName: "John Doe",
          location: "New York, United States",
          jobTitle: "Web Developer - UI/UX Specialist",
          education: "Columbia University - New York",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .profile-container {
    width: 350px;
    margin: auto;
    padding: 20px;
    background: #1e1e1e; /* Dark mode background */
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
    color: #fff;
  }

  .fullname {
    color:#fff
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
    margin-bottom: 5px;
  }
  
  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .stats div {
    text-align: center;
  }
  
  .stats span {
    font-size: 22px;
    font-weight: bold;
    color: #ff758c;
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
  