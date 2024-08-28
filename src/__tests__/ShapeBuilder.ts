import { Cube, Cylinder, Pyramid } from "../ShapeBuilder/ShapeBuilder";

describe("ShapeBuilder", () => {
  it("should build return the volume of a cube", () => {
    const cube = new Cube(4, 4, 4);
    expect(cube.calculateVolume()).toBe(64);
  });

  it("should return the volume of a cylinder", () => {
    const cylinder = new Cylinder(6, 5);
    expect(cylinder.calculateVolume()).toBe(471.24);
  });

  it("should return the volume of a pyramid", () => {
    const pyramid = new Pyramid(4, 3);
    expect(pyramid.calculateVolume()).toBe(12);
  });
});
