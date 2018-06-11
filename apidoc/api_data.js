define({ "api": [
  {
    "group": "Emit_Events",
    "version": "1.0.0",
    "type": "post",
    "url": "Send",
    "title": "From Front End.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "setUser",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "getAllTodoList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "getAllTodoItems",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "getAllChangelog",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "undoChangelog",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createNewTodoList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createNewTodoItem",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deleteTodoItem",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "editListItem",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "broadcastMessage",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Object-Sent:",
          "content": "//--setUser\n       obj = {\n            authToken: string,\n            userId : string\n        }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//--get all todo list\n        obj = {\n                       \n                        userId: string,\n                        \n              }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- Get all todo items\n        obj = {\n                        userId: string,\n                        todoListId : string                       \n              }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- Get all change log items\n        obj = {\n                        userId: string,\n                        todoListId : string                       \n              }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- UNDO change log items\n        obj = {\n                        userId: string,\n                        todoListId : string                       \n              }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- CREATE NEW TODO LIST \n       let data = {\n            userId: this.userId,\n             userName: this.userName,\n             todoListTitle: this.todoListTitle\n            }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- CREATE TODO ITEM \n        let data = {\n                 userId: this.userId,\n                 userName: this.userName,\n                 todoListId : this.todoListId,\n                 itemTitle: this.todoItemTitle,\n                 itemDetail: this.todoItemDetail\n     \n    }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- DELETE TODO ITEM \n      let data = {\n                 userId: this.userId,\n                 userName: this.userName,\n                 todoListId : this.todoListId,\n                 itemTitle: this.todoItemTitle,\n                 itemDetail: this.todoItemDetail,\n                 itemId : toBeDeletedItemId\n    }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- EDIT TODO ITEM \n         let data = {\n      userId: this.userId,\n      userName: this.userName,\n      todoListId: this.todoListId,\n      itemId: this.itemId,\n      itemTitle: this.itemTitle,\n      itemDetail: this.itemDetail,\n      prevItemTitle: this.prevItemTitle,\n      prevItemDetail: this.prevItemDetail\n    }",
          "type": "object"
        },
        {
          "title": "Object-Send:",
          "content": "//-- BROADCAST ITEM CHANGE\n        let data = {\n      broadcastMessageBy: this.userId,\n      broadcastMessageByName: this.userName,\n      broadcastMessageFor: array of  friendsObj = {\n          messageForUserId: friendId,\n          messageForUsername: friendName\n        },\n      broadcastMessage: this.friendchangeitems,\n      //to be used when we edit,add,delete items and undo changelog\n      //ADD,DELETE,EDIT,UNDO\n      broadcastMessageListId: this.todoListId,\n      broadcastMessageItemId: \"\",\n      broadcastMessageActionType: type\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Emit_Events",
    "name": "PostSend"
  },
  {
    "group": "Friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/acceptFriendRequest",
    "title": "Accept Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>AuthToken of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId of the receiver. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Friend request accepted,\n    \"status\": 200,\n    \"data\": {\n        nOk: number,\n        modified : 1\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Friends",
    "name": "PostApiV1UsersAcceptfriendrequest"
  },
  {
    "group": "Friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/addToFriendRequest",
    "title": "Add to Friend Request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>AuthToken of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId of the receiver. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Friend Request created\",\n    \"status\": 200,\n    \"data\": {\n        \"frienRequestId\": String\n        \"senderId\": String\n        \"receiverId\" : String\n        \"status\": number\n        \"dateCreated\":number\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Friends",
    "name": "PostApiV1UsersAddtofriendrequest"
  },
  {
    "group": "Friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/areFriends",
    "title": "Check If Friends.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>AuthToken of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId of the receiver. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Both users are friends\",\n    \"status\": 200,\n    \"data\":Friend Request data\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Friends",
    "name": "PostApiV1UsersArefriends"
  },
  {
    "group": "Friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getFriendRequest",
    "title": "Get all Friend Request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>AuthToken of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>userId of the sender. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Friend Request Listed\",\n    \"status\": 200,\n    \"data\": Array of friend request\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Friends",
    "name": "PostApiV1UsersGetfriendrequest"
  },
  {
    "group": "Listen_Events",
    "version": "1.0.0",
    "type": "post",
    "url": "Listen",
    "title": "From server.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verifyUser",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "errorEvent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "onlineUserList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "broadcastMessage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "disconnect",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "generalTodoListAction",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Object-Received:",
          "content": "//--verifyUser\n       obj = {\n            message: 'Socket Connected',\n        }",
          "type": "object"
        },
        {
          "title": "Object-Received:",
          "content": "//--errorEvent\n       \"a message string\"",
          "type": "object"
        },
        {
          "title": "Object-Received:",
          "content": "//--onlineUserList\n        obj = {\n                        message: string,\n                        sendBy: string,\n                        list: [{ userId: currentUser.userId, fullName: fullName }]\n         }",
          "type": "object"
        },
        {
          "title": "Object-Received:",
          "content": "//--BROADCAST MESSAGE\n           let data = {\n      broadcastMessageBy: this.userId,\n      broadcastMessageByName: this.userName,\n      broadcastMessageFor: array of  friendsObj = {\n          messageForUserId: friendId,\n          messageForUsername: friendName\n        },\n      broadcastMessage: this.friendchangeitems,\n      //to be used when we edit,add,delete items and undo changelog\n      //ADD,DELETE,EDIT,UNDO\n      broadcastMessageListId: this.todoListId,\n      broadcastMessageItemId: \"\",\n      broadcastMessageActionType: type\n    }",
          "type": "object"
        },
        {
          "title": "Object-Received:",
          "content": "//--DISCONNECTED SOCKET",
          "type": "object"
        },
        {
          "title": "Object-Received:",
          "content": "//--IMPORTANT LISTENER FOR ALL ACTION WITH TODO ITEMS OR LIST OR CHANGELOG\n        let data = {\n                        type : \"todoListCreated\",\n                        message : err\n                    }\n        socket.emit('generalTodoListAction', data);\n\n        let data = {\n                        type : \"todoListCreated\",\n                        message : result\n                    }\n        socket.emit('generalTodoListAction', data);\n\n        let data = {\n                        type : \"allTodoList\",\n                        message : err\n                    }\n        socket.emit('generalTodoListAction', data);\n\n        let data = {\n                        type : \"allTodoList\",\n                        message : result\n                    }\n        socket.emit('generalTodoListAction', data);\n\n        let data = {\n                        type : \"todoListDeleted\",\n                        message : err\n                    }\n        socket.emit('generalTodoListAction', data);\n        \n         let data = {\n                        type : \"todoListDeleted\",\n                        message : result\n                    }\n        socket.emit('generalTodoListAction', data);\n\n         let data = {\n                        type : \"todoItemCreated\",\n                        message : err\n                    }\n                    socket.emit('generalTodoListAction', data);\n        let data = {\n                        type : \"todoItemCreated\",\n                        message : result\n                    }\n                    socket.emit('generalTodoListAction', data);\n        let data = {\n                        type : \"todoItemDeleted\",\n                        message : err\n                    }\n                    socket.emit('generalTodoListAction', data);\n        let data = {\n                        type : \"todoItemDeleted\",\n                        message : result\n                    }\n                    socket.emit('generalTodoListAction', data);\n        let data = {\n                        type : \"allTodoItems\",\n                        message : err\n                    }\n                    socket.emit('generalTodoListAction', data);\n         let data = {\n                        type : \"allTodoItems\",\n                        message : result\n                    }\n                    socket.emit('generalTodoListAction', data);\n           let data = {\n                        type : \"editListItem\",\n                        message : err\n                    }\n                    socket.emit('generalTodoListAction', data);\n          let data = {\n                        type : \"editListItem\",\n                        message : result\n                    }\n                    socket.emit('generalTodoListAction', data);",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Listen_Events",
    "name": "PostListen"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all users",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>AuthToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"All User Details Found\",\n \"status\": 200,\n \"data\": Array of users\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/changepassword",
    "title": "Change Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token generated from forgot password api. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user that he wants to change. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Password changed for uday@gmail.com\"\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersChangepassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotpassword",
    "title": "Forgot Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Use",
            "description": "<p>the url on your mail as authentication to change password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Mail sent\"\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"countryCode\" : number\n        \"phoneNumber\": 2234435524,\n        \"emailId\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Create New  User",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>name of the suer passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>category of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phoneNUmber",
            "description": "<p>category of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"User Created.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\t_id: \"string\",\n                        firstName: \"string\",\n                        lastName: \"string\",\n                        emailId: \"string\",\n                        countryCode : \"number\",\n                        phoneNumber: \"number\",\n                        userId:\"string\",\n                        createdOn:\"string\"\n                  __v: number\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  }
] });
