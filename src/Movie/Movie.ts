class Review {
  constructor(
    public rating: number,
    public text: string,
    public reviewer: string = "Anonymous"
  ) {
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
  }
}

export default class Movie {
  private reviews: Review[] = [];
  constructor(public title: string) {}

  get list() {
    return this.reviews;
  }

  addReview(rating: number, text: string, reviewer?: string): void {
    this.reviews.push(new Review(rating, text, reviewer));
  }

  averageRating(): number {
    if (this.reviews.length === 0) {
      return 0;
    }
    return (
      this.reviews.reduce((acc, review) => acc + review.rating, 0) /
      this.reviews.length
    );
  }

  generateReport(): Record<number, number> {
    const report: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.reviews.forEach((review) => {
      report[review.rating]++;
    });
    return report;
  }
}
