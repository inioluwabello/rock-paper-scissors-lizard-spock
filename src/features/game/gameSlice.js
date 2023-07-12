import { createSlice } from "@reduxjs/toolkit";
import { rules } from "./gameElements";

const initialState = {
  data: {
    score: 0,
    playerSelection: null,
    computerSelection: null,
    winner: null,
    gamePage: 1,
  },
  status: "idle",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increment: (state) => {
      state.data.score += 1;
    },
    selection: (state, action) => {
      const { playerSelection, computerSelection, gamePage } = action.payload;
      state.data.playerSelection =
        playerSelection ?? state.data.playerSelection;
      state.data.gamePage = gamePage ?? state.data.gamePage;

      if (computerSelection && !state.data.computerSelection) {
        state.data.computerSelection = computerSelection;
        state.data.winner = computeWinner(state.data);
        if (state.data.winner === "player") state.data.score += 1;
        else if (state.data.winner === "house") state.data.score -= 1;
      }
    },
    resetGame: state => {
      state.data.gamePage = 1;
      state.data.playerSelection = null
      state.data.computerSelection = null
      state.data.winner = null
    }
  },
});

const computeWinner = (gameData) => {
  if (gameData.playerSelection === gameData.computerSelection) return null;
  let winner = 'house';
  Object.keys(rules).forEach((role) => {
    if (role === gameData.playerSelection) {
      const index = rules[role].indexOf(gameData.computerSelection);
      winner = index !== -1
        ? "player"
        : "house";
    }
  });
  return winner
};

export const { increment, selection, resetGame } = gameSlice.actions;

export const selectGame = (state) => state.game.data;

export default gameSlice.reducer;
