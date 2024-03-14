/* Author: Sotiris Konstantis */
export default function Message() {
    function handleClick(){
        alert("Ok, got it!");
    }
  return <div>
    <button onClick={handleClick}>Click here for free discount!</button>
  </div>;
}
