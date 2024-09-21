// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var loading = document.getElementById("loading");

// Get the images and initialize the current index
var imgs = Array.from(document.querySelectorAll(".gallery a"));
var currentIndex = 0;

// Function to open the modal
function openModal(index) {
    modal.style.display = "block";
    loading.style.display = "block"; // Show loading spinner
    var img = imgs[index].querySelector("img");
    modalImg.src = img.src;
    captionText.textContent = imgs[index].getAttribute("data-description");
    currentIndex = index;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    loading.style.display = "none"; // Hide loading spinner
}

// Function to show the next image
function showNext() {
    currentIndex = (currentIndex + 1) % imgs.length;
    openModal(currentIndex);
}

// Function to show the previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    openModal(currentIndex);
}

// Attach click events to the images
imgs.forEach(function(anchor, index) {
    anchor.onclick = function(event) {
        event.preventDefault();
        openModal(index);
    }
});

// Attach click events to the modal close and cancel buttons, and navigation arrows
var closeBtn = document.getElementsByClassName("close")[0];
var cancelBtn = document.getElementsByClassName("cancel")[0];
closeBtn.onclick = closeModal;
cancelBtn.onclick = closeModal;

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];
prev.onclick = showPrev;
next.onclick = showNext;

// Hide the loading spinner when the image is fully loaded
modalImg.onload = function() {
    loading.style.display = "none";
};
