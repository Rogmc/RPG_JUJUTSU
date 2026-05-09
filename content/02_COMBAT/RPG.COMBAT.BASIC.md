# RPG.COMBAT.BASIC
 
#rpg #combat #system
  
🧭 ID: RPG.COMBAT.BASIC
  
## 🔗 RELACIONADOS

- [[RPG.CORE.RESOLUTION.SYSTEM]]
- [[RPG.CORE.ATTRIBUTES]]
- [[RPG.CORE.RESOURCES]]
- [[RPG.CORE.ACTIONS]]
- [[RPG.ENERGY.SYSTEM]]
- [[RPG.CORE.PROFICIENCIES]]
  
---

⚙️ DESCRIÇÃO
 
Define o fluxo completo de combate: ordem de turno, ações, reações e resolução de conflitos.

---

🔄 ESTRUTURA DE COMBATE
 
1. Definição de ordem (início da luta)  
2. Execução de turnos  
3. Loop até fim do combate  

---

🏁 ORDEM DE TURNO
 
- Rolar 1d6 + DEX  
- Ordem é fixa após definida  

---

🎯 TURNO DO PERSONAGEM
 
Pode realizar:

- 1 ação base  
- Ações extras via SUPER ATRIBUTO  
- Defesa ativa (se reagir)  

---

⚡ AÇÕES

🟢 AÇÃO BASE
 
- Ataque  
- Técnica ([[RPG.TECHNIQUE.SYSTEM|TÉCNICA]])  
- Movimento  
- Não agir (recuperação)  

---

🔴 AÇÕES EXTRAS (SUPER)
 
- Geradas por MULT  
- Cada ação extra consome [[RPG.CORE.RESOURCES|POSTURA]]  

📌 REGRA:
- Pode repetir ações ou combinar ações  

📌 ATRIBUTOS EM AÇÕES EXTRAS:
- Se repetir ação → usa mesmo atributo  
- Se mudar ação → rola novo atributo  

---

⚔️ ATAQUE
 
1. Escolher tipo:
   - físico (FOR)  
   - arma (DEX)  
   - técnica (INT)  

2. Alvo pode reagir  

---

🛡️ REAÇÃO
 
Só ocorre se o alvo decidir reagir.

📌 TIPOS:

🏃 ESQUIVA  
- Usa DEX  

🛡️ RESISTÊNCIA  
- Baseado em FÍSICO  

📌 EFEITO:
- Reduz dano recebido  
- Aumenta pressão em [[RPG.CORE.RESOURCES|POSTURA]]  

📌 LIMITE:
- Pode reagir enquanto tiver POSTURA  

---

⚖️ TESTE OPOSTO
 
- Ocorre se houver reação  
- Usa sistema de resolução ([[RPG.CORE.RESOLUTION.SYSTEM]])  

📌 EMPATE:
- Ambos rolam 1d6  
- Maior resultado vence  

---

🎯 RESULTADO DO TESTE
 
- Sucesso vs falha → sucesso vence  
- Ambos sucesso → disputa  
- Ambos falha → nada acontece  

---

💥 DANO
 
- Aplicado na VIDA  
- Convertido em POSTURA  

---

💀 QUEBRA DE POSTURA
 
- Ao chegar em 0:
  → não pode agir  
  → duração: 1d6 turnos  

---

♻️ RECUPERAÇÃO

🟢 PASSIVA:
- Rola 2d6  
- Multiplica resultados  

🔵 ATIVA:
- Usa [[RPG.ENERGY.SYSTEM|energia amaldiçoada]]  
- Recupera POSTURA  
- Não consome turno  

---

⚠️ RESTRIÇÕES
 
- Sem POSTURA → não reage nem age  
- Sem ENERGIA → não usa técnica  

---

📌 REGRA CENTRAL
 
- Reagir evita dano direto, mas pressiona POSTURA  
- Agir demais consome POSTURA  
- Parar permite recuperação