import Modal from "styled-react-modal"
const StyledModal = Modal.styled`
width: 20rem;
height: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
background-color: white;
border-radius: 5px;`

export default function LocalModal(props) {
  const { isOpen, toggleModal } = props
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <span>New User created successfully</span>
        <button onClick={toggleModal}>Ok</button>
      </StyledModal>
    </div>
  )
}
