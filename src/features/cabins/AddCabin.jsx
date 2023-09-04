import CabinTable from './CabinTable'
import Button from '../../ui/Button'
import Row from '../../ui/Row'
import CreateCabinForm from './CreateCabinForm'
import Modal from '../../ui/Modal'

const AddCabin = () => {
  return (
    <Row>
      <CabinTable />
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      {/* <CabinTable />
      <Button onClick={() => setShowForm(!showForm)}>Add new cabin</Button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm onCloseModal={() => setShowForm(false)} />
        </Modal>
      )} */}
    </Row>
  )
}

export default AddCabin
