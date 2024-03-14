/* Author: Sotiris Konstantis */
export default function Fruit({ name, price, emoji, soldOut }) {
  return (
      <li>
      {emoji} {name} {price} 
      {soldOut ? (
          " --- Sold out :("
      ) : (
        ""
      )}
      </li>
  );
  
}
  