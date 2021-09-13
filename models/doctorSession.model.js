module.exports = mongoose => {
    const Session = mongoose.model(
        "session",
        mongoose.Schema(
            {
                doctor_id: String,
                date: String,
                time: String,
                maxAppointments:Number,
                currentAppointments:Number,
            },
            { timestamps: true }
        )
    );

    return Session;
};