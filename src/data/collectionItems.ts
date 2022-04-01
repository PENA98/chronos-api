import { CollectionItemSchema } from "src/collectionItem/collectionItem.schema"
import faker from "@faker-js/faker"

export default {
    // generate array of objects with random data with the structure of collectionItemSchema
    collectionItems: Array.from({ length: 10 }).map(() => ({
        id: Math.random().toString(36).substring(2),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
    })),

}