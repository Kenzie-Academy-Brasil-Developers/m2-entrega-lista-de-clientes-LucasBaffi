

class  Api {
    //requisao da api  
    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"       
    static headers = {
        "content-type": "aplication/json",
    }
    //metodo GET
    static async listarClientes() {
        try {
            const cliente = await fetch(`${Api.baseUrl}`, {
                method: "GET",
                headers: Api.headers,
            }); const list = await cliente.json()
            //console.log(list);
            return list
        }
        catch {
            console.log('deu erro');
        }

    }
    //metodo POST
    static async cadastrarCliente(data) {

        const newUser = await fetch(`${this.baseUrl}`, {
            //passar o methodo
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                // window.location.assign('../../index.html')
                console.log(res);
                return res
            })
            .catch(err => console.log(err))
        console.log(data);
        return newUser
    }

    static async editarCliente(id, data) {

    }

    static async deletarCliente(id) {

    }

}

export { Api }

