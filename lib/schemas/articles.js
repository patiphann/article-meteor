Articles.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 50
  },

  content: {
    type: String,
    label: "Content",
  },

  created_by: {
    type: String,
    label: "Create by"
  },

  created_name: {
    type: String,
    label: "Create name"
  },

  createdAt: {
    type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date()};
        } else {
          this.unset();
        }
      }
  },

  updated_by: {
    type: String,
    label: "Updated by",
    denyInsert: true,
    optional: true
  },

  updated_name: {
    type: String,
    label: "Updated name",
    denyInsert: true,
    optional: true
  },
  
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
}));