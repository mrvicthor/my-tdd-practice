export default function numbersLessThan1000() {
  const primes = [];
  const isPrimes = Array(1000).fill(true);
  for (let i = 2; i < 1000; i += 1) {
    if (isPrimes[i]) {
      primes.push(i);
      for (let j = i * i; j < 1000; j += i) {
        isPrimes[j] = false;
      }
    }
  }
  return primes;
}
