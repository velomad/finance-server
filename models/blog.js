module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    "Blog",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {}
  );
  return Blog;
};
