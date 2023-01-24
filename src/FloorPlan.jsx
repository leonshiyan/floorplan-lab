import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return ( 
    <>
    <div>
      <Bedroom bedNum = '1'/>
      <div>
      <Bath size='Full'/>
      </div>
    </div>
    <div>
      <Kitchen />
    </div>
    
    <div>
      <Bedroom bedNum = '2'/>
    </div>
    <div>
      <LivingRoom />
    </div>
    <div>
      <Bath size='Half'/>
    </div>
    <div>
      <Bedroom bedNum = '3'/>
    </div>
    </>
  )
}
export default FloorPlan