var matriz =[];





function SomarLinhas(){
       let linha = Number(ipt_linha.value)

       let soma = 0

       for(var i = 0;i<matriz[linha].length;i++){
        soma += matriz[linha][i] 
       }

       resposta.innerHTML = soma
    }





function SomarColunas(){
        let coluna = Number(ipt_coluna.value)

       let soma = 0

       for(var i = 0;i<matriz[coluna].length;i++){
        soma += matriz[i][coluna] 
       }

       resposta.innerHTML = soma
    }





function consultarMatriz(){
    let linha = Number(ipt_linha.value);
    let coluna = Number(ipt_coluna.value);


    let valor = matriz[linha][coluna];



    resposta.innerHTML = `O valor da Linha ${linha} e da Coluna ${coluna} é : ${valor}`
}




function mostrarTabela(matriz) {
    var frase = ``;
    let qtdLinhas = 3;
    let qtdColunas = 3;

    let valorInicial = 5;
    var frase = ``


    for (let linha = 0; linha < qtdLinhas; linha++) {
        matriz[linha] = [];
        for (let coluna = 0; coluna < qtdColunas; coluna++) {
            {matriz[linha][coluna] = valorInicial}
            valorInicial +=5

            mostrar.innerHTML +=`
                <div class="item"> ${matriz[linha][coluna]}</div>
            `
        }
        mostrar.innerHTML += `</tr>`
    }

}



