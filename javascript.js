
// Scrivi un programma che stampi i numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz")
    }
    //  ma per i multipli di 3 stampi “Fizz”
    else if (i % 3 === 0) {
        console.log(i + " Fizz")
    }
    //   e per i multipli di 5 stampi "Buzz".
    else if (i % 5 === 0) {
        console.log(i + " Buzz")
    } else{
        console.log(i)
    }
}