export function padZero(len:number,s:any, c:any){
    var c= c || '0';
    var s = s.toString()
    while(s.length<= len) s= c+ s;
    return s;
}

export function getRandomInt(min:number, max:number) {
  var min2 = Math.ceil(min);
  var max2 = Math.floor(max);
  return Math.floor(Math.random() * (max2 - min2)) + min2; //The maximum is exclusive and the minimum is inclusive
}

export function identityM(dim:number){
    var rows = []
    for(var i=0;i<dim;i++){
        let row = Array(dim).fill(0)
        row[i] = 1
        rows.push(row)
    }
    return rows;
}

export function matrix(x:number,y:number,fn:(i:number,j:number)=>number):any{
    var rows = [];
    for(var i=1;i<x+1;i++){
        let row = []
        for(var j=0;j<y;j++){
            row.push(fn(i,j))
        }
        rows.push(row)
    }
    return rows
}

export function findPrimeFactors(remainder:any){
    var factors = [], i;
    
    for (i = 2; i <= remainder; i++) {
        while ((remainder % i) === 0) {
            factors.push(i);
            remainder /= i;
        }
    }
    
    return factors;
}

export default padZero;