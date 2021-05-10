exports.deleteAll = (ref, res) => {

  ref.onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      ref.doc(doc.id).delete();
    });
  });

  // delete by using batch
  // var batch = db.batch();
  // ref.listDocuments().then((doc) => {
  //   doc.map((val) => val.delete());
  //   batch.commit();
  // });

  ref
    .get()
    .then(() => {
      return res.status(200).json({message: "All documents are deleted"});
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};
