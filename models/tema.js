module.exports = (sequelize, DataTypes) => {
    const Tema = sequelize.define('Tema', {
      nome: DataTypes.STRING,
      descricao: DataTypes.TEXT,
    });
    return Tema;
  };