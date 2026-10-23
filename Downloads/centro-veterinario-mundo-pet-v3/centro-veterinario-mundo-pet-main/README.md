
# Centro Veterinário Mundo Pet

## Integrantes do grupo

- Bruna - RGM: 48293237 brunasantosdias10112006-bit

- Eduardo - RGM: 47478497 - edudeabreu008
- Nicole - RGM: 47259701 - alejandra-apaza-tech
- Vinicius - RGM: 47697318 - ViniiNogueira 

## Introdução

A organização escolhida pelo grupo foi a **Clínica Veterinária Mundo Pet**, localizada na Praça Vieira do Couto, 38, Jardim Vila Formosa (São Paulo/SP). A clínica oferece consultas na clínica e a domicílio, vacinação, exames laboratoriais e de imagem, cirurgias, internação 24 horas para pacientes em tratamento e banho e tosa.

O objetivo do site é apresentar os serviços de forma clara, facilitar o contato dos tutores (telefone, WhatsApp, formulário) e permitir a solicitação de orçamentos.

**Site publicado:** https://viniinogueira.github.io/centro-veterinario-mundo-pet/

## Desenvolvimento

### Entrevista / visita à organização

> **[PREENCHER PELO GRUPO]** Descrever como foi o contato com a responsável pela clínica: data, quem participou, se foi presencial ou por Zoom/Google Meet (conversa só por WhatsApp/Discord/Telegram não é aceita), o que foi perguntado e o que foi levantado (serviços, horários, diferenciais, localização).
>
> **Comprovação:** inserir aqui a foto (JPG ou PNG, salva dentro do repositório, por exemplo em `assets/img/entrevista.jpg`) e indicar a forma de contato usada.
>
> `![Comprovação do contato com a clínica](assets/img/entrevista.jpg)`

### Estrutura do site

São 10 páginas HTML5 interligadas por um menu de navegação consistente: `index.html`, `contato.html`, `orcamento.html` e 7 páginas de conteúdo em `paginas/` (Quem Somos, Especialidades, Cirurgias e Internações, Exames, Banho e Tosa, Vacinação e Galeria). Todas usam marcação semântica (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`).

```
centro-veterinario-mundo-pet/
├── index.html
├── paginas/        (9 páginas)
├── css/style.css   (identidade visual única)
├── js/
│   ├── contato.js  (máscara de telefone, mensagens de erro e envio ao WhatsApp)
│   └── site.js     (menu retrátil, revelar ao rolar, voltar ao topo)
└── assets/
    ├── img/        (fotos, logotipos e imagem SVG)
    ├── audios/
    └── video/
```

### Recursos exigidos

| Requisito | Onde está |
|---|---|
| Formulário com validação nativa do HTML5 | `paginas/contato.html` e `paginas/orcamento.html` (`required`, `pattern`, `minlength`, `type="email"`, `type="tel"`) |
| Áudio e vídeo | `<audio>` na home (primeiros socorros) e `<video>` na galeria |
| SVG | `assets/img/cruz-mundo-pet.svg` (imagem usada no topo de cada página) e ícones em *SVG sprite* (`<symbol>` + `<use>`) |
| Grid e Flexbox | Cabeçalho, menu, cards de serviço, galeria, depoimentos e rodapé |
| JavaScript com eventos | `contato.js` (`input`, `submit`, `blur`) e `site.js` (`click`, `scroll`, `keydown`, `IntersectionObserver`) |
| CSS organizado | Variáveis CSS (`:root`) para paleta, tipografia e raios; componentes reutilizáveis (`.botao`, `.canal`, cards, tabelas) |

### Identidade visual: pesquisa e testes

> **[PREENCHER PELO GRUPO]** Listar os sites de clínicas veterinárias analisados (links e o que foi observado em layout, cores e tipografia) e os testes feitos de paletas e fontes (o que foi testado e por que foi descartado ou escolhido).

Decisões já tomadas:

- **Paleta:** extraída do logotipo da clínica: azul-marinho `#0e3f60`, azul-petróleo `#0c5063`, verde-água `#2c9a8f`, azul-aço `#436883` e bege `#c7b180`. O verde dos botões foi escurecido (`#1f7a70`) para garantir contraste adequado do texto branco.
- **Tipografia:** *Baloo 2* nos títulos (formas arredondadas, parecidas com o lettering do logotipo) e *Nunito Sans* no texto corrido (boa leitura em tela), com fontes de sistema como reserva.
- **Componentes:** botões, campos e cards seguem os princípios da aula de estilização: foco sempre visível, estado de erro com `aria-invalid` e transições apenas com `transform` e `opacity`, que são baratas para o navegador animar.
- **Acessibilidade:** link "pular para o conteúdo", `label` ligado a cada campo, `alt` descritivo, menu operável por teclado e respeito a `prefers-reduced-motion`.

### Desafios técnicos

> **[PREENCHER PELO GRUPO]** Contar as dificuldades reais (ex.: máscara do telefone, layout do menu no celular, validação no W3C) e como foram resolvidas.

### Como seria desenvolver o mesmo site com IA

> **[PREENCHER PELO GRUPO]** Explicar o processo equivalente caso o site fosse gerado por IA: que informações o grupo precisaria fornecer (conteúdo levantado na entrevista, logotipo, paleta), como seria o prompt, como as páginas seriam geradas e, principalmente, o que ainda precisaria ser revisado por humanos (conteúdo real, acessibilidade, validação).

### Uso de IA

> **[PREENCHER PELO GRUPO COM A VERDADE]** Informar quais modelos foram usados (ex.: Claude, Gemini), para quê (ex.: geração das variações do logotipo, escrita do CSS, revisão da estrutura), a motivação e **como as respostas foram verificadas** (testes no navegador, validadores do W3C, leitura do código).

## Validação com o W3C

Validar as 10 páginas no [W3C Markup Validator](https://validator.w3.org/) e o CSS no [CSS Validation Service](https://jigsaw.w3.org/css-validator/), corrigir os erros e registrar abaixo.

> **[PREENCHER PELO GRUPO]** Inserir os prints da validação das 10 páginas e do CSS (a comprovação é obrigatória).

## Hospedagem

O site está publicado com **GitHub Pages**: https://viniinogueira.github.io/centro-veterinario-mundo-pet/

### Domínio sugerido

> **[PREENCHER PELO GRUPO]** Informar qual domínio o grupo compraria para a clínica (ex.: `mundopetvet.com.br`), onde seria registrado (ex.: Registro.br), o passo a passo da compra e **o print da pesquisa de disponibilidade**.

## Conclusão

> **[PREENCHER PELO GRUPO]** Reflexão sobre o resultado e os aprendizados da etapa.
