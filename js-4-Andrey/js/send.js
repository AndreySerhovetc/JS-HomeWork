//XMlHttpRequest 
let phoneField = document.querySelector(".phone");
let im = new Inputmask("+38 (099) 999 99 99");
im.mask(phoneField);




new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2
        },

        email: {
            required: true,
            email: true
        },

        phone: {
            required: true
        },

        age: {
            required: true
        },

        passoword: {
            required: true,
            minLength: 6
        }


    },
    messages: {
        name: {
            required: "Поле должно быть заполнино",
            minLength: "Имя должно быть больше двух символов"
          },

        email: {
            required: "Поле должно быть заполнино",
            email: "Поле должно содиржать знак @"
          },

        phone: {
            required: "Поле должно быть заполнино"
          },

        age: {
            required: "Поле должно быть заполнино"
          },

        passoword: {
            required: "Поле должно быть заполнино",
            minLength: "Пароль должен быть больше 6 символов"
          },

    },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "mail.php", true);
        let formData = new FormData(form);

        xhr.addEventListener("load", function() {
            if(xhr.readyState == 4) {
                switch(xhr.status) {
                    case 200: {
                        console.log("Все харашо");
                        form.reset();
                        break;
                    }
                    case 301: {
                        console.log("Нас перенаправили");
                        break;
                    }
                    case 404: {
                        console.log("Мы ничего не найшли");
                        break;
                    }
                    default:
                        console.log("Ошибка!");
                        break;
                }
            }
        })
       
        xhr.send(formData);

    },
  });