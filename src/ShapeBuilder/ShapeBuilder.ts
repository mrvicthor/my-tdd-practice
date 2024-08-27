class ShapeBuilder {
  public height: number;
  constructor(height: number) {
    this.height = height;
  }
}

export class Cube extends ShapeBuilder {
  private width: number;
  private length: number;
  constructor(height: number, width: number, length: number) {
    super(height);
    this.width = width;
    this.length = length;
  }

  calculateVolume(): number {
    return this.width * this.length * this.height;
  }
}

export class Cylinder extends ShapeBuilder {
  private radius: number;
  constructor(height: number, radius: number) {
    super(height);
    this.radius = radius;
  }

  calculateVolume(): number {
    return parseInt(
      (Math.PI * this.radius * this.radius * this.height).toFixed(2),
      10
    );
  }
}

export class Pyramid extends ShapeBuilder {
  private base: number;
  constructor(height: number, base: number) {
    super(height);
    this.base = base;
  }

  calculateVolume(): number {
    return (this.base * this.base * this.height) / 3;
  }
}
