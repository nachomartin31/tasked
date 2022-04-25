const {connect} = require("mongoose");
const debug = require("debug")("tasked:DDBB")
const chalk = require("chalk")

const connectionToDDBB = async ()=>{
    try {
        await connect(
            process.env.DDBB,{
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
        debug(chalk.greenBright.bold("Database connection stablished"))
    } catch (error) {
        debug(chalk.red.bold(`Failed to connect: ${error.message}`));
        process.exit(1);
    }
}

connectionToDDBB()