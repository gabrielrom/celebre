import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import RealStateDetailsView  from "./RealStateDetailsView";
import RealStateDetailsSkeleton from "../components/Skeleton/RealStateDetailsSkeleton";

export function RealStateDetailsPage() {
  const { realState } = useLoaderData();

  return (
    <Suspense fallback={<RealStateDetailsSkeleton />}>
      <Await resolve={realState}>
        {(resolvedRealState) => (
          <RealStateDetailsView realState={resolvedRealState} />
        )}
      </Await>
    </Suspense>
  );
}
