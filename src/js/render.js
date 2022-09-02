export class Render {
    static renderClientList(array) {
        const ul = document.querySelector("container")

        array.forEach((client) => {
            const card = this.renderClient(client)

            ul.appendChild(card)
        })
    }
    static renderCard(client){
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const divOne = document.createElement('div')
        const h3Dados = document.createElement('h3')
        const pEmail = document.createElement('p')
        const pIdade = document.createElement('p')
        const pCpf = document.createElement('p')
        const pSexo = document.createElement('p')
        const divTwo = document.createElement('div')
        const h3Endereco = document.createElement('h3')
        const pCep = document.createElement('p')
        const pEstado = document.createElement('p')
        const pCidade = document.createElement('p')
        const pBairro = document.createElement('p')
        const pRua = document.createElement('p')
        const pNumero = document.createElement('p')
        //transformar em js                              //armazenado no localStorage
        //const user = JSON.parse(localStorage.getItem('@kenzieClient:user_id'))
        li.key = client.id
        li.id = client.id
        li.classList.add = ("card")
        h2.innerText = client.nome
        h3Dados.innerText = 'Dados Pessoais'
        pEmail.innerText = client.email
        pIdade.innerText = client.idade
        pCpf.innerText = client.cpf
        pSexo.innerText = client.sexo

        h3Endereco.innerText = 'Endereco'
        pCep.innerText = client.cep
        pEstado.innerText = client.estado
        pCidade.innerText = client.cidade
        pBairro.innerText = client.bairro
        pRua.innerText = client.rua

   divOne.append(h3Dados, pEmail, pIdade, pCpf, pSexo )
   divTwo.append(h3Endereco, pCep, pEstado, pCidade, pBairro, pRua, pNumero)
   li.append(h2, divOne, divTwo)

   return li
    }
}
{
    
    /* <li class="card">
<h2>Jardel</h2>

<div>
    <h3>Dados Pessoais</h3>
    <p>email: jardel@gmail.com</p>
    <p>idade: 21</p>
    <p>cpf: 123.456.789-10</p>
    <p>sexo: Masculino</p>

</div>
<div>
    <h3>Endereco</h3>
    <p>cep: 38055292</p>
    <p>estado: MG</p>
    <p>cidade: Uberaba</p>
    <p>bairro: Residencial Veneza</p>
    <p>rua: rua da dev</p>
    <p>numero: 123</p>
</div>

</li> */}