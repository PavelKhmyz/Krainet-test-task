const nthFibo = (n) => {
  const fiboArray = [0, 1];

  for (let i = 1; i < n; i++) {
    fiboArray.push((fiboArray[fiboArray.length - 1]) + (fiboArray[fiboArray.length - 2]));
  }
  return fiboArray[n - 1];
}
