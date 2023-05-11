# Dependencias
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Pruebas 
# Build  (TS)
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Producción (Dependencias)
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# Ejecución de la app 
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY / ./
COPY / ./app
CMD ["node", "server.js"]