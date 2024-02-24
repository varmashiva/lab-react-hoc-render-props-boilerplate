import Hoc from "./Hoc"
function LikePost(props) {
  return (
    <div>
      <button onClick={props.click}>Like Post {props.text}</button>
    </div>
  )
}
export default Hoc(LikePost)