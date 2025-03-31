const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Local', 'postgres', '123', {
host: 'localhost',
dialect: 'postgres',
logging: false,
});

(async () => {
try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados!');
} catch (error) {
    console.error(' Erro ao conectar ao banco:', error);
}
})();

module.exports = sequelize;
