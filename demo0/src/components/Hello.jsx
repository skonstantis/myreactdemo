/* Author: Sotiris Konstantis */
export default function Hello({person}) {
  return (
        <div>
            <h1>{person.message} {person.name} {person.emoji}</h1>
        </div>
    );
}