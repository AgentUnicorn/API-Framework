successCallback = (message) => {
    return {
        status: "Success",
        message: message
    }
} 

failCallback = (message) => {
    return {
        status: "Fail",
        error: message
    }
} 

module.exports = {successCallback, failCallback}