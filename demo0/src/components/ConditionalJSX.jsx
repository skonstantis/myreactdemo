/* Author: Sotiris Konstantis */
export default function ConditionalJSX() {
  const display = true;
  if (display) {
    return (
      <div>
        <h3>This is a conditional if statement</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>This is a conditional else statement</h3>
      </div>
    );
  }
}
