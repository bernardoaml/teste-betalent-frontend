# BeTalent - Sistema de Gerenciamento de Funcionários

Uma aplicação web moderna para visualização e gerenciamento de funcionários, desenvolvida com React e TypeScript. A aplicação oferece uma interface intuitiva para consultar informações dos colaboradores, com recursos de busca avançada e design totalmente responsivo.

## Características Principais

O sistema foi projetado pensando na experiência do usuário, oferecendo:

- Listagem completa de funcionários em formato de tabela
- Sistema de busca inteligente que permite filtrar por nome, cargo ou telefone
- Formatação automática de números de telefone e datas
- Interface adaptada para desktop e dispositivos móveis
- Cards expansíveis no mobile para melhor visualização dos dados
- Carregamento otimizado com estados visuais de feedback

## Tecnologias Utilizadas

- React 19 com TypeScript para desenvolvimento da interface
- CSS3 puro para estilização e responsividade
- JSON Server para simulação de API REST
- Testing Library para testes automatizados

## Requisitos do Sistema

Para executar este projeto em sua máquina, você precisará ter instalado:

- Node.js versão 14 ou superior
- npm ou Yarn como gerenciador de pacotes
- Git para controle de versão

## Como Executar o Projeto

### Passo 1: Preparação do Ambiente

Clone o repositório e navegue até a pasta do projeto:

```bash
git clone https://github.com/bernardoaml/teste-betalent-frontend
cd teste-betalent-frontend/betalent-employees
```

### Passo 2: Instalação das Dependências

Instale todas as dependências necessárias:

```bash
npm install
```

### Passo 3: Configuração da API

Em um terminal separado, inicie o servidor da API:

```bash
cd ../api-data
npx json-server db.json --port 3005
```

O servidor da API ficará disponível em http://localhost:3005

### Passo 4: Execução da Aplicação

De volta ao diretório principal, inicie a aplicação:

```bash
npm start
```

A aplicação será executada em http://localhost:3000

## Arquitetura do Projeto

O projeto segue uma estrutura organizada e escalável:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/         # Cabeçalho da aplicação
│   ├── SearchBar/      # Campo de busca
│   └── EmployeeTable/  # Tabela e cards dos funcionários
├── services/           # Integração com APIs
├── types/             # Definições de tipos TypeScript
├── utils/             # Funções utilitárias
└── data/              # Dados e configurações
```

## Funcionalidades Detalhadas

### Sistema de Busca
O sistema permite filtrar funcionários de forma inteligente:
- Busca por nome completo ou parcial
- Filtro por cargo ou departamento
- Busca por números de telefone

### Interface Responsiva
A aplicação se adapta perfeitamente a diferentes dispositivos:
- Desktop: Tabela completa com todas as informações
- Mobile: Cards expansíveis para melhor usabilidade
- Transições suaves e feedback visual

### Tratamento de Dados
- Formatação automática de telefones no padrão brasileiro
- Datas apresentadas no formato DD/MM/AAAA
- Estados de carregamento e erro para melhor experiência

## Scripts de Desenvolvimento

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Gera build de produção
npm test           # Executa a suíte de testes
```

## Considerações Técnicas

Esta aplicação foi desenvolvida com foco em:
- Performance e otimização de renderização
- Código limpo e manutenível
- Experiência do usuário intuitiva
- Responsividade e acessibilidade

O projeto utiliza uma API simulada para demonstrar a integração com serviços backend, facilitando o desenvolvimento e testes da interface.