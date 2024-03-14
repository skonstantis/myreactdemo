/* Author: Sotiris Konstantis */
import ConditionalComponent1 from "./CoditionalComponent1";
import ConditionalComponent2 from "./ConditionalComponent2";

export default function ConditionalComponent() {
  const display = false;
  return display ? <ConditionalComponent1 /> : <ConditionalComponent2 />;
}
