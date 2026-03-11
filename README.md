# Projetos com TensorFlow em JavaScript

Este repositório reúne quatro projetos acadêmicos em JavaScript voltados ao aprendizado de machine learning com TensorFlow.js. A ideia geral é evoluir de exemplos mais simples de classificação para cenários mais próximos de recomendação e análise de crédito.

## Visão geral

Os projetos foram organizados por pasta e cada um aborda um tipo diferente de problema:

- `projeto1`: experimento introdutório de classificação multiclasse com dados fictícios de pessoas. O modelo tenta classificar uma nova entrada em categorias como `premium`, `medium` e `basic`.
- `projeto2`: sistema simples de recomendação de produtos. Usa dados de usuários e produtos para treinar um modelo que estima a probabilidade de compra e gera recomendações personalizadas.
- `projeto3`: análise de aprovação de crédito com classificação binária. O projeto parte de regras de negócio, treina uma rede neural com exemplos rotulados e ainda oferece consulta via interface web.
- `projeto4`: estudo prático de treinamento e predição com TensorFlow.js, com scripts separados para formatação de dados, treino e inferência. Funciona como um laboratório mais modular para experimentar o fluxo de ML.

## Tecnologias usadas

- JavaScript
- Node.js
- TensorFlow.js
- TensorFlow.js Node (`@tensorflow/tfjs-node`) em parte dos projetos

## Estrutura do repositório

```text
.
├── projeto1/
├── projeto2/
├── projeto3/
└── projeto4/
```

## Como executar

Cada projeto tem dependências e scripts próprios. Entre na pasta desejada e execute os comandos localmente.

### Projeto 1

```bash
cd projeto1
npm install
npm start
```

### Projeto 2

```bash
cd projeto2
npm install
npm start
```

### Projeto 3

```bash
cd projeto3
npm install
npm run treinar
npm start
```

Para a interface web do `projeto3`, consulte o `README.md` interno da pasta.

### Projeto 4

```bash
cd projeto4
npm install
node index.js
```

## Objetivo acadêmico

O conjunto dos projetos foi desenvolvido para praticar conceitos como:

- preparação e normalização de dados;
- treinamento supervisionado;
- classificação binária e multiclasse;
- recomendação baseada em padrões de consumo;
- separação entre treino, predição e visualização de resultados.

## Observação

Cada pasta possui seu próprio `README.md` com detalhes específicos de implementação, arquitetura e fluxo de execução.
