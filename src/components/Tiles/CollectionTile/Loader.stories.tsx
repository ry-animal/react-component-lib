import { ComponentMeta } from "@storybook/react";
import { CollectionTileLoader } from "./Loader";

export default {
  component: CollectionTileLoader,
  title: "Components/Tiles/CollectionTile",
} as ComponentMeta<typeof CollectionTileLoader>;

export const Loading = () => (
  <div style={{ maxWidth: 350 }}>
    <CollectionTileLoader />
  </div>
);
