const chooseRecipe = function(bakeryA, bakeryB, recipes) {

    //The loop goes through each recipe and determines if the bakeries have one of the ingredients
    //A flaw in this however is if both bakeries have ingredient one of the recipe and not two the code won't differentiate.
    for( let j = 0; j < recipes.length; j++){
        if(ingredientCheck(bakeryA, recipes[j].ingredients) && ingredientCheck(bakeryB,recipes[j].ingredients)){
            return recipes[j].name;
        }
    }
    return "Nope! Can't make these recipes"
  }
  
  //This loop will search the two ingredients to see if the bakery has one of the ingredients
  //However this is only a true false function and doesn't state what ingredient is found
  //It also does tell us if the bakery has both ingredients. Which make the code unscalable
const ingredientCheck = function(bakery, ingredients){
    for (let i = 0; i< ingredients.length; i++){
        if(bakery.includes(ingredients[i])){
            return true
        }
    }
    return false
}

  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));