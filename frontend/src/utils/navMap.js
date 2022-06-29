function handleClickItsPoints(itsPoints, setItsPoints) {
  if (itsPoints === 'point') {
    setItsPoints('polygon');
  } else if (itsPoints === 'polygon') {
    setItsPoints('both');
  } else {
    setItsPoints('point');
  }
}

export { handleClickItsPoints }