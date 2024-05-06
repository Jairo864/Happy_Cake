
const Contacto= ()=> {
  return (
   <>
   <div className="container text-center mt-3">
      <p className="fs-2">Cuentanos, ¿En qué te podemos ayudar?</p>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescrption" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control p-4"
            id="exampleInputDescription"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
    </div>
   

</>
  )
    
  }
  
  export default Contacto;