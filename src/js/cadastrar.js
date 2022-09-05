import {Api} from "./Api.js"

export class Cadastrar {
    static creatNewUser() {
        //capturar input de cadastro
        const nameInput = document.getElementById('name')
        const emailInput = document.getElementById('email')
        const idadeInput = document.getElementById('idade')
        const cpfInput = document.getElementById('cpf')
        const sexoInput = document.getElementById('sexo')
        const cepInput = document.getElementById('cep')
        const ruaInput = document.getElementById('rua')
        const numeroInput = document.getElementById('numero')
        const bairroInput = document.getElementById('bairro')
        const cidadeInput = document.getElementById('cidade')
        const estadoInput = document.getElementById('estado')
        const cadastrarBtn = document.getElementById('cadastrar')

        cadastrarBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {
                nome: nameInput.value,
                email: emailInput.value,
                idade: idadeInput.value,
                cpf: cpfInput.value,
                sexo: sexoInput.value,
                endereco:{
                cep: cepInput.value,
                rua: ruaInput.value,
                numero: numeroInput.value,
                bairro: bairroInput.value,
                cidade: cidadeInput.value,
                estado: estadoInput.value,
                }
                
            }
          
            //console.log(data);
            //precisa ser assincrona async vai no event
            //chamae api e static creatNewUser()
            await Api.cadastrarCliente(data)
        })
    }
}

Cadastrar.creatNewUser()