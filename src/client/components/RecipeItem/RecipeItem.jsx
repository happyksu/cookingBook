import React from 'react';
import PropTypes from 'prop-types';
// Import style
import './RecipeItem.scss';


class RecipeItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.showRecipe = this.showRecipe.bind(this);
  }

  deleteRecipe() {
    this.props.maestro.dataRefresh('deleteRecipe', this.props.recipe.id);
  }

  showRecipe() {
    this.props.maestro.dataRefresh('showRecipe', this.props.recipe.id);
    // activate the noSleep mode
    this.props.noSleep.enable();
  }

  render() { // exemple de render en ternaire
    const { recipe } = this.props;
    let currentRecipeImg;
    try {
      currentRecipeImg = require(`../../assets/img/plats/${recipe.id}.jpg`);
    } catch (e) {
      console.log(e.code);
      currentRecipeImg = require('../../assets/img/plats/default.jpg');
    }

    return (
      <div className={recipe.valid ? 'thumbnail animation-thumbnail checked' : 'thumbnail animation-thumbnail'}>
        <div className="tape" />
        <div className="nomPhoto" title={recipe.title}>{recipe.title}</div>
        <i className="material-icons">restaurant_menu</i>
        <img
          alt="recipe"
          src={currentRecipeImg}
          height="150"
          width="150"
          title={recipe.id}
        />

        <div className="deleter-recipe" title="Delete" onClick={this.deleteRecipe}>
          <i className="material-icons">delete_forever</i>
          <div className="corner" />
        </div>

        <div className="showRecipe" onClick={this.showRecipe}>
          <i className="material-icons">visibility</i>
          <span>Voir la recette</span>
        </div>
      </div>);
  }
}

RecipeItem.propTypes = {
  recipe: PropTypes.object,
  maestro: PropTypes.object,
  noSleep: PropTypes.object
};

RecipeItem.defaultProps = { // define the default props
  recipe: {},
  maestro: { dataRefresh: () => {} },
  noSleep: {}
};

export default RecipeItem;
