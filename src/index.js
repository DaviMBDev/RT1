"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var descritor_1 = require("./descritor")
var empresa_1 = require("./empresa")
var endereco_1 = require("./endereco")
var funcionario_1 = require("./funcionario")
var telefone_1 = require("./telefone")

var endereco = new endereco_1.default(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo')
var telefone = new telefone_1.default('011', '9-9999-9999')
var funcionario = new funcionario_1.default('Tony Stark', '123456789', '999.999.999-99', endereco, telefone)
var funcionarios = [funcionario]
var telefones = [telefone]
var empresa = new empresa_1.default(funcionarios, endereco, 'ABC LTDA', 'Mercado online', '999-999-999-999-99', telefones)
var descritor = new descritor_1.default()
descritor.descrever(empresa)
