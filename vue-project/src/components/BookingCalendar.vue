<template>
  <div class="calendar-container">
    <h2 class="calendar-title">Appointment Calendar</h2>
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
      <h2>Book an Appointment</h2>
      <p>Select a time slot for <strong>{{ selectedDay }}</strong></p>
      <div class="booking-options">
        <div
          v-for="(option, index) in bookingOptions"
          :key="index"
          class="booking-option"
          :class="{ reserved: isReserved(selectedDay, option) }"
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
/* General Calendar Container */
.calendar-container {
  width: 700px;
  margin: 50px auto;
  padding: 30px;
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #fff;
}

.calendar-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
}

/* Calendar Styling */
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  background: #2a2a2a;
  border-radius: 10px;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #ff4f6b;
}

.day:hover {
  background: linear-gradient(135deg, #ff4f6b, #ff7eb3);
  transform: scale(1.08);
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
  background: #2a2a2a;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
  width: 400px;
  z-index: 10;
  text-align: center;
}

.booking-popup h2 {
  font-size: 22px;
  color: #ff7eb3;
  margin-bottom: 15px;
}

.booking-popup p {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 15px;
}

/* Booking Options */
.booking-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.booking-option {
  padding: 14px;
  font-size: 16px;
  background: linear-gradient(135deg, #3a3a3a, #555);
  border: 2px solid #666;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;
}

.booking-option:hover {
  background: linear-gradient(135deg, #555, #777);
  transform: scale(1.05);
}

.booking-option.reserved {
  background: #444;
  color: #999;
  border: 2px solid #777;
  cursor: not-allowed;
  text-decoration: line-through;
}

/* Close Button */
.close-btn {
  margin-top: 15px;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  background-color: #ff4f6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: #ff2f4f;
}
</style>
