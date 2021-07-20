import Button from "app/utils/Button";
import SearchInput from "app/utils/search";
import { FC, SyntheticEvent, useState } from "react";
import { TOptions } from "../utils/dataTable/dataTable";
import DataTable from "../utils/dataTable/index";
import style from './product.module.css';
import Dropdown from '../utils/dropdown';
import ProductCreateUpdateDialog from "./productCreateUpdateDialog";
import List from "app/utils/list";
let data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "demarco.info",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "website": "elvis.io",
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "website": "ambrose.net",
    },
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "demarco.info",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "website": "elvis.io",
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "website": "ambrose.net",
    },
]
const Product: FC<any> = (props) => {
    const [productCreateUpdateDialogStatus, setProductCreateUpdateDialogStatus] = useState<boolean>(true);
    const openProductCreateUpdateDialog = ()=>setProductCreateUpdateDialogStatus(true);
    const closeProductCreateUpdateDialog = () => setProductCreateUpdateDialogStatus(false);
    const [selectedRowElement, setSelectedRowElement] = useState<any | null>(null);
    const [selectedRowValue, setSelectedRowValue] = useState<any>({});
    const removeSelectedRow = () => setSelectedRowElement(null);
    const handleOptionBtnClick = (e: SyntheticEvent, row: any) => {
        setSelectedRowValue(row);
        setSelectedRowElement(e.currentTarget)
    };
    const handleEditProductOnClick = (e: SyntheticEvent) => {
        console.log(selectedRowValue)
        removeSelectedRow()
    };
    const handleDeleteProductOnClick = (e: SyntheticEvent) => {
        console.log(selectedRowValue)
        removeSelectedRow()
    };
    const listOptions = [{ title: "Edit", onClick: handleEditProductOnClick }, { title: "Delete", onClick: handleDeleteProductOnClick }]
    const [dataTableOptions, setDataTableOptions] = useState<TOptions>({ showMoreBtnCb: handleOptionBtnClick });
    return (
        <>
            <article className={`px-sm ${style.wrapper}`}>
                <div className={`py-sm ${style.header_wrapper}`}>
                    <h4 className={`${style.heading}`}>Products</h4>
                    <Button onClick={openProductCreateUpdateDialog} type="primary">Create</Button>
                </div>
                <div className={`${style.toolbar_wrapper}`}>
                    <div className={`${style.action_wrapper}`}>
                        <Button className={`mr-sm`}><span className="mdi md-14 mr-xxs">sort</span><span>Sort</span></Button>
                        <Button> <span className="mdi md-14 mr-xxs">filter_list</span> <span>Filter</span> </Button>
                    </div>
                    <SearchInput />
                </div>
                <section className={`${style.table_wrapper}`}>
                    <DataTable options={dataTableOptions} data={data} />
                </section>
            </article>
            <Dropdown el={selectedRowElement} closeDialog={removeSelectedRow}>
                <List items={listOptions} />
            </Dropdown>
            <ProductCreateUpdateDialog
                closeDialog={closeProductCreateUpdateDialog}
                open={productCreateUpdateDialogStatus}
            />
        </>
    )
}

export default Product