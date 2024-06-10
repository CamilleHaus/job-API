## Como iniciar um projeto?

npm init -y

npm install express

## Instalar as dependecias de desenvolvimento:

npm install -D @types/express typescript ts-node-dev prisma

## Criar a pasta src e dois arquivos:

app.ts
server.ts

## Trocar o script no package.json por:

"scripts": {
    "dev": "tsnd --respawn src/server.ts"
  }

## Iniciar a configuração do typescript 

npx tsc --init

## No tsconfig

"exclude": ["node_modules"],
"include": ["src/**/*"]

## Instanciar o express no app

export const app = express();

app.use(json());

## Configurar a porta

## Configurar o prisma

npx prisma init

## Configurar o banco de dados e criar um db pro projeto

psql e CREATE DATABASE

## Configurar o DATABASE_URL no .env

## Modelar o DB no prisma

Migrar as mudanças para o prisma: 

-- npx prisma migrate dev 

## Instalar dependencia de segurança HELMET

npm install helmet

app.use(helmet())

## Instanciar o prisma

Criar uma pasta database dentro de src e dentro dela o arquivo prisma.ts

export const prisma = new PrismaClient();

------ Ir para os serviços ------>
