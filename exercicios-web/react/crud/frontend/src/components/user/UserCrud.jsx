import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    state = {...initialState}

    componentWillMount() { // essa função vai ser chamada quando o componente for ser exibido na tela
        // nessa função eu vou fazer uma chamada no meu Backend para obter a lista de tudo oq está cadastrado lá
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear () { // limpar o formulário
        this.setState({ user: initialState.user })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id) // vai filtrar a lista a partir de usuários que tem o id diferente do atual e removo da lista
        if(add) list.unshift(user) // se usuário estiver setado, coloco o usuário na lista novamente porém na primeira posição
        return list
    }

    save () { // para salvar e incluir no formulário 
        // Incluir uso o POST ou seja o usuário não tem ID, alterar uso o PUT ou seja o ID está setado
        const user = this.state.user
        const method = user.id ? 'put' : 'post' // se ter id faz um PUT ou seja vou alterar o user, se não, faz um POST ou seja inclui 
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl // se o id estiver setado baseUrl + / + user.id (PUT), se não só baseURl (POST)
        axios[method] (url, user) // sempre quando eu for chamar algo que tem string, como o "Method", coloco em []
            .then(resp => { // quando isso for chamado, um elemento acabou de ser incluido ou alterado
                const list = this.getUpdatedList(resp.data) // resp.data é exatamente o elemento atual
                this.setState({ user: initialState.user, list }) // quando terminar tudo eu limpo o formulário e atualizo a lista
            })
    }

    updateField(event) { // vai atualizar o name e o email
        /* LEMBRANDO NO REACT:
            é bom sempre quando for alterar o conteúdo de algo não é interessante alterar direto no state
            é bom sempre criar um clone, alterar o que tu quiser besse objeto 
            e só depois setar o stado usando a função setState */
        const user = {...this.state.user} // clonei
        user[event.target.name] = event.target.value
        this.setState({ user }) // matendo sempre o mesmo nome que o próprio ES faz tudo pra tu
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6"> {/* celulares 12 colunas, medios e extra grandes 6 colunas */}
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" className="form-control" name="name"
                                value={this.state.user.name} onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="text" className="form-control" name="email"
                                value={this.state.user.email} onChange={e => this.updateField(e)}
                                placeholder="Digite o email..." />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)} >   
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)} >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
            })
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}> {/*Sempre que retornar um array em jsx tem que ter o atributo key para não ter advertencia e poder att de forma mais fácil*/}
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={(e) => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={(e) => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main> 
        )
    }
}