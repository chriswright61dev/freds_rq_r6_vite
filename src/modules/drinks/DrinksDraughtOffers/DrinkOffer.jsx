import "./DrinkOffer.css";
function DrinkOffer({ drinkName, drinkOfferPrice, thumbnail }) {
  return (
    <div className="drink_offer">
      <p className="drink_offer__name"> {drinkName}</p>
      <div className="drink_offer__container">
        <div className="drink_offer__image">
          <img src={thumbnail} alt={drinkName} />
        </div>
        <div className="drink_offer__body">
          <p className="drink_offer_price">£ {drinkOfferPrice}</p>
          <p>a Pint</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkOffer;
