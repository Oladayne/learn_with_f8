
  
  // toString : chuyển đối số nhận vào thành chuỗi
  // split(''): không phải split() vì nó dùng đê tách chuỗi vừa đưa vào 
  // reverse(): không phải reverse('') vì nó sẽ đảo chiều chuỗi vừa dc tách
  // join(''): không phải join('') vì nó sẽ gộp chuỗi vừa đảo thành tham  số 
  function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [1];
    } else if (n === 2) {
      return [1, 1];
    } else {
      const prevSeries = fibonacci(n - 1);
      const newNumber = prevSeries[prevSeries.length - 1] + prevSeries[prevSeries.length - 2];
      return [...prevSeries, newNumber];
    }
  }
  
  function displayFibonacciSeries(n) {
    const fibSeries = fibonacci(n);
    console.log(`Danh sách ${n} số Fibonacci đầu tiên:`);
    fibSeries.forEach((number, index) => {
      console.log(`F(${index}) = ${number}`);
    });
  }
  
  const n = 10;
  displayFibonacciSeries(n);