var idIndex, 
    table = document.getElementById('table');

//Local Storage
let input_NumCompteStrorage = localStorage.getItem('input_NumCompte');
    if(input_NumCompteStrorage){
        input_NumCompte.innerHTML = `Test ${input_NumCompteStrorage}`;
    };
let input_IntCompteStrorage = localStorage.getItem('input_IntCompte');
    if(input_IntCompteStrorage){
        input_IntCompte.innerHTML = `Test ${input_IntCompteStrorage}`;
    };
let input_classeStrorage = localStorage.getItem('input_classe');
    if(input_classeStrorage){
        input_classe.innerHTML = `Test ${input_classeStrorage}`;
    };



// Fonction ajouter -- Ajouter des informations dans le tableau
function ajouter(){
    var input_NumCompte = document.getElementById('input_NumCompte').value;
    var input_IntCompte = document.getElementById('input_IntCompte').value;
    var input_classe = document.getElementById('input_classe').value;
    
    var newRow = table.insertRow();
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    cell6 = newRow.insertCell(5);

    cell1.innerHTML = input_NumCompte;
    localStorage.setItem('input_NumCompte', input_NumCompte);

    cell2.innerHTML = input_IntCompte;
    localStorage.setItem('input_IntCompte', input_IntCompte);

    cell3.innerHTML = input_classe;
    localStorage.setItem('input_classe', input_classe);

    cell4.innerHTML = '<button class="btn" onclick="modifier();"><img class="img" src="1564533_arrow_refrech_reload_update_icon.png"></button>';
    cell5.innerHTML = '<button class="btn" onclick="supprimer();"><img class="img" src="326606_delete_icon.png"></button>';
    cell6.innerHTML = '<input class="check" type="checkbox" ></input>';
    selectedRow();
}

//Selectionner une ligne du tableau
function selectedRow(){
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            idIndex = this.rowIndex;
            console.log(idIndex);
            document.getElementById('input_NumCompte').value = this.cells[0].innerHTML;
            document.getElementById('input_IntCompte').value = this.cells[1].innerHTML;
            document.getElementById('input_classe').value = this.cells[2].innerHTML;
        };
    }
}
selectedRow();

//Modifier une ligne
function modifier(){
    var input_NumCompte = document.getElementById('input_NumCompte').value;
    var input_IntCompte = document.getElementById('input_IntCompte').value;
    var input_classe = document.getElementById('input_classe').value;

    table.rows[idIndex].cells[0].innerHTML = input_NumCompte;
    table.rows[idIndex].cells[1].innerHTML = input_IntCompte;
    table.rows[idIndex].cells[2].innerHTML = input_classe;   
}

//Supprimer une line
function supprimer(){
    table.deleteRow(idIndex);
}


