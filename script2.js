document.addEventListener('DOMContentLoaded', () => {
    // Play Sounds
    const notifyBtn = document.getElementById('notifyBtn');
    notifyBtn.addEventListener('click', () => {
        const audio = new Audio('sad_hamster.mp3');
        audio.play();
    });

       // Show Image with Animation
       const showImageBtn = document.getElementById('showImageBtn');
       const imageContainer = document.getElementById('imageContainer');
   
       showImageBtn.addEventListener('click', () => {
           if (!imageContainer.firstChild) {
               const img = document.createElement('img');
               img.src = '2.jpg'; // Update with your image path
               img.alt = 'мне этот мир абсолютно не понятен...';
   
               imageContainer.appendChild(img);
               imageContainer.style.display = 'block';
   
               // Trigger reflow to enable transition
               img.offsetHeight;
               imageContainer.classList.add('show');
           }
       });
   });

   //for next/back form
   document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;

    function showStep(step) {
        document.querySelectorAll('.step').forEach((element, index) => {
            if (index === step - 1) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    function nextStep() {
        if (currentStep < document.querySelectorAll('.step').length) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function previousStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Next and Previous button event listeners
    document.getElementById('nextStep1').addEventListener('click', nextStep);
    document.getElementById('nextStep2').addEventListener('click', nextStep);
    document.getElementById('prevStep2').addEventListener('click', previousStep);
    document.getElementById('prevStep3').addEventListener('click', previousStep);

    // Form submission event
    document.getElementById('multiStepForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Simulate form submission
        console.log('Form Data:', formData);
        
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('multiStepForm').reset();

        // Reset to first step after submission
        currentStep = 1;
        showStep(currentStep);
    });

    // Initialize the first step
    showStep(currentStep);
});