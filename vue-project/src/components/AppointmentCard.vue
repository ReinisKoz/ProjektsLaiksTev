<script setup>

</script>
<template>

    <div class="card">
        <img src='/Images/Beauty.jpg'>
        <p>Do you want to schedule a hairdresser or go to a manicure?</p>
        <section class="service-section">
            <div class="buttons-container">
                <RouterLink to ="beauty" class="service-button">Beauty & Wellness</RouterLink>
            </div>
        </section>
    </div>

    <div class="card">
        <img src="/Images/Health.png" alt="">
        <p>Do you want to schedule health checks or various massages?</p>
        <section class="service-section">
            <div class="buttons-container">
                <RouterLink to ="health" class="service-button">Health & Medicine</RouterLink>
            </div>
        </section>
    </div>

    <div class="card">
        <img src="/Images/Fitness.webp" alt="">
        <p>Do you want to schedule fitness trainers or buy a subscription at a gym or rent some inventar?</p>
        <section class="service-section">
            <div class="buttons-container">
                <RouterLink to ="fitness" class="service-button">Sports & Fitness</RouterLink>
            </div>
        </section> 
    </div>
</template>

<style>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
}

h1 img {
    width: 100px;
    vertical-align: center;
}


h1 {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
}

* {
    box-sizing: border-box;
    padding: 0;
}


.card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 300px;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 500px;
}

.card img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
}

.card p {
    font-size: 1rem;
    color: #666;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card:hover img {
    transform: scale(1.05);
}

.buttons-container {
    display: flex;
    justify-content: center;
    margin-top: auto;
}

.service-button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #ffb6c1;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 30px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.service-button:hover {
    background-color: #ff7f99;
}

h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
}

h2 {
    font-size: 24px;
    color: #555;
    margin: 20px 0;
}

p {
    font-size: 18px;
    color: #666;
    max-width: 800px;
    line-height: 1.6;
    margin-bottom: 40px;
}

img {
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
    border-radius: 10px;
}


.buttons-container-fitness {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
}

.service-button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #ffb6c1; 
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 30px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.service-button:hover {
    background-color: #ff7f99;
}

</style>