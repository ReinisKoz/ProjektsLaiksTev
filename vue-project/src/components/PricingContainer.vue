<script setup>
const pricingPlans = [
  {
    title: "Free Plan/Package",
    price: "€0",
    description: "Employee / Monthly + VAT",
    buttonText: "Start free",
    features: [
      "Unlimited Data",
      "Booking Management Calendar",
      "Recurring Bookings",
      "Flexible Schedules",
      "Users and Roles",
      "Mobile Management App",
    ],
  },
  {
    title: "Plus Package",
    price: "€11.99",
    description: "Employee / Monthly + VAT",
    buttonText: "Try for free",
    features: [
      "Free Plan/Package",
      "Data-Driven Statistics",
      "Online Booking Options",
      "Client Mobile App",
      "Automated Booking Notifications",
      "Custom Notifications",
      "Transaction Management",
      "25+ Languages",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "Request a quote",
    description: "-",
    buttonText: "Contact us",
    details:
      "If your business has more than 10 employees/resources to book time for, or you have specific business needs, please contact us to discuss the best solutions and possible discounts. Our system offers full functionality and extensive customization options to create a comprehensive booking solution that grows with your business. Discounts are available for larger service providers.",
  },
];
</script>

<template>
  <section class="pricing-section">
    <h2 class="pricing-title">Flexible Pricing</h2>
    <p class="pricing-subtitle">
      LaiksTev pricing is transparent and flexible, allowing you to add features
      and change packages as your business grows.
    </p>
    
    <div class="pricing-container">
      <div v-for="(plan, index) in pricingPlans" :key="index" class="pricing-card">
        <h3 class="plan-title">{{ plan.title }}</h3>
        <p class="plan-price">{{ plan.price }}</p>
        <p class="plan-description">{{ plan.description }}</p>

        <button class="pricing-button">{{ plan.buttonText }}</button>

        <ul v-if="plan.features" class="plan-features">
          <li v-for="(feature, i) in plan.features" :key="i">✔ {{ feature }}</li>
        </ul>

        <p v-if="plan.details" class="plan-details">{{ plan.details }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  text-align: center;
  padding: 50px 20px;
  background: #f9f9f9;
  margin-bottom: 50px;
}

.pricing-title {
  font-size: 32px;
  font-weight: bold;
}

.pricing-subtitle {
  margin-bottom: 40px;
  font-size: 16px;
  color: #555;
}

.pricing-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.pricing-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  flex: 1;
}

.plan-title {
  font-size: 22px;
  font-weight: bold;
}

.plan-price {
  font-size: 20px;
  color: #333;
  margin: 10px 0;
}

.plan-description {
  font-size: 14px;
  color: #777;
}

.pricing-button {
  background: #00c853;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 15px 0;
}

.pricing-button:hover {
  background: #009624;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  text-align: left;
}

.plan-features li {
  margin: 5px 0;
}

.plan-details {
  font-size: 14px;
  color: #777;
  margin-top: 15px;
}
</style>
