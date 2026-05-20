<p align="center">
  <img src="./frontend/public/png/Vector.png" width="340" alt="CheckTime Logo">
</p>

<p align="center">
  Sistema moderno de registro e gerenciamento de ponto, desenvolvido em <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>CSS</strong> e <strong>Shadcn UI</strong>.<br>
  Criado para oferecer um controle de ponto inteligente, prático e seguro.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-Em_Desenvolvimento-00b300?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=opensourceinitiative&logoColor=black" />
</p>

---

## 📚 **Sumário**

- [✨ Visão Geral](#-visão-geral)
- [🚀 Funcionalidades](#-funcionalidades)
- [🛠 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura do projeto](#-estrutura-do-projeto)
- [💻 Como rodar o projeto](#-como-rodar-o-projeto)
- [👤 Como usar](#-como-usar)
- [📈 Roadmap / Futuras melhorias](#-roadmap--futuras-melhorias)
- [📄 Licença](#-licença)


<div align="center">

## ✨ **Visão Geral**

O **CheckTime** é um sistema pensado para registrar e acompanhar horários de entrada e saída de trabalhadores.  
Também oferece ferramentas de relatório e permite que o usuário personalize seu perfil — incluindo **nome, senha e foto**.

Este projeto está em desenvolvimento e será expandido com novas funcionalidades e integrações (como banco de dados e autenticação).

</div>



<div align="center">

## 🚀 **Funcionalidades**

✔ Registro de ponto 
✔ Tela dedicada para edição de perfil   
✔ Histórico de marcações  
✔ Relatórios de horas trabalhadas, atrasos e faltas  
✔ Layout responsivo  
✔ Abono de falta  
✔ Ajuste de ponto  
✔ Validação de login e cadastro 


</div>


<div align="center">

## 🛠 **Tecnologias utilizadas**

| Tecnologia | Uso |
|-----------|-----|
| **Next.js (App Router)** | Estrutura principal do projeto |
| **React** | Componentização |
| **TypeScript** | Tipagem e segurança |
| **CSS Modules** | Estilização isolada por componente |
| **Material UI Icons** | Ícones |
| **Node.js** | Ambiente de execução |
| **Shadcn UI** | Estilização e modelagem dos componentes |

</div>


## 📂 **Estrutura do projeto**

```txt
checktime/
├─ app/
│  ├─ abono-falta/page.tsx
│  ├─ ajustar-ponto/page.tsx 
│  ├─ ajuste-aprovado/page.tsx 
│  ├─ ajuste-pendente/page.tsx 
│  ├─ api/
│  │  └─ login/route.ts
│  ├─ bater-ponto/
│  │  ├─ page.tsx
│  │  ├─ Relogio.module.css
│  │  └─ Relogio.tsx
│  ├─ cadastro/page.tsx
│  ├─ editar-perfil/page.tsx
│  ├─ esqueci-senha/page.tsx
│  ├─ login/
│  │  ├─ action.ts
│  │  └─ page.tsx
│  ├─ relatorio-page/page.tsx
│  ├─ solicitacoes/page.tsx
│  ├─ favicon.ico
│  ├─ global.css
│  ├─ layout.tsx
│  ├─ page.modules.css
│  └─ page.tsx
├─ components/
│  ├─ Abono-falta/
│  ├─ Ajustar-ponto/
│  ├─ Auth/
│  ├─ Bater-ponto/
│  ├─ Editar-perfil/
│  ├─ relatorio/
│  ├─ Sidebar/
│  ├─ ui/
│  └─ lib/
├─ public/png/Vector.png
├─ styles/Home.module.css
├─ .gitignore
├─ package.json
├─ README.md
└─ tsconfig.json


```

---

## 💻 **Como rodar o projeto**

### 1. Clone o repositório
```bash
git clone https://github.com/joaovitored/Checktime.git
cd Checktime
cd frontend(para acessar o front)

### 2. Instale as dependÊncias

npm install/npm i
# ou
yarn install

### 3. Inicie o projeto

npm run dev
# ou
yarn dev

O site estará disponível no http://localhost:3000

Caso queira testar, existe um email para testes

Email: teste@empresa.com
Senha: 123456
```
## 👤 **Como usar**

Para utilizar o **CheckTime** após rodar o projeto localmente, siga estas instruções:

### 1. Acesse a aplicação
Após executar `npm run dev` ou `yarn dev`, abra seu navegador e vá para:


### 2. Cadastro e login
- Se você ainda não possui uma conta, acesse a página de **Cadastro** (`/cadastro`) e preencha os campos solicitados.
- Caso já tenha uma conta, vá para a página de **Login** (`/login`) e autentique-se com seu email e senha.

### 3. Bater ponto
- Acesse a página de **Bater ponto** (`/bater-ponto`).
- Clique em **Registrar entrada** ou **Registrar saída** conforme necessário.
- O histórico será atualizado automaticamente.

### 4. Editar perfil
- Acesse a página de **Editar perfil** (`/editar-perfil`).
- Modifique **nome**, **email**, **senha** ou **foto de perfil**.
- Clique em **SOLICITAR ALTERAÇÃO** para salvar as mudanças.
> ⚠ Atualmente, como não há banco de dados, essas alterações só serão armazenadas na sessão do navegador.

### 5. Consultar relatórios
- Acesse a página de **Relatórios** (`/relatorio`).
- Visualize o histórico de marcações, atrasos e faltas.


## 📈 **Roadmap / Futuras melhorias**

- [ ] Integração com banco de dados (Decidiremos ainda qual será)  
- [ ] Dashboard interativo com gráficos de produtividade  
- [ ] Exportação de relatórios em PDF  
- [ ] Notificações por email e push  
- [ ] Painel administrativo para gestores  
- [ ] Sistema de permissões (admin, gestor e funcionário)  

## 📄 **Licença**

Este projeto está licenciado sob a **MIT License**.

```txt
MIT License

Copyright (c) 2025 joaovitorsantanared

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

