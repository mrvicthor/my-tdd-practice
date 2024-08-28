interface VolumeCalculable {
  calculateVolume(): number;
}

abstract class Shape implements VolumeCalculable {
  constructor(protected readonly height: number) {}

  abstract calculateVolume(): number;
}

export class Cube extends Shape {
  constructor(
    height: number,
    private readonly width: number,
    private readonly length: number
  ) {
    super(height);
  }

  calculateVolume(): number {
    return this.width * this.length * this.height;
  }
}

export class Cylinder extends Shape {
  constructor(height: number, private readonly radius: number) {
    super(height);
  }

  calculateVolume(): number {
    return Number((Math.PI * this.radius ** 2 * this.height).toFixed(2));
  }
}

export class Pyramid extends Shape {
  constructor(height: number, private readonly base: number) {
    super(height);
  }

  calculateVolume(): number {
    return (this.base * this.base * this.height) / 3;
  }
}
