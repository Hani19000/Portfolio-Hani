FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Compilation TypeScript
RUN npm run build
EXPOSE 5000
CMD ["node", "--import", "./dist/instrument.js", "./dist/server.js"]