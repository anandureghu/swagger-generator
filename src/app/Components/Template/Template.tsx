import Api from "./Body/Body"
import Head from "./Head/Head"
import Models from "./Models/Models"

function Template() {
  return (
    <div className='template'>
        <Head/>
        <br />
        <br />
        <br />
        <Api/>
        <Models/>
    </div>
  )
}

export default Template