const categories = require('./categories')

const data = [
    'Прогнозы в IT',
    'Веб разработка',
    'Мобильная разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT-систем',
    'Разработка игр',
    'Дизайн и юзабилити',
    'Исткуственный интеллект',
    'Машинное обучение'
]

async function writeDataCategorie() {
    const length = await categories.count();

    if (length == 0) {
        data.map((item, index) => {
            new categories({
                name: item,
                key: index,
            }).save()
        })
    }
}

module.exports = writeDataCategorie