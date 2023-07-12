import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectGame } from "./gameSlice";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { roles } from "./gameElements";
import { Header } from "../../components/Header";
import Modal from "react-bootstrap/Modal";

const Game = () => {
  const game = useSelector(selectGame);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container fontFaceBarlowSemiCondensedMedium">
        <div className="content">
          <Header score={game.score} />
          <main className="main">
            {game.gamePage === 1 && <Page1 roles={roles} />}
            {game.gamePage === 2 && (
              <Page2 roles={roles} role={game.playerSelection} />
            )}
          </main>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h3>RULES</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body">
                <img src="/images/image-rules-bonus.svg" alt="" />
              </div>
              <br /><br />
            </Modal.Body>
          </Modal>
        </div>
        <footer className="footer">
          <button onClick={handleShow} className="rules border-2">
            RULES
          </button>
        </footer>
      </div>
    </>
  );
};

export default Game;
