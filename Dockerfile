FROM node:18.12.0-alpine

COPY . .
RUN npm ci

CMD ["node", "api.js"]