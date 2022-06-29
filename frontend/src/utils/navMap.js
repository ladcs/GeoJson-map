import { useNavigate } from 'react-router-dom';

function handleClickItsPoints(itsPoints, setItsPoints) {
  if (itsPoints === 'point') {
    setItsPoints('polygon');
  } else if (itsPoints === 'polygon') {
    setItsPoints('both');
  } else {
    setItsPoints('point');
  }
}

function handleClickPosition() {
  useNavigate('/point');
}

export { handleClickItsPoints, handleClickPosition }