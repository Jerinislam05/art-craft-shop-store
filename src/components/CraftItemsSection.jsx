import ArtsCraftsCard from "./ArtsCraftsCard";

const CraftItemsSection = ({ crafts }) => {
  console.log(crafts);

  return (
    <div className="m-20">
      <h2 className="text-3xl font-bold mb-6 text-center font-serif text-red-400">
        Arts and Crafts Items
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crafts.map((craft) => (
          <ArtsCraftsCard key={craft._id} craft={craft}></ArtsCraftsCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItemsSection;
