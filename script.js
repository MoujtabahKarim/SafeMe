        //Password Generator Variables 
        var minRandom = 0 ; 
        var characterLength = 10 ; 
        
        //Generator variables  
        var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+"] ; 
        var character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;        

        //Special Character    
        var SpecialCharacter = false ; 
     
        var password = new Array(characterLength)  ; 

        function randomisePassword() {
            for(var i = 0; i < password.length; i++) {
                var org = password[i] ; 
                var randomLocation = getRandomNumber(password.length - 1) ;

                password[i] = password[randomLocation] ;
                password[randomLocation] = org ; 
            }

        printPassword() ; 
        }

        document.getElementById("button").onclick = function(){
            insertFundementalNumbers()
        }
        
        //Need to include the length of the password in these parameters
        function insertFundementalNumbers() {
            //INSERTING NUMBERS......
            for(var i = 0; i < password.length; i++) {
                password[i] = getRandomNumber(10) ; 
            }
                
            addPasswordElements() ; 
        }

        //Function that puts the values in the password 
        function addPasswordElements() {
            //Common Variables 
            var numOfSpecialCharacter = 3 ; 
            var numOfLowerCase = 3 ; 
            var numOfCapitalCase = 3 ; 
            //Looping through the password and inserting the different parts of the password
            for(var i = 0; i < password.length; i++) {
                //If the random number returned matches the number in the password then replace it with a special character 
                if(numOfSpecialCharacter >= 0) {
                    password[i] = specialCharacters[getRandomNumber(specialCharacters.length)]; 
                    SpecialCharacter = true ; 
                    numOfSpecialCharacter-- ; 
                }
                    
                // Inserting lowercase letters into the generator 
                if(!SpecialCharacter && numOfLowerCase > 0) {
                    password[i] = character[getRandomNumber(character.length)] ;
                    numOfLowerCase-- ; 
                }

                //It will never be less than 0 but we add this for good programming practise 
                if(numOfLowerCase <= 0 && !SpecialCharacter && numOfCapitalCase > 0) {
                    password[i] = character[getRandomNumber(character.length)].toUpperCase() ; 
                    numOfCapitalCase-- ; 
                }
            
                SpecialCharacter = false ; 
            }

            randomisePassword() ; 
        }
        
        
        //Function that return a random number 
        function getRandomNumber(x) {
            return Math.floor((Math.random() * x) + 0) ;
        }
         
        function printPassword() {
            newPassword = new Array(password.length) ; 
            var newPassword= document.getElementById("password").innerHTML = password.join("") ;
        }
