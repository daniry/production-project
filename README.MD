# Запуск вебпака
npx webpack

# Тест определенного файла
npm run test:unit Sidebar.test.tsx

# Локальный прогон скриншотных тестов 
npm run storybook - запуск сторибука
npm run test:ui - сравнение новых сторисов со старыми
npm run test:ok - подтверждение изменений (если новые сторисы корректны)
npm run test:ui:report - генерация отчета в html 

Скриншотные тесты работают на локалке, только если включен Docker.
Если не работает npm run test:ui:ci, можно попробовать
npx loki test --requireReference --reactUri http://localhost:6006

# Запуск json-сервера
npx json-server ./json-server/db.json --port 8000

## Для прекоммита нужно запустить сторибук
npm run storybook