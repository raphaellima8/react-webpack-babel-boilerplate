import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../actions';
import Image from './Image';

const Overlay = styled.div`
  display: flex;
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

const modalRoot = document.getElementById('modal-root');

const Modal = () => {
  const element = document.createElement('div');
  const { modalState, imageToEnlarge } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    modalRoot.appendChild(element);
    return function unmountComponent() {
      modalRoot.removeChild(element);
    };
  });

  return !modalState
    ? null
    : createPortal(
        // eslint-disable-next-line react/jsx-indent
        <Overlay>
          <DialogBox>
            <div className="modal-header">
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={() => dispatch(toggleModal(false))}
              />
            </div>
            <div className="modal-body">
              <Image imgAddress={imageToEnlarge} fullSize={true} alt="Imagem" />
            </div>
          </DialogBox>
        </Overlay>,
        element
      );
};

export default Modal;
