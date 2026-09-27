import type { ConnectionKind, Member } from "../api/types";

/** Fictional community members for the demo. */
export const MEMBERS: Member[] = [
  {
    id: "m1",
    name: "Aria Chen",
    handle: "aria",
    bio: "Data journalist. Maps, charts, coffee.",
    interests: ["science", "technology", "world"],
  },
  {
    id: "m2",
    name: "Mateo Silva",
    handle: "mateo",
    bio: "Weekend footballer, weekday economist.",
    interests: ["sports", "business"],
  },
  {
    id: "m3",
    name: "Zara Ahmed",
    handle: "zara",
    bio: "Public health nurse. Night-shift reader.",
    interests: ["health", "local"],
  },
  {
    id: "m4",
    name: "Leo Fischer",
    handle: "leo",
    bio: "Film buff and amateur composer.",
    interests: ["entertainment", "science"],
  },
  {
    id: "m5",
    name: "Naomi Park",
    handle: "naomi",
    bio: "Civic tech volunteer.",
    interests: ["politics", "technology", "local"],
  },
  {
    id: "m6",
    name: "Samir Haddad",
    handle: "samir",
    bio: "Rail enthusiast, climate optimist.",
    interests: ["world", "business"],
  },
  {
    id: "m7",
    name: "Freya Olsen",
    handle: "freya",
    bio: "Climber. Coach. Occasional writer.",
    interests: ["sports", "health"],
  },
  {
    id: "m8",
    name: "Jules Moreau",
    handle: "jules",
    bio: "Bookseller and part-time baker.",
    interests: ["business", "entertainment", "local"],
  },
  {
    id: "m9",
    name: "Kai Nakamura",
    handle: "kai",
    bio: "Hardware hacker. Builds tiny satellites.",
    interests: ["technology", "science"],
  },
  {
    id: "m10",
    name: "Rin Takeda",
    handle: "rin",
    bio: "Policy student, debate captain.",
    interests: ["politics", "world"],
  },
];

export const memberById = (id: string) => MEMBERS.find((m) => m.id === id);

export const SEED_CONNECTIONS: Record<ConnectionKind, string[]> = {
  friends: ["m1", "m3", "m6"],
  followers: ["m1", "m2", "m4", "m8"],
  requests: ["m5", "m9"],
  suggestions: ["m7", "m10", "m2"],
  blocked: [],
};

export interface SeedPost {
  id: string;
  authorId: string;
  articleId: string;
  comment: string;
  age: number;
  likes: number;
}

export const SEED_POSTS: SeedPost[] = [
  {
    id: "p-1",
    authorId: "m1",
    articleId: "sc1",
    comment:
      "Reanalysing old data and finding 1,200 candidates is such a good argument for open archives.",
    age: 40,
    likes: 24,
  },
  {
    id: "p-2",
    authorId: "m6",
    articleId: "w2",
    comment: "Booking this for the spring. Sleeper trains are the best way to travel.",
    age: 120,
    likes: 17,
  },
  {
    id: "p-3",
    authorId: "m3",
    articleId: "h2",
    comment: "Seeing this first-hand: evening hours change everything for shift workers.",
    age: 260,
    likes: 31,
  },
  {
    id: "p-4",
    authorId: "m8",
    articleId: "b1",
    comment: "Can confirm the café is keeping us afloat ☕📚",
    age: 480,
    likes: 12,
  },
  {
    id: "p-5",
    authorId: "m9",
    articleId: "t4",
    comment: "Student CubeSats are how a lot of us got into space hardware. Congrats to the team!",
    age: 900,
    likes: 42,
  },
  {
    id: "p-6",
    authorId: "m4",
    articleId: "e1",
    comment: "Live scores for silent films are pure magic. Who's going?",
    age: 1400,
    likes: 9,
  },
];
