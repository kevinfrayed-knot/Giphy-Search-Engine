//const outputDiv = document.querySelector(".output");
//const outputDiv = document.querySelector("#output");
const outputDiv = document.getElementById("output");

async function page_load()
{
    
    try {
                    
        const msg = "## demo gihpy app 1 - page load"
        console.log(msg)

        if(outputDiv == null | outputDiv == undefined){       
            const msg = "Obi Wan says 'these are not the divs you're looking for'";
            console.log(msg) 
            return false;
        }
    
        //outputDiv.innerText = msg;

    } catch (error) {

        console.log("## demo gihpy app 1 - error ")
        console.log(error)

        msg = "## demo gihpy app 1 - error ";
        outputDiv.innerText = msg;
    }
}


document.getElementById("btn-search").addEventListener("click",async =>{
    
    let msg = "";
    
    try {
        
        msg = "## btn-search ";
        outputDiv.innerText = msg;

        const _txtsearch = document.getElementById("txtsearch");

        if(_txtsearch == null | _txtsearch == undefined)
        {                
            msg = "Search empty, enter some text, would ya?";
            outputDiv.innerText = msg;
            return false;
        }
        else if (_txtsearch.value.trim().length == 0)
        {                
            msg = "Search empty, enter some text, would ya?";
            outputDiv.innerText = msg;
            return false;
        }

        //msg = `* searching for: ${_txtsearch.value}`
        //outputDiv.innerText = msg;

        const _url_giphy_demo_data_url = "./data/giphy2.json";

        const _giphy_apikey = "x1k58Jp31oJmHIIc4rkErHYFxzSIALGS"
        const _search_text = _txtsearch.value;
        const _giphy_url_1 = `https://api.giphy.com/v1/gifs/search?api_key=${_giphy_apikey}&q=${_search_text}`;
        const _giphy_url_2 = `https://api.giphy.com/v1/gifs/search?q=${_search_text}&api_key=${_giphy_apikey}`;

        //## can add other parameters ie: search limit, etc..
        
        //single line if statement (logical-expression) ? true : false;
        const _url = (_giphy_apikey == "demo-example-api-key-Ab2422Ab43")?_url_giphy_demo_data_url:_giphy_url_1;

        fetch(_url)
        .then(response => {  
            if (!response.ok) {
                //throw/raise - generate or a error and descrption 
                throw new Error('Network response was not ok');
            }
            //-- convert data from text to json 
            return response.json();
        })
        .then(results => { 

            console.log("#### fetch giphy data result ###")
            console.log(results);

            outputDiv.innerText = "## fetch giphy data result ##";

            //giphy search result json image field path, display in web page 
            //## data[index ie: 0].images.original.url 
            //## data[0].images.original.url 
            
            if(results.data.length>0){ 
                
                //const _img_url = results.data[0].images.original.url;
                //console.log(`#> results.data[0].images.original.url: ${_img_url}`)
                //display image 
                //outputDiv.innerHTML = `<img width='300' height='200' src='${_img_url}'>`

                let _html = "<div class='center-content'>"

                /*
                for(i=0;i<results.data.length-1;i++){

                    const _img_url = results.data[i].images.original.url;

                    _html += `<img width='300' height='200' src='${_img_url}'>`

                    //exit loop when > 5 items 
                    //1 line if statemant 
                    if(i>=5) break;
                }*/
                
                //## forEaach - es5+ -- loop through all item 
                results.data.forEach((item, index) => {

                    if(index <= 20){
                        
                        //const _img_url = results.data[i].images.original.url;
                        const _img_url = item.images.original.url;

                        _html += `<img width='300' height='200' src='${_img_url}'>`
                        
                    }

                    //exit loop when > 5 items 
                    //1 line if statemant 
                    //if(index>=5) break; //error in forEach 
                });

                _html += "<div>"

                outputDiv.innerHTML = _html;
            }
  
        })
        .catch(error => {
            console.error('T## here was a problem with the fetch operation:', error);
            outputDiv.innerText = error;
        });


    } catch (error) {
        
        console.log("## btn-search - error ")
        console.log(error)

        msg = "## btn-search - error ";
        outputDiv.innerText = msg;
    }

})


document.getElementById("btn-reset").addEventListener("click", async =>{
    
    let msg = "";
    try {
        msg = "";
        outputDiv.innerText = msg;
        let _txtsearch = document.getElementById("txtsearch");
        _txtsearch.value = "";
        _txtsearch.focus();
    } catch (error) {
        
        console.log("That didn't work, please refesh your browser and try again.")
        console.log(error)
        msg = "## btn-reset - error ";
        outputDiv.innerText = msg;
    }
})


