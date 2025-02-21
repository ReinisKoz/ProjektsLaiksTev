<script setup>

</script>
<template>
    <div class="calendar-container">
        <h2>Booking Calendar</h2>
        <div class="calendar" id="calendar"></div>
    </div>
</template>

<style>
    .calendar {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7 kolonnas */
    grid-template-rows: repeat(6, 1fr); /* 6 rindiņas */
    gap: 5px;
}

/* Dienas stils kalendārā */
.day {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    height: 100%; /* Aizņem visu šūnu */
}

/* Hover efekts uz dienām */
.day:hover {
    background-color: #e0e0e0;
}

/* Booking popup */
.bookings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 5px;
}

.booking-option {
    background-color: #007bff;
    color: white;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
}

.booking-option:hover {
    background-color: #0056b3;
}
</style>