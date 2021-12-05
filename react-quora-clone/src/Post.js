import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post_info">
        <h5>유저 아이디</h5>
        <small>작성시간</small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>질문내용 입니다.</p>
          <button className="post_btnAnwser">답변하기</button>
        </div>
        <div className="post_answer">
          <p>답변입니다.</p>
        </div>
      </div>

      <div className="post_footer">
        <div className="post_footerAction">
          <span>arrowUpmardOutlined</span>
          <span>arrowDownwardOutlined</span>
        </div>
        <span>RepeatOneOutlined</span>
        <span>ChatBubbleOutlineOutlined</span>
        <div className="post_footerRight">
          <span>shareOutlined</span>
          <span>MoreHorizOutlineds</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
