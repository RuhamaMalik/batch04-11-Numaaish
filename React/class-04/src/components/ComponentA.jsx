// import "./style.css"

import styles from "./myStyle.module.css"
import myNewStyle from "./myNewStyle.module.css"

const ComponentA = () => {
    return (
        <>
            {/* <h1 style={{color:"crimson" , border:"1px solid yellow", padding:"10px"}} >ComponentA</h1> */}

            {/* <h1 className="crimson" >Component A</h1> */}

            <h1 className={styles.purple} >Component A</h1>


            <p className={myNewStyle.purple}>Lorem ipsum dolor sit amet.</p>
        </>
    )
}

export default ComponentA