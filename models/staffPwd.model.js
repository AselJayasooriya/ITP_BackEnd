module.exports = (mongoose) => {
    const Password = mongoose.model(
        "password",
      mongoose.Schema(
        {
            role: String,
            email: String,
            password: String
        },
        { timestamps: true }
      )
    );
  
    return Password;
  };