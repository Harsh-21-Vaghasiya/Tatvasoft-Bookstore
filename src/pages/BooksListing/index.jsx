import WithAuth from "../../layout/WithAuth";
import bookService from "../../services/bookService";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    Typography,
    TextField,
    Button,
    TablePagination,
    Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";


const BooksListing = () => {


    const [books, setBooks] = useState([]);
    // const navigate = useNavigate();
    // const handleButtonclick = () => {
    //     navigate('/');
    // }

    const getBooks = async () => {
        await bookService.GetAllBooks().then((response) => {

            if (response && response.status === 200) {
                setBooks(response.data.result);
            }

        }).catch((err) => { });
    };

    useEffect(() => {
        getBooks();
    }, []);

    console.log("Books", books);
    return (

        <div className="flex-1 ml-40 mr-40" style={{ width: "100%", paddin: "0px" }}>
            <Typography
                variant="h4"
                sx={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "#474747",
                }}
            >
                Book Listing
            </Typography>
            <div className="flex items-center justify-center m-6">
                <div className="border-t-2 border-black w-32"></div>
            </div>
            <div className="flex justify-between items-center" >

                <div className="flex items-center space-x-10" style={{ display: "flex", width: "30%", margin: "auto" }}>
                    <TextField
                        name="text"
                        placeholder="Search..."
                        variant="outlined"
                        size="small"

                        sx={{
                            backgroundColor: "white",
                            fontStyle: "italic",
                            "& .MuiInputBase-input": {
                                fontStyle: "normal",
                            },
                        }}
                    />
                    <div className="flex" style={{ display: "flex", marginLeft: "10px" }}>
                        <Typography variant="subtitle1" sx={{ marginRight: "10px" }}>
                            Sort By
                        </Typography>

                        <select  >
                            <option value="a-z">a - z</option>
                            <option value="z-a">z - a</option>
                        </select>
                    </div>
                </div>
                <Typography variant="h6" style={{ textAlign: "center", fontSize: "0.8rem" }}>
                    Total - { } items found
                </Typography>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10" style={{ display: 'flex', width: '100%', justifyContent: 'center', flexWrap: "wrap", margin: "0px" }}>
                {books.map((book, index) => (
                    <div
                        className="rounded-lg shadow-xl flex flex-col space-y-4 border-black"
                        key={index} style={{ display: "flex", flexDirection: "column", border: "1px solid black", width: "300px", margin: "10px" }}
                    >
                        <div className="w-full h-56 overflow-hidden rounded-lg">
                            <img
                                src={book.base64image}
                                alt=""
                                className="w-full h-full object-cover"
                                style={{ width: "300px", height: "300px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-bold line-clamp-1 text-[#474747] ">
                                {book.name}
                            </h2>
                            <span className="text-gray-600 mt-2 font-semibold">
                                {book.category}
                            </span>
                            <p className=" line-clamp-2 h-14 mt-2">{book.description}</p>
                            <p className=" mb-2 text-xl text-gray-500">
                                MRP
                                <span className="mx-1">&#8377;</span>
                                {book.price}
                            </p>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "white",
                                    backgroundColor: "#f14d54",
                                    "&:hover": {
                                        backgroundColor: "#f14d54", // Change the hover background color
                                    },
                                    marginTop: "8px",
                                    fontWeight: "bold",
                                }}
                                fullWidth
                            >
                                add to cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <Pagination
                    sx={{
                        marginTop: "25px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}

                />
            </div>
        </div>
    )
};
export default WithAuth(BooksListing);