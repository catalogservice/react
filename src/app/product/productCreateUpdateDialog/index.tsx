import Modal from "app/utils/modal";
import { FC, useRef } from "react"
import { IProductCreateUpdate } from "./productCreateUpdate"
import style from './productCreateUpdateDialog.module.css';
const ProductCreateUpdateDialog: FC<IProductCreateUpdate | null> = ({ open,closeDialog }) => {
    const dialog = useRef<HTMLDivElement | null>(null)
    if (!open) return null;
    return (
        <Modal closeModal={closeDialog} show={open} title="Create Product">
            <form action="">
                <h1>tEST</h1>
            </form>
        </Modal>
    )
}

export default ProductCreateUpdateDialog;