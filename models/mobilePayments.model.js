module.exports = (mongoose) => {
  const Mobile = mongoose.model(
    "mobilePayment",
    mongoose.Schema(
      {
        name: String,
        phonenumber: String,
       
      },
      { timestamps: true }
    )
  );

  return Mobile;
};
