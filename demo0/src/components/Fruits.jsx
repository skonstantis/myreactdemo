/* Author: Sotiris Konstantis */
import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: "Free", emoji: "🍎", soldOut: true },
    { name: "Mango", price: 4, emoji: "🥭", soldOut: false },
    { name: "Banana", price: 2, emoji: "🍌", soldOut: false },
    { name: "Orange", price: 7, emoji: "🍊", soldOut: false },
    { name: "Pineapple", price: 10, emoji: "🍍", soldOut: false },
  ];

  return (
    <div>
      <h1>
        These are our available products!
      </h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
