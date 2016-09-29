


function main() {
	// predefined variables
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    // variables I declared from here on out
    var alice = 0;
    var bob = 0;
    for(i = 0; i < a0_temp.length; i++){
        if (parseInt(a0_temp[i]) > parseInt(b0_temp[i])){
            alice += 1;
        } 
        if (parseInt(a0_temp[i]) < parseInt(b0_temp[i])){
            bob += 1;
        };
    }
    console.log(alice + " " + bob);
   
        
  
    
}