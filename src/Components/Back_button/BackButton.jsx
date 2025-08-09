import { useNavigate } from "react-router-dom"

export default function BackButton() {

    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className=" py-5 cursor-pointer opacity-75 mt-20 lg:my-5 hover:text-[var(--custom-orange2)]"
        >
            GO BACK
        </button>
    )
}