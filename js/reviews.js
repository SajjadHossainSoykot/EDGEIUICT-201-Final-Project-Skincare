// reviewsData.js
const reviews = [
    {
        image: "images/reviewers/Angelina.jpg",
        testimonial: "Shithy Skin Care's products are simply amazing! My skin has never felt so rejuvenated.",
        name: "Angelina Jolie"
    },
    {
        image: "images/reviewers/Aishwarya.jpg",
        testimonial: "The personalized care and attention at Shithy Skin Care make all the difference. Highly recommended!",
        name: "Aishwarya Rai"
    },
    {
        image: "images/reviewers/emma.jpg",
        testimonial: "I love the natural ingredients in Shithy Skin Care products. They work wonders on my sensitive skin.",
        name: "Emma Watson"
    },
    {
        image: "images/reviewers/priyanka.jpg",
        testimonial: "The skin care services at Shithy Skin Care are top-notch. I always leave feeling refreshed and glowing.",
        name: "Priyanka Chopra"
    },
    {
        image: "images/reviewers/deepika.jpg",
        testimonial: "Shithy Skin Care has transformed my skin routine. I can't imagine my life without their products.",
        name: "Deepika Padukone"
    }
];


// reviews.js
$(document).ready(function () {
    const reviewsContainer = $('#reviews-carousel');

    reviews.forEach(review => {
        const reviewItem = `
            <div class="owl-item">
                <div class="card">
                    <div class="img-card">
                        <img src="${review.image}" alt="${review.name}">
                    </div>
                    <div class="stars text-center mt-3">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="testimonial mt-4 mb-2 text-center">
                        ${review.testimonial}
                    </div>
                    <div class="name">
                        ${review.name}
                    </div>
                </div>
            </div>
        `;
        reviewsContainer.append(reviewItem);
    });

    reviewsContainer.owlCarousel({
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});