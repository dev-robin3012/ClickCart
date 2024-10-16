import ActiveLink from "@/components/ui/active-link";
import { useCollectionsQuery } from "@/framework/basic-rest/collection/get-all-collection";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/router";

export const CollectionFilters: React.FC = () => {
  const { data, isLoading } = useCollectionsQuery({
    limit: 15,
  });

  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;

  const currentPath = router.asPath.split("/").slice(2, 3).join();

  const items = data?.collections.data;

  return (
    <div className="pt-1">
      <div className="block border-b border-gray-300 pb-5 mb-7">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="font-semibold text-heading text-xl md:text-2xl">
            Collection List
          </h2>
        </div>
      </div>
      <div className="block pb-7">
        <ul className="mt-2 flex flex-col space-y-5">
          {items?.map((item: any) => (
            <li key={item.id} className="text-sm lg:text-[15px] cursor-pointer">
              <ActiveLink
                href={`${ROUTES.COLLECTIONS}/${item.slug}`}
                className={`block transition duration-300 ease-in-out text-heading hover:font-semibold py-0.5 ${
                  currentPath === item.slug && "font-semibold"
                }`}
              >
                <span>{item.name}</span>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
