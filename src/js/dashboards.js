
import { Api } from "./Api";
import { Render } from "./render.js";

class Deashboard {
    static renderdash(client){
        const token = localStorage.getItem('#kenzieStore:token')
        const cliente = document.querySelector('container')

        cliente.innerHTML = ''

        if(!token){
            window.location.assign('../../index.html')
        }
        Render.renderClientList(client)
    }
}
const clientes = await Api.listarClientes()

Deashboard.renderdash(clientes)
console.log(clientes);