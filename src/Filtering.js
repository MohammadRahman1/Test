// import React, { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import {useState, useEffect} from 'react'

export const ColumnFilter = ({ tableData }) => {
    const alternativeColumns = [
        { accessorKey: 'name', header: 'Name', filterVariant: 'text', size: 200 },
        { accessorKey: 'email', header: 'Email', filterVariant: 'text' },
        { accessorKey: 'phone_number', header: 'Phone Number', filterVariant: 'text' },
        { accessorKey: 'donationAmount', header: 'Donation Amount', filterVariant: 'range' },
        { accessorKey: 'homeAddress', header: 'Home Address', filterVariant: 'text' },
        { accessorKey: 'age', header: 'Age', filterVariant: 'range' },
        { accessorKey: 'occupation', header: 'Occupation', filterVariant: 'text' },
        { accessorKey: 'city', header: 'City', filterVariant: 'text' },
        ]
    const table = useMaterialReactTable({
        alternativeColumns,
        data: tableData,
        initialState: { showColumnFilters: true },
    });
    // const [table, setTable] = useState()
    // const columns = useMemo(
    //     () => {
    //         return [
    //         { accessorKey: 'name', header: 'Name', filterVariant: 'text', size: 200 },
    //         { accessorKey: 'email', header: 'Email', filterVariant: 'text' },
    //         { accessorKey: 'phone_number', header: 'Phone Number', filterVariant: 'text' },
    //         { accessorKey: 'donationAmount', header: 'Donation Amount', filterVariant: 'range' },
    //         { accessorKey: 'homeAddress', header: 'Home Address', filterVariant: 'text' },
    //         { accessorKey: 'age', header: 'Age', filterVariant: 'range' },
    //         { accessorKey: 'occupation', header: 'Occupation', filterVariant: 'text' },
    //         { accessorKey: 'city', header: 'City', filterVariant: 'text' },
    //         ]
    //      }, []
    // );
    // useEffect(() => {
    //     const table = useMaterialReactTable({
    //         alternativeColumns : alternativeColumns,
    //         data: tableData,
    //         initialState: { showColumnFilters: true },
    //     });
    //     setTable(table)
    // }, []
    // ) 

    return <MaterialReactTable table={table} />;
};