import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () =>
            logger.info('Listening on PORT ', { port: PORT }),
        );
    } catch (error) {
        logger.error(error);
        process.exit();
    }
};

startServer();
