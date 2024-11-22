import { useLoaderData } from "react-router-dom";
import ArtsCraftsCard from "./ArtsCraftsCard";
import { useAuth } from "./providers/AuthProviders";

const MyArtCraftList = () => {
  const crafts = useLoaderData();
  const { user } = useAuth();

  const myCrafts = crafts.filter((craft) => craft.user_email === user.email);
  
  return (
    <>
      {myCrafts.map((craft) => (
        <ArtsCraftsCard key={craft._id} craft={craft} />
      ))}
    </>
  );
};

export default MyArtCraftList;