Файлы проекта: https://gitlab.com/6thSence/webheroschool-main

Проект содержит три страницы:
I. Основная лендинг-страница - http://webheroschool.ru/
II. Страница вебинара - http://webheroschool.ru/webinar/
III. Страница лид-магнит - http://webheroschool.ru/mistakes/
IV. Страница для работодателей - http://webheroschool.ru/employer/

В проекте используется сборщик GULP

Инструкция:

Нужно, чтобы на машине в обязательном порядке был установлен node.js. Можно сделать проверку версии путем введения в командную строку: npm -v
Глобально установить GULP: npm i -g gulp
В корневой папке проекта открыть командную строку и прописать: npm i . Эта команда устанавливает все необходимые для роботы пакеты из уже имеющегося у нас файла package.json. При возникновении проблем с установкой можно проверить наличие новых версий: npm i npm-check-updates -g
Потом смотрим требуют ли обновлений версии в папке node modules: ncu. Если да - обновляем: ncu -u
Теперь уже запускаем gulp. В корне проекта открыть терминал и прописать команду: gulp

ФАНФАРЫ! 

Имеем: 
Автообновление при сохранении, отслеживание изменений, SASS to CSS, минификация CSS и JS.

Другие команды:
gulp build - сборка(+минимизация) файлов проекта --> папка dist;
gulp deploy - для загрузки на сервак(реквизиты входа прописать нужно в самом gulp-файле).