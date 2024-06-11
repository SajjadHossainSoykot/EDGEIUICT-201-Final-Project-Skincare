// JavaScript for Services Selection
document.addEventListener('DOMContentLoaded', function() {
    const services = {
        service1: {
            name: "Deep Cleansing Facial",
            price: 60.00,
            details: "A thorough cleansing treatment that includes steaming, exfoliation, and extraction to remove impurities and leave the skin refreshed and glowing.",
            image: "images/services/deep_cleansing_facial.jpg"
        },
        service2: {
            name: "Micro-dermabrasion",
            price: 80.00,
            details: "A non-invasive treatment that uses fine crystals to exfoliate the skin, reducing the appearance of fine lines, wrinkles, and acne scars.",
            image: "images/services/microdermabrasion.jpg"
        },
        service3: {
            name: "Chemical Peel",
            price: 90.00,
            details: "A chemical solution applied to the skin to exfoliate and improve texture, tone, and overall appearance, reducing signs of aging and sun damage.",
            image: "images/services/chemical_peel.jpg"
        },
        service4: {
            name: "Hydra Facial",
            price: 150.00,
            details: "A multi-step treatment that cleanses, exfoliates, extracts impurities, and hydrates the skin using a specialized device, providing instant results.",
            image: "images/services/hydrafacial.jpg"
        },
        service5: {
            name: "Anti-Aging Facial",
            price: 70.00,
            details: "A rejuvenating facial that targets signs of aging such as fine lines, wrinkles, and loss of elasticity, using anti-aging products and techniques to promote a youthful appearance.",
            image: "images/services/anti_aging_facial.jpg"
        },
        service6: {
            name: "Acne Treatment Facial",
            price: 65.00,
            details: "A specialized facial designed to treat acne-prone skin, including deep cleansing, exfoliation, and anti-bacterial treatments to reduce breakouts and inflammation.",
            image: "images/services/acne_treatment_facial.jpg"
        },
        service7: {
            name: "LED Light Therapy",
            price: 50.00,
            details: "A non-invasive treatment that uses LED lights to stimulate collagen production, reduce inflammation, and treat various skin concerns such as acne and fine lines.",
            image: "images/services/led_light_therapy.jpg"
        },
        service8: {
            name: "Vitamin C Facial",
            price: 75.00,
            details: "A brightening facial that incorporates vitamin C to boost collagen production, improve skin tone, and reduce the appearance of dark spots and hyperpigmentation.",
            image: "images/services/vitamin_c_facial.jpg"
        },
        service9: {
            name: "Oxygen Facial",
            price: 100.00,
            details: "A hydrating and revitalizing facial that infuses oxygen into the skin, promoting cell regeneration and leaving the skin plump, hydrated, and glowing.",
            image: "images/services/oxygen_facial.jpg"
        },
        service10: {
            name: "Collagen Boost Facial",
            price: 85.00,
            details: "A nourishing facial that uses collagen-infused products to improve skin elasticity, firmness, and hydration, helping to reduce the signs of aging.",
            image: "images/services/collagen_boost_facial.jpg"
        }
    };
    

    const teamContainer = document.getElementById('team-container');
    const select = document.getElementById('service');
    
    // Populate the select options and create service cards dynamically
    Object.entries(services).forEach(([id, service], index) => {
        // Create select option
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${index + 1}) ${service.name}`;
        select.appendChild(option);
        
        // Create service card
        const serviceCard = document.createElement('div');
        serviceCard.className = 'col-lg-6';
        serviceCard.setAttribute('data-aos', 'fade-up');
        serviceCard.setAttribute('data-aos-delay', '100');
        serviceCard.innerHTML = `
          <div class="team-member d-flex align-items-start">
            <div class="pic">
              <img src="${service.image}" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>${service.name}</h4>
              <h5>Price: $${service.price.toFixed(2)}</h5>
              <p>${service.details}</p>
              <a class="btn btn-success appointment-btn" href="#appointment" data-service-id="${id}">Book Appointment</a>
            </div>
          </div>
        `;
        teamContainer.appendChild(serviceCard);
    });

    // Handle the click event for the appointment buttons
    document.querySelectorAll('.appointment-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const serviceId = this.getAttribute('data-service-id');
            if (serviceId && services.hasOwnProperty(serviceId)) {
                select.value = serviceId;
            } else {
                select.value = '';
            }
            document.querySelector('#appointment').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// JavaScript for Appointment Form Validation and Modal
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              event.preventDefault();
              $("#confirmationModal").modal("show");
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
});

// Handle confirmation and clearing form data
$(document).ready(function () {
  $("#confirmAppointment").click(function () {
    $("#confirmationModal").modal("hide");
    $("#finalConfirmationModal").modal("show");

    // Clear the form data
    $("#appointment-form")[0].reset();
    $(".needs-validation").removeClass("was-validated");
  });
});
