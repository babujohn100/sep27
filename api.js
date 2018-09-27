let xhr = new XMLHttpRequest();

function displayNicely(apiData){
    apiData = JSON.parse(apiData);
    let htmlString = `<strong>Name:</strong> ${apiData.name}
    
    <br/>`;

htmlString += `<strong>Eye color:</strong>${apiData.eye_color}
</br>`;

htmlString += `<strong>hair color:</strong>${apiData.hair_color}
</br>`;

htmlString += `<strong>Gender:</strong>${apiData.gender}
</br>`;

htmlString += `<strong`
    document.getElementById("returnedData").innerHTML = 
        htmlString;
        

}

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        displayNicely(this.responseText);
        
        // document.getElementById("returnedData").innerHTML = 
        // this.responseText;
        
    }
    if(this.readyState == 4 && this.status == 404){
    // xmlhttp readyState ==4(completed)
    
    // status = ok(search in http cats site)
    
    
}
}

 xhr.open("GET", "https://swapi.co/api/people/1");
// xhr.open("GET", "https:google.com");

// xhr.open("GET", "https://swapi.co/HanShotFirst/");

xhr.send();
