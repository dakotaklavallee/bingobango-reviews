import { GraphQLResolveInfo } from 'graphql';

type User = { id: string };
type Thing = { id: string };
type Review = {
  id: string;
  userId: string;
  thingId: string;
  rating: number;
  reviewText?: string;
  createdAt?: string;
  imageUrl?: string;
};

const reviews: Review[] = [
  {
    id: 'r1',
    userId: 'u1',
    thingId: 't1',
    rating: 5,
    reviewText: 'Loved it!',
    createdAt: '2025-01-01',
  },
];

export const resolvers = {
  Review: {
    user: (review: Review): User => ({
      id: review.userId,
    }),
    thing: (review: Review): Thing => ({
      id: review.thingId,
    }),
  },

  User: {
    reviews: (user: User): Review[] => reviews.filter((r) => r.userId === user.id),
  },

  Thing: {
    reviews: (thing: Thing): Review[] => reviews.filter((r) => r.thingId === thing.id),
  },

  Query: {
    reviews: (): Review[] => reviews,
  },
};