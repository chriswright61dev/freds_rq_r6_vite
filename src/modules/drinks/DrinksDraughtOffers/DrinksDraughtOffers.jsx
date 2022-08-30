import useDrinks from "../../../data/queryHooks/useDrinks";
import "./DrinksDraughtOffers.css";
import DrinksOffersHeader from "./DrinksOffersHeader";
import DrinkOffer from "./DrinkOffer";

function DrinksDraughtOffers() {
  const drinks = useDrinks();

  if (drinks.status === "success") {
    const drinksData = drinks.data;
    const draughtOffersData = drinksData.filter(
      (drink) => drink.drink_offer_price && drink.drink_type === "draught"
    );
    if (draughtOffersData.length === 0) {
      return null;
    } else {
      return (
        <div className="drinks_offers">
          <DrinksOffersHeader />
          {draughtOffersData.map((drink) => {
            return (
              <DrinkOffer
                key={drink.id}
                drinkName={drink.drink_name}
                drinkOfferPrice={drink.drink_offer_price}
                thumbnail={drink.drink_image_thumbnail}
              ></DrinkOffer>
            );
          })}
        </div>
      );
    }
  } else {
    return null;
  }
}

export default DrinksDraughtOffers;
