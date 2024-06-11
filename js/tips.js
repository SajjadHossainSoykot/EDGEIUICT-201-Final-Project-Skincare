// Array of health tips objects
const skinCareTips = [
    {
        image: "images/tips/1.jpg",
        title: "Stay Hydrated",
        description: "Drink plenty of water to keep your skin hydrated and maintain its elasticity."
    },
    {
        image: "images/tips/2.jpg",
        title: "Cleanse Gently",
        description: "Use a gentle cleanser to remove dirt, oil, and makeup without stripping away natural oils."
    },
    {
        image: "images/tips/3.jpg",
        title: "Moisturize Daily",
        description: "Apply a moisturizer suitable for your skin type to keep it soft, smooth, and supple."
    },
    {
        image: "images/tips/4.jpg",
        title: "Protect from Sun",
        description: "Wear sunscreen with SPF 30 or higher every day to protect your skin from harmful UV rays."
    },
    {
        image: "images/tips/5.jpg",
        title: "Exfoliate Weekly",
        description: "Exfoliate to remove dead skin cells and promote cell turnover for a radiant complexion."
    },
    {
        image: "images/tips/6.jpg",
        title: "Eat a Balanced Diet",
        description: "Include fruits, vegetables, and omega-3 fatty acids in your diet for healthy, glowing skin."
    },
    {
        image: "images/tips/7.jpg",
        title: "Get Enough Sleep",
        description: "Ensure you get 7-9 hours of quality sleep each night to allow your skin to repair and rejuvenate."
    },
    {
        image: "images/tips/8.jpg",
        title: "Manage Stress",
        description: "Practice stress-relief techniques like meditation or yoga to prevent stress-related skin issues."
    },
    {
        image: "images/tips/9.jpg",
        title: "Follow a Skincare Routine",
        description: "Establish a daily skincare routine with cleanser, toner, serum, moisturizer, and sunscreen."
    },
    {
        image: "images/tips/10.jpg",
        title: "Avoid Smoking",
        description: "Smoking can accelerate aging and cause wrinkles, so quit smoking for healthier skin."
    },
    {
        image: "images/tips/11.jpg",
        title: "Exercise Regularly",
        description: "Regular exercise improves blood circulation, delivering nutrients to the skin and promoting a healthy glow."
    },
    {
        image: "images/tips/12.jpg",
        title: "Seek Professional Advice",
        description: "Consult a dermatologist for personalized skincare advice and treatment recommendations."
    }
];



// Function to generate HTML for each tip
function generateTipHTML(tip) {
    return `
    <div class="col-md-4 mb-4">
        <div class="card card-tips">
            <img src="${tip.image}" class="card-img-top" alt="${tip.title}">
            <div class="card-body">
                <h4 class="card-title">${tip.title}</h4>
                <p class="card-text">${tip.description}</p>
            </div>
        </div>
    </div>`;
}

// Function to display tips on the page
function displayTips(limit = null) {
    const tipsContainer = document.getElementById('tipsContainer');
    let tipsHTML = '';
    const tipsToShow = limit ? skinCareTips.slice(0, limit) : skinCareTips;

    tipsToShow.forEach(tip => {
        tipsHTML += generateTipHTML(tip);
    });

    tipsContainer.innerHTML = tipsHTML;
}

// Determine the number of tips to display based on the page
window.onload = () => {
    if (window.location.pathname.includes('tips.html')) {
        // Show all tips on tips.html
        displayTips();
    } else {
        // Show only the first 6 tips on the index page
        displayTips(6);
    }
};
