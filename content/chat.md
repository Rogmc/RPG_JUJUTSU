<input id="msg" placeholder="Pergunte ao mundo..." />
<button onclick="window.send()">Enviar</button>

<pre id="out"></pre>
<script>
window.send = async function () {
  console.log("clicou no botão");

  const msg = document.getElementById("msg").value;

  const res = await fetch("https://SEU-NGROK-AQUI/chat", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();

  document.getElementById("out").innerText = data.reply;
};
</script>
