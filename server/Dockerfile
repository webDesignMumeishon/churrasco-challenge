FROM node:16

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 3000

# uncomment for production
# RUN npm run build

# CMD ["node", "dist/index.js"]

CMD ["npm", "run", "dev"]

