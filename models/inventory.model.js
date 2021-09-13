module.exports = mongoose => {
    const Inventory = mongoose.model(
        "inventory",
        mongoose.Schema(
            {
                item_id: {type:String,required:true},
                item_name: String,
                supplier_name: String,
                supplier_email: {type:String,required:true},
                supplier_contact: {type:String,required:true},
                purchase_price: Number,
                registered_date: String,
                type_medicine: String
            },
            { timestamps: true }
        )
    );

    return Inventory;
};