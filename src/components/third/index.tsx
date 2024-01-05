import { output } from "@/atoms/output"
import { useRecoilState } from "recoil"
import "./third.moudule.css"
const Third = () => {
  const [hobby, setHobby] = useRecoilState(output)
  return (
    <section className="third">
      {hobby.length ? (
        <div className="third-body">
          {hobby.map((item, index) => (
            <div key={item["1"]} className="board flex-between">
              <div className="each-board flex-between">
                {Object.keys(item).map(sState => (
                  <div key={sState + Math.random()} className="each-items">
                    {sState}. {item[sState]}
                  </div>
                ))}
              </div>
              <input
                type="button"
                value="x"
                className="each-buttons"
                onClick={() => setHobby(hState => hState.filter((_, hIndex) => index !== hIndex))}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="not-data flex-center h-w-full bg-blue">
          등록하신 테이터가 존재하지 않습니다.
        </div>
      )}
    </section>
  )
}

export default Third
