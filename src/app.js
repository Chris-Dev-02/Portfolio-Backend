import express from 'express';
import morgan from 'morgan';
// Importing routes
import { router as emailsRouter } from './modules/emails/routes/email.routes.js';
import { router as postsRouter } from './modules/posts/routes/post.routes.js';
import { router as contentBlockRouter } from './modules/posts/routes/contentBlock.routes.js';

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

// Module routes 
app.use('/api/email/', emailsRouter);
app.use('/api/posts/', postsRouter);
app.use('/api/contentBlock/', contentBlockRouter);