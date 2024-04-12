import { Loader } from "@/components/Loader";
import { Modal } from "@/components/Modal";
import { RenderStory } from "@/components/RenderStory";
import { useGetNewsDetails } from "@/query/hooks/useGetNewsDetails";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const { selectedItem } = location.state as { selectedItem: IHit };

  const { data, isLoading, isError } = useGetNewsDetails(
    selectedItem.objectID as string
  );

  if (!selectedItem.objectID) {
    onClose();
  }

  return (
    <Modal
      headerTitle={selectedItem.title}
      className="w-full md:w-8/12 ml-auto"
      show={true}
      onClose={onClose}
    >
      {isLoading && <Loader />}
      {isError && <p>Error in loading data...</p>}
      {!isLoading && !isError && data?.data && (
        <RenderStory story={data?.data} />
      )}
    </Modal>
  );
};

export default ItemDetails;
