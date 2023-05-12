const dishes = [];

module.exports = class Dish {
    constructor(t) {
        this.name = t;
    }

    save() {
        dishes.push(this);
    }

    static fetchAll() {
        return this.dishes;
    }
}