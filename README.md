# Palco Web

Aplicação web desenvolvida para consumir a api [event-manager](https://github.com/matheusmv/event-manager).

## Configuração

### Backend

  - Dependências
    - postgres
    - node

  - Configuração:
    - clonar repositório:

          git clone https://github.com/matheusmv/event-manager.git && cd event-manger

    - instalar dependências:

          npm i

    - configurar variáveis de ambiente:

        Consulte o arquivo **.env.example** e crie um arquivo **.env** no mesmo diretório com suas configurações.

    - rodar migrations:

          npx prisma migrate reset

    - executar:

          npm run dev

### Frontend

  - Configuração:
    - clonar repositório:

          git clone https://github.com/matheusmv/palco-web.git && cd palco-web

    - instalar dependências:

          npm i

    - executar:

          npm run dev
