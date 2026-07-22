import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext/AuthContext";

const useAuth = () => {
    const authInfo = useContext(AuthContext);

    if (!authInfo) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return authInfo;
};

export default useAuth;