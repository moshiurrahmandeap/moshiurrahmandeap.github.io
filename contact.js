document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Fetching form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Example: Send form data to a server or display a message
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Example: Displaying a success message
        alert('Message sent successfully!');
        form.reset();
    });
});