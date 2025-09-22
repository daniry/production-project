# Запуск вебпака
npx webpack

# Тест определенного файла
npm run test:unit Sidebar.test.tsx

# Локальный прогон скриншотных тестов 
npm run test:ui

Скриншотные тесты работают на локалке, только если включен Docker.
Если не работает npm run test:ui:ci, можно попробовать
npx loki test --requireReference --reactUri http://localhost:6006

# Запуск json-сервера
npx json-server ./json-server/db.json --port 8000