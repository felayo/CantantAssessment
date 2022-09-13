const mongoose = require("mongoose");
const GUID = require("mongoose-guid")(mongoose);

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: GUID.type,
      default: GUID.value,
    },
    firstName: {
      type: String,
      maxlength: 100,
    },
    lastName: {
      type: String,
      maxlength: 100,
    },
    accountId: {
      type: GUID.type,
      default: GUID.value,
    },
  },
  { id: false }
);

userSchema.set("toObject", { getters: true });
userSchema.set("toJSON", { getters: true });

mongoose.model("User", userSchema);
