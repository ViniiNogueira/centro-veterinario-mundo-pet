# Análise de Clínicas Veterinárias & Design System

## Parte A — Tabela de Análise

| Site | Cor Primária / Secundária (HEX) | Cor de Fundo / Texto (HEX) | Fonte de Títulos / Texto | Estilo de Botão (Cor, Border-Radius, Sombra) | Tipo de Menu | Leiaute Principal | Comportamento no Smartphone |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Buffalo Vet Clinic** | `#003366` / `#2E8B57` (estimado) | `#FFFFFF` / `#333333` (estimado) | Inter / Open Sans (estimado) | `#2E8B57`, `4px`, sem sombra (estimado) | Horizontal / Dropdown | Flexbox / Grid | Menu hambúrguer, coluna única |
| **2. Southwood Animal Hosp.** | `#1E3A8A` / `#3B82F6` (estimado) | `#F9FAFB` / `#1F2937` (estimado) | Roboto / Open Sans (estimado) | `#3B82F6`, `8px`, sombra sutil (estimado) | Horizontal | Grid (CSS Grid) | Menu hambúrguer, empilhado |
| **3. Sleeping Giant Clinic** | `#065F46` / `#047857` (estimado) | `#F0FDF4` / `#064E3B` (estimado) | Poppins / Inter (estimado) | `#047857`, `6px`, nenhuma (estimado) | Horizontal | Coluna única / Flexbox | Menu colapsável em acordeão |
| **4. Anicira San Diego** | `#2563EB` / `#1E40AF` (estimado) | `#FFFFFF` / `#111827` (estimado) | Montserrat / Roboto (estimado) | `#2563EB`, `9999px` (pílula), sombra (estimado)| Dropdown | Grid responsivo | Hambúrguer full-screen |
| **5. La Verne Animal Hosp.** | `#0D9488` / `#115E59` (estimado) | `#FAFAFA` / `#27272A` (estimado) | Lato / Open Sans (estimado) | `#0D9488`, `4px`, sem sombra (estimado) | Horizontal | Flexbox | Menu vertical empilhado |
| **6. HV Fratelli (Flyvet)** | `#0284C7` / `#0369A1` (estimado) | `#FFFFFF` / `#0F172A` (estimado) | Nunito / Inter (estimado) | `#0284C7`, `8px`, sombra média (estimado) | Hambúrguer / Fixo | Grid (1 a 3 colunas) | Menu lateral deslizante (Drawer) |
| **7. Vet Nasa** | `#1D4ED8` / `#9333EA` (estimado) | `#F8FAFC` / `#334155` (estimado) | Roboto / Inter (estimado) | `#1D4ED8`, `6px`, sutil (estimado) | Horizontal / Dropdown | Flexbox / Grid | Menu hambúrguer retrátil |
| **8. Veros Vet** | `#0F172A` / `#38BDF8` (estimado) | `#0B0F19` / `#F8FAFC` (estimado) | Plus Jakarta Sans / Inter (estimado) | `#38BDF8`, `0px` (Clean), sutil (estimado) | Horizontal (Minimalista) | Grid moderno | Hambúrguer flutuante |
| **9. Petlove Saúde** | `#00B37E` / `#00875F` (estimado) | `#FFFFFF` / `#121214` (estimado) | Circular Std / Inter (estimado) | `#00B37E`, `8px`, sombra leve (estimado) | Dropdown complexo | Flexbox estruturado | Hambúrguer + barra inferior |
| **10. Pet Care** | `#005F73` / `#0A9396` (estimado) | `#F4F1DE` / `#2B2D42` (estimado) | Helvetica / Arial (estimado) | `#0A9396`, `4px`, sem sombra (estimado) | Horizontal | Grid clássico | Menu hambúrguer vertical |

### Paleta de Cores

A paleta gerada pelo Gemini parte de um verde-esmeralda (`#00B37E`) como cor primária, usado nos botões e nos detalhes de destaque, e de um azul (`#0284C7`) como cor secundária, que aparece nos estados de foco. As demais cores são neutras: branco (`#FFFFFF`) para o fundo, cinza-azulado escuro (`#111827`) para o texto, cinza muito claro (`#F9FAFB`) para os cards e cinza suave (`#E5E7EB`) para as bordas. O resultado é uma identidade limpa e acolhedora, típica de clínicas veterinárias, que transmite confiança sem pesar visualmente.

![alt text](image-2.png)

---

## Parte A2 — Responsividade

| Site | Meta Viewport? | Breakpoints / Abordagem | Transformação no Smartphone | Colunas (Mobile / Tablet / Desktop) | Texto ≥16px no Mobile? | Alvo de Toque ≥44x44px? | Imagens `max-width: 100%`? | Elementos Ocultos/Reordenados |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Buffalo Vet** | Sim (estimado) | 768px, 1024px — Desktop-first (estimado) | Menu vira hambúrguer lateral (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Barra lateral oculta no mobile (estimado) |
| **2. Southwood** | Sim (estimado) | 640px, 768px, 1024px — Mobile-first (estimado) | Menu colapsa em lista vertical (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Redes sociais movidas para o rodapé (estimado) |
| **3. Sleeping Giant** | Sim (estimado) | 768px, 992px — Desktop-first (estimado) | Menu recolhe em dropdown simples (estimado)| 1 / 2 / 2 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Imagens secundárias ocultas (estimado) |
| **4. Anicira** | Sim (estimado) | 768px, 1200px — Mobile-first (estimado) | Menu expande em tela inteira (estimado) | 1 / 2 / 4 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Banner superior redimensionado (estimado) |
| **5. La Verne** | Sim (estimado) | 768px, 1024px — Desktop-first (estimado) | Menu vira lista empilhada (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Seção de depoimentos simplificada (estimado) |
| **6. HV Fratelli** | Sim (estimado) | 600px, 900px, 1200px — Mobile-first (estimado)| Menu drawer lateral (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Elementos decorativos ocultos (estimado) |
| **7. Vet Nasa** | Sim (estimado) | 768px, 1024px — Desktop-first (estimado) | Menu hambúrguer padrão (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Menu flutuante fixado no topo (estimado) |
| **8. Veros Vet** | Sim (estimado) | 768px, 1024px, 1440px — Mobile-first (estimado)| Menu minimalista com overlay (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Elementos complexos convertidos em carrossel (estimado) |
| **9. Petlove Saúde** | Sim (estimado) | 768px, 1024px — Mobile-first (estimado) | Hambúrguer + barra de navegação inferior (estimado) | 1 / 2 / 4 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Filtros laterais viram modal flutuante (estimado) |
| **10. Pet Care** | Sim (estimado) | 768px, 1024px — Desktop-first (estimado) | Menu empilhado clássico (estimado) | 1 / 2 / 3 colunas (estimado) | Sim (estimado) | Sim (estimado) | Sim (estimado) | Rodapé reorganizado em blocos verticais (estimado) |

### Destaques no Smartphone:
1. **Petlove Saúde**: Navegação fluida por gaveta (*drawer*) e excelente espaçamento de toque.
2. **Veros Vet**: Tipografia refinada e transições suaves que preservam a legibilidade em 360px.
3. **HV Fratelli**: Layout limpo que converte blocos complexos em coluna única sem overflow lateral.

---

## Parte B — Padrões da Área

* **Padrões recorrentes (5+ sites):** Tons de azul profundo e verde-claro; cabeçalhos fixos (*sticky header*) com CTAs de emergência e agendamento; cartões informativos com bordas arredondadas e sombras suaves; rodapés divididos em múltiplas colunas.
* **Diferenciais (1-2 sites):** Modos escuros sofisticados e barras flutuantes inferiores para conversão direta (ex: WhatsApp).
* **Cara visual dominante:** Limpa, acolhedora e altamente profissional, transmitindo confiança imediata.
* **Padrão de menu/layout no smartphone:** Menu hambúrguer no canto superior direito e leiaute linear em coluna única.

---

## Parte C — Design System e Página de Exemplo

### Parte principal da pagina

![alt text](image.png)

Protótipo gerado pelo Gemini a partir do prompt enviado pelo professor: menu, seção de destaque, três cards, formulário de agendamento e rodapé, usando o design system extraído da análise.*

### A parte de formulario do prototipo.

![alt text](image-1.png)

---

## Parte E — Checklist de Acessibilidade

* **Contraste aprovado?** Sim.
* **Foco visível em links, botões e campos?** Sim.
* **Labels ligados corretamente aos inputs?** Sim.
* **Menu operável só com Tab e Enter?** Sim.
* **Sem rolagem lateral em 360px?** Sim.
* **Texto de 16px ou mais e alvos de toque de 44px ou mais no smartphone?** Sim.