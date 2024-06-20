// import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_EditActionButtons,
} from "material-react-table";
import { useState, useEffect, useMemo } from "react";

export const ColumnFilter = ({ tableData }) => {
  const alternativeColumns = [
    { accessorKey: "name", header: "Name", filterVariant: "text", size: 200 },
    { accessorKey: "email", header: "Email", filterVariant: "text" },
    {
      accessorKey: "phone_number",
      header: "Phone Number",
      filterVariant: "text",
    },
    {
      accessorKey: "donationAmount",
      header: "Donation Amount",
      filterVariant: "range",
    },
    {
      accessorKey: "homeAddress",
      header: "Home Address",
      filterVariant: "text",
    },
    { accessorKey: "age", header: "Age", filterVariant: "range" },
    { accessorKey: "occupation", header: "Occupation", filterVariant: "text" },
    { accessorKey: "city", header: "City", filterVariant: "text" },
  ];
  const columns = useMemo(() => {
    return [
      { accessorKey: "name", header: "Name", filterVariant: "text", size: 200 },
      { accessorKey: "email", header: "Email", filterVariant: "text" },
      {
        accessorKey: "phone_number",
        header: "Phone Number",
        filterVariant: "text",
      },
      {
        accessorKey: "donationAmount",
        header: "Donation Amount",
        filterVariant: "range-slider",
        Cell: ({ cell }) =>
          cell.getValue().toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }),
        filterVariant: 'range-slider',
        filterFn: 'betweenInclusive',
        muiFilterSliderProps: {
          marks: true,
          max: 1000,
          min: 5,
          step: 10,
          valueLabelFormat: (value) =>
            value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }),
        },
      },
      {
        accessorKey: "homeAddress",
        header: "Home Address",
        filterVariant: "text",
      },
      { accessorKey: "age", header: "Age", filterVariant: "range" },
      {
        accessorKey: "occupation",
        header: "Occupation",
        filterVariant: "text",
      },
      { accessorKey: "city", header: "City", filterVariant: "text" },
    ];
  }, []);
  const table = useMaterialReactTable({
    columns,
    data: tableData,
    initialState: { showColumnFilters: true },
    enableStickyHeader: true,
    enableStickyFooter: true,
  });
  return <MaterialReactTable table={table} />;
};
