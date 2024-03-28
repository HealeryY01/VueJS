// const nameUser = "Nguyễn Thế Hiệu";
// const classname = "BHBF190092";

// document.getElementById("name").innerHTML = `Tên: ${nameUser}`;
// document.getElementById("classname").innerHTML = `Lớp: ${classname}`;
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

Vue.createApp({
    data() {
        return {
            nameUser: "Nguyễn Thế Hiệu",
            className: "BHBF190092"
        }
    }
}).mount("#interpolation")

Vue.createApp({
    data() {
        return {
            ImgUrl: "https://icdn.24h.com.vn/upload/1-2024/images/2024-02-14/Ronaldo-dat-muc-tieu-vo-dich-cup-C1-chau-a-lap-thanh-tich-chua-tung-co-lich-su-ronaldo_continental_glory-1707906228-746-widthheight.webp",
            linkInfo: "https://vi.wikipedia.org/wiki/Cristiano_Ronaldo"
        }
    }
}).mount("#bind-attribute")

Vue.createApp({
    methods: {
        taosoNut() {
            const mangXucXac = [getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6)];
            const soNut = mangXucXac.reduce((tong, xucXac) => tong += xucXac, 0);
            return soNut;
        },
        renderTaiHayXiu() {
            const soNut = this.taosoNut();
            if (soNut > 11) {
                return "Tài"
            } else {
                return "Xỉu"
            }
        }
    }
}).mount("#method")

Vue.createApp({
    data() {
        return {
            message: `<h1> Học VueJs </h1>`
        }
    }
}).mount("#raw-html")

Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        handleClickMe(event) {
            console.log(event.target);
            console.log("Click Me");
        },
        handleIncrement(params, event) {
            console.log(event.target);
            this.count = this.count + params;
        },
        handleSubmit() {
            alert("Submit thành công");
        },
        handleLogin() {
            console.log("handleLogin");
        },
    },
}).mount("#event")


Vue.createApp({
    data() {
        return {
            message: "",
        };
    },
    methods: {},
}).mount("#two-way-binding")


Vue.createApp({
    data() {
        return {
            count: 0,
            lastName: 'Nguyễn',
            firstName: 'Thế Hiệu',
            fullDataName: ""
        };
    },
    /**
     * watch dùng đẻ xử lý :
     * - theo dõi một data duy nhất
     */
    watch: {
        count(newValue, oldValue) {
            console.log("newValue : ", newValue);
            console.log("oldValue : ", oldValue);
            if (newValue > 10) {
                this.count = 0;
            }
        },
        lastName(newValue) {
            this.fullDataName = newValue + " " + this.firstName;
        },
        firstName(newValue) {
            this.fullDataName = this.lastName + " " + newValue;
        },
    },
    /**
     * computed dùng để xử lý : 
     * - tính toán nhiều data và cho ra một kết quả để hiển thị nên màn hình 
     */
    computed: {
        fullName() {
            console.log("run fullName");
            return this.lastName + " " + this.firstName;
        },
    },
    /**
     * methods dùng để xử lý :
     * - envents
     * - function (Tính năng trên trang web)
     * 
     */
    methods: {
        // getFullName() {
        //     console.log("run getFullName");
        //     return this.lastName + " " + this.fisrtName;
        // },// sai vì không thay đổi àm vẫn chạy lại làm cho chúng ta bị mất hiệu năng
        handleIncrement() {
            this.count += 1;
            this.fisrtName = "Minh Hiếu";
        },
    },
}).mount("#computed-and-watchers")

Vue.createApp({
    data() {
        return {
            active: false,
            styleForP: {
                backgroundColor: "red",
                color: "yellow",
                "font-size": "50px"
            },
            styleForText: {
                "text-align": "left",
            },
        };
    },
    methods: {
        handleStyle() {
            this.styleForP.color = "blue";
        },
        handleActive() {
            this.active = true;
        },
    },
}).mount("#styling")


Vue.createApp({
    data() {
        return {
            isLogin: false,
            nameHero: "",
        };
    },
    methods: {
        handleLogin() {
            this.isLogin = true;
        },
        handleNameHero(nameHero) {
            this.nameHero = nameHero;
        },
    },
}).mount("#directive")

Vue.createApp({
    data() {
        return {
            championsLeague: [{
                name: "Ronaldo",
                image: 'https://media.vov.vn/sites/default/files/styles/large/public/2024-02/ronaldo.jpg'
            },
            {
                name: "Messi",
                image: 'https://images2.thanhnien.vn/528068263637045248/2024/2/22/messi-17085716527511256668300.jpeg'
            },
            {
                name: "Mpabbe",
                image: 'https://thethaovanhoa.mediacdn.vn/372676912336973824/2024/2/16/17080164020243703e3d9-9c24-4311-a240-0b16873db66a-1708042719274444337569.jpg'
            },
            {
                name: "Ramos",
                image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcd0c0cf1947e4523/647c7c171e55b54fedcf4ede/Sergio.jpg?auto=webp&format=pjpg&width=3840&quality=60'
            }],
        };
    },
}).mount("#list-rendering")