<script>

</script>

<template>
<body>
    <div id="header"></div>
    <!-- Your page content here -->
    <main>
        <section>
            <h1>Sports & Fitness</h1>
            <img src="/Images/Fitness.webp" alt="Fitness image">
            <p>Schedule your sports and fitness business effectively. Keep your classes, services and coaches organised. Even issue tickets and scan them via the admin app upon clients arrival.</p>
            <h2>Easy scheduling of fitness classes and sports coaching</h2>
            <h2>Create memberships to limit access or offer extras</h2>
        </section>
        <section class="buttons-container-fitness">
            <a href="#" class="service-button">Personal trainer</a>
            <a href="#" class="service-button">Gyms</a>
            <a href="#" class="service-button">Fitness classes</a>
            <a href="#" class="service-button">Sports item rentals</a>
        </section>
    </main>
</body>
</template>

<style>
body {
    background-color: #b8aaaa; /* Muted grayish-brown */
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

h1, h2 {
    text-align: center;
    color: #3d3d3d; /* Dark gray for contrast */
}

img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
}

p {
    text-align: center;
    font-size: 16px;
    color: #5a5a5a;
    max-width: 600px;
}

.buttons-container-fitness {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.service-button {
    background-color: #f8c5c5; /* Soft pastel pink */
    color: #3d3d3d;
    padding: 12px 20px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: all 0.3s ease;
    border: none;
    display: inline-block;
}

.service-button:hover {
    background-color: #f4b4b4; /* Slightly darker pink on hover */
    transform: scale(1.05);
}

@media (max-width: 768px) {
    main {
        padding: 10px;
    }
    .buttons-container-fitness {
        flex-direction: column;
        align-items: center;
    }
}

</style>