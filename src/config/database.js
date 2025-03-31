module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123",
    database: "postgres",
    define: {
      timestamp: true, //cria duas colunas: createdAt e UpdatedAt
      underscored: true, //nomeclatura _ => customersGroup - custumers_group
      undescoredAll: true,
    },
  };
  