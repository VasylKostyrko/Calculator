import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import InputCalc from './InputCalc';
import ClickCalc from './ClickCalc';

function Calculator () {
  const [calcType, setCalcType] = useState('ClickCalc')
  function calcTypeChange() {
	  calcType === 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc')
  }
  let calculator;
  switch (calcType) {
	case 'ClickCalc': calculator = <ClickCalc />
	  break;
	case 'InputCalc': calculator = <InputCalc />
	  break;
	default: calculator = <ClickCalc />
  }
  return (
    <Flex flexDirection="column" justifyContent="space-between" m="50px" alignItems="center" h="90%">
  	  <Button onClick={calcTypeChange}>
	    Змінити тип
	  </Button>  
      <Flex m="10px"> {calculator} </Flex> 
    </Flex>
  )
}

export default Calculator
