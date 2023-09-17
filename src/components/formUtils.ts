import { PostData } from "./types";

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    formData: PostData,
    setFormData: React.Dispatch<React.SetStateAction<PostData>>
) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

