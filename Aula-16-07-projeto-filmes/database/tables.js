import { BelongsTo, DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Ator = mysql.define('Ator', {
    nome: DataTypes.STRING,
    pais: DataTypes.STRING
})

const Diretor = mysql.define('Diretor', {
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY
})

const Filme = mysql.define('Filme', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    ano: DataTypes.SMALLINT,
})

Filme.belongsTo(Diretor);
Diretor.hasMany(Filme);

Filme.belongsToMany(Ator, { through: 'Filme_Ator' });
Ator.belongsToMany(Filme, { through: 'Filme_Ator' });

mysql.sync();

export { Ator, Diretor, Filme, mysql };