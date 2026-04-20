import Team from './Team';
import Character from './Character';


export function canIterate(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

// Пример использования итерации (Задание 2)
const team = new Team();
team.add(new Character('Лучник', 'Bowman', 50, 1, 40, 10));

for (const char of team) {
    console.log(char);
}

// Пример использования canIterate (Задача со звёздочкой)
console.log(canIterate(new Map())); // true
console.log(canIterate(10));        // false