import * as React from 'react'
import {  Card} from 'react-bootstrap';
import Alerta from './Alerta';
// funcion que aplica el patron al texto de entrada
const IMask = (value: string) => {
  const result1 = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(value)

  return result1
}
const styles = {
    content: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        left:200,
        top: -10,
        marginBottom: 20,
        width: 400,
        height: 50,
    }
};

const InputEmail = () => {
  // inicializamos la variable de entrada
  const [hasError, setError] = React.useState(true)
  const [value, setValue] = React.useState('')

  // funcion handleChange
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value: eventValue },
  }) => {
    setValue(eventValue)
  }

  React.useEffect(() => {
    // aplicamos la mascara de entrada
    const valida = IMask(value)

    if (value) setError(valida)
  }, [value])

const alerts={
    alert:{
    key:1,
    color:'danger',
    mensaje:'Digite el email correctamente'
    }
}
  return (
    <React.Fragment>
    <form>
      <div className={styles.content}>
      {hasError ? (
                ''
                ) : (
                <Card>
                    <Card.Body>
                    <Alerta props={alerts.alert}  />
                    </Card.Body>
                </Card>
                )}
        <input type='text' onChange={handleChange} value={value}/>
      </div>
    </form>
    </React.Fragment>
  )
}

export default InputEmail
