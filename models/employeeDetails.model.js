module.exports = (mongoose) => {
    const EmpDetails = mongoose.model(
        "empform",
      mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            email: String,
            mobile: Number,
            address: String
        },
        { timestamps: true }
      )
    );
  
    return EmpDetails;
  };