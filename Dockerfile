# Etapa base
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del servidor Angular
EXPOSE 4200

# Comando para desarrollo
CMD ["npm", "start"]

#4a234e8a3fcef928d48a300c5c1e7e92b6aef995124fb2aa07bc82d9fc450b7b