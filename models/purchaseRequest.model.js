module.exports = mongoose => {
    const MdRequest = mongoose.model(
        "",
        mongoose.Schema(
            {
               drugid:{
                   type:Number,
                   required: true
                },
               medicinename:{
                   type:String,
                   required: true
                },
                mqty:{
                    type:Number,
                    required: true
                 }
            },
            { timestamps: true }
        )
    );

    return MdRequest;
};