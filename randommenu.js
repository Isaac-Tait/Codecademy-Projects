const menu = {
    _courses: {
    //This property will contain a mapping between each course and the dishes available to order in that course.
        appetizers: [],
        mains: [],
        desserts: []
      },
    //Create getter and setter methods for the appetizers, mains, and desserts properties.
    get appetizers() {
      return this._courses.appetizers;
    },
      get mains() {
      return this._courses.mains;
    },
      get mains() {
      return this._courses.mains;
    },
      set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
        set mains(mains) {
        this._courses.mains = mains;
    },
      set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this._appetizers,
        mains: this._mains,
        desserts: this._desserts
      };
    },
    /*The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters. 
    The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.*/
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
    return this._courses[courseName].push(dish);
    },
    /* There are a few steps in getting the .getRandomDishFromCourse() to work.
    Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
    Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the 
    random number will be between 0 and the length of the array)
    Round that generated number to a whole number by using Math.floor() on the result.
    Return the dish located at that index in dishes.*/
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },   

    /* Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate 
    a three-course meal for us. The function doesn’t need to take any parameters.
    The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in 
    an appetizers string to it.
    Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.
    Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.*/
    
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
    }
  };

  menu.addDishToCourse('appetizers', 'Dinner Salad', 4.99);
  menu.addDishToCourse('appetizers', 'Buffalo Wings', 6.98);
  menu.addDishToCourse('appetizers', 'Cheesy Fries', 6.51);

  menu.addDishToCourse('mains', 'Spinach Casserole', 14.75);
  menu.addDishToCourse('mains', 'Shrimp Tempura', 16.72);
  menu.addDishToCourse('mains', 'Ramen with Gyoza', 24.35);

  menu.addDishToCourse('desserts', 'Ice Cream w/ Balsamic', 4.45);
  menu.addDishToCourse('desserts', 'Mochi Kabobs', 7.35);
  menu.addDishToCourse('desserts', 'Waffles Extraordinari', 34.91);

  const meal = menu.generateRandomMeal();
  console.log(meal);
