const {db} = require("../admin-db");

exports.replyOnComment = (req, res) => {
  if (req.body.body.trim() === "")
    return res.status(400).json({ comment: "Must not be empty" });

  const newComment = {
    commentId: req.params.commentId,
    screamId: req.scream.screamId,
    userId: req.user.userId,
    body: req.body.body,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl,
    likeReplyCount: 0,
    createdAt: new Date().toISOString(),
  };

  const comment = db.doc(`Comments/${req.params.commentId}`);

  comment
    .get()
    .then((doc) => {
      if (!doc.exists)
        return res.status(404).json({ error: "Comment not found" });
      let likeReplyCount = ++doc.data().likeReplyCount;
      return comment.update({
        likeReplyCount: likeReplyCount,
      });
    })
    .then((comments) => {
      if (!comments.exists)
        return res.status(404).json({ error: "Comment not found" });
      let replyCommentCount = ++comments.data().replyCommentCount;
      return comment.update({replyCommentCount : replyCommentCount})
    })
    .then(() => {
      return db.collection("Comments").add(newComment);
    })
    .then(() => {
      return res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};