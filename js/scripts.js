//request class  
class httpGetAjax {
        static httpGet(url, requ) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url + requ, true);
                xhr.onload = function () {
                    if (this.status == 200) {
                        resolve(this.response);
                    } else {
                        var error = new Error(this.statusText);
                        error.code = this.status;
                        reject(error);
                    }
                };
                xhr.onerror = function () {
                    reject(new Error("Network Error"));
                };
                xhr.send();
            });
        }
    };      
 //to order list and deleteEvent       
  function ordered(){
             httpGetAjax.httpGet("requests/ordered.php","" )
            .then(
                    response => {
                        search_result.innerHTML="";
                        let data=JSON.parse(response);
                        let inner="<ul>";
                        for(let i=0; i<=data.length-1; i++){
                           inner+=
                               "<ol><button class='delete'>X</button><span>"+data[i].name+"</span></ol>";
                        }

                        search_result.innerHTML=inner+"</ul>";
                         let delete_movie=document.getElementsByClassName("delete")
                            for(let i=0; i<=delete_movie.length-1; i++){
                                    delete_movie[i].addEventListener("click" , function(){
                                          let requ="?id="+this.nextElementSibling.innerHTML
                                          httpGetAjax.httpGet("requests/delete_movie.php" , requ )
                                            .then(
                                              response => {
                                                    ordered()
                                              }
                                            )
                                            .catch(error => {
                                                console.log(error);
                                          }); 
                                    })
                            }
                    }
            )
            .catch(error => {
                console.log(error);
            });
       }      
       
       
 window.onload = function () { 
     
       function handleFileSelect(evt) {
            let file = evt.target.files[0];
            if (!file.type.match('text.*')) {
            return alert(file.name + " is not a valid text file.");
            }
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function (e) {
            let textToArray = reader.result.split("\n\n");
            textToArray.forEach(function(item,i){
                let requ = "?file="+item
                httpGetAjax.httpGet("requests/upload.php" , requ )
            })
            ordered();
            alert("The list has loaded successfully");
            setTimeout( function(){
                document.getElementById('file').value=""}, 5000
                )
            };
        }
        document.getElementById('file').addEventListener('change', handleFileSelect, false); 

 

       
  
       
        addMovie.addEventListener('click', function(){
           let requ="?name="+addName.value+"&year="+addYear.value+"&format="+addFormat.value+"&actors="+addActors.value;
            httpGetAjax.httpGet("requests/add_movie.php" , requ );
            ordered();
        })
       
      
        
       
       
      
    ordered_list.addEventListener('click', function (){ordered()})
       
     
     //search eventFunction
     find_movie.addEventListener('keyup', function(){
            let requ = "?name="+this.value;
             httpGetAjax.httpGet("requests/search.php" , requ )
            .then(
                    response => {
                        let data = JSON.parse(response);
                        search_result.innerHTML="";
                        let inner="";
                        for(let i=0; i<=data.length-1; i++){
                           inner+=
                               "<div>Title: "+data[i].name+"</div>"+
                               "<div>Release Year: "+data[i].year+"</div>"+
                               "<div>Format: "+data[i].format+"</div>"+
                               "<div>Stars: "+data[i].actors_list+"</div><br>";
                        }
                        search_result.innerHTML=inner
                    }
            )
            .catch(error => {
                search_result.innerHTML="";
                console.log(error);
            }); 
    
        })
       
   
       
    
 }
       