const respondeModel = {
    success: false,
    data: [],
    error: []
}
module.exports = {



    async create(req, res) {
        const response = { ...respondeModel }

        return res.json(response)
    },

    async login(req, res) {
        const response = { ...respondeModel }

        return res.json(response)
    }
}