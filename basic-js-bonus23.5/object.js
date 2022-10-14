const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'cinema Para',
    isSingle: true,
    friends: ['apu', 'razz', 'bubli', 'puza cheri', 'srabonti'],
    movies: [{ name: 'no 1', year: 2018, }, { name: 'king khan', year: 2015 }],
    act: function () {
        for (let i = 1; i <= 3; i++) {
            console.log(i, '.acting like shakib khan');
        }
    },
    cast: function () {
        return 'zahidJuel';
    },
    car: {
        brand: 'tesla',
        price: 12345,
        made: 2025,
        maufacturer: {
            brandName: 'Tesla',
            ceo: 'Elon Musk',
            country: 'USA',
        }
    }
}

console.log(nayok);
console.log(nayok.address);
console.log(nayok.friends);
console.log(nayok.friends[2]);
console.log(nayok.car);
console.log(nayok.car.maufacturer.ceo);
console.log(nayok.movies);
console.log(nayok.movies[0].name);
console.log(nayok.movies[1].year);
console.log(nayok.act);
nayok.act();
console.log(nayok.cast());