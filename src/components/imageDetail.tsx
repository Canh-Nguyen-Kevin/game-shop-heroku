import React, { useState } from "react";
import { Image } from "antd";
import { ImageDetailSkeleton } from "./skeleton";

const ImageDetail = ({ item, isLoading }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      {isLoading ? (
        <ImageDetailSkeleton />
      ) : (
        <>
          <div style={{ marginBottom: 20 }}>
            <Image
              src={`${item.img[index]}`}
              alt={item.name}
              style={{
                width: "100%",
                borderRadius: 5,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
            }}
          >
            {item.img.map((item: String, index: number) => {
              return (
                <div className="smallImg" tabIndex={1}>
                  <img
                    src={`${item}`}
                    alt={"images"}
                    key={index}
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: 5,
                      objectFit: "fill",
                      padding: 0,
                    }}
                    onMouseEnter={() => setIndex(index)}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ImageDetail;
