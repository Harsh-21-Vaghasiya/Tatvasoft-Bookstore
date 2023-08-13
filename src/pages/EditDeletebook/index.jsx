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


        <div className="flex-1 ml-40 mr-40" style={{ width: "80%", margin: "auto" }}>
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
                Book Page
            </Typography>
            <div className="flex items-center justify-center m-6">
                <div className="border-t-2 border-black w-32"></div>
            </div>
            <div className="flex justify-end mt-11">
                <TextField
                    name="text"
                    placeholder="Search..."
                    variant="outlined"
                    size="small"

                    sx={{ width: "280px" }}
                />
                <Button
                    variant="contained"
                    sx={{
                        color: "white",
                        backgroundColor: "#f14d54",
                        "&:hover": {
                            backgroundColor: "#f14d54",
                        },
                        marginLeft: "8px",
                        width: "100px",
                    }}

                >
                    add
                </Button>
            </div>
            <div className="mt-8">
                <TableContainer>
                    <Table>
                        <TableBody sx={{ marginTop: "20px" }}>
                            {books.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell
                                        style={{
                                            display: "flex",
                                            justifyContent: "end",
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            disableElevation
                                            sx={{
                                                borderColor: "#80BF32",
                                                "&:hover": {
                                                    backgroundColor: "#80BF32", // Change the hover background color
                                                    color: "white",
                                                },
                                                textTransform: "capitalize",
                                                color: "#80BF32",
                                                width: "90px",
                                                marginRight: "20px",
                                            }}

                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"

                                            sx={{
                                                borderColor: "#f14d54",
                                                "&:hover": {
                                                    backgroundColor: "#f14d54", // Change the hover background color
                                                    color: "white",
                                                },
                                                textTransform: "capitalize",
                                                width: "90px",
                                                color: "#f14d54",
                                            }}

                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {/* {!books.items.length && (
                                <TableRow className="TableRow">
                                    <TableCell colSpan={5} className="TableCell">
                                        <Typography align="center" className="noDataText">
                                            No Books
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="mt-10 mb-10 flex justify-end">
                <TablePagination
                    component="div"


                />
            </div>

        </div>
    )
};
export default WithAuth(BooksListing);