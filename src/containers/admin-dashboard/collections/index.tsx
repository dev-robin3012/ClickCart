import { type FC } from "react";
import CollectionForm from "./collection-form";
import CollectionList from "./collection-list";

const CollectionManagementContents: FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full rounded-lg no-scrollbar overflow-y-auto">
      <CollectionList />
      <CollectionForm />
    </section>
  );
};

export default CollectionManagementContents;
