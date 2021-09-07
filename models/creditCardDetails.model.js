module.exports = (mongoose) => {
  const Credit = mongoose.model(
    "creditCardPayment",
    mongoose.Schema(
      {
        payment_id: Number,
        name: String,
        email: String,
        date: String,
        amount: Number,
      },
      { timestamps: true }
    )
  );

  return Credit;
};
