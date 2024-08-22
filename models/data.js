class Data {
    constructor(db) {
        this.db = db;
        this.collection = this.db.collection('expenses');
    }

    async addExpense(expense) {
        try {
            await this.collection.insertOne(expense);
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    }

    async getExpenses() {
        try {
            const expenses = await this.collection.find({}).toArray();
            return expenses;
        } catch (error) {
            console.error('Error getting expenses:', error);
            return [];
        }
    }
}

module.exports = Data;