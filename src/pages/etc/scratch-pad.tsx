
export default function ScratchPad() {
  return (
    <article>
      <h2>Scratch Pad</h2>
      <p>Here is a scratch pad for testing out code snippets.</p>
      <form>
        <input type="text" name="id" autoFocus={true} autoComplete={"off"} />
        <br />
        <input type="password" name="pswd" autoFocus={true} autoComplete={"off"} />
        <br />
        <button>submit</button>
      </form>
    </article>
  )
}