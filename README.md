# 🗄️ Backend de Persistencia para WebSockets con PostgreSQL y Prisma

Este proyecto es un backend desarrollado en **NestJS** que se encarga de manejar la persistencia de la información transmitida a través de **WebSockets**, almacenándola en **PostgreSQL** mediante **Prisma ORM** para garantizar la recuperación de mensajes en caso de desconexión.

## 🚀 Características Principales
- Recepción y almacenamiento de mensajes enviados por WebSockets.
- Uso de **PostgreSQL** con **Prisma ORM** para persistencia de datos.
- Exposición de una API REST para recuperar mensajes almacenados.
- Integración con **Docker** para facilitar el despliegue de la base de datos.
- Desarrollado en **Node.js 22** con **TypeScript**.

## 🛠 Tecnologías Utilizadas
- [NestJS](https://nestjs.com/) - Framework para Node.js
- [WebSockets](https://docs.nestjs.com/websockets/gateways) - Comunicación en tiempo real
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional
- [Prisma ORM](https://www.prisma.io/) - ORM para gestionar PostgreSQL
- [Docker](https://www.docker.com/) - Contenedorización

## 📦 Instalación y Configuración

### 1️⃣ Requisitos Previos
Asegúrate de tener instalado:
- [Node.js 22](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/get-started)
- [PostgreSQL](https://www.postgresql.org/download/)

### 2️⃣ Clonar el Repositorio
```sh
git clone https://github.com/JacoboUribeDominguez110/persistence-api.git
cd persistence-api
```

### 3️⃣ Instalar Dependencias
```sh
npm install
```

### 4️⃣ Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto y agrega:
```
DATABASE_URL=
PORT=
JWT_SECRET=
```

### 5️⃣ Levantar PostgreSQL con Docker
```sh
docker run --name postgres-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=main -p 5432:5432 -d postgres
```

### 6️⃣ Configurar Prisma
```sh
npx prisma migrate dev --name init
```

### 7️⃣ Iniciar el Servidor
```sh
npm run start:dev
```

## 📚 Estructura del Proyecto
```
/src
  ├── auth            # Manejo de JWT
  ├── contracts       # Módulos de ventas y compras
  ├── dto             # Controles de como se envian las peticiones y formateos
  ├── helpers         # Funciones reutilizables en distintos modulos
  ├── offers          # Módulos de ofertas
  ├── prisma          # Configuración y esquema de Prisma
  ├── main.ts         # Punto de entrada principal
```

## 🧪 Pruebas
Para ejecutar pruebas unitarias:
```sh
npm run test
```

Para pruebas e2e:
```sh
npm run test:e2e
```

## 🛠 Despliegue
Para compilar el proyecto en producción:
```sh
npm run build
```

Para correr en modo producción:
```sh
npm run start:prod
```

## 🖋 Contribuir
Si deseas contribuir, por favor crea un **issue** o envía un **pull request**.

## 👨‍💻 Autor
- **Jacobo Uribe Dominguez** - [GitHub](https://github.com/JacoboUribeDominguez110)