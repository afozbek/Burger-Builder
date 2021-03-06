import * as actionTypes from "./actionsTypes";

export const addIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: {
      ingredientName: ingName
    }
  };
};

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: {
      ingredientName: ingName
    }
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: {
      ingredients: ingredients
    }
  };
};

export const fetchIngredientsFailed = err => {
  console.log(err);
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  };
};
