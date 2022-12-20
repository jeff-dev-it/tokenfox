import ManagerToken from "../class/Manager";
import { GetDetails, GetUser, GetUUID } from "../func/getter";
import Sign from "../func/sign";
import IsValid, { ValidOrigin } from "../func/verify";
import { Get } from "../utils/hash";


const token = Sign({
    date_expires: 30,
    origin: "*"
}, {
    username: "teste",
    secret: "teste",
    detail: {
        username: "teste"
    }
})

const tk = new ManagerToken(token, "teste");
/**
 * Gera um novo token em cima do antigo
 */
let a = tk.ExpiresAdd(20, "year")

/**
 * Altera o token dentro de tk para o novo token
 */
tk.Refresh(a)