module.exports = mongoose => {
    const Channell = mongoose.model(
        "channell",
        mongoose.Schema(
            {
               fullname:String,
               nic:String,
               email:String,
               mobile:Number,
               age:Number,
              
                
            },
            { timestamps: true }
        )
    );

    return Channell;
};