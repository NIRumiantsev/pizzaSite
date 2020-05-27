class PizzaService {
    pizza = [
        {
            id: 1,
            title: "Bolognese",
            ingredients: "Fleischsause, Kase",
            prices:
                {
                    small: 6.00,
                    large: 10.00
                } ,
            image: "balognese.png",
        },
        {
            id: 2,
            title: "Mozzarella",
            ingredients: "Tomatensauce, Kase",
            prices:
                {
                    small: 5.50,
                    large: 10.00
                } ,
            image: "mozzarella.png",
        },
        {
            id: 3,
            title: "Sucuk",
            ingredients: "Kase, (Mozzarella), mit würziger Sucuk, Hirtenkäse und grünen Oliven genbacken",
            prices:
                {
                    small: 6.50,
                    large: 11.00
                } ,
            image: "sucuk.png",
        },
        {
            id: 4,
            title: "Funghi",
            ingredients: "Tomatensauce, Kase, (Mozzarella) mit firschen Champignons und Basilikum-Pesto",
            prices:
                {
                    small: 5.50,
                    large: 10.00
                } ,
            image: "funghi.png",
        },
        {
            id: 5,
            title: "Salami",
            ingredients: "Tomatensauce, Kase, mit leckerer Salami",
            prices:
                {
                    small: 6.50,
                    large: 11.00
                } ,
            image: "salami.png",
        },
        {
            id: 6,
            title: "Margherita",
            ingredients: "Tomatensauce, Kase",
            prices:
                {
                    small: 5.00,
                    large: 9.00
                } ,
            image: "margherita.png",
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