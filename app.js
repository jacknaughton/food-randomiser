let vegetables = ['Mixed vegetables', 'Broccoli', 'Potato', 'Peas', 'Sweetcorn', 'Carrots', 'Green beans'];


function randomise(length) {
    return Math.floor(Math.random() * length);
}

function findVariantOfMeat() {
    let meatChoices = [
        {
            meat: 'chicken',
            variant: ['Oven cooked chicken', 'Chicken nuggets', 'Chicken dippers', 'Tempura batter chicken', 'BBQ coated chicken', 'Chicken burger', 'Chicken kiev', 'Chicken sausage', 'Chicken wings', 'Chicken thigh', 'Chicken drumsticks', 'Roast chicken']
        },
        {
            meat: 'beef',
            variant: ['Roast beef', 'Beef mince', 'Beef burger', 'Beef meatballs', 'Beef steak', 'Beef grillsteaks']
        },
        {
            meat: 'pork',
            variant: ['Bacon', 'Pork fillet', 'Pork mince', 'Pork chops', 'Pork meatballs', 'Pork ribs', 'Pork sausages', 'Gammon', 'Lardons',]
        },
        {
            meat: 'turkey',
            variant: ['Minced turkey', 'Turkey bacon', 'Turkey sausages', 'Turkey meatballs', 'Turkey steaks', 'Turkey breast']
        },
        {
            meat: 'fish',
            variant: ['Cod', 'Salmon', 'Haddock', 'Fish fingers', 'Tuna']
        }
    ]

    let meat = meatChoices[randomise(meatChoices.length)];
    let meatChoice = meat.variant[randomise(meat.variant.length)]

    document.getElementById("meat").innerHTML = meatChoice;
}

function findVeg() {
    let veg = vegetables[randomise(vegetables.length)];
    document.getElementById("vegetables").innerHTML = veg;
}

function getFood() {
    findVariantOfMeat()
    findVeg()
}
