const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"],
        correct: "Hyper Text Markup Language"
    },
]


const form = document.getElementById('feedback-form');
const toastContainer = document.getElementById('toast');

form.addEventListener('submit', (a) => {
    a.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!validateForm(name, email, subject, message)) {
        return;
    }


    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.role = 'alert';
    toast.ariaLive = 'assertive';
    toast.ariaAtomic = 'true';
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="mr-auto">Feedback submitted!</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            Thank you for your feedback!
        </div>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
});

function validateForm(name, email, subject, message) {
    if (!name ||!email ||!subject ||!message) {
        alert('All fields are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address!');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


