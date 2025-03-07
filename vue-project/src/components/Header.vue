<script setup>
import 'primeicons/primeicons.css'
</script>

<template>
    <header class="dur">
    <nav class="nav-container">
        <div class="logo-container">
            <img src='/Images/logo.png' alt="Logo" class="logo">
        </div>
        <div class="nav-links">
            <ul class="ListButtons">
                <li><RouterLink to="index">Home</RouterLink></li>
                <li><RouterLink to="aboutUs">About us</RouterLink></li>
                <li><RouterLink to="contactUS">Contact us</RouterLink></li>
                <li><RouterLink to="login">Login</RouterLink></li>
                <li><RouterLink to="register">Register</RouterLink></li>
                <li><RouterLink to="bookAppointment">Book an Appointment</RouterLink></li>
            </ul>
        </div>
    </nav>
</header>


    <!-- <div class="sidebar" id="sidebar">
        <button class="sidebar-button"><span class="material-symbols-outlined" id="menuButton">menu</span></button>
        <div class="sidebar-content">
            Mobilas versijas content 
            <nav>
                <ul class="ListButtons">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="AboutUs.html">About us</a></li>
                    <li><a href="ContactUS.html">Contact us</a></li>
                    <li><a href="Login.html">Login</a></li>
                    <li><a href="Register.html">Register</a></li>
                    <li><a href="BookAppointment.html">Book an Appointment</a></li>
                </ul>
            </nav>
            <button id="dark-mode-toggle"><span class="material-symbols-outlined">dark_mode</span></button>
        </div>
    </div> -->
</template>
<style scoped>
header {
    background-color: #333;
    padding: 0 20px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

/* Navigation container */
.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    height: 60px; /* Adjust size */
    width: auto;
}

/* Navigation links container */
.nav-links {
    display: flex;
    align-items: center; /* Aligns with logo */
}

/* Dark mode button */
#dark-mode-toggle {
    background-color: transparent;
    border: none;
    color: white;
    font-size: large;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 15px;
}

/* Buttons container */
.ListButtons {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0;
    margin: 0;
}

/* Button links */
.ListButtons li a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
}

/* Hover effect */
.ListButtons li a:hover {
    background-color: #777;
}

/* Space between list items */
.ListButtons li {
    margin-right: 15px;
}

/* Mobile styles */
@media (max-width: 768px) {
    .sidebar {
        display: block;
    }
    
    .sidebar-button {
        display: block;
    }
    
    header {
        display: none; /* Hide header on mobile */
    }
}


</style>