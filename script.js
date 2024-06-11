// Get the necessary elements
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const checkAvailabilityBtn = document.getElementById('check-availability');
const availabilityResult = document.getElementById('availability-result');

// Add an event listener to the "Check Availability" button
checkAvailabilityBtn.addEventListener('click', () => {
  const checkInDate = checkInInput.value;
  const checkOutDate = checkOutInput.value;

  // You can add your logic here to check availability based on the selected dates
  // For example, you can send an AJAX request to a server-side script that checks availability in your database

  // For demonstration purposes, we'll just display a simple message
  const availabilityMessage = `Rooms are available from ${checkInDate} to ${checkOutDate}`;
  availabilityResult.textContent = availabilityMessage;
});