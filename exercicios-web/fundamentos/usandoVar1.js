{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera);
// Com o var, não preciso estar dentro do escopo para chamar a variável, fora tbm rola, variável global
// Sempre evitar variáveis globais pois, caso alguém mude o código com o mesmo nome dessa variável, vai dar um problemão

//Local

function teste() {
    var local = 123
    console.log(local)
}

teste()
//Instanciando
//console.log(local);
// Dá erro, pois a variável local está dentro do escopo de uma função, ou seja, só pode ser usada ali dentro