// Задание 1. Анкета пользователя

const userName = "Иван";
const userAge = 20;
const userCity = "Москва";

console.log(`Пользователь: ${userName}`);
console.log(`Возраст: ${userAge}`);
console.log(`Город: ${userCity}`);


// Задание 2. Проверка доступа к мероприятию

const visitorAge = 20;

if (visitorAge >= 16) {
  console.log("Вход разрешён");
} else {
  console.log("Вход запрещён");
}


// Задание 3. Список покупок

const shopList = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Чай"];

let itemNumber = 1;

for (const product of shopList) {
  console.log(`${itemNumber}. ${product}`);
  itemNumber = itemNumber + 1;
}


// Задание 4. Добавление товара в корзину

const cart = ["Ноутбук", "Мышь", "Клавиатура"];

cart.push("Монитор");

for (const item of cart) {
  console.log(item);
}


// Задание 5. Каталог товаров

const prices = [150, 300, 450, 800];

const increasedPrices = prices.map(function (price) {
  return price * 1.2;
});

console.log(prices);
console.log(increasedPrices);


// Задание 6. Поиск товара

const goods = ["Ноутбук", "Мышь", "Клавиатура", "Монитор"];

const found = goods.find(function (item) {
  return item === "Монитор";
});

console.log(found);


// Задание 7. Информация о студенте

const student = {
  name: "Даниил",
  group: "ИС-43",
  course: 4
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}


// Задание 8. Электронный дневник

const pupil = {
  name: "Даниил",
  grade: 4
};

pupil.attendance = "100%";

console.log(pupil);


// Задание 9. Расчет стоимости заказа

function calculateOrder(price, quantity) {
  return price * quantity;
}

console.log(calculateOrder(500, 3));


// Задание 10. Интернет-магазин

const shopGoods = [
  {
    name: "Наушники",
    price: 2500
  },
  {
    name: "Мышь",
    price: 900
  },
  {
    name: "Клавиатура",
    price: 1800
  }
];

for (const good of shopGoods) {
  console.log(`Название: ${good.name}, цена: ${good.price}`);
}


// Задание 11. Сотрудники с зарплатой больше 70000 рублей

const employees = [
  {
    name: "Иван",
    position: "Разработчик",
    salary: 80000
  },
  {
    name: "Мария",
    position: "Тестировщик",
    salary: 65000
  },
  {
    name: "Сергей",
    position: "Аналитик",
    salary: 72000
  }
];

const highEmployees = employees.filter(function (employee) {
  return employee.salary > 70000;
});

for (const employee of highEmployees) {
  console.log(`Имя: ${employee.name}, должность: ${employee.position}, зарплата: ${employee.salary}`);
}