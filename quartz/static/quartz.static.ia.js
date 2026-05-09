document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("botaoIA");
  const out = document.getElementById("saidaIA");

  if (!btn) return;

  btn.onclick = async () => {

    out.innerText = "Gerando...";

    try {
      const res = await fetch("http://192.168.0.10:3001/ia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "Crie conteúdo de RPG Jujutsu"
        })
      });

      const data = await res.json();
      out.innerText = data.resposta;

    } catch (err) {
      out.innerText = "Erro ao conectar IA";
      console.error(err);
    }
  };

});