import SomeContext from "./SomeContext"
import AnotherContext from "./AnotherContext"

const SecondChild = () => {
  return (
    <div>
      SecondChild
      <AnotherContext.Consumer>
        {({anotherValue, setAnotherValue}) => {
          return (
            <SomeContext.Consumer>
              {({someValue, setSomeValue}) => {

                const setters = {setAnotherValue, setSomeValue}

                const onChange = (e) => {
                  let name = e.target.name
                  name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`
                  setters[`set${name}`](e.target.value)
                }

                return (
                  <div>
                    <div>
                      {someValue}
                    </div>
                    <div>
                      <input
                          value={someValue}
                          name='someValue'
                          onChange={onChange}
                      />
                    </div>
                    <div>
                      {anotherValue}
                    </div>
                    <div>
                      <input
                          value={anotherValue}
                          name='anotherValue'
                          onChange={onChange}
                      />
                    </div>
                  </div>
                )
              }}
            </SomeContext.Consumer>
          )
        }}
      </AnotherContext.Consumer>
    </div>
  )
}

export default SecondChild
