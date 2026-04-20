# Symbols & Generators (Team & canIterate)
[![Check Code](https://github.com/Milka79rus/generators/actions/workflows/run.yml/badge.svg)](https://github.com/Milka79rus/generators/actions/workflows/run.yml)
## Описание
Реализация итерируемого класса `Team` с помощью генератора и универсальной функции проверки итерируемости.

## Основные возможности
* **Класс `Team`**: использует метод `*[Symbol.iterator]` и `yield` для перебора персонажей.
* **Функция `canIterate`**: проверяет наличие `Symbol.iterator` у объекта (задача со звёздочкой).

## Команды
* `npm install` — установка.
* `npm run lint` — проверка кода.
* `npm run build` — сборка.
* `npm test` — запуск (с флагом `--passWithNoTests`).
