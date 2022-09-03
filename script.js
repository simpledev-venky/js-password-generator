function copyText() {
            let inputField = document.getElementById("passdisplay")
            inputField.select()
            // inputField.setSeletionRange(0,9999)
            navigator.clipboard.writeText(inputField.value)
            alert("copied", inputField.value)


        }
        function generatePassword() {
            let upperCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'w', 'X', 'Y', 'Z']
            let lowerCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            let special = ['@', '#', '$', '%', '^', '*', '-', '+', '=']
            let bigArray = [upperCase,lowerCase,special,numbers]
            let password = ""
            let charLen = document.querySelector("#charlen").value
            let up = document.getElementById("upperCase")
            let lw = document.getElementById("lowerCase")
            let sp = document.getElementById("special")
            let num = document.getElementById("numbers")
            let strog = document.querySelector("#strg")

            let passDisplay = document.getElementById("passdisplay")
            charLen = parseInt(charLen)
            let selectedBox = document.querySelectorAll("input[type='checkbox']:checked")
            console.log(selectedBox.length)
            console.log(typeof password)
            console.log(typeof charLen)
            console.log(charLen)
        function genpass(arr){
            function passloop(parts){
                for (let i = 0; i < Math.floor(charLen/parts); i++) {
                        password += arr[Math.floor(Math.random() * arr.length)]
                    }
            }
            if (selectedBox.length == 1) {
                   passloop(1)

                }
                else if (selectedBox.length == 2) {
                    passloop(2)

                }
                else if (selectedBox.length == 3) {
                    passloop(3)
                }
                else  {
                    passloop(4)
                }
        }
            if (up.checked) 
            {
             genpass(upperCase)  

            }
            if (lw.checked) 
            {
                genpass(lowerCase)
            }
            if (sp.checked) 
            {
                genpass(special)

            }
            if (num.checked) 
            {
                genpass(numbers)
            }
          
        if(charLen != password.length){
            let n = charLen-password.length
            for (let i = 0; i < n; i++) {
                    let arr = selectedBox[0].id
                        password += arr[Math.floor(Math.random() * arr.length)]
                    }
            }
            function strength(){
                if(charLen<8){
        strog.innerText = "Easy"
        }
        else if(charLen>8){
            strog.innerText = "Strong"
        }
        else{
            strog.innerText = "Medium"
        }    
            
            }
            strength()
        
         console.log(selectedBox[0].id)
            console.log( typeof password.length)
                passDisplay.value = password

            

        }




      