class DrinksService {
    coldDrinks = [
        {
            category: "cold-drinks",
            id: 1,
            title: "Cola",
            volume: {
                small: "0.33 l",
                large: "1.00 l"
            },
            prices: {
                small: 2.00,
                large: 2.50
            } ,
            image: "cola.png",
        },
        {
            category: "cold-drinks",
            id: 2,
            title: "Cola Light",
            volume: {
                small: "0.33 l",
                large: "1.00 l"
            },
            prices: {
                small: 2.00,
                large: 2.50
            } ,
            image: "cola-light.png",
        },
        {
            category: "cold-drinks",
            id: 3,
            title: "Sprite",
            volume: {
                small: "0.33 l",
                large: "1.00 l"
            },
            prices: {
                small: 2.00,
                large: 2.50
            } ,
            image: "sprite.png",
        },
        {
            category: "cold-drinks",
            id: 4,
            title: "Fanta",
            volume: {
                small: "0.33 l",
                large: "1.00 l"
            },
            prices: {
                small: 2.00,
                large: 2.50
            } ,
            image: "fanta.png",
        },
        {
            category: "cold-drinks",
            id: 5,
            title: "Apfelschorle",
            volume: {
                small: "0,5 l",
            },
            prices: {
                small: 2.00
            } ,
            image: "apleshorle.png",
        },
        {
            category: "cold-drinks",
            id: 6,
            title: "Wasser",
            volume: {
                small: "0.5 l",
                large: "1.00 l"
            },
            prices: {
                small: 1.50,
                large: 2.00
            } ,
            image: "water.png",
        },
        {
            category: "cold-drinks",
            id: 7,
            title: "CapriSonne",
            volume: {
                small: "1 St.",
            },
            prices: {
                small: 1.00
            } ,
            image: "capri-sonne.png",
        },
        {
            category: "cold-drinks",
            id: 8,
            title: "Ein Glass",
            volume: {
                small: "300 ml",
            },
            prices: {
                small: 1.80
            } ,
            image: "glass.png",
        },
    ]

    hotDrinks = [
        {
            category: "hot-drinks",
            id: 1,
            title: "Coffee klein ",
            volume: {
                small: "300ml"
            },
            prices: {
                small: 2.00
            } ,
            image: "coffee.png",
        },
        {
            category: "hot-drinks",
            id: 2,
            title: "Coffee groß",
            volume: {
                small: "400 ml"
            },
            prices: {
                small: 2.40
            } ,
            image: "coffee.png",
        },
        {
            category: "hot-drinks",
            id: 3,
            title: "Cappuccino ",
            volume: {
                small: "300 ml",
                large: "400 ml"
            },
            prices: {
                small: 2.50,
                large: 3.00
            } ,
            image: "cappucino.png",
        },
        {
            category: "hot-drinks",
            id: 4,
            title: "Latte machiato",
            volume: {
                small: "300 ml",
                large: "400 ml"
            },
            prices: {
                small: 2.80,
                large: 3.10
            } ,
            image: "latte.png",
        },
        {
            category: "hot-drinks",
            id: 5,
            title: "Espresso",
            volume: {
                small: "30 ml",
            },
            prices: {
                small: 1.90
            } ,
            image: "coffee.png",
        },
        {
            category: "hot-drinks",
            id: 6,
            title: "Doppelte Espresso ",
            volume: {
                small: "60 ml"
            },
            prices: {
                small: 2.50
            } ,
            image: "coffee.png",
        },
        {
            category: "hot-drinks",
            id: 7,
            title: "Heiße Schokolade",
            volume: {
                small: "300 ml",
                large: "400 ml"
            },
            prices: {
                small: 2.50,
                large: 3.00
            } ,
            image: "chocolate.png",
        }
    ]

    beerDrinks = [
        {
            category: "beer-drinks",
            id: 1,
            title: "Beck's",
            volume: {
                small: "0.33 l",
                large: "0.5 l"
            },
            prices: {
                small: 1.50,
                large: 1.90
            } ,
            image: "becks.png",
        },
    ]

    //Cимуляция работы с сервером

    getBeerDrinks() {
        return new  Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error())
                } else {
                    resolve(this.beerDrinks);
                }
            }, 10);
        });
    }

    getHotDrinks() {
        return new  Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error())
                } else {
                    resolve(this.hotDrinks);
                }
            }, 10);
        });
    }

    getColdDrinks() {
        return new  Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error())
                } else {
                    resolve(this.coldDrinks);
                }
            }, 10);
        });
    }
}

export default new DrinksService();