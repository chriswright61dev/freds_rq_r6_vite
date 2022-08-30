import useGuestAles from "../../../data/queryHooks/useGuestAles";
import GuestAle from "./GuestAle";
import GuestAlesHeader from "./GuestAlesHeader";
import { beersLastChanged } from "../../../utilities/utilities";
function GuestAles() {
  const guestAles = useGuestAles();

  if (guestAles.status === "success") {
    const guestAlesData = guestAles.data;
    // console.log("guestAlesData", guestAlesData);
    let beerschanged = null;
    if (guestAlesData.length > 0) {
      beerschanged = beersLastChanged(guestAlesData);
    }
    return (
      <div className="guest_ales">
        <GuestAlesHeader changed={beerschanged} />
        {guestAlesData.map((ale) => {
          return (
            <GuestAle
              key={ale.id}
              drinkName={ale.title}
              // halfPrice={ale.price_half}
              // pintPrice={ale.price_pint}
              aleDescription={ale.guestaledescription}
              longerAleDescription={ale.longer_guestaledescription}
              abv={ale.abv}
              photo={ale.photo}
            ></GuestAle>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default GuestAles;
