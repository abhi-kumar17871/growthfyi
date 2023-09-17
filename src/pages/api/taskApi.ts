import axios from "axios";
import { PostData } from "../../components/interFace";

export const fetchTaskData = async (formData: PostData) => {
    try {
        const response = await axios.post("https://api.dataforseo.com/v3/on_page/task_post", [formData], {
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
