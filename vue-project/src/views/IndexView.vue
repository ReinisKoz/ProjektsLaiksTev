<script setup>
import Header from '@/components/Header.vue';
import FooterContainer from '@/components/FooterContainer.vue';
import SearchBarContainer from '@/components/SearchBarContainer.vue';
import InfoContainer from '@/components/InfoContainer.vue';
import PricingContainer from '@/components/PricingContainer.vue';
</script>
<template>
<Header />
<main>
<SearchBarContainer />
<InfoContainer />
<PricingContainer />
</main>
<FooterContainer />
</template>

<style>
    body, main, header {
    margin: 0;
    padding: 0;
    }

    main {
    background-color: hsl(0, 4%, 66%);
    display: flex; 
    justify-content: flex-end; 
    }

</style>
