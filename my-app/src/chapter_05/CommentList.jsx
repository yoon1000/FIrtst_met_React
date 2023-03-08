import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "양지윤",
        comment: "안녕하세요, 댓글입니다.^^",
    },
    {
        name: "양지투",
        comment: "리액트 재밌어요~",
    },
    {
        name: "양지삼",
        comment: "저도 리액트 배워보고싶어요!",
    },
];

function CommentList(props) {
    return (
        <div>{comments.map((comment) => {
            return (
            <Comment name={comment.name} comment={comment.comment} />
            );
        })}
        </div>
    );
}

export default CommentList;