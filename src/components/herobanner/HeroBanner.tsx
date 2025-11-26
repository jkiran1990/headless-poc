import { apolloServer } from "@/lib/apolloServer";
import { GET_HERO_BANNER } from "@/graphql/heroBanner";

export default async function HeroBannerSection() {
  const { data } = await apolloServer.query({ query: GET_HERO_BANNER });
  const banner = data.heroBanner;

  return (
    <div>
      <h1>{banner.title}</h1>
      <p>{banner.description}</p>
      <img src={banner.imageUrl} />
    </div>
  );
}
