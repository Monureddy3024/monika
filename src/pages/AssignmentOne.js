import React from "react";
import Modal from 'react-modal';
import { Card, Button } from "antd";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
};

Modal.setAppElement('#root');

const AssignmentOne = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function openModal() {
    setCount(count+1);
    setIsOpen(true);
  }

  function reset() {
    setCount(0);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am clicked {count} times</div>
      </Modal>
      <Card
        bordered={false}
        style={{
          border: "1px solid #dcdcdc",
          boxShadow: "0px 15px 20px 5px #0000001a",
          width: 400
        }}
      >
        <h1 style={{ textAlign: "center" }}>Click and see the magic!</h1>
        <Button block size="large" onClick={openModal}>
            Open Modal
        </Button>

        <Button className="m-t" block size="small" onClick={reset}>
            Reset
        </Button>
      </Card>
    </>
  );
};

export default AssignmentOne;
