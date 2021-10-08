module.exports = (conection, DataTypes) => {
  const Publication = conection.define(
    "Publication",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING(200),
      },
      content: {
        type: DataTypes.STRING(200),
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      create_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "publications",
      timestamps: false,
    }
  );

  Publication.associate = (models) => {
    Publication.belongsTo(models.User, {
      foreignKey: "user_id",
    });

    Publication.hasMany(models.Comment, {
      foreignKey: "publication_id",
    });
  };

  return Publication;
};
