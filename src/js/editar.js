import { Api } from "./api.js";

class Editar {
    static async select(clientes) {
        const selectClient = document.getElementById('select_client')
        clientes = await Api.listarClientes()

        clientes.forEach((element) => {
            //criar tag que mostra os clientes
            const option = document.createElement('option')
            option.innerHTML = `
        ${element.nome}        
        `
        option
        selectClient.appendChild(option)
        });

    }

    static editar (){
        const button = document.getElementById('button_selct')
        button.addEventListener('click')
    }


}
Editar.select()


