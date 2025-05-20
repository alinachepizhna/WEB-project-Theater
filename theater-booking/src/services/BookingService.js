const STORAGE_KEY = 'bookings';

const BookingService = {
  getAllBookings() {
    const bookings = localStorage.getItem(STORAGE_KEY);
    return bookings ? JSON.parse(bookings) : {};
  },

  getBookedSeats(performanceId) {
    const bookings = this.getAllBookings();
    return bookings[performanceId] ? bookings[performanceId].map(b => b.seat) : [];
  },

  saveBooking(performanceId, seats, userData) {
    const bookings = this.getAllBookings();

    if (!bookings[performanceId]) {
      bookings[performanceId] = [];
    }

    seats.forEach(seat => {
      bookings[performanceId].push({ seat, userData });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }
};

export default BookingService;
