import React, { useState } from "react";
import { Pagination, Button, Rate, Input, Row, Col } from "antd";
import {
  SendOutlined,
  AccountBookOutlined,
  DeliveredProcedureOutlined,
  DropboxOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { selectUserName } from "../features/counter/userSlice";

import { showForm } from "../features/counter/formSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import SimilarProduct from "./similarProduct";

const { TextArea } = Input;
export interface commentsArr {
  name: string;
  content: string;
  rate: number;
  date: string;
}

const CommentDetail = ({ item }: any) => {
  const [star, setStar] = useState(5);
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(1);
  const [commentsArr, setCommentsArr] = useState<commentsArr[]>([]);
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();

  const handleComment = () => {
    if (!userName) {
      alert("please login to use this function");
      dispatch(showForm(true));
      return;
    }
    if (userName && comment) {
      commentsArr.unshift({
        name: userName,
        content: comment,
        rate: star,
        date: new Date().toLocaleString(),
      });
    }
    setCommentsArr([...commentsArr]);
    setComment("");
    setStar(5);
  };
  return (
    <div>
      <Row justify="space-between" gutter={10}>
        <Col
          className="gutter-row"
          lg={{ span: 18 }}
          md={{ span: 18 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <div className="info-container">
            <div className="detail">
              <h1>
                <AccountBookOutlined className="icon" />
                Product's Details
              </h1>
              <p>
                <strong>Type:</strong>
                {item.type}
              </p>
              <p>
                <strong>Feature:</strong>
                {item.detail[0]}
              </p>
              <p>
                <strong>Advertise:</strong>
                {item.detail[1]}
              </p>
            </div>
            <div className="detail">
              <h1 className="icon">
                <DeliveredProcedureOutlined className="icon" />
                Free Ship for all products at Meta Gaming.
              </h1>
              <h1>
                <DropboxOutlined className="icon" /> Product's information
              </h1>
              <p>
                <strong>Description:</strong>
                {item.description}
              </p>
              <p>
                <strong>Noted:</strong>
                {item.information[0]}
              </p>
              <p>
                <strong>Product Information:</strong>
                {item.information[1]}
              </p>
            </div>

            <div>
              <strong style={{ fontSize: "1.5rem" }}>Rating:</strong>
              <span>
                <Rate
                  allowClear={true}
                  value={star}
                  onChange={(value) => setStar(value)}
                />
              </span>
              <h2>Comment:</h2>

              <TextArea
                showCount
                maxLength={400}
                style={{ height: 120 }}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
              <Button
                type="primary"
                danger
                icon={<SendOutlined />}
                onClick={handleComment}
                style={{ marginTop: 20 }}
              >
                Send comment
              </Button>
            </div>
            <div className="comment-container">
              {commentsArr
                ? commentsArr
                    .slice(3 * (page - 1), 3 * page - 1)
                    .map((comment) => {
                      return (
                        <div className="comment">
                          <img
                            src="/images/game.png"
                            alt="image"
                            className="avatar"
                          />
                          <strong>{comment.name}</strong>
                          <Rate
                            value={comment.rate}
                            disabled
                            style={{ marginLeft: 10 }}
                          />
                          <div style={{ marginLeft: 50 }}>
                            <p>{comment.content}</p>
                            <p>{comment.date}</p>
                            <div
                              style={{
                                width: 60,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <LikeOutlined />
                              <span>Reply</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                : undefined}

              <div className="comment">
                <img src="/images/game.png" alt="image" className="avatar" />
                <strong>Joe Biden</strong>
                <Rate value={5} disabled style={{ marginLeft: 10 }} />
                <div style={{ marginLeft: 50 }}>
                  <p>02-01-2022</p>
                  <p>This product is wonderful!</p>
                  <div
                    style={{
                      width: 60,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <LikeOutlined />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <img src="/images/game.png" alt="image" className="avatar" />
                <strong>Donald Trump</strong>
                <Rate value={5} disabled style={{ marginLeft: 10 }} />
                <div style={{ marginLeft: 50 }}>
                  <p>02-01-2022</p>
                  <p>This product is wonderful!</p>
                  <div
                    style={{
                      width: 60,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <LikeOutlined />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: 20,
                  marginTop: 20,
                }}
              >
                <Pagination
                  defaultCurrent={page}
                  onChange={(page) => setPage(page)}
                  total={50}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <SimilarProduct item={item} />
        </Col>
      </Row>
    </div>
  );
};

export default CommentDetail;
