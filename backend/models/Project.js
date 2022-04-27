const { model, Schema } = require("mongoose");

const projectSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    deadline: {
      type: Date,
      default: Date.now()
    },
    client: {
      type: String,
      trim: true
    },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    collaborators: [{ type: Schema.Types.ObjectId, ref: "User" }]

  },
  { timestamps: true }
);

module.exports = model("Project", projectSchema);
