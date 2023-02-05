// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// configuration of moduls
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/products", (request, response) => {
    fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: [],
            });
        }

        const objectData = JSON.parse(readData);

        response.json({
            status: "success",
            data: objectData,
        });
    });
});

app.post("/products", (request, response) => {
    const body = request.body;
    const newProduct = {
        id: Date.now().toString(),
        title: body.title,
        subTitle: body.subTitle,
        price: body.price,
        description: body.description,
        color: body.color,
    };

    fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: [],
            });
        }
        const dataObject = JSON.parse(readData);
        dataObject.push(newProduct);

        fs.writeFile(
            "./data/products.json",
            JSON.stringify(dataObject),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: "Error during file write",
                        data: [],
                    });
                }
                response.json({
                    status: "success",
                    data: dataObject,
                });
            }
        );
    });
});


app.put("/products", (request, response) => {
    console.log(request.body);

    fs.readFile("./data/products.json", "utf8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File read error",
                data: [],
            });
        }

        const savedData = JSON.parse(readData);
        // console.log("saved", savedData);
        const changedData = savedData.map((d) => {
            if (d.id === request.body.id) {
                (d.title = request.body.title),
                    (d.subTitle = request.body.subTitle),
                    (d.price = request.body.price),
                    (d.description = request.body.description),
                    (d.color = request.body.color);
            }
            return d;
        });

        fs.writeFile(
            "./data/products.json",
            JSON.stringify(changedData),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: "File write error",
                        data: [],
                    });
                }
                response.json({
                    status: "success",
                    data: changedData,
                });
            }
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});