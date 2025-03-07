<script>
import 'primeicons/primeicons.css'
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    emitSearch() {
      this.$emit("search", this.searchQuery);
    }
  }
};
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchQuery"
      @input="emitSearch"
      placeholder="Search..."
      class="search-input"
    />  
  </div>
</template>

<style scoped>
.search-bar {
  width: 100%;
  max-width: 400px;
  margin: 50px;
  justify-content: right;
}
.search-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
