
function highLow(numbers) {
    let highest = numbers[0];
    let lowest = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
      
      if (numbers[i] < lowest) {
        lowest = numbers[i];
      }
    }
    
    return { highest, lowest };
  }


  function getPrimes(num) {
    const primes = [];
    
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        primes.push(i);
      }
    }
    
    return primes;
  }


  function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
   }