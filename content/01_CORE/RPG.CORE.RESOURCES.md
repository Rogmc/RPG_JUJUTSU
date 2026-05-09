# RPG.CORE.RESOURCES
 
#rpg #core #system
  
🧭 ID: RPG.CORE.RESOURCES
  
## 🔗 RELACIONADOS

- [[RPG.CORE.ATTRIBUTES]]
- [[RPG.CORE.RESOLUTION.SYSTEM]]
- [[RPG.CORE.PROFICIENCIES]]
- [[RPG.ENERGY.SYSTEM]]
- [[RPG.ENERGY.CONTROL]]
- [[RPG.COMBAT.DAMAGE]]
- [[RPG.COMBAT.BASIC]]
  
---

⚙️ DESCRIÇÃO
 
Define os recursos fundamentais do personagem: VIDA, ENERGIA AMALDIÇOADA e POSTURA, incluindo suas interações com dano, recuperação e super atributo.

---

❤️ VIDA
 
Representa integridade física.
 
📌 REGRAS:
 
- Ao chegar em 0 → personagem fica incapacitado  
- Dano recebido sempre impacta POSTURA  

---

💥 INTERAÇÃO COM POSTURA
 
- Todo dano em VIDA reduz POSTURA  

📌 FÓRMULA:
 
DANO_POSTURA = DANO_VIDA × 1d6  

---

🎯 CRÍTICO
 
- Dano em VIDA ×2  
- Dano em POSTURA ×2 adicional  

📌 RESULTADO TOTAL:
 
POSTURA = (DANO_VIDA × 2) × 1d6 × 2  

---

🔋 ENERGIA AMALDIÇOADA
 
Recurso usado para técnicas ([[RPG.ENERGY.SYSTEM]]).

📌 USO:
 
- Consumida ao usar técnicas  
- Pode ser usada para recuperar POSTURA  

📌 REGENERAÇÃO:
 
- Não regenera durante combate naturalmente  
- Recupera após combate  

---

🛡️ POSTURA
 
Representa estabilidade física total.

📌 FUNÇÃO:
 
- Atua como buffer antes da derrota física  
- Define capacidade de continuidade na luta  

---

💀 QUEBRA DE POSTURA
 
Quando chega a 0:
 
- Personagem não pode agir  
- Duração: 1d6 turnos  

📉 LIMITE:
 
- POSTURA não fica negativa  
- Trava em 0  

---

♻️ RECUPERAÇÃO DE POSTURA

🟢 PASSIVA:
 
- Rola 2d6  
- Multiplica os resultados  

📌 FÓRMULA:
 
RECUP = (D6 × D6)  

---

🔵 ATIVA:
 
- Consome [[RPG.ENERGY.SYSTEM|energia amaldiçoada]] para recuperar POSTURA  

---

⚡ SUPER ATRIBUTO
 
- Cada ação extra consome POSTURA  

📌 REGRA:
 
- Todas as ações adicionais aplicam custo em POSTURA  

---

🛡️ DEFESA ATIVA
 
- Pode gastar POSTURA para reduzir dano recebido  

---

📊 ESCALA DE POSTURA

📌 INICIAL:
 
POSTURA = (DEX + FOR) × 1d6  

📌 PROGRESSÃO:
 
+10 POSTURA por ponto de atributo  

---

📌 REGRA CENTRAL
 
- VIDA define derrota  
- POSTURA define controle da luta  
- ENERGIA define capacidade ofensiva