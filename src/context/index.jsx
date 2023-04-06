import PropertyContext from "./properties"

const RootContext =({children})=>{
    return (
    <>
     <PropertyContext>{children}</PropertyContext>
    </>
    )
}
export default RootContext