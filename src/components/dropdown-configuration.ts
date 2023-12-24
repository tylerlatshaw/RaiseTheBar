import { CSSObjectWithLabel } from "react-select";

export type DropdownItemType = {
    value: number | undefined,
    label: string | undefined,
}

export const inputStyles = "flex w-full p-2.5 rounded-lg bg-gray-600 text-sm text-white placeholder-gray-400 outline-none border border-gray-500 focus:border-sky-600";

export const labelStyles = "flex mb-2 font-medium text-sm text-white";

export const dropdownStyles = {
    control: (base: CSSObjectWithLabel, { isFocused }: any) => ({
        ...base,
        backgroundColor: "#4b5563", // gray-600
        borderRadius: "0.5rem",
        minHeight: "43px",
        boxShadow: "none",
        borderColor: isFocused ? "#0284c7" : "#6b7280", // sky-600, gray-500
        "&:hover": {
            borderColor: "#0284c7", // sky-600
        },
    }),
    menu: (base: CSSObjectWithLabel) => ({
        ...base,
        backgroundColor: "#4b5563", // gray-600
    }),
    option: (base: CSSObjectWithLabel, { isFocused }: any) => ({
        ...base,
        backgroundColor: isFocused ? "#0284c7" : "#4b5563", // sky-600, gray-600
        "&:hover": {
            backgroundColor: "#0284c7", // sky-600
        },
        color: "white",
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
    multiValue: (base: CSSObjectWithLabel) => ({
        ...base,
        backgroundColor: "#e5e7eb", // gray-200
        fontSize: "1.05rem",
        marginRight: "0.375rem",
        borderRadius: "6px",
    }),
    multiValueLabel: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "black",
        margin: "2px 4px",
    }),
    multiValueRemove: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "black",
        backgroundColor: "#e5e7eb", // gray-200
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
    }),
    clearIndicator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
        "&:hover": {
            color: "#0369a1", // sky-700
        },
    }),
    loadingIndicator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
    }),
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
    }),
    dropdownIndicator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
        "&:hover": {
            color: "#0369a1", // sky-700
        },
    }),
    placeholder: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
        paddingLeft: "0.25rem",
    }),
    input: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
    noOptionsMessage: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
    loadingMessage: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
};