declare const _default: {
    User: import("mongoose").Model<import("./Users/Users.interface").default, {}, {}, {}, any>;
    Board: import("mongoose").Model<import("./Boards/Board.interface").default, {}, {}, {}, any>;
    Task: import("mongoose").Model<import("./Tasks/Tasks.interface").default, {}, {}, {}, any>;
};
export default _default;
