import Hoc from "./Hoc"
function LikeImage(props) {
  return (
    <div>
      <button onClick={props.click}>Like Image {props.text}</button>
    </div>
  )
}
export default Hoc(LikeImage)