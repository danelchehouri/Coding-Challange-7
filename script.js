//U20452568

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Get form values
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;

        // Validate form values
        if (name === '' || rating === '' || comments === '') {
            alert('All fields are required!');
            return;
        }

        // Create feedback element
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');

        const feedbackName = document.createElement('h3');
        feedbackName.textContent = `Name: ${name}`;

        const feedbackRating = document.createElement('p');
        feedbackRating.textContent = `Rating: ${rating}`;

        const feedbackComments = document.createElement('p');
        feedbackComments.textContent = `Comments: ${comments}`;

        feedbackItem.appendChild(feedbackName);
        feedbackItem.appendChild(feedbackRating);
        feedbackItem.appendChild(feedbackComments);

        // Append feedback item to display area
        feedbackDisplay.appendChild(feedbackItem);

        // Reset form
        form.reset();
    });
});
