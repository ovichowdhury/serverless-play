exports.createNote = async (event) => {
  console.log("[INFO] Creating a note");
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "A new note created",
    }),
  };
};

exports.updateNote = async (event) => {
  const noteId = event.pathParameters.id;
  console.log("[INFO] Updating a note: ", +noteId);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Updating note ${noteId}`,
    }),
  };
};

exports.deleteNote = async (event) => {
  const noteId = event.pathParameters.id;
  console.log("[INFO] Deleting a note: ", +noteId);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Deleting note ${noteId}`,
    }),
  };
};

exports.getAllNotes = async (event) => {
  console.log("[INFO] fetching all notes");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "List of notes",
    }),
  };
};
