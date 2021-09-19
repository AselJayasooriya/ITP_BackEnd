module.exports = (mongoose) => {
  const Refund = mongoose.model(
    "refund",
    mongoose.Schema(
      {
        paymentid: String,
        paragraph: String,
      },
      { timestamps: true }
    )
  );

  return Refund;
};
