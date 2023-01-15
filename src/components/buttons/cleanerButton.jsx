

const CleanerButton = ({clear}) => {
  return (
    <>
    <button  onClick={()=>{clear()}} type="button" class="btn btn-warning">vaciar carrito</button>
</>
  )
}

export default CleanerButton

