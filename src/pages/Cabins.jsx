import AddCabin from '../features/cabins/AddCabin'
import CabintableOperation from '../features/cabins/CabintableOperation'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabintableOperation />
      </Row>
      <Row>
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
