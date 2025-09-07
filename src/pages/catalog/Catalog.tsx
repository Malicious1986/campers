import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  fetchCampers,
  resetCampers,
  selectCampers,
  selectError,
  selectIsDone,
  selectIsLoading,
  setCurrentPage,
} from "../../store/slices/campersSlice";
import { resetFilters } from "../../store/slices/filterSlice";
import { CamperItem } from "../../views/camper-item/CamperItem";
import Filters from "./templates/Filters";

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const campers = useAppSelector(selectCampers);
  const isLoading = useAppSelector(selectIsLoading);
  const isDone = useAppSelector(selectIsDone);
  const isError = useAppSelector(selectError);

  const handleLoadMoreClick = () => {
    dispatch(setCurrentPage());
    dispatch(fetchCampers({}));
  };
  const onReset = () => {
    dispatch(resetFilters());
    dispatch(fetchCampers({}));
  };

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <Container className="mx-auto my-12 grid grid-cols-[360px_1fr] max-w-[1440px] gap-16">
        <Filters />
        {isError ? (
          <div className="text-red-500 text-3xl flex flex-col gap-2 items-center justify-center h-[calc(100vh-73px)] w-full">
            <p>Error loading campers</p>
            <Button onClick={onReset}>Reset</Button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {campers.length
              ? campers.map((camper) => (
                  <CamperItem key={camper.id} {...camper} />
                ))
              : null}
            {campers.length && !isDone ? (
              <Button
                className="mt-10 self-center"
                onClick={handleLoadMoreClick}
                appearance="secondary"
              >
                Load More
              </Button>
            ) : null}
          </div>
        )}
      </Container>
    </>
  );
};
