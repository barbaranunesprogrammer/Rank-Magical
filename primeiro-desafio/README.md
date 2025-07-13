# Desafio: Escrevendo as Classes de um Jogo

## 📝 Descrição

Este projeto é uma solução para um desafio de programação que consiste em criar uma classe genérica para representar um herói de aventura em JavaScript. A classe `heroi` encapsula propriedades como nome, idade e tipo, e possui um método `atacar` que exibe uma mensagem personalizada com base no tipo do herói.

O projeto utiliza a biblioteca `chalk` para estilizar a saída no console, tornando-a mais visual e agradável.

## 🎯 Objetivo do Desafio

-   Criar uma classe `heroi` com as propriedades:
    -   `nome` (string)
    -   `idade` (number)
    -   `tipo` (string: 'guerreiro', 'mago', 'monge', 'ninja')
-   Implementar um método `atacar()` que exibe uma mensagem formatada.
-   A mensagem de ataque deve variar de acordo com o `tipo` do herói:
    -   **mago**: "usou magia"
    -   **guerreiro**: "usou espada"
    -   **monge**: "usou artes marciais"
    -   **ninja**: "usou shuriken"

## ✨ Funcionalidades

-   Definição de uma classe `heroi` com construtor.
-   Método `atacar` com lógica para diferentes tipos de ataque.
-   Uso de Template Literals para formatação de strings.
-   Uso de Módulos ES6 (`import`/`export`).
-   Saída de console colorida e estilizada com `chalk`.

## 🛠️ Tecnologias Utilizadas

-   Node.js
-   JavaScript (ES6+)
-   Chalk

## 🚀 Como Executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
-   Node.js
-   Um gerenciador de pacotes como NPM ou Yarn, que vêm com o Node.js.

### Instalação

1.  Clone este repositório ou baixe os arquivos.

2.  Abra o terminal na pasta do projeto.

3.  Instale as dependências necessárias (neste caso, o `chalk`):
    ```bash
    npm install
    ```

### Execução

Para rodar o script e ver a saída, execute o seguinte comando no terminal:

```bash
node index.js
```

## 🖥️ Saída Esperada

Ao executar o script, você verá a seguinte saída no console (o estilo de cores pode não ser exibido aqui):

```
o Hinata que é um ninja atacou usando usou shuriken

o Dumbledore que é um mago atacou usando usou magia
```