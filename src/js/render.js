import { Api } from "./api.js"

class ListClient {
    static async renderClientList(clientList) {
        const ul = document.querySelector(".container")
        clientList = await Api.listarClientes()
        console.log(clientList);

        clientList.forEach((client) => {
            const li = document.createElement('li');
            li.classList.add('card');
            li.innerHTML = `
            <h2>${client.nome}</h2>

            <div>
                <h3>Dados Pessoais</h3>
                <p>email: ${client.email}</p>
                <p>idade:${client.idade}</p>
                <p>cpf:${client.cpf}</p>
                <p>sexo:${client.sexo}</p>

            </div>
            <div>
                <h3>Endereco</h3>
                <p>cep:${client.endereco.cep}</p>
                <p>estado:${client.endereco.estado}</p>
                <p>cidade:${client.endereco.cidade}</p>
                <p>bairro:${client.endereco.bairro}</p>
                <p>rua: ${client.endereco.rua}</p>
                <p>numero:${client.endereco.numero}</p>
            </div>
            `;
            ul.appendChild(li)
        })
    }
}
ListClient.renderClientList()



//     static renderClient(client){
//         const li = document.createElement('li')
//         const h2 = document.createElement('h2')
//         const divOne = document.createElement('div')
//         const h3Dados = document.createElement('h3')
//         const pEmail = document.createElement('p')
//         const pIdade = document.createElement('p')
//         const pCpf = document.createElement('p')
//         const pSexo = document.createElement('p')
//         const divTwo = document.createElement('div')
//         const h3Endereco = document.createElement('h3')
//         const pCep = document.createElement('p')
//         const pEstado = document.createElement('p')
//         const pCidade = document.createElement('p')
//         const pBairro = document.createElement('p')
//         const pRua = document.createElement('p')
//         const pNumero = document.createElement('p')
//         //transformar em js                              //armazenado no localStorage
//         //const user = JSON.parse(localStorage.getItem('@kenzieClient:user_id'))
//         li.key = client.id
//         li.id = client.id
//         li.classList.add = ("card")
//         h2.innerText = client.nome
//         h3Dados.innerText = 'Dados Pessoais'
//         pEmail.innerText = client.email
//         pIdade.innerText = client.idade
//         pCpf.innerText = client.cpf
//         pSexo.innerText = client.sexo

//         h3Endereco.innerText = 'Endereco'
//         pCep.innerText = client.cep
//         pEstado.innerText = client.estado
//         pCidade.innerText = client.cidade
//         pBairro.innerText = client.bairro
//         pRua.innerText = client.rua

//    divOne.append(h3Dados, pEmail, pIdade, pCpf, pSexo )
//    divTwo.append(h3Endereco, pCep, pEstado, pCidade, pBairro, pRua, pNumero)
//    li.append(h2, divOne, divTwo)

//    return li
//     }
 


//Api.listarClientes()