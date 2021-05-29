let standingPartidos = standing.standings[0].table;

let tableBody = document.getElementById("table-body");

console.log(standingPartidos); //MOSTRAR ARRAY STANDING
newStats = [

];
let estadísticas = () => {
    for (let i = 0; i < standingPartidos.length; i++) {
        let name = standingPartidos[i].team.name;
        let logoID = standingPartidos[i].team.id;
        let golesEquipo = standingPartidos[i].goalsFor;
        let partidosEquipo = standingPartidos[i].playedGames;
        let promedioGol = golesEquipo / partidosEquipo;
        let promedioGolAprox = Math.round(promedioGol* 100) / 100;
        let equipoNuevo = {
            name: name,
            logoID: logoID,
            goalsFor: golesEquipo,
            PG: partidosEquipo,
            avg: promedioGolAprox,    
        }
        newStats.push(equipoNuevo);
    }
    let sortedStats = newStats.sort((a, b) => {
        return b.avg - a.avg;
    });
    console.log(sortedStats);
};

//console.log(newStats);
/*let round = (num, decimales = 2) => {
};*/

let pintarTablaPromedio = (array) => {
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td style="font-weight:800; font-size: large;" >${standingPartidos[i].position}</td> 
        <td><img style="height:28px" src="${standingPartidos[i].team.crestUrl}"></td>
        <td style="font-weight:600;">${array[i].name}</td> 
        <td>${array[i].PG}</td>
        <td>${array[i].avg}</td>`;
        tableBody.appendChild(tr);        
    }
};
//functions
estadísticas(tableBody);
pintarTablaPromedio(newStats);


///////////// W.I.P. ////////////// HACIA PARTIDOS.JS
/*
let equipoElegido = document.getElementById("filtro")
//FILTRO
let filtrar = function (equipoElegido) {
    let partidosBuscados = [];
    for (let i = 0; i < standingPartidos.length; i++) {
        partidosBuscados.push(standingPartidos[i]);        
    }
}
return partidosBuscados;


//////////////Filtro Radio
/*
filtrarPartidosPorLocalidad = function (equipoEnFiltro) {
    let part
}
*/


