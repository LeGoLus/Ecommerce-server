module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        pName: { type: Sequelize.STRING },
        pSlug: { type: Sequelize.STRING },
        pQty: { type: Sequelize.INTEGER },
        pPrice: { type: Sequelize.INTEGER },
        pPriceSale: { type: Sequelize.INTEGER },
        pDesc: { type: Sequelize.STRING },

        pSize: { type: Sequelize.TEXT },
        pColor: { type: Sequelize.TEXT },
        pStar: { type: Sequelize.INTEGER },
        pImageDefault: { type: Sequelize.STRING },
        pImages: { type: Sequelize.TEXT },
        pSpecification: { type: Sequelize.STRING }
    });

    return Product;
};