## Criar os arquivos de serviços

Criar os arquivos de serviços necessários

## Classes e métodos

Criar as classes com os rascunhos dos respectivos métodos que serão usados baseados nas rotas

## Controllers

Criar a estruturua dos controllers - onde irão os parametros req e res

## Routes

Criar a pasta de Routes
Criar um arquivo de routes para cada um

Instanciar o router
Instanciar o controller
Instanciar cada rota com o controller

## Instanciar a rota no app

app.use("/(nome ta rota)", (roteador))

_______________


## Instalar o ZOD

npm install zod

## Criar uma pasta schemas para cada 

Baseado no que aquela rota irá receber

Criar as tipagens baseados nos schemas


## No serviço 

Tipar o paramento com a tipagem referente

## No controller

instanciar o serviço 

## Criar o classe AppError

Criar a pasta Errors
Criar uma classe que extends a classe nativa de Error do JS

## Criar o Middleware

Criar a pasta MiddleWare
Criar a classe do middleware geral - handleErrors

## Instancia-lo no app.ts

app.use(HandleErros.execute)

## Instalar o express-async-errors

npm install express-async-errors e importar no app

## Criar um middleware de validação do body

## Aplicar nas rotas