import express, { Application,Request, Response,Errback,NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/db';
import { errorHandler } from './middleware/errorHandler';
import router from './routes/menuRoutes';
import logger from './utils/logger';


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

// Routes
app.use('/', router);

// Error Handler Middleware
app.use(errorHandler);
app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.render("error");
  });

export default app;