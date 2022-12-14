import useDrinks from "../../../../data/queryHooks/useDrinks";
import DrinkDraught from "./DrinkDraught";

function DrinksDraught() {
  const drinks = useDrinks();

  if (drinks.status === "success") {
    const drinksData = drinks.data;
    const draughtData = drinksData.filter(
      (drink) => drink.drink_type === "draught"
    );
    console.log("draughtData", draughtData);
    return (
      <div className="drinks_draught">
        {draughtData.map((drink) => {
          return <DrinkDraught key={drink.id} data={drink} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default DrinksDraught;
