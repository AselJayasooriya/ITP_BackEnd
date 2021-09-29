module.exports = mongoose => {
    const MdRequest = mongoose.model(
        "mdrequest",
        mongoose.Schema(
            {
               drugid:{
               type:String,
               required:true
            },
               medicinename:{
                   type:String,
                   required:true},

                mqty:{
                    type:String,
                    required:true},
            },
            { timestamps: true }
        )
    );

    return MdRequest;
};