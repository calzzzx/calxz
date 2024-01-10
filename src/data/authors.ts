export interface Props {
    name: string;
    slug: string;
    image: string;
    bio: string;
  }
  
  export type Author = Props;
  
  export const authors: Props[] = [
    {
      name: "mario Sanchez",
      slug: "mario-sanchez",
      image: "./src/assets/authors/mario.jpg",
      bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.",
    }
  ];