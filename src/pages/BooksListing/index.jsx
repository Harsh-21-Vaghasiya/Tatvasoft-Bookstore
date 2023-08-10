import { Button, Pagination, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WithAuth from "../../layout/WithAuth";
import React, { useMemo, useState, useContext } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import bookService from "../../services/bookService";
import Cookies from "js-cookie";
// import { UserData } from "../App";

const BooksListing = () => {


    const [books, setBooks] = useState();
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
    return (<>
        {/* <div>book</div>
        <Button variant="contained" color="info" onClick={() => { handleButtonclick() }}>Go to Home</Button> */}
        <div className="flex-1 ml-40 mr-40">
            <Typography
                variant="h4"
                sx={{
                    marginTop: "25px",
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
            <div className="flex justify-between items-center ">
                <Typography variant="h6">
                    Total - { } items
                </Typography>
                <div className="flex items-center space-x-10">
                    <TextField
                        name="text"
                        placeholder="Search..."
                        variant="outlined"
                        size="small"
                        onChange={(e) => {

                        }}
                        sx={{
                            backgroundColor: "white",
                            fontStyle: "italic",
                            "& .MuiInputBase-input": {
                                fontStyle: "normal",
                            },
                        }}
                    />
                    <div className="flex">
                        <Typography variant="subtitle1" sx={{ marginRight: "10px" }}>
                            Sort By
                        </Typography>

                        <select >
                            <option value="a-z">a - z</option>
                            <option value="z-a">z - a</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {/* {books.map((book, index) => ( */}
                    <div
                        className="rounded-lg shadow-xl flex flex-col space-y-4 border-black"
                        // key={index}
                    >
                        <div className="w-full h-56 overflow-hidden rounded-lg">
                            <img
                                src=""
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-bold line-clamp-1 text-[#474747] ">
                                {/* {book.name} */}sdfghjk
                            </h2>
                            <span className="text-gray-600 mt-2 font-semibold">
                                {/* {book.category} */}kjgjisf
                            </span>
                            {/* <p className=" line-clamp-2 h-14 mt-2">{book.description}</p> */}
                            <p className=" line-clamp-2 h-14 mt-2">sdfg</p>
                            <p className=" mb-2 text-xl text-gray-500">
                                MRP
                                <span className="mx-1">&#8377;</span>
                                {/* {book.price} */}hjfyu
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
                                // onClick={() => addToCart(book)}
                            >
                                add to cart
                            </Button>
                        </div>
                    </div>
                //  ))} ;
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
    </>)
};
export default WithAuth(BooksListing);