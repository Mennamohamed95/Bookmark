var siteName =document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var boxData = document.getElementById("box")
var alertForm = document.getElementById("alertForm")


var bookMarker ;
if(localStorage.getItem("bookMarker") != null){
    bookMarker = JSON.parse(localStorage.getItem("bookMarker"));
    displayItems()
}
else{
    bookMarker =[];
}

function addSite(){
    var books ={
        siteName : siteName.value,
        siteUrl : siteUrl.value
    }
    if(siteName.classList.contains('is-valid')&& siteUrl.classList.contains('is-valid')){
         bookMarker.push(books);
    localStorage.setItem("bookMarker" , JSON.stringify(bookMarker));
    clearInpts();
    displayItems();
    }
    else{
        alertForm.classList.remove('d-none')
    }
   

};
function closeAlert(){
    alertForm.classList.add('d-none')
}

function clearInpts(){
    siteName.value =' '
    siteUrl.value =' '
};
function displayItems(){
   var box = ``;

    for(var i=0 ; i <bookMarker.length ; i++){
        box +=
        `<tr>
        <td><p>${[i+1]}</p></td>
        <td><p>${bookMarker[i].siteName}</p></td>
        <td><button onclick="visitSie(${i})" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></td>
        <td><button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>
        `
        
    };
    boxData.innerHTML=box
};
function visitSie(index){
    var URL =bookMarker[index].siteUrl;
    window.open (URL , '-blank')
}

function deleteItem(index){
    bookMarker.splice(index , 1);
    localStorage.setItem("bookMarker" , JSON.stringify(bookMarker));
    displayItems();

}


function validateInput(element){

    var regex ={

        siteName : /^[a-zA-Z0-9 ]{3,50}$/,
        siteUrl : /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/
    }
    if(regex[element.id].test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        

    }



}