class ErrorHandlerService {
    handleError (error) {
        if (error.response && error.response.status === 401) {
            return "Invalid username or password"
        }

        if (error.response && error.response.status === 403) {
            return "You are not authorized to access this resource, please raise a ticket to get the access"
        }

        if (error.response && error.response.status === 500) {
            return "Unknown error, please contact support"
        }

        if (error.message && error.message === "Network Error") {
            return "Unable to connect the service, please contact support"
        }
        return error.message
    }
}
export default new ErrorHandlerService()