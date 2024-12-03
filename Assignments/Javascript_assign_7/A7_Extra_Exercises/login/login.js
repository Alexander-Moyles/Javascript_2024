"use strict";

const getCookieByName = name => {
    const cookies = document.cookies;
    let cookie = cookies.indexOf(name + "=");
    if (cookie === -1) {
        return "";
    }
    else {
        cookie += (name.length + 1);
        let end = cookies.indexOf(";", start);
        if (end === -1) {
            end = cookies.length;
        }

        const cookieValue = cookies.substring(start, end);
        return decodeURIComponent(cookieValue);
    }
};

const setCookie = (name, value, days) => {

};

const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};

const goToPage = url => {
    location.href = url;
};
