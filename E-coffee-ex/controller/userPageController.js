const db = require('../database/models');

const bcrypt = require('bcryptjs');
const usuarios = require('../Modelteste/usuarios');

const homeUserController = {
    index: function(req, res) {
        res.render('homeUser');
    },
    rastreio: function(req, res) {
        res.render('pedidosUser');
    },
    seguranca: function(req, res) {
        res.render('segurancaUser');
    },
    telaEditarInformacoes: function(req, res) {
        res.render("editarUsuario");
    },
    editarPerfil: async function(req, res) {
        
        const { name, lastname, telefone, cpf, email, password } = req.body;
        
        const senhaCriptografada = bcrypt.hashSync(password, 12);

        const alterarUsuario = await db.Cliente.update({ 
            nome: name,
            sobrenome: lastname,
            telefone: telefone,
            cpf: cpf,
            email: email,
            password: senhaCriptografada,
        },{
            where: { id_cliente: req.session.user.id }
        }
        ).then((result) => { 
            req.session.user.name = name;
            req.session.user.lastname = lastname;
            req.session.user.telefone = telefone;
            req.session.user.cpf = cpf;
            req.session.user.email = email;
            res.redirect('/paginadousuario/seguranca')
        })
        .catch((err) => {
            console.log(err)
        });
    },
    enderecos: function(req, res) {
        res.render('enderecosUser', {
            enderecosUser: usuarios
        });
    },
    telaCriarEndereco: function(req, res) {
        res.render('enderecoCriar');
    },
    registrarEndereco: function(req, res) {
        
        const apelidoEndereco = req.body.apelido;
        const cep = req.body.cep;
        const rua = req.body.rua;
        const numero = req.body.numero;
        const bairro = req.body.bairro;
        const cidade = req.body.cidade;
        const estado = req.body.estado;
        const complemento = req.body.complemento;
        
        usuarios.push({
            apelido: apelidoEndereco,
            cep: cep,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            complemento: complemento,
        })
        res.redirect('/paginadousuario/enderecos')
    },
    telaEditarEnderecos: function(req, res) {
        res.render('enderecoEditar')
    },
    EditarEnderecos: function(req, res) {
        
    },
}

module.exports = homeUserController;