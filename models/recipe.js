'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Recipe extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			
			Recipe.belongsToMany(models.User, {
				through: 'UserRecipeFavorite',
				foreignKey: 'recipeId',
				otherKey: 'userId',
			});
		}
	}
	Recipe.init(
		{
			name: DataTypes.STRING,
			ingredients: DataTypes.TEXT,
			instructions: DataTypes.TEXT,
			img: DataTypes.STRING,
			cuisine: DataTypes.STRING,
			author: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Recipe',
		}
	);
	return Recipe;
};
