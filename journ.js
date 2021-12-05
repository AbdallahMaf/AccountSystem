var idIndex, 
    table = document.getElementById('table');

//Local Storage
let DateOpStrorage = localStorage.getItem('DateOp');
    if(DateOpStrorage){
        //DateOp.innerHTML = `TestJournal ${DateOpStrorage}`;
    };

let Num_ComptDebStrorage = localStorage.getItem('Num_ComptDeb');
    if(Num_ComptDebStrorage){
        //Num_ComptDeb.innerHTML = `TestJournal ${Num_ComptDebStrorage}`;
    };

let NumComptCredStrorage = localStorage.getItem('NumComptCred');
    if(NumComptCredStrorage){
        //NumComptCred.innerHTML = `TestJournal ${NumComptCredStrorage}`;
    };

let NatTransStrorage = localStorage.getItem('NatTrans');
    if(NatTransStrorage){
        //NatTrans.innerHTML = `TestJournal ${NatTransStrorage}`;
    };

let MontDebStrorage = localStorage.getItem('MontDeb');
    if(MontDebStrorage){
        //MontDeb.innerHTML = `TestJournal ${MontDebStrorage}`;
    };

let MontCredStrorage = localStorage.getItem('MontCred');
    if(MontCredStrorage){
       // MontCred.innerHTML = `TestJournal ${MontCredStrorage}`;
    };



//Ajouter
function enregistrer(){
    var DateOp = document.getElementById('DateOp').value;
    var Num_ComptDeb = document.getElementById('Num_ComptDeb').value;
    var NumComptCred = document.getElementById('NumComptCred').value;
    var NatTrans = document.getElementById('NatTrans').value;
    var MontDeb = document.getElementById('MontDeb').value;
    var MontCred = document.getElementById('MontCred').value;

    var newRowDeb = table.insertRow();
    cell1 = newRowDeb.insertCell(0);
    cell2 = newRowDeb.insertCell(1);
    cell3 = newRowDeb.insertCell(2);
    cell4 = newRowDeb.insertCell(3);
    cell5 = newRowDeb.insertCell(4);
    cell6 = newRowDeb.insertCell(5);
    
    cell1.innerHTML = DateOp;
    localStorage.setItem('DateOp', DateOp);

    cell2.innerHTML = Num_ComptDeb;
    localStorage.setItem('Num_ComptDeb', Num_ComptDeb);

    cell4.innerHTML = NatTrans;
    localStorage.setItem('NatTrans', NatTrans);

    cell5.innerHTML = MontDeb;
    localStorage.setItem('MontDeb', MontDeb);


   

    var newRowCred = table.insertRow();
    cell1 = newRowCred.insertCell(0);
    cell2 = newRowCred.insertCell(1);
    cell3 = newRowCred.insertCell(2);
    cell4 = newRowCred.insertCell(3);
    cell5 = newRowCred.insertCell(4);
    cell6 = newRowCred.insertCell(5);
    //cell7 = newRowCred.insertCell(6);
    //cell8 = newRowCred.insertCell(7);
    //cell9 = newRowCred.insertCell(8);


    cell1.innerHTML = DateOp;
    localStorage.setItem('DateOp', DateOp);

    cell3.innerHTML = NumComptCred;
    localStorage.setItem('NumComptCred', NumComptCred);

    cell4.innerHTML = NatTrans;
    localStorage.setItem('NatTrans', NatTrans);

    cell6.innerHTML = MontCred;
    localStorage.setItem('MontCred', MontCred);
    //cell7.innerHTML = '<button class="btn" onclick="modifier();"><img class="img" src="1564533_arrow_refrech_reload_update_icon.png"></button>';
    //cell8.innerHTML = '<button class="btn" onclick="supprimer();"><img class="img" src="326606_delete_icon.png"></button>';
    //cell9.innerHTML = '<input class="check" type="checkbox" ></input>';    
}

// function selectedRow(){
//     for(var i = 1; i < table.rows.length; i++){
//         table.rows[i].onclick = function(){
//             idIndex = this.rowIndex;
//             console.log(idIndex);
//             document.getElementById('DateOp').value = this.cells[0].innerHTML;
//             document.getElementById('NumComptDeb').value = this.cells[1].innerHTML;
//             document.getElementById('NumComptCred').value = this.cells[2].innerHTML;
//             document.getElementById('NatTrans').value = this.cells[3].innerHTML;
//             document.getElementById('MontDeb').value = this.cells[4].innerHTML;
//             document.getElementById('ontCred').value = this.cells[5].innerHTML;
//         };
//     }
// }
// selectedRow();


