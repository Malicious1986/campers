import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useAppDispatch } from "../../hooks/storeHooks";
import {
  fetchCampers,
  selectIsDone,
  selectCampers,
  selectIsLoading,
} from "../../store/slices/campersSlice";
import { useSelector } from "react-redux";
import { CamperItem } from "../../views/camper-item/CamperItem";
import { Container } from "../../components/Container";
import Filters from "./templates/Filters";

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isDone = useSelector(selectIsDone);

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(fetchCampers({ page: currentPage, limit: 4 }));
  }, [currentPage, dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <Container className="mx-auto my-12 grid grid-cols-[360px_1fr] max-w-[1440px] gap-3">
        <Filters />
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
      </Container>
    </>
  );
};
