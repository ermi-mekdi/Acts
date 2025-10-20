// Woman   &#128105;     Man  &#128104;  locatie  📍

function displayPerson(m) {
  const display = document.createElement("div");
  display.classList.add("person");
  display.id = "pdisplay";
  document.body.appendChild(display);
  const sex = m.man === true ? "&#128104; " : "&#128105; ";
  const def1 = m.nameM1 ? m.name1 + " ማለት " + m.nameM1 : "";
  const def2 = m.nameM2 ? m.name2 + " ማለት " + m.nameM2 : "";
  const naam2 = m.name2 ? `ካልኣይ ስም  ${m.name2}  (${m.nameE2})` : "";

  display.innerHTML = `
  <div onclick="de()" class="x">X</div>
  ${sex} 
  <h2> ስም ${m.name1} (${m.nameE1}) </h2>
  <h3>${def1}</h3>
  <h2> ${naam2} </h2>  
  <h3>${def2} </h3>
  <h2>${m.title}</h2>
  <h2>${m.adres}</h2>
  <h3>${m.info}</h3>
  <button class="xbtn" onclick="de()">Close</button>
  `;
}

function disPlc(p) {
  const display = document.createElement("div");
  display.classList.add("person");
  display.id = "pdisplay";
  document.body.appendChild(display);

  const def1 = p.nameM1 ? p.name1 + " ማለት " + p.nameM1 : "";
  const def2 = p.nameM2 ? p.name2 + " ማለት " + p.nameM2 : "";
  const vers = p.vers ? `<a herf= "${p.vers}" ` : "";
  const gMap = p.gMap ? `<a href="${p.gMap}" target="_blank">Map</a>` : "";
  const info = p.info ? p.info : "";

  display.innerHTML = `
  <div onclick="de()" class="x">X</div>
 
  <h2> ${p.name1} (${p.nameE1})  ${p.name2}  ${p.nameE2} </h2>
  <h3>${def1}</h3>
  <h3>${def2} </h3>
  <h3>${vers}</h3>
  <h3>${gMap}</h3>
  <h3>${info}</h3>
  <button class="xbtn" onclick="de()">Close</button>
  `;
}
function de() {
  const display = document.getElementById("pdisplay").remove();
}
function wordD(w, event) {
  const display = document.createElement("div");
  display.classList.add("word");
  display.id = "pdisplay";
  document.body.appendChild(display);
  display.innerHTML = `  
    <h2>${w.d}</h2>    
  `;
  // Position at click
  display.style.position = "absolute";
  display.style.left = event.clientX + window.scrollX + "px";
  display.style.top = Math.max(event.clientY + window.scrollY, 10) + "px";
  setTimeout(de, 2000);
}
