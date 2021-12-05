var idIndex, 
    table = document.getElementById('table');
    
    var sumDeb = 0;
    var sumCred = 0;

//Local Storage    
let DateOpStorage = localStorage.getItem('DateOp');
    if(DateOpStorage){
        DateOp.innerHTML = `TestJournal ${DateOpStorage}`;
    };

let DateRegStorage = localStorage.getItem('DateReg');
    if(DateRegStorage){
        DateReg.innerHTML = `TestJournal ${DateRegStorage}`;
    };

let NomOpStorage = localStorage.getItem('NomOp');
    if(NomOpStorage){
        NomOp.innerHTML = `TestJournal ${NomOpStorage}`;
    };

let NomRegStorage = localStorage.getItem('NomReg');
    if(NomRegStorage){
        NomReg.innerHTML = `TestJournal ${NomRegStorage}`;
    };

let MontantStorage = localStorage.getItem('Montant');
    if(MontantStorage){
        Montant.innerHTML = `TestJournal ${MontantStorage}`;
    };


//Ajouter
function enregistrer(){
    var DateOp = document.getElementById('DateOp').value;
    var DateReg = document.getElementById('DateReg').value;
    var NomOp = document.getElementById('NomOp').value;
    var NomReg = document.getElementById('NomReg').value;
    var Montant = document.getElementById('Montant').value;


    var newRowDeb = table.insertRow();
    cell1 = newRowDeb.insertCell(0);
    cell2 = newRowDeb.insertCell(1);
    cell3 = newRowDeb.insertCell(2);
    cell4 = newRowDeb.insertCell(3);
    
    cell1.innerHTML = DateOp;
    localStorage.setItem('DateOp', DateOp);

    cell2.innerHTML = NomOp;
    localStorage.setItem('NomOp', NomOp);

    cell3.innerHTML = Montant;
    localStorage.setItem('Montant', Montant);
    

    var newRowCred = table.insertRow();
    cell1 = newRowCred.insertCell(0);
    cell2 = newRowCred.insertCell(1);
    cell3 = newRowCred.insertCell(2);
    cell4 = newRowCred.insertCell(3);
   
    cell1.innerHTML = DateReg;
    localStorage.setItem('DateReg', DateReg);

    cell2.innerHTML = NomReg;
    localStorage.setItem('NomReg', NomReg);

    cell4.innerHTML = Montant;
    localStorage.setItem('Montant', Montant);

    for(var i = 1; i < table.rows.length; i++){
        sumDeb = (sumDeb) + parseInt(table.rows[i].cells[2].innerHTML.value);
    }
    document.getElementById('TotalDeb').innerHTML = sumDeb;
    console.log(sumDeb);
    

    for(var i = 1; i < table.rows.length; i++){
        sumCred = (sumCred) + parseInt(table.rows[i].cells[3].innerHTML);
    }
    document.getElementById('TotalCred').innerHTML = sumCred;
    console.log(sumCred);

    document.getElementById('Solde').innerHTML = parseInt(sumDeb) - parseInt(sumCred);
    
    
}

//TOTAL
