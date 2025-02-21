<template>
    <header class="dur">
        <nav>
            <ul class="ListButtons">
                
                <button id="dark-mode-toggle"><span class="material-symbols-outlined">dark_mode</span></button>

                <li><RouterLink to="index">Home</RouterLink></li>
                <li><RouterLink to="aboutUs">About us</RouterLink></li>
                <li><RouterLink to="contactUS">Contact us</RouterLink></li>
                <li><RouterLink to="login">Login</RouterLink></li>
                <li><RouterLink to="register">Register</RouterLink></li>
                <li><RouterLink to="bookAppointment">Book an Appointment</RouterLink></li>
            </ul>
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
<style>

header {
    background-color: #333;
    padding: 10px;
    height: 100px;
    align-items: center;
}

.ListButtons {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.ListButtons li a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.ListButtons li a:hover {
    background-color: #777;
}

.ListButtons button {
    cursor: pointer;
}

.ListButtons li {
    margin-right: 15px;
}

ul li ul.dropdown {
    position: absolute;
    display: none;
    background-color: #333;
    padding: 10px 0;
    border-radius: 5px;
    top: 50px;
    list-style: none;
    min-width: 150px;
    z-index: 999;
}

ul li ul.dropdown li {
    margin: 0;
}

ul li ul.dropdown li a {
    display: block;
    padding: 10px 15px;
    font-size: 14px;
    color: white;
}

ul li:hover ul.dropdown {
    display: block;
}

ul li ul.dropdown li a:hover {
    background-color: #555;
}

@media (max-width: 768px) {
    .sidebar {
        display: block;
    }
    
    .sidebar-button {
        display: block;
    }
    
    header {
        display: none;
    }
}
</style>