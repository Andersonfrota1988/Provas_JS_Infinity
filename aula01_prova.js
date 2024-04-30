let n1 = parseFloat(prompt('Digite a primeira nota:'));

let n2 = parseFloat(prompt('Digite a segunda nota:'));

let n3 = parseFloat(prompt('Digite a terceira nota:'));

let p1 = 1;

let p2 = 2;

let p3 = 3;

let mediaPonderada = ((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3);

console.log(`A media ponderada é de ${mediaPonderada.toFixed(2)}.`)


