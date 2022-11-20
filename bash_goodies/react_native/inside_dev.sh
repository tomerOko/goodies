cd /etc
rm -rf hosts
cp -R /app/scripts/hosts ./
cd /app/chatmate
npm i
expo start --tunnel