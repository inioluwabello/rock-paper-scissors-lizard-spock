import { useDispatch } from "react-redux";
import { selection } from "./gameSlice";

const Page1 = ({ roles }) => {
  const dispatch = useDispatch();
  return (
    <div className="game-board">
      <div className="game-background">
        {roles.map((role) => {
          return (
            <div
              onClick={() => dispatch(selection({ playerSelection: role, gamePage: 2 }))}
              key={role}
              className={`game-icon ${role}`}
            >
              <div className="game-icon-inner">
                <img src={`/images/icon-${role}.svg`} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page1;
