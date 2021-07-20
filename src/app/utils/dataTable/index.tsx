import style from './style.module.css';
import filterFields from './filterFields';
import getFields from './getFields';
import getRows from './getRows';
import OptionButton from './optionButton';
import React, { FC } from 'react';
import Th from './th';
import Tr from './tr';
import Td from './td';
import sanitizeOptions from './sanitizeOptions';
import { IDataTable,showMoreBtnCb } from './dataTable';
const dataTable:FC<IDataTable> = ({ data, options }: IDataTable) => {
    if (data) {
        if (!Array.isArray(data)) throw new Error("data needs to be an array");
        let { fields: optFields, exclude, showMoreBtnCb } = sanitizeOptions(options);
        let fields = getFields(data);
        fields = filterFields(fields, optFields, exclude);
        let rows = getRows(fields, data);
        const TABLE_OPTION = 'TABLE_OPTION'
        if (showMoreBtnCb) {
            fields.push('');
            rows.map((row:any) => row.TABLE_OPTION = OptionButton);
        }
        const getData = (row:any, key:any, Value:any) => {
            if (key === TABLE_OPTION) return <OptionButton onClick={(e:any) => (showMoreBtnCb as showMoreBtnCb)(e, row)} />
            if ((typeof Value) === 'function' && React.isValidElement(<Value />)) {
                return <Value row={row} />
            }
            return Value
        }
        return (
            <div className={style.wrapper}>
                <table className={`${style.table}`}>
                    <thead className={`${style.thead}`} >
                        <tr className={`${style.tr}`}>
                            {fields.map((field, i) => <Th key={i} field={field}><span>{field}</span></Th>)}
                        </tr>
                    </thead>
                    <tbody className={`${style.tbody}`} >
                        {rows.map((row, i) => <Tr key={i}>
                            {Object.entries(row).map(([key, value], i) => <Td key={i}>{getData(row, key, value)}</Td>)}
                        </Tr>)}
                    </tbody>
                </table>
            </div>

        )
    }
    return null;
}

export default dataTable;