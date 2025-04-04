
function Merge (){
    return(
        <>
        <div>Merge All</div>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </>
    )
}

const ComponentA  = ()=>{
       return(
        <>
        <div>Component A</div>
        </>
    )
}

function ComponentB (){
    return(
        <>
        <div>Component B</div>
        </>
    )
}

function ComponentC (){
    return(
        <>
        <div>Component C</div>
        </>
    )
}


export default Merge