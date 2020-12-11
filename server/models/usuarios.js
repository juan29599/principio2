module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('usuarios',{
        id: {
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

}