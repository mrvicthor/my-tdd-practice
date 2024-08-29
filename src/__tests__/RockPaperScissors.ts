import { Player, Game } from "../RockPaperScissors";

describe("RockPaperScissors", () => {
  let player1: Player;
  let player2: Player;
  let game: Game;

  beforeEach(() => {
    player1 = new Player("player1");
    player2 = new Player("player2");
    game = new Game(player1, player2);
  });

  it("should start a game with the players", () => {
    expect(game.players).toEqual([player1, player2]);
  });
});
