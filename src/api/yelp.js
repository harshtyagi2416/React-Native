import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer By6klkrWMHU4W-OeYC3F4zUOL5Rnt0b0zErFH_Dpa32M1zRVQb2Jn4fHu56ZBiyhPtWpfpEdPQ7lfncEDdvlBT1Ov416Kgxa5cy4bwrp5HSwL35aF3WsS9k9HvXGYnYx",
  },
});
