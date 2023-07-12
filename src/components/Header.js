export const Header = ({ score }) => {
  return (
    <header className="header">
      <div className="header-wrapper border-2">
        <div className="space-between">
          <div className="title">
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
            <br />
            LIZARD
            <br />
            SPOCK
            <br />
          </div>

          <div className="score">
            <span className="score-text">SCORE</span>
            <h1 className="dark-text bold fontFaceBarlowSemiCondensedBold">
              {score}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
