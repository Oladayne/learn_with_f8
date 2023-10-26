import { client } from "./client.js"
import { config } from "./config.js"
const { SERVER_API_AUTH } = config;
client.setUrl(SERVER_API_AUTH);
console.log(client.serverApi);
const app = {
    root: document.querySelector("#root"),
    isLogin: function () {
        return localStorage.getItem("login_token") ? true : false;
    },
    render: function () {
        let html;
        if (this.isLogin()) {
            html=`<div class="container py-3">
            <h2 class="text-center">Chao mừng bạn đã quay trở lại</h2>
            <ul class="profile list-unstyled d-flex gap-3">
                <li>chào bạn: <span class="name">Hoàng An</span></li>
                <li><a href="#" class="text-decoration-none" >Đăng Xuất</a></li>
            </ul>
        </div>`
        } else {
            html=` <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-8 col-lg-6">
                    <h2 class="text-center">Đăng Nhập</h2>
                    <form action="" class="login">
                        <div class="mb-3">
                            <label for="">Email</label>
                            <input type="email" name="email" class="form-control email" placeholder="Email..."required/>
                        </div>
                        <div class="mb-3">
                            <label for="">Password</label>
                            <input type="password" name="password" class="form-control password" placeholder="Password..." required/>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary"> Đăng nhập</button>
                        </div>
                        <div class="msg mt-3 text-danger text-center "></div>
                    </form>
                </div>
            </div>
        </div>`
        }
        this.root.innerHTML = html;
    },
    addEvent: function () {
        this.root.addEventListener("submit", (e) => {
            e.preventDefault();
            if (e.target.classList.contains('login')) {
                const emailEl = e.target.querySelector('.email');
                const passwordEl = e.target.querySelector('.password');
                const email = emailEl.value;
                const password = passwordEl.value;
                console.log(email, password);
                this.login({email,password})
            }
        })
    },
    loading: function (status = true) {
        const button = this.root.querySelector('.login .btn');
        if(status) {
            button.innerHTML = ` <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>Loading...`
            button.disabled = true;
        } else {
            button.innerHTML=`đăng nhập`
            button.disabled=false   
        }
    },
    showError: function (msgText) {
        const msg = this.root.querySelector('.login .msg');
        msg.innerText = ``;
        msg.innerText = msgText;
        
    },
    login: async function (data) {
        this.loading();// thêm loading
        //call API  
        try {
            const { response, data: token } = await client.post(`/auth/login`, data);
        this.loading(false);//xóa loading
        if (!response.ok) {
            throw new Error("Email hoặc mật khẩu không hợp lệ ")
            }
            //thêm token vào localstorage
            localStorage.setItem("login_token", JSON.stringify(token));
            //render CẬP NHẬT LẠI UI
            this.render();
        } catch (e) {
            this.showError(e.message)
        }
    },
    start: function () {
        this.render();
        this.addEvent();
    },

};
app.start()