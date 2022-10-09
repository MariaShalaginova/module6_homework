function funcName(num) { 
    let count = 0;

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
              count++
            }
         }
          if (count == 0 && num >1) {
            console.log(num + "- простое")
          }
          else if ((num == 0 || num == 1) || (num <= 1000 && count!=0)) {
                console.log(num + "- непростое")
            } else { console.log("Данные неверны")}
        
    }
    
funcName(1001);


