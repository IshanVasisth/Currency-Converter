<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Realtime Currency Convertor</title>
    </head>
    <link rel="stylesheet" href="./style.css">
    <body>
        <h1>'''Convert Today, HODL Tomorrow'''</h1>
        <div class="outer-box">
            <div class="inner-box-1">
                From  :
                <div class="usdclass">
                    <img src="./assets/dollar.png" class="usd">
                    <p class="dollar"> USD</p>
                </div>
                <input type="number" id="usdAmt" class="input-box" placeholder="Enter USD amount" >
                <button onclick="convertBTCtoUSD()">Convert to BTC</button> 
            </div>
            <div class="change-div">
                <a href="./index.html"><img src="./assets/image copy.png"  class="interchange"></a>
            </div>
            <div class="inner-box-2">
                To : 
                <div class="btcclass">
                    <img src="./assets/btc.png" class="btc">
                    <p class="Bitcoins"> BTC</p>
                </div>
                <div id="result"></div>
            </div>
        </div>
        <script src="index-rev.js" charset="UTF-8"></script>
    </body>
</html>
