    // API URL for BTC to USD conversion rate
    const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

    // Function to convert BTC to USD
    async function convertBTCtoUSD() {
      const usdAmount = document.getElementById('usdAmt').value;

      if (!usdAmount || usdAmount <= 0) {
        alert('Please enter a valid USD amount');
        return;
      }

      try {
        // Fetch the current BTC to USD rate
        const response = await fetch(API_URL);
        const data = await response.json();

        // Extract the conversion rate
        const rate = data.bitcoin.usd;

        // Calculate the equivalent USD amount
        const convertedAmount = (usdAmount / rate).toFixed(5);

        // Display the result
        document.getElementById('result').textContent = 
          `${usdAmount} USD = ${convertedAmount} BTC`;
      } catch (error) {
        alert('Error fetching conversion rate: ' + error.message);
      }
    }
 
