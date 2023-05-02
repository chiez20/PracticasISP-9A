# Obtener la imagen de Node
FROM node:14-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto 4200
EXPOSE 4200

# Iniciar la aplicación
CMD ["npm", "start"]