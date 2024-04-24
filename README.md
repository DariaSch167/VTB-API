## Трекер сбережений  💸

Трекер сбережений - это веб-приложение, которое позволяет пользователям создавать, управлять и отслеживать свои сберегательные цели. Он предоставляет удобный интерфейс для настройки новых целей, отслеживания прогресса и обновления сумм сбережений.


## Функциональные возможности

- **Создание целей**: Пользователи могут создавать новые цели для сбережений, указывая такие детали, как название цели, категория, целевая сумма, приоритет, конечная дата и сумма первоначального взноса.
- **Список целей**: Приложение отображает список всех активных целей, отсортированных по приоритету и конечной дате. Каждая цель представлена в виде карточки с соответствующей информацией, включая название цели, категорию, общую сумму, приоритет, конечную дату, оставшуюся сумму и индикатор прогресса.
- **Отслеживание прогресса**: Для каждой цели отображается наглядный индикатор прогресса, показывающий процент целевой суммы, которая уже была сохранена.
- **Пополнение и снятие средств**: Пользователи могут пополнять или снимать средства для каждой цели через модальное окно. Приложение проверяет вводимые суммы и соответствующим образом обновляет информацию о цели.
- **Сохранение данных**: Вся информация о целях хранится в локальном хранилище браузера, что позволяет пользователям получать доступ и управлять своими целями в течение нескольких сессий без потери данных.


## Использованные технологии

- HTML
- CSS (с препроцессором SCSS)
- JavaScript
- Local Storage


## Начало работы

Чтобы запустить Трекер сбережений локально, следуйте этим шагам:

1. Клонируйте репозиторий: `git clone https://github.com/Pstepanova21/VTB-API.git`
2. Перейдите в директорию проекта: `cd VTB-API`
3. Установите зависимости проекта: `npm install`
4. Запустите dev-сервер: `npm run serve`
5. После успешного запуска dev-сервера, перейдите по адресу `http://localhost:9000` в вашем веб-браузере.

Для production-сборки проекта выполните команду:

```
npm run build
```

Это создаст оптимизированную сборку проекта в директории `dist`, которую можно развернуть на production-сервере.

Обратите внимание, что в предоставленной конфигурации Webpack используется:

- `html-webpack-plugin` для генерации HTML-файла из шаблона Pug (`template.pug`)
- `mini-css-extract-plugin` для выделения CSS в отдельный файл
- `image-minimizer-webpack-plugin` для оптимизации изображений
- `filemanager-webpack-plugin` для очистки директории `dist` перед каждой сборкой

После запуска dev-сервера или создания production-сборки, приложение будет доступно по указанному URL в вашем веб-браузере.
