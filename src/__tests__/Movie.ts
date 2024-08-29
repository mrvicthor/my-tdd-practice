import Movie from "../Movie/Movie";

describe("Movie", () => {
  let movie1: Movie;
  let movie2: Movie;
  beforeEach(() => {
    movie1 = new Movie("The Matrix");
    movie2 = new Movie("The Matrix Reloaded");
  });

  it("should have a title", () => {
    expect(movie1.title).toBe("The Matrix");
  });

  it("should add a review", () => {
    movie1.addReview(5, "John Doe", "This is a great movie!");
    expect(movie1.list.length).toBe(1);
  });

  it("should accept a review even if the reviewer is not provided", () => {
    movie1.addReview(5, "This is a great movie!", undefined);
    expect(movie1.list.length).toBe(1);
  });

  it("should return the average rating for a movie", () => {
    movie1.addReview(4, "Great movie!");
    movie1.addReview(3, "Not so great");
    expect(movie1.averageRating()).toBe(3.5);
  });

  it("should throw an error if the rating is not between 1 and 5", () => {
    expect(() => movie1.addReview(0, "Non sense!")).toThrow();
    expect(() => movie1.addReview(6, "Great movie!")).toThrow();
  });

  it("should return a report with the number of reviews for each rating", () => {
    movie1.addReview(4, "Great movie!");
    movie1.addReview(3, "Not so great");
    movie1.addReview(3, "okay");
    movie1.addReview(2, "Meh");
    expect(movie1.generateReport()).toEqual({
      1: 0,
      2: 1,
      3: 2,
      4: 1,
      5: 0,
    });
  });
});
