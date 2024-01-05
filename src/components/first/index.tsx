import { activate } from "@/atoms/activate"
import { useRecoilState } from "recoil"
import "./first.moudule.css"
const First = () => {
  const [state, setState] = useRecoilState(activate)
  return (
    <section className="first flex-center">
      {["on", "off"].map(item => (
        <button
          disabled={state === item ? true : false}
          style={{ backgroundColor: state === item ? "tomato" : "rgb(162, 162, 249)" }}
          key={item}
          onClick={() => setState(item)}
        >
          {item}
        </button>
      ))}
    </section>
  )
}

export default First
