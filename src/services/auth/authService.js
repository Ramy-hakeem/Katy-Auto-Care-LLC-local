import base_url from "../../utils/base_url"

const login = async (userData, rememberMe) => {
    try {
        const response = await base_url.post("customer/login", userData);
        if (response.data && rememberMe) {
            localStorage.setItem("user", JSON.stringify(response.data));
        } else if (response.data && !rememberMe) {
            sessionStorage.setItem("user", JSON.stringify(response.data));
        }
    } catch (error) {
        console.error("Login error:", error);
    }
};


const authService = {
    login
}

export default authService