class PizzaService {
    pizza = [
        {
            category: "pizza",
            id: 1,
            title: "Bolognese",
            ingredients: "Fleischsause, Kase",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 6.00,
                    large: 10.00
                } ,
            image: "balognese.png",
        },
        {
            category: "pizza",
            id: 2,
            title: "Mozzarella",
            ingredients: "Tomatensauce, Kase",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 5.50,
                    large: 10.00
                } ,
            image: "mozzarella.png",
        },
        {
            category: "pizza",
            id: 3,
            title: "Sucuk",
            ingredients: "Kase, (Mozzarella), mit würziger Sucuk, Hirtenkäse und grünen Oliven genbacken",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 6.50,
                    large: 11.00
                } ,
            image: "sucuk.png",
        },
        {
            category: "pizza",
            id: 4,
            title: "Funghi",
            ingredients: "Tomatensauce, Kase, (Mozzarella) mit firschen Champignons und Basilikum-Pesto",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 5.50,
                    large: 10.00
                } ,
            image: "funghi.png",
        },
        {
            category: "pizza",
            id: 5,
            title: "Salami",
            ingredients: "Tomatensauce, Kase, mit leckerer Salami",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 6.50,
                    large: 11.00
                } ,
            image: "salami.png",
        },
        {
            category: "pizza",
            id: 6,
            title: "Margherita",
            ingredients: "Tomatensauce, Kase",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 5.00,
                    large: 9.00
                } ,
            image: "margherita.png",
        },
        {
            category: "pizza",
            id: 7,
            title: "Prosciutto Funghi",
            ingredients: "Tomatensauce, Kase",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 6.50,
                    large: 11.00
                } ,
            image: "posciutto-funghi.png",
        },
        {
            category: "pizza",
            id: 8,
            title: "Salami Funghi",
            ingredients: " Tomatensauce, Käse, Salami, Champignons",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 7.50,
                    large: 12.00
                } ,
            image: "salami-funghi.png",
        },
        {
            category: "pizza",
            id: 9,
            title: "Prosciutto",
            ingredients: " Tomatensauce, Käse, Formvorderschinken",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 6.50,
                    large: 11.00
                } ,
            image: "prosciutto.png",
        },
        {
            category: "pizza",
            id: 10,
            title: "Tonno Cipolle",
            ingredients: "Tomatensauce, Käse, Thunfisch, Zwiebeln",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 7.50,
                    large: 13.00
                } ,
            image: "tonno-cipolle.png",
        },
        {
            category: "pizza",
            id: 11,
            title: "Hawaii",
            ingredients: "Tomatensauce, Käse, Formfleischvorderschinken, Ananas",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 7.50,
                    large: 12.00
                } ,
            image: "hawaii.png",
        },
        {
            category: "pizza",
            id: 12,
            title: "Mista",
            ingredients: "Tomatensauce, Käse, Salami, Formfleischvorderschinken, Champignons",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 7.50,
                    large: 13.00
                } ,
            image: "mista.png",
        },
        {
            category: "pizza",
            id: 13,
            title: "Mafia",
            ingredients: "Tomatensauce, Käse, Formfleischvorderschinken, Salami, Champignons, Knoblauch, Peperoni",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 7.50,
                    large: 13.00
                } ,
            image: "mafia.png",
        },
        {
            category: "pizza",
            id: 14,
            title: "Fruti-di-mare",
            ingredients: "Tomatensauce, Käse, verschiedene Meeresfrüchte, Knoblauch",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.50,
                    large: 14.50
                } ,
            image: "fruti-di-mare.png",
        },
        {
            category: "pizza",
            id: 15,
            title: "Istanbul",
            ingredients: "Tomatensauce, Käse, Sucuk, Oliven",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.00,
                    large: 13.00
                } ,
            image: "istanbul.png",
        },
        {
            category: "pizza",
            id: 16,
            title: "Chicken",
            ingredients: "Tomatensauce, Käse, Sucuk, Oliven",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.00,
                    large: 13.00
                } ,
            image: "chicken.png",
        },
        {
            category: "pizza",
            id: 17,
            title: "Firstoff",
            ingredients: "Tomatensauce, Käse, Hähnchenbrust, Hackfleisch, Sauce Holland, Jalapenos, Garnelen",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.00,
                    large: 14.50
                } ,
            image: "firstoff.png",
        },
        {
            category: "pizza",
            id: 18,
            title: "Hollandaise",
            ingredients: "Tomatensauce, Käse, Hähnchen, Zwiebeln, Sauce Hollandaise",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.00,
                    large: 13.50
                } ,
            image: "hollandaise.png",
        },
        {
            category: "pizza",
            id: 19,
            title: "Werder",
            ingredients: "Tomatensauce, Käse, Hähnchen, Mais, Hirtenkäse, BBQ-Sauce",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.00,
                    large: 14.00
                } ,
            image: "werder.png",
        },
        {
            category: "pizza",
            id: 20,
            title: "Antalya",
            ingredients: "Tomatensauce, Käse, Sucuk, Mais, Schafskäse, Paprika, BBQ-Sauce",
            volume: {
                small: "Ø 26cm",
                large: "Ø 36cm"
            },
            prices:
                {
                    small: 8.00,
                    large: 14.00
                } ,
            image: "antalya.png",
        },

    ]

    getPizza() {
        //Cимуляция работы с сервером
        return new  Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error())
                } else {
                    resolve(this.pizza);
                }
            }, 10);
        });
    }
}

export default new PizzaService();