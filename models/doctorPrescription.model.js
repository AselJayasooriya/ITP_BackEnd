module.exports = mongoose => {
    const Prescription = mongoose.model(
        "prescription",
        mongoose.Schema(
            {
                dId: String,
                dPName: String,
                dPDignosis: String,
                dMed1: String,
                dDose1: String,
                dMed2: String,
                dDose2: String
            },
            { timestamps: true }
        )
    );
    return Prescription;
};