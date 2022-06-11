import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faDice,
} from "@fortawesome/free-solid-svg-icons";

function Die({ value }) {
  if (value === 1) return <FontAwesomeIcon icon={faDiceOne} />;
  else if (value === 2) return <FontAwesomeIcon icon={faDiceTwo} />;
  else if (value === 3) return <FontAwesomeIcon icon={faDiceThree} />;
  else if (value === 4) return <FontAwesomeIcon icon={faDiceFour} />;
  else if (value === 5) return <FontAwesomeIcon icon={faDiceFive} />;
  else if (value === 6) return <FontAwesomeIcon icon={faDiceSix} />;
  else return <FontAwesomeIcon icon={faDice} />;
}

export default Die;
