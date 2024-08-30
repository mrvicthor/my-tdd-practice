export type Status = "tie" | "win" | "draw";
export type Option = "rock" | "paper" | "scissors";

export enum Weapon {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export class Player {
  constructor(public name: string) {}

  chooseWeapon(): Weapon {
    const weapons = Object.values(Weapon);
    return weapons[Math.floor(Math.random() * weapons.length)];
  }
}

export class Duel {
  private player1: Player;
  private player2: Player;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  private determineWinner(weapon1: Weapon, weapon2: Weapon): Player | null {
    if (weapon1 === weapon2) return null;
    if (
      (weapon1 === Weapon.Rock && weapon2 === Weapon.Scissors) ||
      (weapon1 === Weapon.Scissors && weapon2 === Weapon.Paper) ||
      (weapon1 === Weapon.Paper && weapon2 === Weapon.Rock)
    ) {
      return this.player1;
    }
    return this.player2;
  }

  play(maxRounds: number): Player | null {
    let player1Wins = 0;
    let player2Wins = 0;

    for (let i = 0; i < maxRounds; i++) {
      const weapon1 = this.player1.chooseWeapon();
      const weapon2 = this.player2.chooseWeapon();

      const winner = this.determineWinner(weapon1, weapon2);

      console.log(
        `Round ${i + 1}: ${this.player1.name} chose ${weapon1} vs ${
          this.player2.name
        } chose ${weapon2}`
      );
      if (winner === this.player1) {
        player1Wins++;
        console.log(`${this.player1.name} wins!`);
      } else if (winner === this.player2) {
        player2Wins++;
        console.log(`${this.player2.name} wins!`);
      } else {
        console.log("It's a tie!");
      }
    }

    console.log(
      `Final score: ${this.player1.name} ${player1Wins} - ${player2Wins} ${this.player2.name}`
    );

    if (player1Wins > player2Wins) {
      console.log(`${this.player1.name} wins the duel`);
      return this.player1;
    }
    if (player2Wins > player1Wins) {
      console.log(`${this.player2.name} wins the duel`);
      return this.player2;
    }
    console.log("The duel ends in a tie");
    return null;
  }
}
