<template>
  <div>
    <div id="calendar" class="calendar">
      <div
        v-for="(day, index) in calendarDays"
        :key="index"
        class="day"
        :class="{ empty: day === null }"
        @click="day && showBookingOptions(day)"
      >
        {{ day }}
      </div>
    </div>

    <!-- Booking Popup -->
    <div v-if="showBookingPopup" class="booking-popup">
      <h2>Book an appointment</h2>
      <p>Select a time slot for {{ selectedDay }}</p>
      <div class="booking-options">
        <div
          v-for="(option, index) in bookingOptions"
          :key="index"
          class="booking-option"
          :class="{ reserved: reservedSlots[selectedDay]?.includes(option) }"
          @click="!isReserved(selectedDay, option) && bookOption(option)"
        >
          {{ option }} - {{ isReserved(selectedDay, option) ? "Reserved" : "Available" }}
        </div>
      </div>
      <button class="close-btn" @click="closeBookingPopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendarDays: [],
      showBookingPopup: false,
      selectedDay: null,
      bookingOptions: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
      reservedSlots: {} // Stores reserved time slots per day
    };
  },
  methods: {
    generateCalendar() {
      const daysInMonth = new Date(2025, 1, 0).getDate();
      const firstDayOfMonth = new Date(2025, 1, 1).getDay();
      const totalDays = 42; // 6 weeks of 7 days
      let day = 1;
      let calendarDays = [];

      // Fill empty days before the first day of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null);
      }

      // Generate calendar days
      for (let i = firstDayOfMonth; i < totalDays; i++) {
        if (day > daysInMonth) break;
        calendarDays.push(day);
        day++;
      }

      this.calendarDays = calendarDays;
    },
    showBookingOptions(day) {
      this.selectedDay = day;
      this.showBookingPopup = true;
    },
    closeBookingPopup() {
      this.showBookingPopup = false;
      this.selectedDay = null;
    },
    bookOption(option) {
      if (!this.reservedSlots[this.selectedDay]) {
        this.reservedSlots[this.selectedDay] = [];
      }
      this.reservedSlots[this.selectedDay].push(option);
    },
    isReserved(day, option) {
      return this.reservedSlots[day]?.includes(option);
    }
  },
  mounted() {
    this.generateCalendar();
  }
};
</script>

<style scoped>
/* General Calendar Styling */
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  transition: all 0.3s ease;
  border: 1px solid #ccc;
}

.day:hover {
  background: linear-gradient(to bottom, #e9ecef, #dee2e6);
  transform: scale(1.05);
}

.day.empty {
  background: transparent;
  border: none;
  cursor: default;
}

/* Booking Popup Styling */
.booking-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 350px;
  z-index: 10;
  text-align: center;
}

.booking-popup h2 {
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
}

.booking-popup p {
  margin-bottom: 15px;
  font-size: 16px;
  color: #555;
}

/* Booking Options */
.booking-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.booking-option {
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease;
}

.booking-option:hover {
  background: #e9ecef;
  transform: scale(1.03);
}

.booking-option.reserved {
  background: #ccc;
  color: #666;
  cursor: not-allowed;
  text-decoration: line-through;
}

/* Close Button */
.close-btn {
  margin-top: 15px;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: #0056b3;
}
</style>
