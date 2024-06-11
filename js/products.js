$(document).ready(function () {
    // Define an array of skincare products
    const products = [
        // Oily acne prone skin
        {
            name: "Sebionex Cleansing Gel",
            image: "images/products/Sebionex_Cleansing_Gel.jpg",
            type: "Cleanser for Oily Skin",
            usage: "Ideal for daily cleansing to remove excess oil and impurities, helping to prevent acne breakouts.",
            price: 15.00
        },
        {
            name: "Avene Cleanance Gel",
            image: "images/products/Avene_Cleanance_Gel.jpg",
            type: "Cleanser for Acne-Prone Skin",
            usage: "Gentle cleanser designed to cleanse and purify oily, acne-prone skin without causing irritation.",
            price: 12.00
        },
        {
            name: "Cosrx Salicylic Acid Cleanser",
            image: "images/products/Cosrx_Salicylic_Acid_Cleanser.jpg",
            type: "Salicylic Acid Cleanser",
            usage: "Contains salicylic acid to exfoliate and unclog pores, reducing acne and blackheads for clearer skin.",
            price: 10.00
        },
        {
            name: "Bioderma Sebium Hydra",
            image: "images/products/Bioderma_Sebium_Hydra.jpg",
            type: "Hydrating Moisturizer for Oily Skin",
            usage: "Provides hydration without clogging pores, helping to balance oil production and prevent dryness.",
            price: 20.00
        },
        {
            name: "CeraVe Moisturising Lotion",
            image: "images/products/CeraVe_Moisturising_Lotion.jpg",
            type: "Lightweight Moisturizer for All Skin Types",
            usage: "Non-comedogenic formula suitable for daily use, providing long-lasting hydration for smooth, healthy skin.",
            price: 18.00
        },
        {
            name: "Simple Hydrating Light Moisturiser",
            image: "images/products/Simple_Hydrating_Light_Moisturiser.jpg",
            type: "Gentle Moisturizer for Sensitive Skin",
            usage: "Lightweight, fragrance-free formula suitable for sensitive skin, providing hydration without irritation.",
            price: 15.00
        },
        {
            name: "Avene Sunscreen",
            image: "images/products/Avene_Sunscreen.jpg",
            type: "Broad Spectrum Sunscreen",
            usage: "Provides high protection against UVA/UVB rays, ideal for daily use to prevent sun damage and premature aging.",
            price: 15.00
        },
        {
            name: "Bioderma Photoderm",
            image: "images/products/Bioderma_Photoderm.jpg",
            type: "Photoprotective Sunscreen",
            usage: "Offers very high sun protection while enhancing the skin's natural defenses against the harmful UV radiation.",
            price: 18.00
        },
        {
            name: "Missha Aqua Sunscreen",
            image: "images/products/Missha_Aqua_Sunscreen.jpg",
            type: "Waterproof Sunscreen with Hyaluronic Acid",
            usage: "Water-resistant formula enriched with hyaluronic acid to hydrate and protect the skin from sun damage.",
            price: 25.00
        },
        // Dry skin
        {
            name: "Cetaphil Cleanser",
            image: "images/products/Cetaphil_Cleanser.jpg",
            type: "Gentle Cleanser for Dry Skin",
            usage: "Soap-free formula cleanses without stripping skin's natural oils, leaving it soft and moisturized.",
            price: 10.00
        },
        {
            name: "Simple Moisturising Facial Wash",
            image: "images/products/Simple_Moisturising_Facial_Wash.jpg",
            type: "Hydrating Cleanser for Dry and Sensitive Skin",
            usage: "Mild, soap-free cleanser enriched with vitamins to gently cleanse and nourish dry, sensitive skin.",
            price: 12.00
        },
        {
            name: "CeraVe Hydrating Facial Cleanser",
            image: "images/products/CeraVe_Hydrating_Facial_Cleanser.jpg",
            type: "Hydrating Cleanser for Normal to Dry Skin",
            usage: "Non-foaming formula effectively removes dirt and makeup while hydrating and replenishing skin's natural barrier.",
            price: 14.00
        },
        {
            name: "Cera Ve Moisturising Cream",
            image: "images/products/Cera_Ve_Moisturising_Cream.jpg",
            type: "Rich Moisturizer for Dry Skin",
            usage: "Intensely hydrating cream that replenishes moisture and helps restore the skin's natural protective barrier.",
            price: 16.00
        },
        {
            name: "Cetaphil Moisturising Lotion",
            image: "images/products/Cetaphil_Moisturising_Lotion.jpg",
            type: "Lightweight Moisturizer for Dry Skin",
            usage: "Non-greasy formula that hydrates and soothes dry skin, leaving it soft and smooth.",
            price: 14.00
        },
        {
            name: "Olay Day Cream",
            image: "images/products/Olay_Day_Cream.jpg",
            type: "Daily Moisturizer for Dry Skin",
            usage: "Provides all-day hydration with a rich, non-greasy formula that absorbs quickly into the skin.",
            price: 22.00
        },
        {
            name: "Missha Essence Sun Milk",
            image: "images/products/Missha_Essence_Sun_Milk.jpg",
            type: "Essence Sunscreen for Dry Skin",
            usage: "Lightweight, milky formula that provides broad-spectrum protection while nourishing and hydrating dry skin.",
            price: 20.00
        },
        {
            name: "Neutrogena Ultra Sheer Sunscreen",
            image: "images/products/Neutrogena_Ultra_Sheer_Sunscreen.jpg",
            type: "Ultra-Light Sunscreen for Dry Skin",
            usage: "Oil-free and non-comedogenic formula that absorbs quickly, leaving a weightless, matte finish on the skin.",
            price: 18.00
        },
        {
            name: "Eucerin Sunscreen",
            image: "images/products/Eucerin_Sunscreen.jpg",
            type: "Sensitive Skin Sunscreen",
            usage: "Gentle, fragrance-free formula suitable for sensitive skin, providing effective protection against UV rays.",
            price: 15.00
        }
        // Add more skincare products as needed
    ];
    
    

    // Function to generate skincare product cards
    function generateProductCards() {
        const productCardsContainer = document.getElementById('productCards');
        productCardsContainer.innerHTML = ''; // Clear previous cards

        products.forEach(function (product) {
            const cardHtml = `
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="product-info d-flex flex-column align-items-center">
                        <div class="pic">
                            <img src="${product.image}" class="img-fluid" alt="Product Image" />
                        </div>
                        <div class="product-details text-center mt-3">
                            <h4 class="productName">${product.name}</h4>
                            <p class="product-type">Type: ${product.type}</p>
                            <p class="product-usage">Usage: ${product.usage}</p>
                            <p class="price-container">
                                Price: $<span class="productPrice">${product.price.toFixed(2)}</span>
                            </p>
                            <button class="btn btn-success buy-now" data-toggle="modal" data-target="#buyModal">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productCardsContainer.innerHTML += cardHtml;
        });
    }

    // Call the function to generate skincare product cards
    generateProductCards();

    // Event listener for opening the modal
    $('#productCards').on('click', '.buy-now', function () {
        var cardBody = $(this).closest('.product-details');
        var name = cardBody.find('.productName').text();
        var price = cardBody.find('.productPrice').text();

        $('#productName').val(name);
        $('#productPrice').val(price);
        $('#buyModalLabel').text('Buy: ' + name);
        $('#quantity').val(1);
        $('#totalPrice').val('$' + price);
    });

    // Event listener for quantity change
    $('#quantity').on('input', function () {
        var price = $('#productPrice').val();
        var quantity = $(this).val();
        var total = price * quantity;
        $('#totalPrice').val('$' + total.toFixed(2));
    });

    // Proceed to confirmation
    $('#proceedToConfirmation').on('click', function () {
        var name = $('#productName').val();
        var customerName = $('#customerName').val();
        var cardNumber = $('#cardNumber').val();
        var pin = $('#pin').val();
        var quantity = $('#quantity').val();
        var total = $('#totalPrice').val();
        if (!customerName || !cardNumber || !pin || !quantity) {
            alert('Please fill in all the details.');
            return;
        }
        $('#confirmationMessage').html(`
            <p>Name: ${customerName}</p>
            <p>Card Number: ${cardNumber}</p>
            <p>Product: ${name}</p>
            <p>Quantity: ${quantity}</p>
            <p>Total Price: ${total}</p>
        `);
        $('#buyModal').modal('hide');
        $('#confirmationModal').modal('show');
    });

    // Confirm purchase
    $('#confirmPurchase').on('click', function () {
        $('#confirmationModal').modal('hide');
        $('#buyForm')[0].reset();
        $('#totalPrice').val('');
        $('#successModal').modal('show');
    });
});
