import express from 'express';
import morgan from 'morgan';

// Server initialization
export const app = express();

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    console.log("Server is ready for requets");
    res.json({message: "Server is ready for requests"});
});

