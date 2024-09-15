const connection = require ('../db/connection')

const { ObjectId } = require ('mongodb')

class Product {
    constructor (name, image, price, description) {
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }

    save() {
        const product = connection.db().collection ('products').insertOne ({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        })

        return product
    }

    static getProducts() {
        const products = connection.db().collection ('products').find().toArray()

        return products
    }

    static async getProductById (id) {
        const product = await connection
            .db()
            .collection ('products')
            .findOne ({ _id: ObjectId.createFromHexString (id) })

        return product
    }

    static async removeProductById (id) {
        await connection
            .db()
            .collection ('products')
            .deleteOne ({ _id: ObjectId.createFromHexString (id) })
        
        return
    }

    updateProduct (id) {
        connection.db().collection ('products').updateOne 
            ({ _id: ObjectId.createFromHexString (id) }, { $set: this })

        return
    }
}

module.exports = Product