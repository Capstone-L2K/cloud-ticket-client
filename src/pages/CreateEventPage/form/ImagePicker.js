import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import ImageUploadSrc from "../../../assets/images/image-upload.png";
import SvgIcon from "../../../components/SvgIcon";
import styled from "styled-components";
import ReloadIconSrc from "../../../assets/icons/reload.svg";
import TrashIconSrc from "../../../assets/icons/trash.svg";

export default function ImagePicker({ images, setImages }) {
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const uploadImage = images?.length >= 1 ? true : false;

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={["jpg", "png"]}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <ImageWrapper>
          {uploadImage ? (
            <ImageItem>
              <img
                src={images[0].data_url}
                alt="event-image"
                width="100%"
                height="auto"
              />
              <Row>
                <SvgIcon
                  src={ReloadIconSrc}
                  size={"24px"}
                  onClick={() => onImageUpdate(0)}
                />
                <SvgIcon
                  src={TrashIconSrc}
                  size={"24px"}
                  onClick={() => onImageRemove(0)}
                />
              </Row>
            </ImageItem>
          ) : (
            <img
              src={ImageUploadSrc}
              width="100%"
              height="auto"
              style={{ cursor: "pointer" }}
              {...dragProps}
              onClick={onImageUpload}
            />
          )}
          &nbsp;
        </ImageWrapper>
      )}
    </ImageUploading>
  );
}

const ImageWrapper = styled.div``;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
