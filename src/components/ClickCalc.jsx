import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'

function CountButton(props) {
  const expressions = /\+|\-|\/|\*| /
  const lastNumber = props.data[props.data.length - 1]
  function checkExpressionType() {
    if (expressions.test(lastNumber)) return
	props.onClick(props.data + props.expression)
  }
  return (
    <Button bg="#00C0F9" m="4px" onClick = {() => {checkExpressionType()} }>
		{props.expression}
	</Button>
  )
}

function Numbers(props) {
  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map(
    number => {
	  return (
		  <Button onClick={ (e) => {
			if (props.data !== '0') props.onClick(props.data + e.target.innerHTML)
			else props.onClick(e.target.innerHTML)
				}
			}
			key={number} w="40px" h="40px" m="4">
			{number}
		  </Button>
	  )
	}
  )
  return (
	<Flex flexWrap="wrap"  w="60"> {nums} </Flex>
  )
}
  
 function ClickCalc(props) { 
   const [counts, setCounts] = useState('0')
   const [result, setResult] = useState('')
   function applyExpression(countedNumber) {
	 setCounts(countedNumber)
	 setResult(eval(counts))
   }
  return (
	<div>
        {/* Поле для побудови виразу кнопками */}	
		<Flex w="30" alignItems="center" bg="blue.50" h="10" borderRadius="8px">
			<Text alignItems="center" px="16px">
			  {counts}
			</Text>
		</Flex>
		
        {/* Поле для побудови виразу клавішами клавіатури */}
		<Flex w="30" alignItems="center" bg="green.50" h="10" borderRadius="8px">
			<Text paddingLeft="4" alignItems="center" textColor="tomato">
			  {result}
			</Text>
		</Flex>
		
        {/* Кнопочна клавіатура */}
	    <Flex w="70" alignItems="top" borderRadius="8px">
			<Numbers data={counts} onClick={setCounts}/>
			<Flex flexDirection="column" marginTop="3">
			  <CountButton data={counts} expression={'+'} onClick={applyExpression} />
			  <CountButton data={counts} expression={'-'} onClick={applyExpression} />
			  <CountButton data={counts} expression={'*'} onClick={applyExpression} />
			  <CountButton data={counts} expression={'/'} onClick={applyExpression} />
			</Flex>
			<Flex flexDirection="column" marginTop="3">
			<Button bg="tomato" m="4px" onClick={ () => {setResult(eval(counts))} }>
			  =
			</Button>
			</Flex>
		</Flex>
	</div>
  )
}

export default ClickCalc