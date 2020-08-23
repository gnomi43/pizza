export const users = [
    {
        id: 1,
        basket: null,  
        name: "admin",
        email: "admin@admin.ru",
        password: "123456",
        group: "admin",
        historyOrder: null
    },

    {
        id: 2,
        basket: [ {id: 1, quantity: 2, price: 15, name: "The Meats"}, {id: 3, quantity: 3, price: 12, name: "Meatball Pepperoni"} ],  
        name: "Alex",
        email: "alex@mail.ru",
        password: "Alexandro69",
        group: "user",
        historyOrder: null
    },

    {
        id: 3,
        basket: null,  
        name: "Nik",
        email: "Nik@gmail.com",
        password: "NikB228",
        group: "user",
        historyOrder: [ {orderId: 10001, totalQuantity: 5, totalPrice: 75, address: "Moscow, Lenina street 12, app 80"}, {orderId: 10002, totalQuantity: 1, totalPrice: 16, address: "Moscow, Lenina street 12, app 80"} ]
    },

    {
        id: 4,
        basket: [ {id: 5, quantity: 2, price: 18, name: "Ultimate Pepperoni"}, {id: 3, quantity: 3, price: 12, name: "Meatball Pepperoni"}, {id: 1, quantity: 2, price: 15, name: "The Meats"} ],  
        name: "Petr",
        email: "Petr@ya.ru",
        password: "Petr",
        group: "user",
        historyOrder: null
    }
];