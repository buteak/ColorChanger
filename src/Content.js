import colorNames from "colornames"

const Content = ({colorValue, setColorValue, hex, setHex}) => {
  return (
      <main className="content">
      <div className='square' style={{backgroundColor:colorValue}}>

        <p>{colorValue ? colorValue : "EmptyColor"}</p>
        <p>{hex ? hex : null}</p>

      </div>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="AddColorName">Color Name</label>
            <input
            type="text"
            autoFocus
            id='colorName'
            required
            placeholder='Add Color Name'
            value={colorValue}
            onChange={ (e) => {
              setColorValue(e.target.value)
              setHex(colorNames(e.target.value))
            } }
            />

    </form>
            
      </main>
  )
}

export default Content