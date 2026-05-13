import exp from "express"
import { UserTypeModel } from "../Models/userModel.js"

export const adminRoute = exp.Router()

// block user
adminRoute.put("/block/:userId", async (req, res) => {
  try {
    let uid = req.params.userId
    await UserTypeModel.findByIdAndUpdate(
      uid,
      { isActive: false },
      { new: true }
    )

    res.status(200).json({ message: "User blocked" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// unblock user
adminRoute.put("/unblock/:userId", async (req, res) => {
  try {
    let uid = req.params.userId

    await userModel.findByIdAndUpdate(
      uid,
      { isActive: true },
      { new: true }
    )

    res.status(200).json({ message: "User unblocked" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
