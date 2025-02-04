import './App.css'
import { useState } from 'react'

function App() {
  let [form, setForm] = useState([])
  // let [doubleZ, setDoubleZ] = useState([])
  function doubleZero(){
    setForm([...form, 0, 0])
  }

  function one(){
    setForm([...form, 1])
  }

  function two(){
    setForm([...form, 2])
  }

  function three(){
    setForm([...form, 3])
  }

  function four(){
    setForm([...form, 4])
  }

  function five(){
    setForm([...form, 5])
  }

  function six(){
    setForm([...form, 6])
  }

  function seven(){
    setForm([...form, 7])
  }

  function eight(){
    setForm([...form, 8])
  }

  function nine(){
    setForm([...form, 9])
  }

  function dot(){
    setForm([...form, "."])
  }

  function zero(){
    setForm([...form, 0])
  }

  function plus(){
    setForm([...form, "+"])
  }

  function minus(){
    setForm([...form, "-"])
  }

  function multiplication(){
    setForm([...form, "*"])
  }

  function division(){
    setForm([...form, "/"])
  }

  function percentage(){
    setForm([...form, "%"])
  }

  function clear(){
    setForm([])
  }

  function deletion(){
    let result = form.slice(0, form.length-1)
    setForm(result)
  }

  function finalOutput(){
      let exp = form.join('')
      console.log("hello", exp)
      let result = eval(exp)
      console.log(result)
      setForm([result])
  }

  console.log(form)
  return (
    <>
      <div className='main'>
          <div>
            <input type='text' placeholder='0' className='inputs' value={form.join("")} readOnly/>
          </div>
          <div className='grids'>
              <button style={{backgroundColor:"rgb(142, 238, 142)"}} onClick={() => clear()}>AC</button>
              <button onClick={() => deletion()}>DEL</button>
              <button onClick={() => percentage()} value={form}>%</button>
              <button onClick={() => division()} value={form}>/</button>
              <button onClick={() => seven()} value={form}>7</button>
              <button onClick={() => eight()} value={form}>8</button>
              <button onClick={() => nine()} value={form}>9</button>
              <button onClick={() => multiplication()} value={form}>*</button>
              <button onClick={() => four()} value={form}>4</button>
              <button onClick={() => five()} value={form}>5</button>
              <button onClick={() => six()} value={form}>6</button>
              <button onClick={() => minus()} value={form}>-</button>
              <button onClick={() => one()} value={form}>1</button>
              <button onClick={() => two()} value={form}>2</button>
              <button onClick={() => three()} value={form}>3</button>
              <button onClick={() => plus()} value={form}>+</button>
              <button onClick={() => doubleZero()} value={form}>00</button>
              <button onClick={() => zero()} value={form}>0</button>
              <button onClick={() => dot()} value={form}>.</button>
              <button onClick={() => finalOutput()}>=</button>
          </div>
      </div>
    </>
  )
}

export default App
