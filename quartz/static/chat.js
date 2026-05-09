async function send() {
  const msg = document.getElementById("msg").value;

  const res = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();

  document.getElementById("out").innerText = data.reply;
}
