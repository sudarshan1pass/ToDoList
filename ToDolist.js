  let txtinp = document.getElementById("input");
        let btn = document.getElementById("btn");
        let dbtn = document.getElementById("dbtn")
        let result = document.getElementById("result");
        let arr = []
        let clrAll = document.getElementById('clrAll');
        let bool = true
      
        window.addEventListener("load", function () {
            if (localStorage.getItem("arr")) {
                const parsedArr = JSON.parse(localStorage.getItem("arr"))
                displayToDo(parsedArr)
            }
        })
      
        // create
        btn.addEventListener("click", function () {
            if (localStorage.getItem("arr")) {
                const ParsedArr = JSON.parse(localStorage.getItem("arr"))
                ParsedArr.push(input.value)
                displayToDo(ParsedArr)
                localStorage.setItem("arr", JSON.stringify(ParsedArr))
            } else{
              arr.push(input.value)
              localStorage.setItem("arr",JSON.stringify(arr))
              displayToDo(arr)
            }
        })
      
        //    read
        function displayToDo(arr) {
            result.innerHTML = ""
            for (let i = 0; i < arr.length; i++) {
                result.innerHTML += `
           
            <li>${arr[i]}</li>
          
            `
            }
        }
        // clrAll
        clrAll.addEventListener("click", function () {
            arr.length = 0
            displayToDo()
        })
      
        // //    DELETE
        function Delete(i) {
            arr.splice(i, 1)
            displayToDo(arr)
        }
        // Dark Mode
        dmode.addEventListener("click", function () {
            if(bool == true){
            result.style.background = "black";
            result.style.color = "white"
            
            input.style.background="black";
            input.style.color="white";
            section.style.background="black";
            btn.style.background="orange";
            clrAll.style.background="pink";
            dbtn.classList = "fa-solid fa-moon fa-xl"
            bool = false;
           
          }else{
            result.style.background = "white";
            result.style.color = "black"
           
            input.style.background="white";
            input.style.color = "black"
            section.style.background="blanchedalmond";
            section.style.color = "black";
            btn.style.background="blue"
            clrAll.style.background="blue"
            dbtn.classList = "fa-solid fa-sun fa-xl"
            bool = true;
          }
        })
      
