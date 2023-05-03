# Obtener la imagen de Node
FROM node:16.15.0

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY  package.json .

COPY . .

# Instalar las dependencias
RUN npm install

RUN npm install -g @angular/cli@15.2.7

# Exponer el puerto 4200
EXPOSE 4200

# Iniciar la aplicación
CMD ["npm", "start"]