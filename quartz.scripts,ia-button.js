document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("botaoIA");

  if (!btn) return;

  btn.onclick = async () => {

    const out = document.getElementById("saidaIA");
    out.innerText = "Gerando...";

    const res = await fetch("http://192.168.0.10:3001/ia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: "Crie conteúdo para RPG Jujutsu"
      })
    });

    const data = await res.json();
    out.innerText = data.resposta;
  };

});