<script setup>
    import AppointmentCard from './AppointmentCard.vue';

</script>

<template>
    <div class="card-container">
        <AppointmentCard />
    </div>
</template>

<style>
    .card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
</style>