/* Parent Class Media */
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

    get title () {
      return this._title;
    }

    get _isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings () {
        return this._ratings;
    }
  
    set _isCheckedOut(value) {
      this._isCheckedOut = (value);
    }
    toggleCheckOutStatus() {
        this._CheckedOut = !this._CheckedOut;
    }
    getAverageRating(){
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this.ratings.length;
    }
    
  addRatings(value) {
    this._values.push(value);
  }
}

/* Subclass Books */
class Books extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
        } 
    get author () {
        return this._author;
        }
    get pages () {
        return this._pages;
        }
}

/* Subclass Movies */
class Movies extends Media {
    constructor(director, title, runTime,) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    } 
get director () {
    return this._director;
    }
get runTime () {
    return this._runTime;
    }
}

/* Subclass CDs */
class CDs extends Media {
    constructor(artist, ratings, songs) {
      super(artist);
      this._ratings = ratings;
      this._songs = songs;
    } 
get artist () {
    return this._author;
    }
get ratings () {
    return this._ratings;
    }   
get songs () {
    return this._songs;
    }
}
 
/* New Book */
const historyOfEverything = new Books('Bill Bryson', "A Short History of Nearly Everything", 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

/* New Movie */
const speed = new Movies('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
