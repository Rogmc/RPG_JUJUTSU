# RPG.ENTITY.PLAYER

#rpg #entity #player

🧭 ID: RPG.ENTITY.PLAYER

## 🔗 RELACIONADOS

- [[RPG.CORE.ATTRIBUTES]]
- [[RPG.CORE.PROFICIENCIES]]
- [[RPG.CORE.RESOURCES]]
- [[RPG.ENERGY.SYSTEM]]
- [[RPG.TECHNIQUE.SYSTEM]]
- [[RPG.PROGRESSION.BASIC]]
- [[RPG.COMBAT.BASIC]]
- [[RPG.ENTITY.SHIKIGAMI]]
- [[RPG.SPECIAL.RESTRICTION]]

---

⚙️ DESCRIÇÃO

Define a estrutura oficial de personagem jogador, incluindo atributos, recursos, técnicas, progressão e estados especiais.

---

# 📌 ESTRUTURA BASE

Todo PLAYER possui:
- atributos ([[RPG.CORE.ATTRIBUTES]])
- proficiências ([[RPG.CORE.PROFICIENCIES]])
- recursos ([[RPG.CORE.RESOURCES]])
- técnica ([[RPG.TECHNIQUE.SYSTEM]])
- progressão ([[RPG.PROGRESSION.BASIC]])
- equipamentos
- estados especiais ([[RPG.COMBAT.STATUS]])

---

# 📊 ATRIBUTOS

📌 Atributos oficiais:
- FOR
- DEX
- INT

📌 Funções:

FOR:
- combate físico
- impacto
- resistência corporal

DEX:
- velocidade
- esquiva
- precisão
- execução

INT:
- energia amaldiçoada
- técnicas
- manipulação energética
- percepção

📌 Limites:
- padrão: até 8
- despertar: até 12

---

# ⚡ SUPER ATRIBUTO

📌 Regra:
Atributos acima de 6 geram SUPER ATRIBUTO.

📌 Fórmula:
SUPER = ATRIBUTO - 6

📌 Efeitos:
- SUPER FOR → impacto ampliado
- SUPER DEX → ações extras
- SUPER INT → eficiência energética e técnica

📌 Custo:
Consome POSTURA ([[RPG.CORE.RESOURCES]])

---

# 🧠 PROFICIÊNCIAS

📌 Oficiais:
- FÍSICO
- CONTROLE ([[RPG.ENERGY.CONTROL]])
- RESISTÊNCIA

📌 Função:
- vantagem em testes
- domínio técnico
- eficiência
- especialização

---

# ❤️ RECURSOS

📌 Vida:
Integridade física real.

📌 Postura:
Capacidade de continuar lutando.
Se chegar a 0:
→ personagem fica incapaz de agir

📌 Energia Amaldiçoada ([[RPG.ENERGY.SYSTEM]]):
Usada para técnicas, reforços e Kokusen.

---

# 🎓 NÍVEL

📌 Base:
- nível 1 = atributos base 2

📌 Progressão:
- 1–10: padrão
- 11–15: avançado
- 16+: extremo

📌 Função:
Principalmente evolução de atributos

---

# ⚔️ TÉCNICAS

📌 Estrutura possível:
- técnica inata
- extensão
- reversa
- máxima
- domínio

📌 Regra:
Cada PLAYER possui apenas 1 técnica inata ([[RPG.TECHNIQUE.SYSTEM]])

---

# 👥 INVOCAÇÕES

Invocações:
- possuem ficha própria ([[RPG.ENTITY.SHIKIGAMI]])
- agem independentemente
- são vinculadas ao jogador

---

# 🛡️ EQUIPAMENTOS

- armas e itens possuem regras próprias
- podem interagir com atributos e técnicas

---

# ⛓️ RESTRIÇÃO CELESTIAL

📌 Efeito:
- remove/nega energia amaldiçoada
- converte sistema em físico puro

📌 Consequência:
- atributos físicos elevados
- energia substituída por POSTURA
- estilo de combate bruto

---

# 🎓 POSIÇÃO

- não estudante
- 1º ano
- 2º ano
- 3º ano

---

# 🏅 GRAU

- Grau 4
- Grau 3
- Semi Grau 1
- Grau 1
- Especial

---

# ⚔️ AÇÕES POR TURNO

- padrão: 1 ação
- SUPER DEX: ações adicionais

---

# 📌 REGRA DE FICHA

Nome | Grau | Nível  
FOR | DEX | INT  
FÍSICO | CONTROLE | RESISTÊNCIA  
VIDA | POSTURA | ENERGIA  
Técnica | Extensão | Máxima | Domínio  
Equipamentos | Invocações  
XP  

---

# 📌 REGRA CENTRAL

- atributos = potencial
- proficiências = domínio
- técnicas = identidade
- energia = execução
- postura = sobrevivência em combate