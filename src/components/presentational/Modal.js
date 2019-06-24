import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../actions';
import Image from './Image';

const Overlay = styled.div`
  display: ${({ hideModal }) => (hideModal ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

const DialogBox = styled.div`
  margin: 0 auto;
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 80%;
  @media screen and (min-width: 600px) {
    width: 50%;
    height: 70%;
  }
  > div.modal-header {
    text-align: right;
    > i:hover {
      cursor: pointer;
    }
  }
  .modal-body {
    margin: auto;
    display: flex;
    flex: 1;
  }
`;

const Modal = () => {
  const storeData = useSelector(({ modalState, imageToEnlarge }) => ({
    modalState,
    imageToEnlarge
  }));
  const dispatch = useDispatch();
  return (
    <Overlay hideModal={storeData.modalState}>
      <DialogBox>
        <div className="modal-header">
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              dispatch(toggleModal(false));
            }}
          />
        </div>
        <div className="modal-body">
          <Image
            imgAddress={storeData.imageToEnlarge}
            fullSize={true}
            alt="Imagem"
          />
        </div>
      </DialogBox>
    </Overlay>
  );
};

export default Modal;
