document.addEventListener('DOMContentLoaded', function () {
    // Function to update the pricing dynamically
    function updatePrice(productNumber) {
        const currencySelect = document.getElementById(`currency${productNumber}`);
        const unitInput = document.getElementById(`units${productNumber}`);
        const priceDisplay = document.getElementById(`price${productNumber}`);
        
        const selectedCurrency = currencySelect.value;
        const numberOfUnits = unitInput.value;

        // Fictitious prices for demonstration, replace with your actual pricing logic
        const basePrices = {
            'inr': 1,  // Assuming base price in INR is 1
            'usd': 0.014,  
            'eur': 0.012, 
            'gbp': 0.011  
        };

        // Calculate the updated price based on currency and units
        const basePrice = basePrices[selectedCurrency];
        const updatedPrice = basePrice * numberOfUnits;

        // Display the updated price
        priceDisplay.textContent = `${selectedCurrency.toUpperCase()} ${updatedPrice.toFixed(2)}`;
    }

    // Attach event listeners to currency and unit input for each product
    for (let i = 1; i <= 10; i++) {
        const currencySelect = document.getElementById(`currency${i}`);
        const unitInput = document.getElementById(`units${i}`);
        const pricingCard = document.getElementById(`pricing-card${i}`);

        // Event listeners for currency and unit input changes
        currencySelect.addEventListener('change', function () {
            updatePrice(i);
        });

        unitInput.addEventListener('input', function () {
            updatePrice(i);
        });

        // Hover effect for pricing card
        pricingCard.addEventListener('mouseenter', function () {
            pricingCard.style.transform = 'scale(1.05)';
        });

        pricingCard.addEventListener('mouseleave', function () {
            pricingCard.style.transform = 'scale(1)';
        });

        // Initial price update on page load
        updatePrice(i);
    }
});
