

class Api {
    //requisao da api  
    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
    //pegar o token
    //nome da aplicacao:o que esta armazenando(token)
    static token = localStorage.getItem('@kenzieClientes:token') || ""
    static headers = {
        "content-type": "aplication/json",
        Authorization: `Bearer ${this.token}`
    }
    static async listarClientes() {
        const client = await fetch(`${this.baseUrl}/id`, {
            method: 'GET',
            headers: this.headers
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

        return client
    }

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
                 window.location.assign('../../index.html')
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

