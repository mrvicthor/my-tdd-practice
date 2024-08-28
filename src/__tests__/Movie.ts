import Movie, { ReviewProps } from "../Movie/Movie";

describe("Movie", () => {
  let movie: Movie;
  beforeEach(() => {
    movie = new Movie("", 0, "", "");
  });
  it("should return Anonymous if no name is given", () => {
    const movie = new Movie("The Abyss", 1, "Boring movie");
    expect(movie.getReviewer()).toBe("Anonymous");
  });

  it("should return the given name if given", () => {
    const movie = new Movie("The Abyss", 1, "Boring movie", "John Doe");
    expect(movie.getReviewer()).toBe("John Doe");
  });

  it("should add a movie with review", () => {
    const item: ReviewProps = {
      title: "Superman",
      rating: 2,
      text: "Super Hero",
      reviewer: "Victor",
    };

    movie.addReview(item);

    const item2: ReviewProps = {
      title: "X-Men",
      rating: 3,
      text: "Marvel Studio",
      reviewer: "James",
    };

    movie.addReview(item2);

    expect(movie.list.length).toBe(2);
  });

  it("should calculate average rating for a movie", () => {
    const item: ReviewProps = {
      title: "The Flash",
      rating: 3,
      text: "Fastest Man",
      reviewer: "John",
    };

    movie.addReview(item);

    const item1: ReviewProps = {
      title: "The Flash",
      rating: 4,
      text: "Very fast",
      reviewer: "Maxwell",
    };

    movie.addReview(item1);

    const item2: ReviewProps = {
      title: "Spiderman",
      rating: 5,
      text: "Spidey",
      reviewer: "Zuby",
    };

    movie.addReview(item2);
    expect(movie.calculateAverageRating("The Flash")).toBe(3.5);
  });
});
