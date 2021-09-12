module.exports = mongoose => {
    const Inventory = mongoose.model(
      "inventory",
      mongoose.Schema(
        {
          item_id: String,
          item_name: String,
          supplier_name: String,
          supplier_email:String,
          supplier_contact:String,
          purchase_price:Number,
          registered_date: Date,
          type_medicine:String
        },
        { timestamps: true }
      )
    );
  
    return Inventory;
  };