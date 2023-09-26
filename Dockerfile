FROM node:18.12.0-alpine

COPY . .
RUN npm ci

RUN npm install -g forever

CMD ["forever", "-f", "api.js"]