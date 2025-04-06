<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <button @click="goToPreviousMonth"><i class="pi pi-angle-double-left"></i></button>
      <h2 class="calendar-title">{{ formattedMonth }}</h2>
      <button @click="goToNextMonth"><i class="pi pi-angle-double-right"></i></button>
    </div>

    <div id="calendar" class="calendar">
      <!-- Day Names Header -->
      <div class="day-name" v-for="(dayName, index) in dayNames" :key="index">
        {{ dayName }}
      </div>

      <!-- Calendar Days -->
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
import 'primeicons/primeicons.css'

export default {
  data() {
    return {
      calendarDays: [],
      showBookingPopup: false,
      selectedDay: null,
      bookingOptions: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
      reservedSlots: {},
      currentMonth: null,
      currentYear: null,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    };
  },
  computed: {
    formattedMonth() {
      const date = new Date(this.currentYear, this.currentMonth);
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();
      return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
    }
  },
  mounted() {
    const now = new Date();
    this.currentMonth = now.getMonth();
    this.currentYear = now.getFullYear();
    this.generateCalendar();
  },
  methods: {
    generateCalendar() {
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const totalSlots = 42;

      let day = 1;
      let calendarDays = [];

      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null);
      }

      for (let i = firstDayOfMonth; i < totalSlots; i++) {
        if (day > daysInMonth) break;
        calendarDays.push(day);
        day++;
      }

      this.calendarDays = calendarDays;
    },
    showBookingOptions(day) {
      this.selectedDay = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
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
      const dateKey = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      return this.reservedSlots[dateKey]?.includes(option);
    },
    goToPreviousMonth() {
      this.currentMonth--;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      this.generateCalendar();
    },
    goToNextMonth() {
      this.currentMonth++;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }
      this.generateCalendar();
    }
  }
};
</script>

<style scoped>
.calendar-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #aca5a5;
  color: #fff;
}

.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}

.calendar-header button {
  background: none;
  border: none;
  font-size: 24px;
  color: #ffffff;
  margin: 0 10px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.calendar-header button:hover {
  color: #626160;
  transform: scale(1.1);
}

.calendar-title {
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
  padding: 30px;
  width: 1300px;
  background-color: #908686;
  border-radius: 12px;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #4e4e4e, #6c6c6c);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #000000;
}

.day:hover {
  background: linear-gradient(135deg, #3d3738, #6c6c6c);
  transform: scale(1.1);
}

.day.empty {
  background: transparent;
  border: none;
  cursor: default;
}

.booking-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2c2c2c;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.1);
  width: 420px;
  z-index: 10;
  text-align: center;
}

.booking-popup h2 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
}

.booking-popup p {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 20px;
}

.booking-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.booking-option {
  padding: 16px;
  font-size: 18px;
  background: linear-gradient(135deg, #555, #777);
  border: 2px solid #666;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;
}

.booking-option:hover {
  background: linear-gradient(135deg, #777, #999);
  transform: scale(1.05);
}

.booking-option.reserved {
  background: #444;
  color: #999;
  border: 2px solid #777;
  cursor: not-allowed;
  text-decoration: line-through;
}

.close-btn {
  margin-top: 20px;
  width: 100%;
  padding: 16px;
  font-size: 18px;
  background-color: #656060;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: #383737;
}

.day-name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #4e4e4e;
  border-radius: 8px;
}
</style>
