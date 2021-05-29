let standingPartidos = standing.standings[0].table;


let tableBody = document.getElementById("table-body");

console.log(standingPartidos); //MOSTRAR ARRAY STANDING
/*
for(let i=0; i<standingPartidos.length; i++){
    let tr = document.createElement("tr");    
    let ultimosCinco = standingPartidos[i].form;
    tableBody.appendChild(tr);
    tr.innerHTML = `
    <td style="width: 5%">${standingPartidos[i].position}</td> 
    <td><img style="height:28px " src="${standingPartidos[i].team.crestUrl}">${standingPartidos[i].team.name}</td> 
    <td>${standingPartidos[i].playedGames}</td>
    <td>${standingPartidos[i].won}</td>
    <td>${standingPartidos[i].draw}</td>
    <td>${standingPartidos[i].lost}</td>
    <td>${standingPartidos[i].form}</td>`;
} 
*/
//crestUrl = IMAGEN Equipo

//////////////////////////

//Img Win, Draw, Lost
    let total = standing.standings[0].table;

    let formW = "../images/iconoverde.jpg" 
    let formD = "../images/iconoempate.jpg";
    let formL = "../images/icono_derrota.jpg";

    for (let i = 0; i < total.length; i++) {
        let form = total[i].form;
        ultimosCinco = form.split(",");
    }

    let array5 = [];
    for (let j = 0; j < ultimosCinco.length; j++) {
        if(ultimosCinco[j] == "W"){
            array5.push(formW);
        }else if(ultimosCinco[j] == "L"){
                array5.push(formL);
            }else if (ultimosCinco[j] == "D"){
                array5.push(formD);
            }
        }        
        console.log(array5);
for(let i=0; i<standingPartidos.length; i++){
    let tr = document.createElement("tr");    
    tableBody.appendChild(tr);
    tr.innerHTML = `
    <td style="width: 5%">${standingPartidos[i].position}</td> 
    <td class="nombreEquipos"><img style="height:28px " src="${standingPartidos[i].team.crestUrl}">${standingPartidos[i].team.name}</td> 
    <td>${standingPartidos[i].playedGames}</td>
    <td>${standingPartidos[i].won}</td>
    <td>${standingPartidos[i].draw}</td>
    <td>${standingPartidos[i].lost}</td>
    <td class="lastFive"><img style="width:16px" src="${array5[0]}"><img style="width:16px" src="${array5[1]}"><img style="width:16px" src="${array5[2]}"><img style="width:16px" src="${array5[3]}"><img style="width:16px" src="${array5[4]}"></td>`;
}


