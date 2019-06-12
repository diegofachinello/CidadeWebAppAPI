# CidadeWebAppAPI
Aplicação API Rest com ASP net core 2.2 API e Angular 5

Instruções:

- SQL Server 2017 Local
- Visual Studio 2017
- https://dotnet.microsoft.com/download/dotnet-core/2.2


Para executar a API o primeiro passo é abrir a solução no Visual Studio 2017 e rodar os seguintes comandos no 
console em ferramentas>gerenciador de pacote NuGet>console:

- Add-Migration Initial
- Update-Database

Feito isso a tabela será criada na base local.

Basta executar selecionando o start play WebAppAPI.


Para rodar o FrontEnd

Instruções:

- npm install -g @angular/cli


Na pasta do projeto angular executar os seguintes comandos:

- npm install @angular/cli
- npm install bootstrap --save
- npm install --save lodash

Após isso será possível iniciar o serviço, basta executar aidna na pasta do projeto:

- ng serve -o

Automaticamente subirá uma página com o aplicativo rodando.

