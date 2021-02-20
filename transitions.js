const router = require("express").Router();
const Transition = require("../Server Side/Model/transition");

router.get("/", async (req, res) => {
  try {
    const transitions = await Transition.find();
    res.json(transitions);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const transition = new Transition({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    transfer_balance: req.body.transfer_balance,
  });
  try {
    const savedTransition = await transition.save();
    res.json(savedTransition);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
