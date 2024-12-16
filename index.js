    // API URL for BTC to USD conversion rate
    const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

    // Function to convert BTC to USD
    async function convertBTCtoUSD() {
      const btcAmount = document.getElementById('btcAmount').value;

      if (!btcAmount || btcAmount <= 0) {
        alert('Please enter a valid BTC amount');
        return;
      }

      try {
        // Fetch the current BTC to USD rate
        const response = await fetch(API_URL);
        const data = await response.json();

        // Extract the conversion rate
        const rate = data.bitcoin.usd;

        // Calculate the equivalent USD amount
        const convertedAmount = (btcAmount * rate).toFixed(2);

        // Display the result
        document.getElementById('result').textContent = 
          `${btcAmount} BTC = ${convertedAmount} USD`;
      } catch (error) {
        alert('Error fetching conversion rate: ' + error.message);
      }
    }
 
