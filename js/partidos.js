let filteredMatches = matches.matches;
/*let radioLocal = document.getElementById("radioLocal");
let radioVisit = document.getElementById("radioVisit");*/
let nombreEquipo = document.getElementById("nombre-equipo");

let tableBody = document.getElementById("table-body");
/*
for (let i = 0; i < filteredMatches.length; i++) {
  let homeTResult = filteredMatches[i].score.fullTime.homeTeam;
  let awayTResult = filteredMatches[i].score.fullTime.awayTeam;
  let marcador2 = `${homeTResult} - ${awayTResult}`; //marcador final
  if (filteredMatches[i].status == "FINISHED") {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${filteredMatches[i].homeTeam.name}</td><td style="text-align:center">${marcador2}</td><td>${filteredMatches[i].awayTeam.name}</td>`;
    tableBody.appendChild(tr);
  }
}
*/
/////////////////////////////////////////////////////////////////////////////////////////

//Funcion Principal

let filtrar = function(event) {
    event.preventDefault();
    let equipo = nombreEquipo.value; //.value es el contenido
    let equipos = obtenerPartidosEquipo(equipo);
    pintarPartidos(equipos);
};

let pintarPartidos = (partidosEquipo) => {
    console.log(partidosEquipo);
    tableBody.innerHTML = "";
    for (let i = 0; i < partidosEquipo.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${partidosEquipo[i].homeTeam.name}</td>
        <td style="text-align:center">resultado</td>
        <td>${partidosEquipo[i].awayTeam.name}</td>`;
        tableBody.appendChild(tr);
    }
};

let obtenerPartidosEquipo = function(equipoElegido){
    let partidosEquipo = [];       
    for (let i = 0; i < filteredMatches.length; i++) {
        if(filteredMatches[i].homeTeam.name == equipoElegido || filteredMatches[i].awayTeam.name == equipoElegido){
            partidosEquipo.push(filteredMatches[i]);
        };
    };
    return partidosEquipo;    
    
};

///////////////
/*
let filtrarEquipos = function(){
    let equiposSeleccionados = [];
    if(equiposSeleccionados.length == 0){
        return "No se han encontrado partidos o equipos.";
    }

    for (let i = 0; i < equiposSeleccionados.length; i++) {
        if(radioLocal.checked == true && equiposSeleccionados[i].homeTeam.name == equipo){ // tiene el mismo nombre que Equipo
            equiposFiltrados.push(equiposSeleccionados[i]);
            console.log("Local");

        }else if(radioVisit.checked == true && equiposSeleccionados[i].awayTeam.name == equipo){ // tiene el mismo nombre que Equipo
            equiposFiltrados.push(equiposSeleccionados[i]);
            console.log("Visitante");

        }else if(radioLocal.checked == false && radioVisit.checked == false){
            let equiposFiltrados = equiposSeleccionados;

        } else if(nombreEquipo.value.length == 0){
            for (let i = 0; i < filteredMatches.length; i++) {
                let homeTResult = filteredMatches[i].score.fullTime.homeTeam;
                let awayTResult = filteredMatches[i].score.fullTime.awayTeam;
                let marcador2 = `${homeTResult} - ${awayTResult}`; //marcador final
                if (filteredMatches[i].status == "FINISHED") {
                    let tr = document.createElement("tr");
                    tr.innerHTML = `<td>${filteredMatches[i].homeTeam.name}</td><td style="text-align:center">${marcador2}</td><td>${filteredMatches[i].awayTeam.name}</td>`;
                    tableBody.appendChild(tr);
            }
          }
        }
    return equiposFiltrados;
}
};

*/
















/*    
for (let i = 0; i < matches.matches.length; i++) {
    if(matches.matches[i].homeTResult.name || matches.matches.awayTeam.name == equipo){
        let equipos2 = matches.matches;         
    }
}
*/