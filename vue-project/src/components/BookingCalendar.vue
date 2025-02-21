<template>
    <div>
      <div id="calendar" class="calendar">
        <div v-for="(day, index) in calendarDays" :key="index" class="day" :class="{ empty: day === null }" @click="day && showBookingOptions(day)">
          {{ day }}
        </div>
      </div>
  
      <!-- Booking Popup -->
      <div v-if="showBookingPopup" class="booking-popup">
        <div class="booking-options">
          <div v-for="(option, index) in bookingOptions" :key="index" class="booking-option" @click="bookOption(option)">
            {{ option }} - Available
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
        bookingOptions: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM']
      };
    },
    methods: {
      fetchBookingCalendar() {
        fetch('bookingCalendar.html')
          .then(response => response.text())
          .then(data => {
            this.$refs.bookingCalendar.innerHTML = data;
          })
          .catch(error => console.error('Error loading the booking calendar:', error));
      },
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
        alert(`You have booked ${option} on day ${this.selectedDay}`);
        this.closeBookingPopup();
      }
    },
    mounted() {
      this.generateCalendar();
      this.fetchBookingCalendar();
    }
  };
  </script>
  
  <style scoped>
  /* General Calendar Styling */
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
  
  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    cursor: pointer;
    font-weight: bold;
  }
  
  .day.empty {
    background-color: transparent;
    border: none;
  }
  
  .day:hover {
    background-color: #d4d4d4;
  }
  
  /* Booking Popup Styling */
  .booking-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    z-index: 10;
  }
  
  .booking-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .booking-option {
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    cursor: pointer;
    text-align: center;
  }
  
  .booking-option:hover {
    background-color: #e0e0e0;
  }
  
  .close-btn {
    margin-top: 15px;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-btn:hover {
    background-color: #0056b3;
  }
  </style>
  