FROM node:20-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000


# Run the application
CMD ["node", "dist/index.js"]
