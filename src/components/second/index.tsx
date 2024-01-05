import { useForm } from "react-hook-form"
import { useCallback } from "react"
import { useRecoilValue, useRecoilState } from "recoil"
import { activate } from "@/atoms/activate"
import { output } from "@/atoms/output"
import "./second.moudule.css"
const Second = () => {
  const state = useRecoilValue(activate)
  const [hobby, setHobby] = useRecoilState(output)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()
  const valied = useCallback(
    (data: { [key: string]: string }) => {
      if (hobby.length > 5) return alert("메모장을 비워주세요.")
      if (Object.keys(errors).length) alert("모든 양식을 선택 해주세요.")
      else
        setHobby(hState => [
          {
            date: `${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}`,
            ...data
          },
          ...hState
        ])
    },
    [hobby.length, errors, setHobby]
  )
  return (
    <section className="second">
      {state === "on" ? (
        <div className="disabled flex-center h-w-full bg-blue">Disabled</div>
      ) : (
        <form onSubmit={handleSubmit(valied)} className="able-form h-w-full">
          {[1, 2, 3, 4].map(item => (
            <input
              type="text"
              key={item}
              {...register(item + "", {
                required: true,
                minLength: 2
              })}
            />
          ))}
          <input type="submit" value="submit" className="bg-blue" />
        </form>
      )}
    </section>
  )
}

export default Second
