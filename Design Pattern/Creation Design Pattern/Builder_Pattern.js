class Burger {
  constructor(builder) {
    this.size = builder.size;
    this.cheese = builder.cheese || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}

class BurgerBuilder {
  constructor(size) {
    this.size = size;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}

// Example usage:
const burger = new BurgerBuilder(14)
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();

console.log(burger); // Output: Burger { size: 14, cheese: false, pepperoni: true, lettuce: true, tomato: true }
