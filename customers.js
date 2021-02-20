const router = require("express").Router();
const Customers = require("./Model/customer");

router.get("/", async (req, res) => {
  try {
    const customers = await Customers.find();
    res.json(customers);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const customer = new Customers({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
  });
  try {
    const savedCustomer = await customer.save();
    res.json(savedCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
