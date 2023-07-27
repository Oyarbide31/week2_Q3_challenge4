function fizzzBuzz(start, end) {
  let array = [];
  for (start; start <= end; start++) {
    array.push(start);
    if (start % 3 === 0) {
      array[start] = 'fizz';
    }
    if (start % 5 === 0) {
      array[start] = 'Buzz';
    }
    if (start % 3 === 0 && start % 5 === 0) {
      array[start] = 'FizzBuzz';
    }
    {
    }
  }
  return array;
}
console.log(fizzzBuzz(3, 15));
/*
todo lo divisilbe por 3 = fizz
todos los numeros divisibles por 5 = buzzz 
function fizz() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 5) {
      console.log('buzz');
    }
    //console.log([i]);
  }
}
fizz();

*/
