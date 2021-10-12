'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Recipes', [
       {
     name: 'Chivito uruguayo',
     ingredients:`2 slices Beef Brisket
     2 slices Bread
     1 Lettuce
     1 Tomato
     100g Ham
     100g Mozzarella
     100g Bacon
     1 Egg
     1 Onion
     Black Pepper`,
     instructions:`Crush the meat so that it is finite and we put it on a griddle to brown.
     Put the eggs, bacon and ham to fry.
     Cut the bread in half, put the beef brisket, the fried eggs, the bacon, the ham, the mozzarella, the tomato and the lettuce.
     Cover with the other half of the bread and serve.`,
     img: `https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg`, 
     cuisine:`American`,
    },
    {
      name:`Kentucky Fried Chicken`,
      ingredients:`1 whole chicken
      2 quarts neutral frying oil
      1 egg white
      1 1/2 cups flour
      1 tablespoon brown sugar
      1 tablespoon salt
      1 tablespoon paprika
      2 teaspoons onion salt
      1 teaspoon chili powder
      1 teaspoon black pepper
      1/2 teaspoon celery salt
      1/2 teaspoon sage
      1/2 teaspoon garlic powder
      1/2 teaspoon allspice
      1/2 tablespoon oregano`,
      instructions:`Preheat fryer to 350°F.
      Thoroughly mix together all the spice mix ingredients.
      Combine spice mix with flour, brown sugar and salt.
      Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture.
      Turn a few times and make sure the flour mix is really stuck to the chicken.
      Repeat with all the chicken pieces.
      Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit.
      Fry chicken in batches.
      Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes.
      Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F.
      Let chicken drain on a few paper towels when it comes out of the fryer.
      Serve hot.`,
      img:`https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg`,
      cuisine:`American`
    },
    {
    name:`Kentucky Fried Chicken`,
    ingredients:`1 whole chicken
    2 quarts neutral frying oil
    1 egg white
    1 1/2 cups flour
    1 tablespoon brown sugar
    1 tablespoon salt
    1 tablespoon paprika
    2 teaspoons onion salt
    1 teaspoon chili powder
    1 teaspoon black pepper
    1/2 teaspoon celery salt
    1/2 teaspoon sage
    1/2 teaspoon garlic powder
    1/2 teaspoon allspice
    1/2 tablespoon oregano`,
    instructions:`Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely. Using a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern. Salt the brisket well and let it sit at room temperature for 30 minutes.
    Sear the brisket: You'll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions. Pat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.) Turn the brisket over and cook for a few minutes more to brown the other side.
    Sauté the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil. Add the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Sauté, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes.
    Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300°F. Use kitchen twine to tie together the bay leaves, rosemary and thyme. Move the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop. Cover the pot, place the pot in the 300°F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly.
    Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender.
    Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs.
    Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step. To make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and purée until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm.
    Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the "grain" of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices. Serve with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.`,
    img:`https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg`,
    cuisine:`American`
    },
    {
      name: 'Chicken Couscous',
      ingredients:`1 tbsp Olive Oil
      1 chopped Onion
      200g Chicken Breast
      pinch Ginger
      2 tblsp Harissa Spice
      10 Dried Apricots
      220g Chickpeas
      200g Couscous
      200ml Chicken Stock
      Handful Coriander`,
      instructions:`Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened.
      Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden.
      Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.
      Tip in the apricots, chickpeas and couscous, then pour over the stock and stir once.
      Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft.
      Fluff up the couscous with a fork and scatter over the coriander to serve.
      Serve with extra harissa, if you like.`,
      img: `https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg`, 
      cuisine:`Moroccan`,
    },
    {
      name: 'Sweet and Sour Pork',
      ingredients:`200g Pork
      1 Egg
      Dash Water
      1/2 tsp Salt
      1 tsp Sugar
      10g Soy Sauce
      10g Starch
      30g Tomato Puree
      10g Vinegar
      Dash Coriander`,
      instructions:`Crack the egg into a bowl. Separate the egg white and yolk.
      Slice the pork tenderloin into strips.
      Prepare the marinade using a pinch of salt, one teaspoon of starch, two teaspoons of light soy sauce, and an egg white.
      Marinade the pork strips for about 20 minutes.
      Put the remaining starch in a bowl. Add some water and vinegar to make a starchy sauce.
      Pour the cooking oil into a wok and heat to 190°C (375°F). Add the marinated pork strips and fry them until they turn brown. Remove the cooked pork from the wok and place on a plate.
      Leave some oil in the wok. Put the tomato sauce and white sugar into the wok, and heat until the oil and sauce are fully combined.
      Add some water to the wok and thoroughly heat the sweet and sour sauce before adding the pork strips to it.
      Pour in the starchy sauce. Stir-fry all the ingredients until the pork and sauce are thoroughly mixed together.
      Serve on a plate and add some coriander for decoration.`,
      img: `https://www.themealdb.com/images/media/meals/1529442316.jpg`, 
      cuisine:`Chinese`,
     },
     {
      name: 'Szechuan Beef',
      ingredients:`1/2lb Beef
      1/2 tsp Salt
      1 tsp Sesame Seed Oil
      1 pinch Pepper
      1 Egg White
      3 tbs Starch
      4 tbs Oil
      1 tsp Ginger
      1 tsp Garlic
      3/4 cup Onion
      1/2 cup Carrots
      3/4 cup Green Pepper
      1 cup Celery
      1 cup Mushrooms
      1 tbs Cooking Wine`,
      instructions:`In a bowl, add the beef, salt, sesame seed oil, white pepper, egg white, 2 Tablespoon of corn starch and 1 Tablespoon of oil.
      First Cook the beef by adding 2 Tablespoon of oil until the beef is golden brown. Set the beef aside
      In a wok add 1 Tablespoon of oil, minced ginger, minced garlic and stir-fry for few seconds.
      Next add all of the vegetables and then add sherry cooking wine and 1 cup of water.
      To make the sauce add oyster sauce, hot pepper sauce, and sugar.
      Add the cooked beef and 1 spoon of soy sauce To thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.`,
      img: `https://www.themealdb.com/images/media/meals/1529443236.jpg`, 
      cuisine:`Chinese`,
     },
     {
      name: 'Beef Dumpling Stew',
      ingredients:`1 tablespoon extra-virgin olive oil
      1 onion, coarsely chopped
      2 pounds cubed beef stew meat
      2 teaspoons steak seasoning (such as Montreal Steak Seasoning®), divided
      2 stalks celery, each cut into 4 pieces
      2 cups water, or to cover
      4 (.85 ounce) packages dry brown gravy mix
      4 cups water
      1 small turnip, peeled and quartered
      4 carrots, peeled and quartered
      7 potatoes, peeled and quartered
      1 ½ cups all-purpose flour
      2 teaspoons baking powder
      ¾ teaspoon salt
      3 tablespoons shortening
      ¾ cup milk`,
      instructions:`Heat the olive oil in a large heavy pot or Dutch oven over medium-high heat until the oil is shimmering, and place the onion and beef into the hot oil. Sprinkle with 1 teaspoon of the steak seasoning, stir the meat and onions well, and sprinkle with 1 more teaspoon of seasoning. Add the celery, and cook and stir until the meat is browned, about 10 minutes.
      Pour in 2 cups of water to just cover the meat, onion, and celery, bring to a boil, and stir and scrape the browned bits of flavor from the bottom of the pan. Cover, reduce heat, and simmer until the beef is very tender, about 2 hours. Remove the meat and celery pieces from the pan, set the meat aside, and discard the celery.
      In a bowl, whisk together the gravy mix with 4 cups of water. Add the mixture to the juices in the pot, bring to a boil, and stir the meat back into the gravy mixture. Stir in the turnip and carrots, cover, and simmer for 20 minutes. Stir in the potatoes, cover, and simmer an additional 20 minutes.
      To make dumplings, mix the flour, baking powder, and salt in a bowl. Cut the shortening into the flour mixture with a pastry cutter or two knives until the mixture looks crumbly. Pour in the milk, and lightly stir the mixture just until it combines to form a dough.
      Remove 2 cups of gravy from the pot, and reserve. Drop the dumplings by heaping tablespoon onto the meat and vegetables in the pot, cover, and simmer for 20 minutes. Do not peek until the time is up. Pour the reserved gravy back over the dumplings, stir lightly, and serve.`,
      img: `https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg`, 
      cuisine:`British`,
     },
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Recipes', null, {});
  }
};
