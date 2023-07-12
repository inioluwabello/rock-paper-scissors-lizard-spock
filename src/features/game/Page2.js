import { useDispatch, useSelector } from "react-redux";
import { resetGame, selectGame, selection } from "./gameSlice";
import { useEffect } from "react";

const Page1 = ({ role, roles }) => {
  const game = useSelector(selectGame);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!game.computerSelection) {
      setTimeout(() => {
        const computerSelection =
          roles[Math.floor(Math.random() * roles.length)];
        dispatch(selection({ computerSelection, gamePage: 2 }));
      }, 1000);
    }
  });
  return (
    <>
      <div className="game-selection space-between">
        <div className={`game-icon game-selection-icon ${role}`}>
          <div className="game-icon-inner">
            <img src={`/images/icon-${role}.svg`} alt="" />
          </div>
          <div className="label">YOU PICKED</div>
        </div>

        <div className="desktop">
          {game.winner && (
            <h1>{game.winner === "player" ? "YOU WIN" : "YOU LOSE"}</h1>
          )}
          {!game.winner && game.computerSelection && <h1>DRAW</h1>}
          <button
            className="replay dark-text"
            onClick={() => dispatch(resetGame())}
          >
            PLAY AGAIN
          </button>
        </div>

        {!game.computerSelection && <div className={`empty-selection`}></div>}
        {game.computerSelection && (
          <div
            className={`game-icon game-selection-icon ${game.computerSelection}`}
          >
            <div className="game-icon-inner">
              <img src={`/images/icon-${game.computerSelection}.svg`} alt="" />
            </div>

            <div className="label">THE HOUSE PICKED</div>
          </div>
        )}
      </div>

      <div className="mobile status text-center mt-5">
        {game.winner && (
          <h1>{game.winner === "player" ? "YOU WIN" : "YOU LOSE"}</h1>
        )}
        {!game.winner && game.computerSelection && <h1>DRAW</h1>}
        <button
          className="replay dark-text"
          onClick={() => dispatch(resetGame())}
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  );
};

export default Page1;
