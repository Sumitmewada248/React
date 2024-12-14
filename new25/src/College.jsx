const College=({name ,city,children})=>{
    return(
        <>
        {children}
        <h1>Welcome This is Cybromm component</h1>
        <h1>my name is :{name}</h1>
        <h2>my city is: {city}</h2>
        <h1 style={{color:"white",backgroundColor:"yellow"}}>{children}</h1>
        </>
    )
}
export default College;