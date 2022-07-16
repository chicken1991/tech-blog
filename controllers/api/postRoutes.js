const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  console.log("Start of post route");
  console.log(req.body);
  try {
    // console.log("new post with user_id of " + user_id);
    const newPost = await Post.create({
      ...req.body,
      // user_id: req.session.user_id,
    });
    // console.log(newPost);
    res.status(200);
    // console.status(200);
  } catch (err) {
    res.status(400).json(err);
    console.log(" ERRORRRR from postRoutes.js");
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
