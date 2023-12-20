
import userCollection from "../Models/user.js"

export default {
  onCreateUser: async (req, res) => {
    try {
      const { name, age, gender, email, startDate, feesPaid, batchNumber } =
        req.body;
      if (
        !name ||
        !age ||
        !gender ||
        !email ||
        !startDate ||
        !feesPaid ||
        !batchNumber ||
        name == "" ||
        email == "" ||
        startDate == "NaN/undefinedundefined/" ||
        batchNumber == 0
      ) {
        res
          .status(400)
          .json({ message: "Information insufficient", message_id: "0" });
        return;
      } 
      const userData = new userCollection({
        name: name,
        age: age,
        gender: gender,
        email: email,
        startDate: startDate,
        feesPaid: feesPaid,
        batchNumber: batchNumber,
      });
      const user = await userData.save();

      return res.status(200).json({"message":"successfull","data":user,"message_id":"3"});
    } catch (error) {
      console.log(error);
    }
  },
  onGetUserById: async (req,res) =>{
    try {
        // const user = await userCollection.getUserById(req.params.id);
        const user = await userCollection.findById(req.params.id)
        return res.status(200).json({ success: true, user });
      } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, error: error });
      }

  }
};