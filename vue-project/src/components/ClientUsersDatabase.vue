<template>
    <div>
      <h1>Client Users</h1>
      <ul v-if="clients.length">
        <li v-for="client in clients" :key="client.id">
          {{ client.name }} ({{ client.email }})
        </li>
      </ul>
      <p v-else>No clients found.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        clients: []
      };
    },
    mounted() {
      this.fetchClients();
    },
    methods: {
      async fetchClients() {
        try {
          const response = await axios.get('http://localhost/vue_api/data.php');
          this.clients = response.data;  // Assuming response is in JSON format
        } catch (error) {
          console.error('Error fetching clients:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>