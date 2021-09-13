module.exports = mongoose => {
    const Note = mongoose.model(
        "note",
        mongoose.Schema(
            {
                pNoteId: {
                    type: Number,
                    required: true
                },
                pNoteName: {
                    type: String,
                    required: true
                },
                pNoteMessage: {
                    type: String,
                    required: true
                }
            },
            { timestamps: true }
        )
    );
    return Note;
};