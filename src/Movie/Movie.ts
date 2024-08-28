export interface ReviewProps {
  title: string;
  rating: number;
  text: string;
  reviewer: string;
}

export default class Movie {
  private reviews: ReviewProps[];
  constructor(
    private readonly title: string,
    private readonly rating: number,
    private readonly text: string,
    private readonly reviewer: string = "Anonymous"
  ) {
    this.reviews = [];
  }

  getReviewer(): string {
    return this.reviewer;
  }

  get list(): ReviewProps[] {
    return this.reviews;
  }

  addReview(item: ReviewProps): void {
    this.reviews = [...this.reviews, item];
  }

  calculateAverageRating(value: string): number {
    const ratings = this.reviews.filter(
      (item: ReviewProps) => item.title === value
    );
    return (
      ratings.reduce((acc: number, item: ReviewProps) => acc + item.rating, 0) /
      ratings.length
    );
  }
}
