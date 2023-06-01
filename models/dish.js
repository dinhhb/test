const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "dishes.json"
  );

const getDishesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err){
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Dish {
  constructor(name, image, ingredients, steps, requirement) {
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
    this.steps = steps;
    this.requirement = requirement;
  }

  save() {
    this.id = Math.random().toString();
    getDishesFromFile(dishes => {
        dishes.push(this);
        fs.writeFile(p, JSON.stringify(dishes), err => {
            console.log(err);
        })
    });
  }

  static fetchAll(cb) {
    getDishesFromFile(cb);
  }

  static findById(id, cb){
    getDishesFromFile(dishes => {
      const dish = dishes.find(p => p.id === id);
      cb(dish);
    });
  }
};
