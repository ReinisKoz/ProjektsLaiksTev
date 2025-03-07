<script setup>
import CardContainer from '@/components/CardContainer.vue';
import Header from '@/components/Header.vue';

</script>

<template>
<Header />
<div class="headings">
    <h1>What booking would you like to make?</h1>
    <h2>We offer these type of bookings:</h2>
</div>
<CardContainer/>

</template>

<style>

.headings {
    text-align: center;
    margin-top: 40px;
    color: white;
}

.headings h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.headings h2 {
    font-size: 1.8rem;
    font-weight: 500;
}

</style>