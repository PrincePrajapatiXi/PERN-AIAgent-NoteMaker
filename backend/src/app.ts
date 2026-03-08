import express from "express";

export const app = express();

// test route

app.get("/health-check", (req, res) => {
    return res.status(200).json({
        success:true,
        message: "Health good and server is up and running",
    })
});