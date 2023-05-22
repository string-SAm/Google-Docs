import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://swayamsoni1905:<sam123>@ac-fzhdcrl-shard-00-00.ry3vv9e.mongodb.net:27017,ac-fzhdcrl-shard-00-01.ry3vv9e.mongodb.net:27017,ac-fzhdcrl-shard-00-02.ry3vv9e.mongodb.net:27017/ GOOGLE-DOCS-CLONE?ssl=true&replicaSet=atlas-yuafak-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
