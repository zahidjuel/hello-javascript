const car = {
    brand: "Tesla",
    model: [3, 5, 8, 4],
    weight: "980kg",
    seating: "5 Adults",
    stop() {
        console.log('car is starting....');
        return "car is stoped."; // method
    }
}

console.log(car);

// dot notation
car.stop();
console.log(car.stop());

// brackets notation
console.log(car["brand"]);

// car.model = 4;
car.brand = "Tesla3"
console.log(car);