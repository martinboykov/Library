const validator = (() => {
    const MIN_NAME_SYMBOLS = 3,
        MAX_SYMBOLS = 15,
        MIN_PASSWORD_SYMBOLS = 6,
        VALID_SYMBOLS = /^A-Za-z/;

    class Validator {
        isValidString(str) {
            if (!str || typeof str !== "string") {
                throw Error("Value must be a string");
            }
            if (str.trim().length === 0) {
                throw Error("Value cannot be full of whitespaces");
            }
        }

        isValidUserName(username) {
            let answer = false;
            if (username.length < MIN_NAME_SYMBOLS || username.length > MAX_SYMBOLS) {
                //throw Error(`Username must be between ${MIN_NAME_SYMBOLS} and ${MAX_SYMBOLS} symbols`);
                //notifier.error(`Username must be between ${MIN_NAME_SYMBOLS} and ${MAX_SYMBOLS} symbols`);
                //location.hash = '#auth';
                return answer;
            }

            if (username.match(VALID_SYMBOLS)) {
                //throw Error("Username can consist only of Capital and small letters");
                //notifier.error(`Username must be between ${MIN_NAME_SYMBOLS} and ${MAX_SYMBOLS} symbols`);
                //location.hash = '#auth';
                return answer;
            }
        }

        isValidPassword(password) {
            let answer = false;
            if (password.length < MIN_PASSWORD_SYMBOLS) {
                //throw Error(`Password must have atleast ${MIN_PASSWORD_SYMBOLS} symbols`);
                //notifier.error('Invalid password : must be at least six characters');
                //location.hash = '#auth';
                return answer;
            }

            if (password.length > MAX_SYMBOLS) {
                //throw Error(`Password cannot exceed  ${MAX_SYMBOLS} symbols`);
                //notifier.error('Invalid password : must be at least six characters');
                //location.hash = '#auth';
                return answer;
            }
        }

        usernameIsTaken(username) {
            return firebase.database().ref("Library/Users/").once("value").then(snapshot => {
                let result = false;
                snapshot.forEach(u => {
                    if (u.val().username === username) {
                        result = true;
                    }
                });

                return result;
            });
        }
    }

    let validator = new Validator();
    return validator;
})();