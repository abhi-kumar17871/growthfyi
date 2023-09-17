import axios from "axios";
import { PageData } from "../../components/interFace";

export const fetchPageData = async (formData: PageData) => {
    try {
        const response = await axios.post("https://api.dataforseo.com/v3/on_page/pages", [formData], {
            auth: {
                username: "abhi.kumar17871@gmail.com",
                password: "d8c569e1628f8e7c",
            },
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
};