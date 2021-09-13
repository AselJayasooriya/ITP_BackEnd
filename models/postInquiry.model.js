module.exports = mongoose => {
    const Inquiry = mongoose.model(
        "inquiry",
        mongoose.Schema(
            {
               title:String,
               message:String,
          
            },
            { timestamps: true }
        )
    );

    return Inquiry;
};