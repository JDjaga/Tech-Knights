const facultyData = [
  {
    id: 1,
    name: "Dr. Birmohan Singh",
    qualifications: "Ph.D., M.E.",
    phone: "+91-1672-253208",
    email: "birmohansingh@sliet.ac.in",
    availableSlots: ["10:00 AM", "12:00 PM", "02:00 PM"],
    bookedSlots: []
  },
  {
    id: 2,
    name: "Dr. Damanpreet Singh",
    qualifications: "Ph.D., M.Tech, B.Tech.",
    phone: "+91-1672-253210",
    email: "damanpreets@sliet.ac.in",
    availableSlots: ["09:00 AM", "11:00 AM", "03:00 PM"],
    bookedSlots: []
  },
  {
    id: 3,
    name: "Dr. Major Singh Goraya",
    qualifications: "Ph.D., M.Tech., B.Tech.",
    phone: "01672-253212",
    email: "mjrsingh@yahoo.com",
    availableSlots: ["08:00 AM", "01:00 PM", "04:00 PM"],
    bookedSlots: []
  },
  {
    id: 4,
    name: "Dr. Manoj Sachan",
    qualifications: "B.Tech(Computer Science), M.E(Computer Science), Ph.D (Computer Science & Engineering)",
    phone: "+91-1672-253214",
    email: "manojsachan@sliet.ac.in",
    availableSlots: ["09:00 AM", "12:30 PM", "04:30 PM"],
    bookedSlots: []
  },
  {
    id: 5,
    name: "Dr. Gurjinder Kaur",
    qualifications: "B.E., M.S., Ph.D.",
    phone: "+91-1672-253326",
    email: "gurjinder13@yahoo.com",
    availableSlots: ["11:00 AM", "01:00 PM", "05:00 PM"],
    bookedSlots: []
  },
  {
    id: 6,
    name: "Dr. Amar Nath",
    qualifications: "Ph.D. in CSE from IIT Roorkee, M.Tech in CSE, B.Tech in CSE",
    phone: "01672-253610",
    email: "amarnath@sliet.ac.in",
    availableSlots: ["10:30 AM", "01:30 PM", "03:00 PM"],
    bookedSlots: []
  },
  {
    id: 7,
    name: "Dr. Jagdeep Singh",
    qualifications: "Ph.D. in Routing Networks, M.Tech, B.Tech",
    phone: "01672-253320",
    email: "jagdeep@sliet.ac.in",
    availableSlots: ["09:30 AM", "12:00 PM", "02:30 PM"],
    bookedSlots: []
  },
  {
    id: 8,
    name: "Dr. Manminder Singh",
    qualifications: "B.Tech, M.Tech, Ph.D (Computer Science & Engineering)",
    phone: "+91-01672-253328",
    email: "manmindersingh@sliet.ac.in",
    availableSlots: ["11:30 AM", "01:30 PM", "04:00 PM"],
    bookedSlots: []
  },
  {
    id: 9,
    name: "Dr. Preetpal Kaur Buttar",
    qualifications: "Ph.D (Computer Science & Engineering)",
    phone: "01672-253614",
    email: "preetpal@sliet.ac.in",
    availableSlots: ["10:00 AM", "02:00 PM", "04:30 PM"],
    bookedSlots: []
  },
  {
    id: 10,
    name: "Dr. Tajinder Singh",
    qualifications: "Ph.D in Text Mining and Social Media",
    phone: "+91-6283963279",
    email: "tajindersingh@sliet.ac.in",
    availableSlots: ["09:00 AM", "12:30 PM", "03:30 PM"],
    bookedSlots: []
  },
  {
    id: 11,
    name: "Dr. Utkarsh",
    qualifications: "Ph.D., M.Tech, B.Tech (Information Technology)",
    phone: "N/A",
    email: "utkarsh@sliet.ac.in",
    availableSlots: ["10:00 AM", "01:00 PM", "03:00 PM"],
    bookedSlots: []
  },
  {
    id: 12,
    name: "Dr. Vinod Kumar Verma",
    qualifications: "Ph.D. Computer Science and Engineering",
    phone: "+91-1672-253218",
    email: "vinod5881@gmail.com",
    availableSlots: ["11:00 AM", "12:30 PM", "04:00 PM"],
    bookedSlots: []
  },
  {
    id: 13,
    name: "Jaspal Singh",
    qualifications: "M.E. (CSE & IT), Pursuing PhD in Cloud Computing",
    phone: "01672-253327",
    email: "jaspalsingh@sliet.ac.in",
    availableSlots: ["09:30 AM", "01:30 PM", "03:30 PM"],
    bookedSlots: []
  },
  {
    id: 14,
    name: "Rahul Gautam",
    qualifications: "Ph.D. pursuing, M.Tech (Computer Science and Applications)",
    phone: "+91-1672-253612",
    email: "rahulgautam@sliet.ac.in",
    availableSlots: ["10:30 AM", "02:30 PM", "05:00 PM"],
    bookedSlots: []
  },
  {
    id: 15,
    name: "Dr. Jatinder Pal Singh",
    qualifications: "Ph.D. in Computer Science and Engineering",
    phone: "N/A",
    email: "jatinderpalsingh@sliet.ac.in",
    availableSlots: ["08:00 AM", "11:00 AM", "02:00 PM"],
    bookedSlots: []
  },
  {
    id: 16,
    name: "Sukhpreet Singh",
    qualifications: "B.Tech, M.Tech, Ph.D (Pursuing)",
    phone: "N/A",
    email: "sukhpreet.manshahia@gmail.com",
    availableSlots: ["09:00 AM", "12:00 PM", "03:00 PM"],
    bookedSlots: []
  },
  {
    id: 17,
    name: "Chinu",
    qualifications: "Ph.D.(Pursuing), M.Tech, B.Tech",
    phone: "9915025805",
    email: "chinu@sliet.ac.in",
    availableSlots: ["10:30 AM", "02:00 PM", "04:00 PM"],
    bookedSlots: []
  },
  {
    id: 18,
    name: "Dr. Vikash Kumar Garg",
    qualifications: "Ph.D. in Big Data, Hadoop, MongoDB (Computer Science & Engineering)",
    phone: "9988610629",
    email: "contactvikashgarg@gmail.com",
    availableSlots: ["09:30 AM", "12:30 PM", "03:30 PM"],
    bookedSlots: []
  },
  {
    id: 19,
    name: "Sunita Rani",
    qualifications: "Ph.D.(Pursuing), M.Tech, B.Tech",
    phone: "8196013222",
    email: "sunitarani@sliet.ac.in",
    availableSlots: ["11:00 AM", "02:00 PM", "04:30 PM"],
    bookedSlots: []
  }
];


// Function to render the filtered faculty data
function renderFacultyList(filteredData) {
const mentorList = document.querySelector('.faculty-container');
mentorList.innerHTML = ''; // Clear previous results

filteredData.forEach(faculty => {
    const availableSlots = faculty.availableSlots.filter(slot => !faculty.bookedSlots.includes(slot));
    const card = document.createElement('div');
    card.classList.add('faculty-card');

    const buttonHTML = availableSlots.length
        ? `<button onclick="openBookingForm(${faculty.id})">Book a Session</button>`
        : `<button class="disabled-button" disabled>Book a Session</button>`;

    card.innerHTML = `
        <h3>${faculty.name}</h3>
        <p><strong>Qualifications:</strong> ${faculty.qualifications}</p>
        <p><strong>Phone:</strong> ${faculty.phone || 'N/A'}</p>
        <p><strong>Email:</strong> ${faculty.email}</p>
        <p><strong>Available Slots:</strong> ${availableSlots.length ? availableSlots.join(', ') : 'No slots available'}</p>
        ${buttonHTML}
    `;

    mentorList.appendChild(card);
});
}

// Initial render with all data
renderFacultyList(facultyData);

// Function to filter faculty based on search input and availability
function filterFaculty() {
const searchValue = document.getElementById('search-mentor').value.toLowerCase();
const availabilityValue = document.getElementById('filter-availability').value;

const filteredData = facultyData.filter(faculty => {
    const matchesName = faculty.name.toLowerCase().includes(searchValue);
    const availableSlots = faculty.availableSlots.filter(slot => !faculty.bookedSlots.includes(slot));
    const isAvailable = availableSlots.length > 0;

    const matchesAvailability = 
        availabilityValue === 'all' || 
        (availabilityValue === 'available' && isAvailable) || 
        (availabilityValue === 'unavailable' && !isAvailable);

    return matchesName && matchesAvailability;
});

renderFacultyList(filteredData);
}

// Attach event listeners to search input and filter dropdown
document.getElementById('search-mentor').addEventListener('input', filterFaculty);
document.getElementById('filter-availability').addEventListener('change', filterFaculty);

// DOM manipulation code for booking
const bookingForm = document.getElementById('booking-form');
const mentorNameSpan = document.getElementById('mentor-name');
const availableSlotsSelect = document.getElementById('available-slots');
const bookingFormElement = document.getElementById('booking');
const studentNameInput = document.getElementById('student-name');
const closeFormButton = document.getElementById('close-form');

// Function to open booking form
window.openBookingForm = function (facultyId) {
const selectedFaculty = facultyData.find(faculty => faculty.id === facultyId);
mentorNameSpan.textContent = selectedFaculty.name;

// Clear previous options
availableSlotsSelect.innerHTML = '';

// Populate available slots that aren't booked
selectedFaculty.availableSlots.forEach(slot => {
    if (!selectedFaculty.bookedSlots.includes(slot)) {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        availableSlotsSelect.appendChild(option);
    }
});

// Show booking form and scroll to it
bookingForm.style.display = 'block';
bookingForm.scrollIntoView({ behavior: 'smooth' }); // Scroll to the booking form
bookingFormElement.dataset.facultyId = facultyId; // Set data-facultyId to track which faculty is being booked
};

// Function to close booking form
closeFormButton.addEventListener('click', () => {
bookingForm.style.display = 'none';
});

// Function to book a slot
bookingFormElement.addEventListener('submit', (event) => {
event.preventDefault();

const facultyId = parseInt(bookingFormElement.dataset.facultyId);
const selectedFaculty = facultyData.find(faculty => faculty.id === facultyId);
const selectedSlot = availableSlotsSelect.value;
const studentName = studentNameInput.value.trim();

// Check if a student name and slot are provided
if (studentName && selectedSlot) {
    // Add the slot to booked slots
    selectedFaculty.bookedSlots.push(selectedSlot);

    // Log the booking (this can be expanded to store or send data)
    console.log(`Session booked with ${selectedFaculty.name} at ${selectedSlot} for ${studentName}`);

    // Hide booking form
    bookingForm.style.display = 'none';

    // Optionally, you can refresh the faculty profiles to update the available slots on the UI
    filterFaculty(); // Redisplay profiles to update UI based on filter
} else {
    alert('Please enter your name and select a slot.');
}
});

// Initial call to display faculty profiles
renderFacultyList(facultyData);

// Scroll to the booking form when the link is clicked
document.querySelector('a[href="#booking-form"]').addEventListener('click', (event) => {
event.preventDefault();
bookingForm.scrollIntoView({ behavior: 'smooth' });
bookingForm.style.display = 'block'; // Show the booking form when link is clicked
});
