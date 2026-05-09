# RPG.COMBAT.DAMAGE
 
#rpg #combat #damage
  
🧭 ID: RPG.COMBAT.DAMAGE
  
## 🔗 RELACIONADOS

- [[RPG.COMBAT.BASIC]]
- [[RPG.CORE.ATTRIBUTES]]
- [[RPG.CORE.RESOURCES]]
- [[RPG.ENERGY.SYSTEM]]
- [[RPG.CORE.PROFICIENCIES]]
- [[RPG.CORE.RESOLUTION.SYSTEM]]
  
---

⚙️ DESCRIÇÃO
 
Define como o dano é gerado, modificado e aplicado em VIDA e POSTURA.

---

💥 DANO BASE
 
O dano depende da origem do ataque.

---

📌 TIPOS

🔹 FÍSICO  
- Baseado em FOR  

📌 FÓRMULA:  
DANO_BASE = FOR  

---

🔹 ARMA  
- Cada arma possui valor próprio  

📌 EX:  
- Katana → 8  
- Taco → 6  

---

🔹 TÉCNICA  
- Cada técnica define seu próprio dano  

📌 Pode escalar com:  
- INT  
- CONTROLE  
- TÉCNICA ([[RPG.CORE.PROFICIENCIES|TÉCNICA]])  

---

📊 DANO FINAL

DANO_FINAL = BASE + MODIFICADORES  

---

📈 MODIFICADORES

- Qualidade do sucesso  
- Proficiência relevante (COMBATE, TÉCNICA)  
- SUPER ATRIBUTO  
- Efeitos de técnica  

---

📏 QUALIDADE DO SUCESSO

- Pode ser adicionada diretamente ao dano  

---

🎯 CRÍTICO

Ocorre quando:
- Resultado do dado = atributo  

📌 EFEITOS:
- Dano em VIDA ×2  
- Dano em POSTURA ×2 total  

---

📊 FÓRMULA FINAL (CRÍTICO)

DANO_FINAL_CRÍTICO = (DANO_BASE + MODIFICADORES) × 2