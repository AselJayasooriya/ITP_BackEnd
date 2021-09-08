module.exports = (mongoose) => {
  const Credit = mongoose.model(
    "creditCardPayment",
    mongoose.Schema(
      {
        payment_id: String,
        name: String,
        email: String,
        date: String,
        amount: String,
      },
      { timestamps: true }
    )
  );

  return Credit;
};
