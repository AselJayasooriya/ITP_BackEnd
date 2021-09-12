module.exports = mongoose => {
    const Note = mongoose.model(
        "note",
        mongoose.Schema(
            {
                pNoteId: Number,
                pNoteName: String,
                pNoteMessage: String,
            },
            { timestamps: true }
        )
    );
    return Note;
};