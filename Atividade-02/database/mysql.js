import {Sequelize} from 'sequelize';
/*import pg from  'pg';*/
 import mysql2 from  'mysql2';
const mysql = new Sequelize({

    dialect: 'mysql',

    dialectModule: mysql2,

    host: 'localhost',

    port: '3306',

    database: 'atividade2307',

    username: 'root',

    password: 'root'

});


/*const mysql = new Sequelize({

    dialect: 'postgres',

    dialectModule: pg,

    host: 'dpg-d4o44e2li9vc73c7mnrg-a',

    port: '5432',

    database: 'atividade2307',

    username: 'atividade2307_user',

    password: '3McOB8gJbyzskgwOQ5e3JHkO3B7YMZHt'

});*/


export default mysql;

