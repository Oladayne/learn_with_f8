import getMessage from "../house/functions.js";
console.log(getMessage());
// đổi tên thuộc tính bằng as
// có thể import 1 file trong 1 lần nhưng ko thể import theo name trước import default 
import * as functions from "../house/functions.js";
const { User, customer } = functions;
console.log(new User());
console.log(customer);
