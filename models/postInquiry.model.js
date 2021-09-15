module.exports = mongoose => {
    const Inquiry = mongoose.model(
        "inquiry",
        mongoose.Schema(
            {
               title:{
                   type:String,
                   required: true
                },
               message:{
                   type:String,
                   required: true
                }
            },
            { timestamps: true }
        )
    );

    return Inquiry;
};