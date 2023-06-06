import Button from 'react-bootstrap/Button';
import '../CSS/Button.css'

const SPMButton = (props) => {
  return (
    <Button onClick={() => props.handleChange()} className='spmButton'>{props.buttonName}</Button>
  )
}

export default SPMButton;