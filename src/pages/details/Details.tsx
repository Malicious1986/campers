import { useEffect, useState } from "react";
import { useParams } from "react-router";

import CamperHeaderDetails from "../../components/camper-header-details/CamperHeaderDetails";
import { Container } from "../../components/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  getCamperById,
  selectCamper,
  selectIsLoading,
} from "../../store/slices/camperSlice";
import BookForm from "./templates/BookForm";
import FeaturesDetails from "./templates/FeaturesDetails";
import Reviews from "./templates/Reviews";
enum Tab {
  Features,
  Reviews,
}
export const Details = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(Tab.Features);
  const camper = useAppSelector(selectCamper);
  const isLoading = useAppSelector(selectIsLoading);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(getCamperById(id!));
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {camper && (
        <Container className="flex flex-col max-w-[1440px] mx-auto my-12">
          <div className="flex items-center justify-between text-2xl font-semibold">
            <p>{camper.name}</p>
          </div>
          <CamperHeaderDetails camper={camper} />
          <p className="text-2xl font-semibold mb-2">
            €{camper.price.toFixed(2)}
          </p>
          <ul className="flex gap-12">
            {camper.gallery.map((img, index) => (
              <li className="rounded-xl overflow-hidden" key={index}>
                <img
                  className="h-[320px] w-[292px] object-cover bg-black"
                  src={img.thumb}
                  alt={`camper_image_${index}`}
                />
              </li>
            ))}
          </ul>
          <p className="text-text my-6">{camper.description}</p>
          <ul className="flex gap-10">
            <button
              className={`cursor-pointer ${
                activeTab === Tab.Features ? "font-bold" : ""
              }`}
              onClick={() => handleTabChange(Tab.Features)}
            >
              Features
            </button>
            <button
              className={`cursor-pointer ${
                activeTab === Tab.Reviews ? "font-bold" : ""
              }`}
              onClick={() => handleTabChange(Tab.Reviews)}
            >
              Reviews
            </button>
          </ul>
          <hr className="my-11" />
          <div>
            <div className="flex gap-10">
              {activeTab === Tab.Features ? (
                <FeaturesDetails camper={camper} />
              ) : (
                <Reviews camper={camper} />
              )}
              <BookForm />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
