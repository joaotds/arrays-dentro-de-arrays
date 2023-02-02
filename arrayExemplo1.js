const minhaArray = [        //criou uma array com 4 arrays dentro
  [1, 2, 3],                //0
  [4, 5, 6],                //1
  [7, 8, 9],                //2
  [[10, 11, 12], 13, 14],   //3
];

const valor = minhaArray[2][1]; // escolheu o segundo valor [1] da terceira array [2] (8)

//é possivel acessar arrays dentro de arrays fazendo isso

const minhaArray2 = [        //criou uma array com 4 arrays dentro
  [1, 2, 3],                //0
  [4, 5, 6],                //1
  [7, 8, 9],                //2
  [[10, 11, 12], 13, 14],   //3
];

const valor2 = minhaArray2[3][0][1]; // escolheu o segundo valor [1] da quarta array [3] na primeira array dentro da quarta [0] (11)

console.log(valor)
console.log("\n", valor2)

