import { useState } from 'react'
import SomeContext from './SomeContext'
import AnotherContext from './AnotherContext'
import Child from './Child'

const App = () => {

  const [someValue, setSomeValue] = useState('some value')
  const [anotherValue, setAnotherValue] = useState('another value')

  const someValueState = {someValue, setSomeValue}
  const anotherValueState = {anotherValue, setAnotherValue}

  return (
    <div>
      <AnotherContext.Provider value={anotherValueState}>
        <SomeContext.Provider value={someValueState}>
          <div>
            App component
          </div>
          <Child />
        </SomeContext.Provider>
      </AnotherContext.Provider>
    </div>
  )
}

export default App
