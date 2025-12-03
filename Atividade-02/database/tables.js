import { DataTypes } from "sequelize";

import mysql from "./mysql.js";



const Modelos = mysql.define('Modelos', {

    nome: DataTypes.STRING,

    pais: DataTypes.STRING,

    altura: DataTypes.STRING,

    massa: DataTypes.STRING

});



const Clientes = mysql.define('Clientes', {

    nome: DataTypes.STRING,

    cnpj: DataTypes.STRING,

    email: DataTypes.STRING,

    telefone: DataTypes.STRING


});



const Funcionarios = mysql.define('Funcionarios', {

    nome: DataTypes.STRING,

    descricao: DataTypes.STRING,

    idade: DataTypes.INTEGER,

    salario: DataTypes.DOUBLE

});

const Eventos = mysql.define('Eventos', {

    lugar: DataTypes.STRING,

    data: DataTypes.STRING,

    status: DataTypes.STRING,

    nome_eve: DataTypes.STRING


});

const Contratos = mysql.define('Contratos', {

    datini: DataTypes.STRING,

    datfim: DataTypes.STRING,

    valor: DataTypes.STRING,

    numcon: DataTypes.STRING

});

const Pagamentos = mysql.define('Pagamentos', {

    
    valor: DataTypes.STRING,

    status: DataTypes.STRING

});


Pagamentos.belongsTo(Clientes);
Clientes.hasMany(Pagamentos)

Contratos.belongsToMany(Modelos, { through: 'Modelos_Contratos' });
Modelos.belongsToMany(Contratos, { through: 'Modelos_Contratos' });


Contratos.belongsToMany(Clientes, { through: 'Clientes_Contratos' });
Clientes.belongsToMany(Contratos, { through: 'Clientes_Contratos' });


Eventos.belongsToMany(Modelos, { through: 'Modelos_Eventos' });
Modelos.belongsToMany(Eventos, { through: 'Modelos_Eventos' });


Eventos.belongsToMany(Clientes, { through: 'Clientes_Eventos' });
Clientes.belongsToMany(Eventos, { through: 'Clientes_Eventos' });


mysql.sync();



export { Modelos, Clientes, Eventos, Funcionarios, Contratos, Pagamentos, mysql };

