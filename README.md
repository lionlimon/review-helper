# Клиент (расширение chrome) для ревьюеров 

## Инсталляция
`yarn install`

## Команды

`yarn dev` - запуск dev сервера  
`yarn build` - сборка проекта  
`yarn lint:script` - проверка и исправление скриптов по eslint  
`yarn lint:style` - проверка и исправление стилей по stylelint  

## Стек и инфраструктура
* Vue 3
* Typescript
* Vue-router
* Pinia state manager
* Сборщик Vite

## Cтруктура проекта 
```
.
├── dist // Папка с билдом
├── public // Статичные файлы. Попадают в корень dist
│   ├── logo.svg
│   └── ...
├── src
│   ├── api // Каталог с api сущностями
│   │   └── Notion
│   │       ├── Notion.ts
│   │       ├── index.ts
│   │       └── types.ts
│   ├── assets // Шрифты и разного рода изображения
│   │   ├── fonts
│   │   │   ├── Roboto-400.woff
│   │   │   └── ...
│   │   ├── icons // Иконки собираются в спрайт
│   │   │   ├── close.svg
│   │   │   └── search.svg
│   │   └── img
│   │       ├── image.png
│   │       └── ...
│   ├── components // Атомарные элементы
│   │   ├── CardBox
│   │   │   ├── CardBox.scss
│   │   │   ├── CardBox.vue
│   │   │   └── index.ts
│   │   └── ...
│   ├── helpers  // Хэлперы, хухи
│   │   └── useLoadingState.ts
│   ├── pages 
│   │   └── HomePage // Страница
│   │       ├── components // Компоненты при странице
│   │       │   ├── CardList
│   │       │   │   ├── CardList.scss
│   │       │   │   ├── CardList.vue
│   │       │   │   └── index.ts
│   │       │   └── ...
│   │       ├── HomePage.scss
│   │       ├── HomePage.vue
│   │       └── index.ts
│   ├── store
│   │   └── notion
│   │       ├── actions.ts
│   │       ├── getters.ts
│   │       ├── index.ts
│   │       ├── state.ts
│   │       └── types.ts
│   ├── styles
│   │   ├── fonts.scss
│   │   ├── mixins.scss
│   │   ├── style.scss
│   │   └── variables.scss
│   ├── App.vue
│   ├── main.ts
│   ├── routes.ts
│   └── vite-env.d.ts
├── README.md
├── index.html // Базовый шаблон страницы
├── package-lock.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock
```
