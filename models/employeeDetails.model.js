module.exports = (mongoose) => {
  const EmpDetails = mongoose.model(
    "employees",
    mongoose.Schema(
      {
        role: String,
        firstName: String,
        lastName: String,
        email: String,
        mobile: Number,
        address: String,
        password: String
      },
      { timestamps: true }
    )
  );

  return EmpDetails;
};
