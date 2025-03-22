document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let car = document.getElementById("car").value;
        let pickup = document.getElementById("pickup").value;
        let dropoff = document.getElementById("dropoff").value;

        if (!pickup || !dropoff) {
            alert("Please select both pickup and drop-off dates.");
            return;
        }

        let pickupDate = new Date(pickup);
        let dropoffDate = new Date(dropoff);
        let now = new Date();

        // Set pickup time to 12:00 AM for comparison
        pickupDate.setHours(0, 0, 0, 0);
        dropoffDate.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);

        if (pickupDate < now) {
            alert("Pickup date cannot be in the past.");
            return;
        }

        if (pickupDate.getTime() === now.getTime()) {
            let currentHour = new Date().getHours();
            let currentMinute = new Date().getMinutes();

            let inputTime = prompt("Enter pickup time (HH:MM, 24-hour format):");
            if (!inputTime) return;

            let [inputHour, inputMinute] = inputTime.split(":").map(Number);

            if (inputHour < currentHour || (inputHour === currentHour && inputMinute < currentMinute)) {
                alert("Pickup time cannot be in the past.");
                return;
            }
        }

        if (pickupDate >= dropoffDate) {
            alert("Drop-off date must be after the pickup date.");
            return;
        }

        alert(`✅ Booking Confirmed!\nCar: ${car}\nPickup: ${pickup}\nDrop-off: ${dropoff}`);
    });
});
