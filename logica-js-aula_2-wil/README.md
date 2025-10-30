# 📚 Guia de Lógica e Funções em JavaScript

Este documento reúne conceitos fundamentais de lógica de programação e funções em JavaScript, com exemplos práticos e explicações simples.

---

## 🔗 Operadores Lógicos

### `&&` (AND / E)
- Verifica se **duas condições são verdadeiras**.
- Retorna `true` somente se **ambas** forem verdadeiras.

```js
(A > B) && (B == C)

|| (OR / OU)

Verifica se pelo menos uma condição é verdadeira.

Retorna true se uma ou ambas forem verdadeiras.

(A > B) || (B == C)

💡 Dica: O símbolo || é feito com Shift + tecla ao lado do Z.

! (NEGAÇÃO)

Inverte o valor lógico de uma condição.

!(A == B)

⚖️ Operadores de Comparação

Operador

Nome

Exemplo

Resultado

==

Igual

A == B

Verdadeiro se A for igual a B

!=

Diferente

A != B

Verdadeiro se A for diferente de B

<

Menor que

A < B

Verdadeiro se A for menor que B

>

Maior que

A > B

Verdadeiro se A for maior que B

<=

Menor ou igual

A <= B

Verdadeiro se A for menor ou igual a B

>=

Maior ou igual

A >= B

Verdadeiro se A for maior ou igual a B

⚙️ Operador Ternário

Forma reduzida de um if/else:

condicao ? valorSeVerdadeiro : valorSeFalso;

🔢 Números Aleatórios e Conversões

parseInt → Converte para número inteiro.

Math.random() → Gera número aleatório entre 0 e 1.

Para gerar número entre 1 e 10:

parseInt(Math.random() * 10 + 1);

Para gerar número entre 1 e 100:

parseInt(Math.random() * 100 + 1);

🧪 Incremento de Variáveis

tentativas++; // Equivale a: tentativas = tentativas + 1;

🌐 Live Server

Para iniciar um projeto com Live Server:

Clique com o botão direito sobre o arquivo index.html.

Selecione "Open with Live Server".

🧠 Tipos de Funções em JavaScript

Tipo

Exemplo

Uso

Sem retorno e sem parâmetro

function saudacao() { ... }

Executa um bloco de código simples

Sem retorno e com parâmetro

function cumprimentar(nome) { ... }

Executa com base em argumentos

Com retorno e sem parâmetro

function gerarNumeroAleatorio() { ... }

Retorna um valor específico

Com retorno e com parâmetro

function somar(a, b) { return a + b; }

Retorna resultado baseado em argumentos

Função anônima

let saudacao = function() { ... };

Função sem nome atribuída a uma variável

Arrow function

let quadrado = x => x * x;

Sintaxe curta para funções simples

📌 Observação: Este material é ideal para iniciantes que estão aprendendo lógica de programação e JavaScript.