import { Player, Duel, Weapon } from "../RockPaperScissors/RockPaperScissors";

describe("RockPaperScissors Game", () => {
  describe("Player", () => {
    it("should create a player with a name", () => {
      const player = new Player("Victor");

      expect(player.name).toBe("Victor");
    });

    it("player should choose a weapon", () => {
      const player = new Player("Zuby");
      const weapon = player.chooseWeapon();
      expect(Object.keys(Weapon)).toContain(weapon);
    });
  });

  describe("Duel", () => {
    let player1: Player;
    let player2: Player;
    let duel: Duel;

    beforeEach(() => {
      player1 = new Player("Zuby");
      player2 = new Player("Victor");
      duel = new Duel(player1, player2);
    });

    it("should declare a winner after playing three rounds", () => {
      const mockChooseWeapon = jest
        .spyOn(Player.prototype, "chooseWeapon")
        .mockReturnValueOnce(Weapon.Rock)
        .mockReturnValueOnce(Weapon.Scissors)
        .mockReturnValueOnce(Weapon.Paper)
        .mockReturnValueOnce(Weapon.Rock)
        .mockReturnValueOnce(Weapon.Scissors)
        .mockReturnValueOnce(Weapon.Paper);

      const winner = duel.play(3);
      expect(winner).toBe(player1);
      expect(mockChooseWeapon).toHaveBeenCalledTimes(6);
    });

    it("should result in a tie when both players win equal number of rounds", () => {
      const mockChooseWeapon = jest
        .spyOn(Player.prototype, "chooseWeapon")
        .mockReturnValueOnce(Weapon.Rock)
        .mockReturnValueOnce(Weapon.Scissors)
        .mockReturnValueOnce(Weapon.Scissors)
        .mockReturnValueOnce(Weapon.Rock)
        .mockReturnValueOnce(Weapon.Paper)
        .mockReturnValueOnce(Weapon.Rock);

      const winner = duel.play(2);
      expect(winner).toBeNull();
      expect(mockChooseWeapon).toHaveBeenCalledTimes(10);
    });

    it("should handle longer games", () => {
      const mockChooseWeapon = jest.spyOn(Player.prototype, "chooseWeapon");
      const sequence = [
        Weapon.Rock,
        Weapon.Scissors,
        Weapon.Paper,
        Weapon.Rock,
        Weapon.Scissors,
        Weapon.Paper,
        Weapon.Rock,
        Weapon.Paper,
        Weapon.Scissors,
        Weapon.Rock,
      ];

      sequence.forEach((weapon) =>
        mockChooseWeapon.mockReturnValueOnce(weapon)
      );

      const winner = duel.play(3);
      console.log("winner:", winner);
      expect(winner).toBe(player1);
      expect(mockChooseWeapon).toHaveBeenCalledTimes(16);
    });

    it("should handle ties in longer games", () => {
      const mockChooseWeapon = jest.spyOn(Player.prototype, "chooseWeapon");
      const sequence = [
        Weapon.Rock,
        Weapon.Scissors,
        Weapon.Paper,
        Weapon.Rock,
        Weapon.Paper,
        Weapon.Scissors,
        Weapon.Rock,
        Weapon.Paper,
        Weapon.Paper,
        Weapon.Scissors,
      ];
      sequence.forEach((weapon) =>
        mockChooseWeapon.mockReturnValueOnce(weapon)
      );

      const winner = duel.play(4);
      console.log("Longer tie test winner:", winner);
      expect(winner).toBeNull();
      expect(mockChooseWeapon).toHaveBeenCalledTimes(24);
    });
  });
});
